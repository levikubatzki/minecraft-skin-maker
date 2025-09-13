import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { SkinViewer } from "skinview3d";
export default function Preview3D({ getPNG }) {
    const ref = useRef(null);
    const viewerRef = useRef(null);
    useEffect(() => {
        if (!ref.current)
            return;
        const v = new SkinViewer({
            canvas: undefined,
            width: ref.current.clientWidth,
            height: 300
        });
        ref.current.appendChild(v.canvas);
        v.controls.enableZoom = true;
        v.background = "#0b0b17";
        v.fov = 60;
        v.autoRotate = true;
        viewerRef.current = v;
        updateSkin();
        const onResize = () => {
            if (!v.canvas || !ref.current)
                return;
            v.width = ref.current.clientWidth;
            v.height = 300;
        };
        window.addEventListener('resize', onResize);
        return () => { window.removeEventListener('resize', onResize); v.dispose(); };
    }, []);
    async function updateSkin() {
        const blob = await getPNG();
        const url = URL.createObjectURL(blob);
        viewerRef.current?.loadSkin(url);
        setTimeout(() => URL.revokeObjectURL(url), 5000);
    }
    useEffect(() => {
        const t = setInterval(() => { updateSkin(); }, 1000);
        return () => clearInterval(t);
    }, []);
    return _jsx("div", { ref: ref, className: "neon-card p-2" });
}
