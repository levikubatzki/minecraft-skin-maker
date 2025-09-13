import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import { SkinViewer } from 'skinview3d';
export default function Viewer3D({ getPNG }) {
    const host = useRef(null);
    const viewer = useRef(null);
    useEffect(() => {
        if (!host.current)
            return;
        const v = new SkinViewer({ width: host.current.clientWidth, height: host.current.clientHeight });
        host.current.appendChild(v.canvas);
        v.background = '#0c0c14';
        v.autoRotate = true;
        v.controls.enableZoom = true;
        viewer.current = v;
        const timer = setInterval(async () => {
            const b = await getPNG();
            const url = URL.createObjectURL(b);
            v.loadSkin(url);
            setTimeout(() => URL.revokeObjectURL(url), 5000);
        }, 700);
        const onResize = () => { if (!host.current)
            return; v.width = host.current.clientWidth; v.height = host.current.clientHeight; };
        window.addEventListener('resize', onResize);
        return () => { clearInterval(timer); window.removeEventListener('resize', onResize); v.dispose(); };
    }, []);
    return _jsx("div", { ref: host, className: "neon-card absolute inset-0 p-2" });
}
