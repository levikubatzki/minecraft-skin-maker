import React, { useEffect, useRef } from "react";
import { SkinViewer } from "skinview3d";

interface Viewer3DProps {
  canvas?: HTMLCanvasElement;
  model?: "default" | "slim";
}

const Viewer3D: React.FC<Viewer3DProps> = ({ canvas, model = "default" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<SkinViewer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    if (!viewerRef.current) {
      viewerRef.current = new SkinViewer({
        domElement: containerRef.current,
        width: 400,
        height: 500,
        skin: "https://minecraftskins.com/images/steve.png",
      });
      viewerRef.current.zoom = 0.9;
      viewerRef.current.controls.enableRotate = true;
    }

    if (canvas) {
      const tex = canvas.toDataURL("image/png");
      viewerRef.current?.loadSkin(tex, { model });
    }
  }, [canvas, model]);

  return <div ref={containerRef} style={{ width: "100%", height: "500px" }} />;
};

export default Viewer3D;
