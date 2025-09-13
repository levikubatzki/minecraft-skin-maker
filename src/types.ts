export type Tool = 'brush'|'eraser'|'fill'|'picker'|'hand';
export type Layer = 'base'|'overlay';
export interface AppState { color: string; size: number; tool: Tool; mirror: boolean; grid: boolean; layer: Layer; }
