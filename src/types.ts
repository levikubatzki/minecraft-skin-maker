export type Tool = 'brush' | 'eraser' | 'fill' | 'picker';
export type HistoryEntry = ImageData;

export interface GradientOptions {
  start: string;
  end: string;
  angleDeg: number;
  dither: boolean;
}