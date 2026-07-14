import {
    _decorator,
    Button,
    Camera,
    Canvas,
    Color,
    Component,
    director,
    EventMouse,
    EventTouch,
    Graphics,
    HorizontalTextAlignment,
    input,
    Input,
    isValid,
    Label,
    Layers,
    Node,
    ResolutionPolicy,
    tween,
    UITransform,
    Vec3,
    VerticalTextAlignment,
    view,
} from 'cc';
import { ProceduralFactory } from './ProceduralFactory';

const { ccclass } = _decorator;

enum GameState {
    READY,
    PLAYING,
    WIN,
    LOSE,
}

interface BulletEntity {
    node: Node;
    damage: number;
}

interface EnemyEntity {
    node: Node;
    hp: number;
    maxHp: number;
    speed: number;
    radius: number;
    boss: boolean;
    alive: boolean;
    crossedPlayer: boolean;
    seed: number;
}

interface GateEntity {
    node: Node;
    value: number;
    color: Color;
    triggered: boolean;
}

@ccclass('PADemo')
export class PADemo extends Component {
    private readonly factory = new ProceduralFactory();
    private readonly playerZ = 3.1;
    private readonly roadHalfWidth = 2.75;
    private readonly scrollSpeed = 3.35;
    private readonly totalDistance = 91;
    private readonly fireInterval = 0.64;
    private readonly bulletDamage = 2;
    private readonly enemyDespawnZ = 7.5;

    private state = GameState.READY;
    private world!: Node;
    private playerRoot!: Node;
    private effectRoot!: Node;
    private unitNodes: Node[] = [];
    private bullets: BulletEntity[] = [];
    private enemies: EnemyEntity[] = [];
    private gates: GateEntity[] = [];
    private roadStripes: Node[] = [];
    private unitFireTimers = new Map<Node, number>();

    private squadCount = 3;
    private playerX = 0;
    private targetPlayerX = 0;
    private distance = 0;
    private elapsed = 0;
    private endTimer = 0;
    private dragging = false;
    private lastPointerX = 0;
    private boss: EnemyEntity | null = null;

    private squadLabel!: Label;
    private distanceLabel!: Label;
    private startOverlayNode!: Node;
    private resultOverlayNode!: Node;
    private titleLabel!: Label;
    private subtitleLabel!: Label;
    private resultLabel!: Label;
    private hintLabel!: Label;
    private ctaNode!: Node;
    private ctaButton!: Button;
    private ctaLabel!: Label;
    private progressGraphics!: Graphics;
    private bossPanel!: Node;
    private bossHealthGraphics!: Graphics;
    private toastNode!: Node;
    private toastLabel!: Label;
    private toastTimer = 0;

    protected start(): void {
        view.setDesignResolutionSize(1280, 720, ResolutionPolicy.SHOW_ALL);
        this.buildScene();
        this.bindInput();
    }

    protected onDestroy(): void {
        input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
        input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        input.off(Input.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        input.off(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
        input.off(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
        input.off(Input.EventType.MOUSE_UP, this.onMouseUp, this);
        this.ctaNode?.off(Button.EventType.CLICK, this.onCtaClick, this);
    }

    protected update(deltaTime: number): void {
        const dt = Math.min(deltaTime, 0.05);
        this.elapsed += dt;
        this.animateUnits();

        if (this.toastTimer > 0) {
            this.toastTimer -= dt;
            if (this.toastTimer <= 0) {
                this.toastNode.active = false;
            }
        }

        if (this.state === GameState.PLAYING) {
            this.playerX += (this.targetPlayerX - this.playerX) * Math.min(1, dt * 14);
            this.playerRoot.setPosition(this.playerX, 0, this.playerZ);
            this.distance += this.scrollSpeed * dt;

            this.updateRoad(dt);
            this.updateFiring(dt);
            this.updateBullets(dt);
            this.updateEnemies(dt);
            this.updateGates(dt);
            this.updateHud();
        } else if (this.state === GameState.WIN || this.state === GameState.LOSE) {
            this.endTimer += dt;
            if (this.resultOverlayNode.position.y !== 0) {
                this.resultOverlayNode.setPosition(0, 0, 0);
            }
            this.updateRoad(dt * 0.35);
            this.updateHud();
        }
    }

    private buildScene(): void {
        const scene = director.getScene();
        if (!scene) {
            return;
        }

        this.world = new Node('PA World');
        this.world.setParent(scene);
        this.effectRoot = new Node('Effects');
        this.effectRoot.setParent(this.world);

        this.createCamera(scene);
        this.createEnvironment();
        this.createPlayer();
        this.createLevel();
        this.createHud(scene);
        this.updateHud();
    }

    private createCamera(scene: Node): void {
        const cameraNode = new Node('Game Camera');
        cameraNode.setParent(scene);
        cameraNode.setPosition(0, 9.4, 14.2);
        cameraNode.lookAt(new Vec3(0, 0.8, -5.5));
        const camera = cameraNode.addComponent(Camera);
        camera.fov = 46;
        camera.near = 0.1;
        camera.far = 220;
        camera.clearColor = new Color(22, 43, 52, 255);
        camera.visibility = Layers.Enum.DEFAULT;
    }

    private createEnvironment(): void {
        const roadRoot = new Node('Road');
        roadRoot.setParent(this.world);
        for (let z = 4; z >= -104; z -= 12) {
            this.factory.createRoadSegment(roadRoot, z);
        }
        for (let z = 2; z >= -100; z -= 4) {
            this.roadStripes.push(this.factory.createRoadStripe(roadRoot, z));
        }

        for (let i = 0; i < 22; i++) {
            const z = 3 - i * 5;
            const side = i % 2 === 0 ? -1 : 1;
            const block = this.factory.createBox(
                'CityBlock',
                this.world,
                new Vec3(side * (4.4 + (i % 3) * 0.5), 0.5 + (i % 4) * 0.3, z),
                new Vec3(1.5, 1.2 + (i % 4) * 0.6, 1.8),
                i % 2 === 0 ? new Color(31, 93, 104) : new Color(42, 72, 93),
            );
            block.setRotationFromEuler(0, side * (5 + (i % 4) * 4), 0);
        }
    }

    private createPlayer(): void {
        this.playerRoot = new Node('Squad');
        this.playerRoot.setParent(this.world);
        this.playerRoot.setPosition(0, 0, this.playerZ);
        this.setSquadCount(this.squadCount);
    }

    private createLevel(): void {
        this.spawnWave(-10, 4, 2, 0.65);
        this.spawnGate(-18, 4);
        this.spawnWave(-27, 8, 3, 0.7);
        this.spawnWave(-45, 12, 3, 0.8);
        this.spawnGate(-54, 6);
        this.spawnWave(-70, 16, 4, 0.9);
        this.spawnWave(-79, 10, 5, 1.0);
        this.spawnBoss(-91);
    }

    private spawnWave(z: number, count: number, hp: number, speed: number): void {
        const columns = count > 10 ? 5 : count > 5 ? 4 : 3;
        for (let i = 0; i < count; i++) {
            const row = Math.floor(i / columns);
            const column = i % columns;
            const rowCount = Math.min(columns, count - row * columns);
            const x = (column - (rowCount - 1) * 0.5) * 1.08;
            const enemyNode = this.factory.createEnemy(`Enemy ${this.enemies.length + 1}`, this.world);
            enemyNode.setPosition(x, 0, z - row * 1.05);
            this.enemies.push({
                node: enemyNode,
                hp,
                maxHp: hp,
                speed,
                radius: 0.48,
                boss: false,
                alive: true,
                crossedPlayer: false,
                seed: i * 0.71 + Math.abs(z),
            });
        }
    }

    private spawnGate(z: number, value: number): void {
        const color = new Color(65, 224, 145);
        const node = this.factory.createGate(this.world, value, color);
        node.setPosition(0, 0, z);
        this.gates.push({ node, value, color, triggered: false });
    }

    private spawnBoss(z: number): void {
        const node = this.factory.createEnemy('Overlord', this.world, true);
        node.setPosition(0, 0, z);
        const boss: EnemyEntity = {
            node,
            hp: 150,
            maxHp: 150,
            speed: 0.45,
            radius: 1.25,
            boss: true,
            alive: true,
            crossedPlayer: false,
            seed: 99,
        };
        this.enemies.push(boss);
        this.boss = boss;
    }

    private createHud(scene: Node): void {
        const canvasNode = new Node('HUD');
        canvasNode.layer = Layers.Enum.UI_2D;
        canvasNode.setParent(scene);
        const canvasTransform = canvasNode.addComponent(UITransform);
        canvasTransform.setContentSize(1280, 720);

        const uiCameraNode = new Node('UI Camera');
        uiCameraNode.setParent(scene);
        uiCameraNode.setPosition(0, 0, 1000);
        const uiCamera = uiCameraNode.addComponent(Camera);
        uiCamera.projection = Camera.ProjectionType.ORTHO;
        uiCamera.orthoHeight = 360;
        uiCamera.near = 1;
        uiCamera.far = 2000;
        uiCamera.clearFlags = Camera.ClearFlag.DEPTH_ONLY;
        uiCamera.visibility = Layers.Enum.UI_2D;
        uiCamera.priority = 1;

        const canvas = canvasNode.addComponent(Canvas);
        canvas.cameraComponent = uiCamera;

        const topPanel = this.createPanel(canvasNode, 'Top Panel', 1120, 86, new Color(11, 24, 31, 210));
        topPanel.setPosition(0, 305);
        this.squadLabel = this.createLabel(topPanel, 'Squad Count', 'SQUAD  x3', 28, new Color(113, 238, 255), new Vec3(-410, 8), 240, 46);
        this.distanceLabel = this.createLabel(topPanel, 'Distance', '0%', 26, Color.WHITE, new Vec3(455, 8), 110, 46);
        this.createLabel(topPanel, 'Mission', 'REACH THE OVERLORD', 18, new Color(190, 204, 211), new Vec3(0, 10), 320, 40);

        const progressNode = new Node('Progress');
        progressNode.layer = Layers.Enum.UI_2D;
        progressNode.setParent(topPanel);
        progressNode.setPosition(0, -25);
        progressNode.addComponent(UITransform).setContentSize(760, 12);
        this.progressGraphics = progressNode.addComponent(Graphics);

        this.bossPanel = this.createPanel(canvasNode, 'Boss Panel', 620, 70, new Color(39, 19, 53, 225));
        this.bossPanel.setPosition(0, 215);
        this.createLabel(this.bossPanel, 'Boss Name', 'OVERLORD', 21, new Color(255, 221, 112), new Vec3(0, 17), 300, 32);
        const bossHealthNode = new Node('Boss Health');
        bossHealthNode.layer = Layers.Enum.UI_2D;
        bossHealthNode.setParent(this.bossPanel);
        bossHealthNode.setPosition(0, -20);
        bossHealthNode.addComponent(UITransform).setContentSize(500, 18);
        this.bossHealthGraphics = bossHealthNode.addComponent(Graphics);
        this.bossPanel.active = false;

        this.toastNode = this.createPanel(canvasNode, 'Toast', 430, 84, new Color(9, 35, 42, 235));
        this.toastNode.setPosition(0, 140);
        this.toastLabel = this.createLabel(this.toastNode, 'Toast Label', '', 30, new Color(115, 242, 255), new Vec3(), 390, 60);
        this.toastNode.active = false;

        this.startOverlayNode = this.createFullscreenOverlay(canvasNode, 'Start Overlay', new Color(7, 18, 24, 172));
        this.createLabel(this.startOverlayNode, 'Title', 'SQUAD RUSH', 64, new Color(105, 239, 255), new Vec3(0, 115), 760, 90);
        this.createLabel(this.startOverlayNode, 'Subtitle', 'BREAK THE LINE', 25, new Color(255, 215, 108), new Vec3(0, 55), 560, 45);
        this.createLabel(this.startOverlayNode, 'Hint', 'DRAG TO MOVE\nTAP TO START', 24, Color.WHITE, new Vec3(0, -35), 520, 80);
        const startCta = this.createPanel(this.startOverlayNode, 'Start CTA', 430, 90, new Color(48, 208, 134, 255));
        startCta.setPosition(0, -155);
        this.createLabel(startCta, 'CTA Label', 'START MISSION', 32, new Color(7, 34, 29), new Vec3(), 390, 62);

        this.resultOverlayNode = this.createFullscreenOverlay(canvasNode, 'Result Overlay', new Color(7, 18, 24, 232));
        this.titleLabel = this.createLabel(this.resultOverlayNode, 'Result Title', '', 58, Color.WHITE, new Vec3(0, 115), 900, 90);
        this.subtitleLabel = this.createLabel(this.resultOverlayNode, 'Result Subtitle', '', 24, new Color(255, 215, 108), new Vec3(0, 55), 680, 44);
        this.resultLabel = this.createLabel(this.resultOverlayNode, 'Result Detail', '', 28, Color.WHITE, new Vec3(0, -5), 720, 55);
        this.hintLabel = this.createLabel(this.resultOverlayNode, 'Result Hint', '', 22, new Color(190, 204, 211), new Vec3(0, -65), 640, 44);

        this.ctaNode = this.createPanel(this.resultOverlayNode, 'Replay CTA', 460, 104, new Color(48, 208, 134, 255));
        this.ctaNode.setPosition(0, -155);
        this.ctaButton = this.ctaNode.addComponent(Button);
        this.ctaButton.transition = Button.Transition.SCALE;
        this.ctaButton.zoomScale = 0.96;
        this.ctaButton.duration = 0.08;
        this.ctaNode.on(Button.EventType.CLICK, this.onCtaClick, this);
        this.ctaLabel = this.createLabel(this.ctaNode, 'CTA Label', '', 34, new Color(7, 34, 29), new Vec3(), 420, 70);
        this.resultOverlayNode.setPosition(0, -1600, 0);
    }

    private createFullscreenOverlay(parent: Node, name: string, color: Color): Node {
        const node = new Node(name);
        node.layer = Layers.Enum.UI_2D;
        node.setParent(parent);
        node.addComponent(UITransform).setContentSize(1280, 720);
        const graphics = node.addComponent(Graphics);
        graphics.fillColor = color;
        graphics.rect(-640, -360, 1280, 720);
        graphics.fill();
        return node;
    }

    private createPanel(parent: Node, name: string, width: number, height: number, color: Color): Node {
        const node = new Node(name);
        node.layer = Layers.Enum.UI_2D;
        node.setParent(parent);
        node.addComponent(UITransform).setContentSize(width, height);
        const graphics = node.addComponent(Graphics);
        graphics.fillColor = color;
        graphics.roundRect(-width * 0.5, -height * 0.5, width, height, 8);
        graphics.fill();
        return node;
    }

    private createLabel(
        parent: Node,
        name: string,
        text: string,
        fontSize: number,
        color: Color,
        position: Vec3,
        width: number,
        height: number,
    ): Label {
        const node = new Node(name);
        node.layer = Layers.Enum.UI_2D;
        node.setParent(parent);
        node.setPosition(position);
        node.addComponent(UITransform).setContentSize(width, height);
        const label = node.addComponent(Label);
        label.string = text;
        label.fontSize = fontSize;
        label.lineHeight = Math.floor(fontSize * 1.18);
        label.color = color;
        label.horizontalAlign = HorizontalTextAlignment.CENTER;
        label.verticalAlign = VerticalTextAlignment.CENTER;
        label.overflow = Label.Overflow.SHRINK;
        label.isBold = true;
        return label;
    }

    private bindInput(): void {
        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        input.on(Input.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
        input.on(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
        input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
    }

    private onTouchStart(event: EventTouch): void {
        this.handlePointerStart(event.getLocation().x);
    }

    private onTouchMove(event: EventTouch): void {
        this.handlePointerMove(event.getLocation().x);
    }

    private onTouchEnd(): void {
        this.dragging = false;
    }

    private onMouseDown(event: EventMouse): void {
        this.handlePointerStart(event.getLocation().x);
    }

    private onMouseMove(event: EventMouse): void {
        this.handlePointerMove(event.getLocation().x);
    }

    private onMouseUp(): void {
        this.dragging = false;
    }

    private handlePointerStart(x: number): void {
        if (this.state === GameState.WIN || this.state === GameState.LOSE) {
            return;
        }
        if (this.state === GameState.READY) {
            this.state = GameState.PLAYING;
            this.startOverlayNode.active = false;
            console.info('[PA] challenge_started');
        }
        this.dragging = true;
        this.lastPointerX = x;
    }

    private onCtaClick(): void {
        if (this.state === GameState.WIN || this.state === GameState.LOSE) {
            director.loadScene('main');
        }
    }

    private handlePointerMove(x: number): void {
        if (!this.dragging || this.state !== GameState.PLAYING) {
            return;
        }
        const delta = x - this.lastPointerX;
        this.lastPointerX = x;
        this.targetPlayerX = Math.max(-this.roadHalfWidth, Math.min(this.roadHalfWidth, this.targetPlayerX + delta * 0.012));
    }

    private updateRoad(dt: number): void {
        for (const stripe of this.roadStripes) {
            const position = stripe.position;
            let z = position.z + this.scrollSpeed * dt;
            if (z > 7) {
                z -= 104;
            }
            stripe.setPosition(position.x, position.y, z);
        }
    }

    private updateFiring(dt: number): void {
        for (let i = 0; i < this.unitNodes.length; i++) {
            const unit = this.unitNodes[i];
            const interval = this.fireInterval + (i % 4) * 0.025;
            let timer = (this.unitFireTimers.get(unit) ?? 0) + dt;
            if (timer >= interval) {
                timer %= interval;
                const worldPosition = unit.worldPosition;
                this.spawnBullet(worldPosition.x, worldPosition.z - 0.72);
            }
            this.unitFireTimers.set(unit, timer);
        }
    }

    private spawnBullet(x: number, z: number): void {
        const node = this.factory.createCylinder(
            'Pulse',
            this.world,
            new Vec3(x, 0.78, z),
            new Vec3(0.11, 0.72, 0.11),
            new Color(95, 242, 255),
        );
        node.setRotationFromEuler(90, 0, 0);
        this.bullets.push({ node, damage: this.bulletDamage });
    }

    private updateBullets(dt: number): void {
        const bulletSpeed = 18;
        for (const bullet of this.bullets) {
            if (!isValid(bullet.node, true)) {
                continue;
            }
            const position = bullet.node.position;
            const previousZ = position.z;
            const nextZ = previousZ - bulletSpeed * dt;
            bullet.node.setPosition(position.x, position.y, nextZ);

            let consumed = false;
            for (const gate of this.gates) {
                const gateZ = gate.node.position.z;
                const crossesGate = gateZ <= previousZ + 0.35 && gateZ >= nextZ - 0.35;
                if (!gate.triggered && crossesGate && Math.abs(gate.node.position.x - bullet.node.position.x) <= 2.7) {
                    gate.value += 1;
                    this.factory.updateGateValue(gate.node, gate.value, gate.color);
                    this.spawnImpact(new Vec3(bullet.node.position.x, 1.2, gateZ), gate.color);
                    consumed = true;
                    break;
                }
            }

            if (!consumed) {
                for (const enemy of this.enemies) {
                    if (!enemy.alive || Math.abs(enemy.node.position.z - bullet.node.position.z) > enemy.radius + 0.35) {
                        continue;
                    }
                    if (Math.abs(enemy.node.position.x - bullet.node.position.x) <= enemy.radius) {
                        this.damageEnemy(enemy, bullet.damage);
                        consumed = true;
                        break;
                    }
                }
            }

            if (consumed || bullet.node.position.z < -105) {
                bullet.node.destroy();
            }
        }
        this.bullets = this.bullets.filter((bullet) => isValid(bullet.node, true));
    }

    private damageEnemy(enemy: EnemyEntity, damage: number): void {
        enemy.hp = enemy.boss ? enemy.hp - damage : 0;
        this.spawnImpact(enemy.node.position, enemy.boss ? new Color(255, 214, 92) : new Color(255, 105, 110));
        if (enemy.hp <= 0) {
            enemy.alive = false;
            this.spawnBurst(enemy.node.position, enemy.boss ? new Color(168, 92, 232) : new Color(238, 76, 86), enemy.boss ? 1.8 : 0.8);
            enemy.node.destroy();
            if (enemy.boss) {
                this.finish(GameState.WIN);
            }
        }
    }

    private updateEnemies(dt: number): void {
        for (const enemy of this.enemies) {
            if (!enemy.alive) {
                continue;
            }
            const position = enemy.node.position;
            const z = position.z + (this.scrollSpeed + enemy.speed) * dt;
            const sway = enemy.boss ? Math.sin(this.elapsed * 1.4) * 0.55 : Math.sin(this.elapsed * 2.2 + enemy.seed) * 0.08;
            const x = position.x + sway * dt;
            enemy.node.setPosition(x, Math.abs(Math.sin(this.elapsed * 5 + enemy.seed)) * 0.04, z);
            enemy.node.setRotationFromEuler(0, 180, Math.sin(this.elapsed * 5 + enemy.seed) * 3);

            if (enemy.boss && z > -18) {
                this.bossPanel.active = true;
            }
            const playerLine = this.playerZ - (enemy.boss ? 1.5 : 0.45);
            if (!enemy.crossedPlayer && z >= playerLine) {
                enemy.crossedPlayer = true;
                const touchesSquad = Math.abs(x - this.playerX) <= enemy.radius + this.getSquadHalfWidth();
                if (touchesSquad) {
                    this.spawnBurst(new Vec3(x, 0.7, this.playerZ), new Color(242, 94, 100), enemy.boss ? 1.5 : 0.65);
                    this.removeSquad(enemy.boss ? Math.max(5, Math.ceil(this.squadCount * 0.65)) : 1);
                }
                if (enemy.boss && this.state === GameState.PLAYING) {
                    this.finish(GameState.LOSE);
                }
            }
            if (z >= this.enemyDespawnZ) {
                enemy.alive = false;
                enemy.node.destroy();
            }
        }
        this.enemies = this.enemies.filter((enemy) => enemy.alive);
    }

    private getSquadHalfWidth(): number {
        let halfWidth = 0.3;
        for (const unit of this.unitNodes) {
            halfWidth = Math.max(halfWidth, Math.abs(unit.position.x) + 0.25);
        }
        return halfWidth;
    }

    private updateGates(dt: number): void {
        for (const gate of this.gates) {
            if (gate.triggered) {
                continue;
            }
            const position = gate.node.position;
            gate.node.setPosition(position.x, position.y, position.z + this.scrollSpeed * dt);
            if (gate.node.position.z >= this.playerZ - 0.3) {
                gate.triggered = true;
                this.addSquad(gate.value);
                this.showToast(`SQUAD  +${gate.value}`, new Color(91, 245, 164));
                this.spawnBurst(new Vec3(this.playerX, 1, this.playerZ), new Color(65, 224, 145), 1.15);
                gate.node.destroy();
            }
        }
        this.gates = this.gates.filter((gate) => !gate.triggered);
    }

    private addSquad(value: number): void {
        this.setSquadCount(Math.min(20, this.squadCount + value));
    }

    private removeSquad(value: number): void {
        this.setSquadCount(Math.max(0, this.squadCount - value));
        if (this.squadCount <= 0) {
            this.finish(GameState.LOSE);
        }
    }

    private setSquadCount(value: number): void {
        this.squadCount = value;
        while (this.unitNodes.length < this.squadCount) {
            const index = this.unitNodes.length;
            const unit = this.factory.createSoldier(`Ranger ${index + 1}`, this.playerRoot, new Color(50, 169, 219));
            unit.setScale(0, 0, 0);
            tween(unit).to(0.18, { scale: new Vec3(1, 1, 1) }, { easing: 'backOut' }).start();
            this.unitNodes.push(unit);
            this.unitFireTimers.set(unit, (index * 0.13) % this.fireInterval);
        }
        while (this.unitNodes.length > this.squadCount) {
            const unit = this.unitNodes.pop();
            if (unit) {
                this.unitFireTimers.delete(unit);
            }
            unit?.destroy();
        }
        this.arrangeSquad();
    }

    private arrangeSquad(): void {
        for (let i = 0; i < this.unitNodes.length; i++) {
            this.unitNodes[i].setPosition(this.getFormationPosition(i));
        }
    }

    private animateUnits(): void {
        for (let i = 0; i < this.unitNodes.length; i++) {
            const formationPosition = this.getFormationPosition(i);
            const bob = this.state === GameState.PLAYING ? Math.abs(Math.sin(this.elapsed * 7 + i * 0.6)) * 0.05 : 0;
            this.unitNodes[i].setPosition(formationPosition.x, bob, formationPosition.z);
            this.unitNodes[i].setRotationFromEuler(0, 0, Math.sin(this.elapsed * 7 + i) * 2.5);
        }
    }

    private getFormationPosition(index: number): Vec3 {
        const columns = Math.min(5, Math.max(1, Math.ceil(Math.sqrt(this.unitNodes.length))));
        const row = Math.floor(index / columns);
        const column = index % columns;
        const rowCount = Math.min(columns, this.unitNodes.length - row * columns);
        const baseX = (column - (rowCount - 1) * 0.5) * 0.55;
        const offsetX = (row % 2 === 0 ? -0.05 : 0.1) + (column % 2 === 0 ? -0.025 : 0.025);
        const offsetZ = column % 2 === 0 ? 0 : 0.09;
        return new Vec3(baseX + offsetX, 0, row * 0.58 + offsetZ);
    }

    private spawnImpact(position: Readonly<Vec3>, color: Color): void {
        const node = this.factory.createSphere('Impact', this.effectRoot, new Vec3(position.x, 0.9, position.z), new Vec3(0.18, 0.18, 0.18), color);
        tween(node)
            .to(0.12, { scale: new Vec3(0.5, 0.5, 0.5) })
            .call(() => node.destroy())
            .start();
    }

    private spawnBurst(position: Readonly<Vec3>, color: Color, size: number): void {
        for (let i = 0; i < 6; i++) {
            const angle = (Math.PI * 2 * i) / 6;
            const node = this.factory.createBox(
                'Burst',
                this.effectRoot,
                new Vec3(position.x, 0.7, position.z),
                new Vec3(0.16, 0.16, 0.16),
                color,
            );
            const target = new Vec3(position.x + Math.cos(angle) * size, 0.8 + (i % 2) * 0.55, position.z + Math.sin(angle) * size);
            tween(node)
                .to(0.28, { position: target, scale: new Vec3(0.02, 0.02, 0.02) }, { easing: 'quadOut' })
                .call(() => node.destroy())
                .start();
        }
    }

    private showToast(text: string, color: Color): void {
        this.toastLabel.string = text;
        this.toastLabel.color = color;
        this.toastNode.active = true;
        this.toastNode.setScale(0.8, 0.8, 0.8);
        tween(this.toastNode).to(0.18, { scale: new Vec3(1, 1, 1) }, { easing: 'backOut' }).start();
        this.toastTimer = 1.2;
    }

    private updateHud(): void {
        this.squadLabel.string = `SQUAD  x${this.squadCount}`;
        const progress = Math.max(0, Math.min(1, this.distance / this.totalDistance));
        this.distanceLabel.string = `${Math.floor(progress * 100)}%`;
        this.drawBar(this.progressGraphics, 760, 12, progress, new Color(77, 227, 201), new Color(42, 58, 65));

        if (this.boss && this.boss.alive) {
            this.drawBar(
                this.bossHealthGraphics,
                500,
                18,
                Math.max(0, this.boss.hp / this.boss.maxHp),
                new Color(228, 80, 116),
                new Color(61, 38, 66),
            );
        }
    }

    private drawBar(graphics: Graphics, width: number, height: number, value: number, fill: Color, background: Color): void {
        graphics.clear();
        graphics.fillColor = background;
        graphics.roundRect(-width * 0.5, -height * 0.5, width, height, height * 0.5);
        graphics.fill();
        if (value > 0) {
            graphics.fillColor = fill;
            graphics.roundRect(-width * 0.5, -height * 0.5, Math.max(height, width * value), height, height * 0.5);
            graphics.fill();
        }
    }

    private finish(result: GameState): void {
        if (this.state === GameState.WIN || this.state === GameState.LOSE) {
            return;
        }
        this.dragging = false;
        this.endTimer = 0;

        const won = result === GameState.WIN;
        this.titleLabel.string = won ? 'VICTORY' : 'MISSION FAILED';
        this.titleLabel.color = won ? new Color(255, 220, 105) : new Color(255, 112, 112);
        this.subtitleLabel.string = won ? 'OVERLORD DEFEATED' : 'THE LINE WAS BROKEN';
        const progressPercent = Math.min(100, Math.floor(this.distance / this.totalDistance * 100));
        this.resultLabel.string = won ? 'THE CITY IS SAFE' : `SQUAD LOST  -  ${progressPercent}%`;
        this.hintLabel.string = won ? 'MISSION COMPLETE' : 'REGROUP AND TRY AGAIN';

        this.ctaButton.interactable = true;
        this.ctaLabel.string = won ? '再玩一次' : '重新开始';
        this.resultOverlayNode.setPosition(0, 0, 0);

        this.state = result;
        console.info('[PA] result_overlay_shown', this.resultOverlayNode.activeInHierarchy, this.resultOverlayNode.position);
        console.info(result === GameState.WIN ? '[PA] challenge_solved' : '[PA] challenge_failed');
    }
}
