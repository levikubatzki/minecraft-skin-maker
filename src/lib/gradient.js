export function applyGradientToImageData(img, opt) {
    const { width, height, data } = img;
    const a = hexToRgb(opt.start);
    const b = hexToRgb(opt.end);
    const ang = (opt.angleDeg % 360) * Math.PI / 180;
    const cos = Math.cos(ang), sin = Math.sin(ang);
    const cx = width / 2, cy = height / 2;
    let minP = Infinity, maxP = -Infinity;
    for (let y = 0; y < height; y++)
        for (let x = 0; x < width; x++) {
            const px = x - cx, py = y - cy;
            const p = px * cos + py * sin;
            if (p < minP)
                minP = p;
            if (p > maxP)
                maxP = p;
        }
    const span = maxP - minP || 1;
    for (let y = 0; y < height; y++)
        for (let x = 0; x < width; x++) {
            const i = (y * width + x) * 4;
            const px = x - cx, py = y - cy;
            const t = (((px * cos + py * sin) - minP) / span);
            const [r, g, bl] = mix(a, b, t);
            if (opt.dither) {
                const bayer4 = [[0, 8, 2, 10], [12, 4, 14, 6], [3, 11, 1, 9], [15, 7, 13, 5]];
                const threshold = (bayer4[y % 4][x % 4] / 16) - 0.5;
                data[i] = clamp(r + threshold * 32);
                data[i + 1] = clamp(g + threshold * 32);
                data[i + 2] = clamp(bl + threshold * 32);
            }
            else {
                data[i] = r;
                data[i + 1] = g;
                data[i + 2] = bl;
            }
            data[i + 3] = 255;
        }
}
function hexToRgb(hex) {
    const s = hex.replace('#', '');
    const v = s.length === 3 ? s.split('').map(c => c + c).join('') : s;
    const n = parseInt(v, 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
function mix(a, b, t) {
    const cl = (x) => Math.round(x);
    return [cl(a[0] * (1 - t) + b[0] * t), cl(a[1] * (1 - t) + b[1] * t), cl(a[2] * (1 - t) + b[2] * t)];
}
function clamp(n) { return Math.max(0, Math.min(255, Math.round(n))); }
