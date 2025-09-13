export const SKIN_W = 64;
export const SKIN_H = 64;

export async function loadSkinFromFile(file: File): Promise<HTMLImageElement> {
  return new Promise((res, rej) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => { URL.revokeObjectURL(url); res(img); };
    img.onerror = rej;
    img.src = url;
  });
}

export function downloadCanvasPNG(canvas: HTMLCanvasElement, name = 'skin.png') {
  const url = canvas.toDataURL('image/png');
  const a = document.createElement('a');
  a.href = url; a.download = name;
  a.click();
}

export async function copyCanvasToClipboard(canvas: HTMLCanvasElement) {
  const blob = await new Promise<Blob | null>(r => canvas.toBlob(b => r(b), 'image/png'));
  if (!blob) throw new Error('Blob failed');
  const item = new ClipboardItem({ 'image/png': blob });
  await navigator.clipboard.write([item]);
}

export function imageDataFromCanvas(canvas: HTMLCanvasElement): ImageData {
  const ctx = canvas.getContext('2d')!;
  return ctx.getImageData(0,0,canvas.width,canvas.height);
}

export function putImageDataToCanvas(canvas: HTMLCanvasElement, img: ImageData) {
  const ctx = canvas.getContext('2d')!;
  ctx.putImageData(img,0,0);
}

export function createEmptySkin(): ImageData {
  const canvas = document.createElement('canvas');
  canvas.width = SKIN_W; canvas.height = SKIN_H;
  const ctx = canvas.getContext('2d')!;
  ctx.clearRect(0,0,SKIN_W,SKIN_H);
  return ctx.getImageData(0,0,SKIN_W,SKIN_H);
}