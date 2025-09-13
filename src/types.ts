export type Tool = 'brush'|'eraser'|'fill'|'picker'|'hand';
export type Layer = 'base'|'overlay';
export interface AppState { color: string; size: number; tool: Tool; mirror: boolean; grid: boolean; layer: Layer; }

// Gradient Options type
export interface GradientOptions {
  start: string;       // Startfarbe (hex oder rgba)
  end: string;         // Endfarbe
  angleDeg: number;    // Winkel in Grad
  dither: boolean;     // ob Dithering aktiviert ist
}

