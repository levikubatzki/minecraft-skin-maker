export function floodFill(img: ImageData, x: number, y: number, color: [number,number,number,number]) {
  const { width, height, data } = img;
  const idx = (x: number, y: number) => (y * width + x) * 4;
  if (x < 0 || x >= width || y < 0 || y >= height) return;

  const start = idx(x, y);
  const target: [number,number,number,number] = [data[start], data[start+1], data[start+2], data[start+3]];
  if (equals(target, color)) return;

  const q: [number,number][] = [[x,y]];
  while (q.length) {
    const [cx, cy] = q.pop()!;
    let nx = cx;
    while (nx >= 0 && eqpx(nx, cy, target)) nx--;
    nx++;
    let spanUp = false, spanDown = false;
    while (nx < width && eqpx(nx, cy, target)) {
      setpx(nx, cy, color);
      if (!spanUp && cy > 0 && eqpx(nx, cy-1, target)) { q.push([nx, cy-1]); spanUp = true; }
      else if (spanUp && cy > 0 && !eqpx(nx, cy-1, target)) spanUp = false;
      if (!spanDown && cy < height-1 && eqpx(nx, cy+1, target)) { q.push([nx, cy+1]); spanDown = true; }
      else if (spanDown && cy < height-1 && !eqpx(nx, cy+1, target)) spanDown = false;
      nx++;
    }
  }
  function eqpx(x:number,y:number,c:[number,number,number,number]) {
    const i = idx(x,y); return data[i]===c[0] && data[i+1]===c[1] && data[i+2]===c[2] && data[i+3]===c[3];
  }
  function setpx(x:number,y:number,c:[number,number,number,number]) {
    const i = idx(x,y); data[i]=c[0]; data[i+1]=c[1]; data[i+2]=c[2]; data[i+3]=c[3];
  }
  function equals(a:[number,number,number,number],b:[number,number,number,number]) {
    return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]&&a[3]===b[3];
  }
}