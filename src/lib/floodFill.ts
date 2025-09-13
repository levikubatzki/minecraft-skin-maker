export function floodFill(img: ImageData, x:number, y:number, c:[number,number,number,number]){
  const {width,height,data} = img; const idx=(x:number,y:number)=>(y*width+x)*4;
  if (x<0||y<0||x>=width||y>=height) return;
  const s=idx(x,y); const t:[number,number,number,number]=[data[s],data[s+1],data[s+2],data[s+3]];
  const eq=(i:number,c:[number,number,number,number])=>data[i]===c[0]&&data[i+1]===c[1]&&data[i+2]===c[2]&&data[i+3]===c[3];
  if (eq(s,t)){}; if (t[0]===c[0]&&t[1]===c[1]&&t[2]===c[2]&&t[3]===c[3]) return;
  const q:[[number,number]]|any = [[x,y]];
  while(q.length){ const [cx,cy]=q.pop(); let nx=cx; while(nx>=0 && eq(idx(nx,cy),t)) nx--; nx++;
    let up=false,down=false; while(nx<width && eq(idx(nx,cy),t)){ set(nx,cy,c);
      if(!up && cy>0 && eq(idx(nx,cy-1),t)){ q.push([nx,cy-1]); up=true; } else if(up && cy>0 && !eq(idx(nx,cy-1),t)) up=false;
      if(!down && cy<height-1 && eq(idx(nx,cy+1),t)){ q.push([nx,cy+1]); down=true; } else if(down && cy<height-1 && !eq(idx(nx,cy+1),t)) down=false; nx++; } }
  function set(x:number,y:number,c:[number,number,number,number]){ const i=idx(x,y); data[i]=c[0]; data[i+1]=c[1]; data[i+2]=c[2]; data[i+3]=c[3]; }
}