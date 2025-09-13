import React, { useRef } from "react";
import TextureCanvas from "./TextureCanvas";
import Viewer3D from "./Viewer3D";

const Preview3D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <div className="flex gap-6 p-4 bg-neutral-900 text-white min-h-screen">
      {/* Links: 2D Editor */}
      <div className="flex-1">
        <h2 className="mb-2">2D Editor</h2>
        <TextureCanvas ref={canvasRef} />
      </div>

      {/* Rechts: 3D Preview */}
      <div className="w-[400px]">
        <h2 className="mb-2">3D Preview</h2>
        <Viewer3D canvas={canvasRef.current || undefined} model="default" />
      </div>
    </div>
  );
};

export default Preview3D;
