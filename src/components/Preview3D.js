import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import { SkinViewer } from 'skinview3d';
export default function Preview3D({ getPNG }) {
    const ref = useRef(null);
    const viewerRef = useRef(null);
    useEffect(() => {
        if (!ref.current)
            return;
        const v = new SkinViewer({ width: ref.current.clientWidth, height: 360 });
        ref.current.appendChild(v.canvas);
        v.background = '#0b0b17';
        v.autoRotate = true;
        v.controls.enableZoom = true;
        viewerRef.current = v;
        const timer = setInterval(async () => {
            const blob = await getPNG();
            const url = URL.createObjectURL(blob);
            v.loadSkin(url);
            setTimeout(() => URL.revokeObjectURL(url), 4000);
        }, 800);
        const onResize = () => { if (!ref.current)
            return; v.width = ref.current.clientWidth; v.height = 360; };
        window.addEventListener('resize', onResize);
        return () => { clearInterval(timer); window.removeEventListener('resize', onResize); v.dispose(); };
    }, []);
    return _jsx("div", { ref: ref, className: "neon-card p-2" });
}
