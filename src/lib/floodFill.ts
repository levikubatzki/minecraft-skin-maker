export function floodFill(img: ImageData, x:number, y:number, c:[number,number,number,number]){
  const {width,height,data} = img;
  const idx=(x:number,y:number)=>(y*width+x)*4;
  if(x<0||y<0||x>=width||y>=height) return;
  const s=idx(x,y); const t:[number,number,number,number]=[data[s],data[s+1],data[s+2],data[s+3]];
  if (eq4(t,c)) return;
  const q:[[number,number]]|any = [[x,y]];
  while(q.length){ const [cx,cy]=q.pop(); let nx=cx; while(nx>=0 && eqpx(nx,cy,t)) nx--; nx++; let up=false,down=false;
    while(nx<width && eqpx(nx,cy,t)){ setpx(nx,cy,c); if(!up && cy>0 && eqpx(nx,cy-1,t)){ q.push([nx,cy-1]); up=true;} else if(up && cy>0 && !eqpx(nx,cy-1,t)) up=false;
      if(!down && cy<height-1 && eqpx(nx,cy+1,t)){ q.push([nx,cy+1]); down=true;} else if(down && cy<height-1 && !eqpx(nx,cy+1,t)) down=false; nx++; } }
  function eqpx(x:number,y:number,t:[number,number,number,number]){ const i=idx(x,y); return data[i]===t[0]&&data[i+1]===t[1]&&data[i+2]===t[2]&&data[i+3]===t[3]; }
  function setpx(x:number,y:number,c:[number,number,number,number]){ const i=idx(x,y); data[i]=c[0]; data[i+1]=c[1]; data[i+2]=c[2]; data[i+3]=c[3]; }
  function eq4(a:[number,number,number,number],b:[number,number,number,number]){ return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]&&a[3]===b[3]; }
}