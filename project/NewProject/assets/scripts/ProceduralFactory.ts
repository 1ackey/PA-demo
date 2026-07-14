import {
    Color,
    Material,
    Mesh,
    MeshRenderer,
    Node,
    primitives,
    utils,
    Vec3,
} from 'cc';

type PrimitiveKind = 'box' | 'sphere' | 'cylinder' | 'cone';

export class ProceduralFactory {
    private readonly materials = new Map<string, Material>();
    private readonly meshes = new Map<PrimitiveKind, Mesh>();

    public createBox(
        name: string,
        parent: Node,
        position: Vec3,
        scale: Vec3,
        color: Color,
    ): Node {
        return this.createPrimitive('box', name, parent, position, scale, color);
    }

    public createSphere(
        name: string,
        parent: Node,
        position: Vec3,
        scale: Vec3,
        color: Color,
    ): Node {
        return this.createPrimitive('sphere', name, parent, position, scale, color);
    }

    public createCylinder(
        name: string,
        parent: Node,
        position: Vec3,
        scale: Vec3,
        color: Color,
    ): Node {
        return this.createPrimitive('cylinder', name, parent, position, scale, color);
    }

    public createCone(
        name: string,
        parent: Node,
        position: Vec3,
        scale: Vec3,
        color: Color,
    ): Node {
        return this.createPrimitive('cone', name, parent, position, scale, color);
    }

    public createSoldier(name: string, parent: Node, color: Color): Node {
        const root = new Node(name);
        root.setParent(parent);

        this.createBox('Body', root, new Vec3(0, 0.72, 0), new Vec3(0.42, 0.62, 0.28), color);
        this.createSphere('Head', root, new Vec3(0, 1.32, 0), new Vec3(0.38, 0.38, 0.38), new Color(255, 213, 174));
        this.createBox('LegL', root, new Vec3(-0.12, 0.25, 0), new Vec3(0.15, 0.45, 0.18), new Color(34, 55, 70));
        this.createBox('LegR', root, new Vec3(0.12, 0.25, 0), new Vec3(0.15, 0.45, 0.18), new Color(34, 55, 70));

        const weapon = this.createBox(
            'Blaster',
            root,
            new Vec3(0.32, 0.82, -0.24),
            new Vec3(0.12, 0.14, 0.62),
            new Color(38, 45, 54),
        );
        weapon.setRotationFromEuler(0, 0, -8);

        this.createBox('Visor', root, new Vec3(0, 1.34, -0.18), new Vec3(0.34, 0.12, 0.05), new Color(82, 234, 255));
        return root;
    }

    public createEnemy(name: string, parent: Node, boss = false): Node {
        const root = new Node(name);
        root.setParent(parent);
        const bodyColor = boss ? new Color(123, 57, 190) : new Color(221, 69, 79);
        const darkColor = boss ? new Color(55, 31, 86) : new Color(82, 36, 41);
        const size = boss ? 1.75 : 1;

        this.createBox('Body', root, new Vec3(0, 0.72, 0), new Vec3(0.5, 0.68, 0.36), bodyColor);
        this.createSphere('Head', root, new Vec3(0, 1.34, 0), new Vec3(0.44, 0.44, 0.44), bodyColor);
        this.createBox('LegL', root, new Vec3(-0.14, 0.25, 0), new Vec3(0.17, 0.46, 0.2), darkColor);
        this.createBox('LegR', root, new Vec3(0.14, 0.25, 0), new Vec3(0.17, 0.46, 0.2), darkColor);
        this.createSphere('EyeL', root, new Vec3(-0.12, 1.38, -0.2), new Vec3(0.09, 0.09, 0.06), new Color(255, 238, 103));
        this.createSphere('EyeR', root, new Vec3(0.12, 1.38, -0.2), new Vec3(0.09, 0.09, 0.06), new Color(255, 238, 103));

        if (boss) {
            const hornL = this.createCone('HornL', root, new Vec3(-0.28, 1.72, 0), new Vec3(0.18, 0.5, 0.18), new Color(250, 205, 93));
            const hornR = this.createCone('HornR', root, new Vec3(0.28, 1.72, 0), new Vec3(0.18, 0.5, 0.18), new Color(250, 205, 93));
            hornL.setRotationFromEuler(0, 0, 18);
            hornR.setRotationFromEuler(0, 0, -18);
            this.createBox('Armor', root, new Vec3(0, 0.9, -0.24), new Vec3(0.75, 0.38, 0.12), new Color(250, 205, 93));
        }

        root.setScale(size, size, size);
        return root;
    }

    public createGate(parent: Node, value: number, color: Color): Node {
        const root = new Node(value >= 0 ? `Gate+${value}` : `Gate${value}`);
        root.setParent(parent);
        this.createBox('LeftPost', root, new Vec3(-2.55, 1.2, 0), new Vec3(0.22, 2.4, 0.25), color);
        this.createBox('RightPost', root, new Vec3(2.55, 1.2, 0), new Vec3(0.22, 2.4, 0.25), color);
        this.createBox('Header', root, new Vec3(0, 2.25, 0), new Vec3(5.3, 0.25, 0.25), color);

        const sign = new Node('Sign');
        sign.setParent(root);
        sign.setPosition(0, 1.2, 0);
        this.updateGateValue(root, value, color);
        return root;
    }

    public updateGateValue(gate: Node, value: number, color: Color): void {
        gate.name = value >= 0 ? `Gate+${value}` : `Gate${value}`;
        for (const partName of ['LeftPost', 'RightPost', 'Header']) {
            const renderer = gate.getChildByName(partName)?.getComponent(MeshRenderer);
            renderer?.setMaterial(this.getMaterial(color), 0);
        }

        const sign = gate.getChildByName('Sign');
        if (!sign) {
            return;
        }

        for (const child of [...sign.children]) {
            child.destroy();
        }

        const digits = Math.floor(Math.abs(value)).toString();
        const digitsWidth = digits.length * 0.9 - 0.2;
        const groupWidth = 0.7 + 0.25 + digitsWidth;
        const left = -groupWidth * 0.5;
        if (value >= 0) {
            this.createPlus(sign, left + 0.35, color);
        } else {
            this.createMinus(sign, left + 0.35, color);
        }
        for (let i = 0; i < digits.length; i++) {
            this.createDigit(sign, Number(digits[i]), left + 0.95 + i * 0.9, color);
        }
        sign.setScale(Math.min(1, 4.4 / groupWidth), 1, 1);
    }

    public createRoadSegment(parent: Node, z: number): Node {
        const segment = new Node('RoadSegment');
        segment.setParent(parent);
        segment.setPosition(0, 0, z);
        this.createBox(
            'Road',
            segment,
            new Vec3(0, -0.12, 0),
            new Vec3(6.5, 0.2, 12),
            new Color(60, 72, 82),
        );
        this.createBox('RailL', segment, new Vec3(-3.35, 0.42, 0), new Vec3(0.18, 0.7, 12), new Color(48, 196, 186));
        this.createBox('RailR', segment, new Vec3(3.35, 0.42, 0), new Vec3(0.18, 0.7, 12), new Color(48, 196, 186));
        return segment;
    }

    public createRoadStripe(parent: Node, z: number): Node {
        return this.createBox(
            'Stripe',
            parent,
            new Vec3(0, 0.02, z),
            new Vec3(0.1, 0.025, 1.2),
            new Color(231, 238, 224),
        );
    }

    private createPrimitive(
        kind: PrimitiveKind,
        name: string,
        parent: Node,
        position: Vec3,
        scale: Vec3,
        color: Color,
    ): Node {
        const node = new Node(name);
        node.setParent(parent);
        node.setPosition(position);
        node.setScale(scale);

        const renderer = node.addComponent(MeshRenderer);
        renderer.mesh = this.getMesh(kind);
        renderer.setMaterial(this.getMaterial(color), 0);
        return node;
    }

    private getMesh(kind: PrimitiveKind): Mesh {
        const cached = this.meshes.get(kind);
        if (cached) {
            return cached;
        }

        let geometry;
        switch (kind) {
            case 'sphere':
                geometry = primitives.sphere(0.5, { segments: 12 });
                break;
            case 'cylinder':
                geometry = primitives.cylinder(0.5, 0.5, 1, { radialSegments: 12 });
                break;
            case 'cone':
                geometry = primitives.cylinder(0, 0.5, 1, { radialSegments: 12 });
                break;
            default:
                geometry = primitives.box({ width: 1, height: 1, length: 1 });
                break;
        }

        const mesh = utils.createMesh(geometry);
        this.meshes.set(kind, mesh);
        return mesh;
    }

    private getMaterial(color: Color): Material {
        const key = `${color.r}-${color.g}-${color.b}-${color.a}`;
        const cached = this.materials.get(key);
        if (cached) {
            return cached;
        }

        const material = new Material();
        material.initialize({ effectName: 'builtin-unlit' });
        material.setProperty('mainColor', color);
        this.materials.set(key, material);
        return material;
    }

    private createPlus(parent: Node, x: number, color: Color): void {
        this.createBox('PlusH', parent, new Vec3(x, 0, -0.18), new Vec3(0.7, 0.15, 0.12), color);
        this.createBox('PlusV', parent, new Vec3(x, 0, -0.18), new Vec3(0.15, 0.7, 0.12), color);
    }

    private createMinus(parent: Node, x: number, color: Color): void {
        this.createBox('Minus', parent, new Vec3(x, 0, -0.18), new Vec3(0.7, 0.15, 0.12), color);
    }

    private createDigit(parent: Node, value: number, x: number, color: Color): void {
        const segmentsByDigit: Record<number, number[]> = {
            0: [0, 1, 2, 3, 4, 5],
            1: [1, 2],
            2: [0, 1, 6, 4, 3],
            3: [0, 1, 6, 2, 3],
            4: [5, 6, 1, 2],
            5: [0, 5, 6, 2, 3],
            6: [0, 5, 6, 4, 2, 3],
            7: [0, 1, 2],
            8: [0, 1, 2, 3, 4, 5, 6],
            9: [0, 1, 2, 3, 5, 6],
        };
        const digit = Math.max(0, Math.min(9, Math.floor(value)));
        const segmentPositions = [
            new Vec3(x + 0.35, 0.48, -0.18),
            new Vec3(x + 0.7, 0.24, -0.18),
            new Vec3(x + 0.7, -0.24, -0.18),
            new Vec3(x + 0.35, -0.48, -0.18),
            new Vec3(x, -0.24, -0.18),
            new Vec3(x, 0.24, -0.18),
            new Vec3(x + 0.35, 0, -0.18),
        ];
        for (const index of segmentsByDigit[digit]) {
            const vertical = index === 1 || index === 2 || index === 4 || index === 5;
            this.createBox(
                `Segment${index}`,
                parent,
                segmentPositions[index],
                vertical ? new Vec3(0.12, 0.42, 0.12) : new Vec3(0.58, 0.12, 0.12),
                color,
            );
        }
    }
}
