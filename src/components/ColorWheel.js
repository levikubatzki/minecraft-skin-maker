import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
function hsvToRgb(h, s, v) {
    let c = v * s, x = c * (1 - Math.abs((h / 60) % 2 - 1)), m = v - c, r = 0, g = 0, b = 0;
    if (h < 60) {
        r = c;
        g = x;
    }
    else if (h < 120) {
        r = x;
        g = c;
    }
    else if (h < 180) {
        g = c;
        b = x;
    }
    else if (h < 240) {
        g = x;
        b = c;
    }
    else if (h < 300) {
        r = x;
        b = c;
    }
    else {
        r = c;
        b = x;
    }
    return [Math.round((r + m) * 255), Math.round((g + m) * 255), Math.round((b + m) * 255)];
}
const rgbToHex = (r, g, b) => '#' + [r, g, b].map(n => n.toString(16).padStart(2, '0')).join('');
export default function ColorWheel({ color, onChange }) {
    const ref = useRef(null);
    useEffect(() => {
        const c = ref.current;
        const ctx = c.getContext('2d');
        const r = c.width / 2;
        for (let y = -r; y < r; y++) {
            for (let x = -r; x < r; x++) {
                const d = Math.sqrt(x * x + y * y);
                if (d > r)
                    continue;
                let ang = Math.atan2(y, x) * 180 / Math.PI;
                if (ang < 0)
                    ang += 360;
                const sat = d / r;
                const [rr, gg, bb] = hsvToRgb(ang, sat, 1);
                const i = ((y + r) * c.width + (x + r)) * 4;
                const img = ctx.getImageData(0, 0, c.width, c.height);
            }
        }
        // faster radial draw:
        const img = ctx.createImageData(c.width, c.height);
        for (let py = 0; py < c.height; py++) {
            for (let px = 0; px < c.width; px++) {
                const dx = px - r, dy = py - r;
                const d = Math.sqrt(dx * dx + dy * dy);
                if (d > r)
                    continue;
                let ang = Math.atan2(dy, dx) * 180 / Math.PI;
                if (ang < 0)
                    ang += 360;
                const sat = d / r;
                const [rr, gg, bb] = hsvToRgb(ang, sat, 1);
                const i = (py * c.width + px) * 4;
                img.data[i] = rr;
                img.data[i + 1] = gg;
                img.data[i + 2] = bb;
                img.data[i + 3] = 255;
            }
        }
        ctx.putImageData(img, 0, 0);
    }, []);
    function pick(e) {
        const c = ref.current;
        const rect = c.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const ctx = c.getContext('2d');
        const data = ctx.getImageData(Math.floor(x), Math.floor(y), 1, 1).data;
        const hex = rgbToHex(data[0], data[1], data[2]);
        onChange(hex);
    }
    return _jsx("canvas", { ref: ref, width: 220, height: 220, className: "color-wheel neon-card", onMouseDown: pick, onMouseMove: (e) => e.buttons === 1 && pick(e) });
}
