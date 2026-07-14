# Squad Rush PA Demo

A Cocos Creator 3.8.8 playable-ad prototype rebuilt from the gameplay structure of the reference bundle.

## Run

1. Open this folder in Cocos Creator 3.8.8.
2. Open `assets/scenes/main.scene`.
3. Click Preview and drag horizontally with mouse or touch.

The entire first version is generated at runtime. No external models, textures, fonts, or audio files are required.

## Included gameplay

- Drag-to-move squad control
- Per-unit staggered automatic shooting
- Enemy waves and squad casualties
- Shoot-to-grow squad gates
- Final boss with health bar
- Ready, victory, failure, and retry flows
- Console PA events: `challenge_started`, `challenge_solved`, and `challenge_failed`

## Structure

- `assets/scripts/PADemo.ts`: game flow, input, combat, level data, and HUD
- `assets/scripts/ProceduralFactory.ts`: low-poly models, materials, gates, and environment pieces
- `assets/scenes/main.scene`: minimal bootstrap scene

Replace the procedural factory methods with prefabs when production art becomes available. Keep `PADemo` as the gameplay coordinator so that art replacement does not change the game rules.
