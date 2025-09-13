// Standard Minecraft Skin Maße
export const W = 64, H = 64;
export const SKIN_W = W;
export const SKIN_H = H;

export function blank(): ImageData {
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const ctx = c.getContext('2d')!;
  ctx.clearRect(0,0,W,H);
  return ctx.getImageData(0,0,W,H);
}

export function clone(img: ImageData){
  return new ImageData(new Uint8ClampedArray(img.data), img.width, img.height);
}

export function toBlob(canvas: HTMLCanvasElement): Promise<Blob>{
  return new Promise(res => canvas.toBlob(b => res(b!), 'image/png'));
}

export function download(canvas: HTMLCanvasElement, name='skin.png'){
  const a = document.createElement('a');
  a.href = canvas.toDataURL('image/png');
  a.download = name;
  a.click();
}

export async function copyToClipboard(canvas: HTMLCanvasElement){
  const b = await toBlob(canvas);
  const item = new ClipboardItem({'image/png': b});
  await navigator.clipboard.write([item]);
}

export async function loadPNGFromFile(file: File): Promise<ImageData>{
  const url = URL.createObjectURL(file);
  const img = new Image();
  await new Promise<void>((res,rej)=>{
    img.onload=()=>res();
    img.onerror=rej;
    img.src=url;
  });
  const c = document.createElement('canvas'); c.width=W; c.height=H;
  const ctx = c.getContext('2d')!;
  ctx.drawImage(img,0,0,W,H);
  URL.revokeObjectURL(url);
  return ctx.getImageData(0,0,W,H);
}

// simple Steve-like generator (not exact, but good default)
export function makeDefaultSteve(): ImageData {
  const c = document.createElement('canvas'); c.width=W; c.height=H;
  const ctx = c.getContext('2d')!;
  ctx.fillStyle='#7AA1FF'; ctx.fillRect(0,0,W,H); // base bluish
  // head area (8x8 blocks): draw a face box
  ctx.fillStyle='#C58C5A'; ctx.fillRect(8,8,8,8); // front head
  ctx.fillStyle='#000'; ctx.fillRect(10,11,2,2); ctx.fillRect(14,11,2,2); // eyes
  ctx.fillStyle='#8B5E3C'; ctx.fillRect(10,14,6,1); // mouth
  // body box
  ctx.fillStyle='#3AA3A3'; ctx.fillRect(16,20,8,12);
  // quick arms + legs blocks
  ctx.fillStyle='#3AA3A3'; ctx.fillRect(40,20,4,12); ctx.fillRect(48,20,4,12);
  ctx.fillStyle='#6B4F2A'; ctx.fillRect(8,52,4,12); ctx.fillRect(20,52,4,12);
  return ctx.getImageData(0,0,W,H);
}
