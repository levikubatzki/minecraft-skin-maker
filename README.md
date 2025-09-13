# Minecraft Skin Maker — Neon (Full)

Ein moderner **Minecraft Skin Maker** mit:
- Canvas-Editor (Brush/Eraser/Fill/Pipette, Zoom, Pan, Grid)
- Gradient-Generator (2 Farben, Winkel, Dithering, Zufall)
- Undo/Redo
- PNG Import/Export & Copy-to-Clipboard
- 3D-Vorschau (skinview3d)
- Bild → Skin Konverter (beliebiges Bild zu 64×64, Cover/Contain)

## Lokal

```bash
npm install
npm run dev
```

## Deploy (GitHub Pages)

```bash
npm run build
npm run deploy
```

`vite.config.ts` hat `base: '/minecraft-skin-maker/'` für GitHub Pages.
