import { useEffect, useRef, useCallback } from 'react';

interface WavesProps {
  lineColor?: string;
  backgroundColor?: string;
  waveSpeedX?: number;
  waveSpeedY?: number;
  waveAmpX?: number;
  waveAmpY?: number;
  xGap?: number;
  yGap?: number;
  friction?: number;
  tension?: number;
  maxCursorMove?: number;
}

// Perlin noise implementation
class Grad {
  x: number;
  y: number;
  z: number;
  
  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  
  dot2(x: number, y: number): number {
    return this.x * x + this.y * y;
  }
}

const grad3 = [
  new Grad(1, 1, 0), new Grad(-1, 1, 0), new Grad(1, -1, 0), new Grad(-1, -1, 0),
  new Grad(1, 0, 1), new Grad(-1, 0, 1), new Grad(1, 0, -1), new Grad(-1, 0, -1),
  new Grad(0, 1, 1), new Grad(0, -1, 1), new Grad(0, 1, -1), new Grad(0, -1, -1)
];

const p = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225,
  140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120,
  234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88,
  237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139,
  48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105,
  92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73,
  209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86,
  164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38,
  147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189,
  28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101,
  155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232,
  178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12,
  191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31,
  181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254,
  138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215,
  61, 156, 180];

const perm = new Array(512);
const gradP = new Array(512);

function seed(seedValue: number) {
  if (seedValue > 0 && seedValue < 1) {
    seedValue *= 65536;
  }
  seedValue = Math.floor(seedValue);
  if (seedValue < 256) {
    seedValue |= seedValue << 8;
  }
  for (let i = 0; i < 256; i++) {
    let v;
    if (i & 1) {
      v = p[i] ^ (seedValue & 255);
    } else {
      v = p[i] ^ ((seedValue >> 8) & 255);
    }
    perm[i] = perm[i + 256] = v;
    gradP[i] = gradP[i + 256] = grad3[v % 12];
  }
}

seed(Math.random());

function fade(t: number): number {
  return t * t * t * (t * (t * 6 - 15) + 10);
}

function lerp(a: number, b: number, t: number): number {
  return (1 - t) * a + t * b;
}

function perlin2(x: number, y: number): number {
  let X = Math.floor(x);
  let Y = Math.floor(y);
  x = x - X;
  y = y - Y;
  X = X & 255;
  Y = Y & 255;

  const n00 = gradP[X + perm[Y]].dot2(x, y);
  const n01 = gradP[X + perm[Y + 1]].dot2(x, y - 1);
  const n10 = gradP[X + 1 + perm[Y]].dot2(x - 1, y);
  const n11 = gradP[X + 1 + perm[Y + 1]].dot2(x - 1, y - 1);

  const u = fade(x);
  return lerp(lerp(n00, n10, u), lerp(n01, n11, u), fade(y));
}

interface Point {
  x: number;
  y: number;
  wave: { x: number; y: number };
  cursor: { x: number; y: number; vx: number; vy: number };
}

const WavesBackground = ({
  lineColor = 'rgba(0, 0, 0, 0.08)',
  backgroundColor = 'transparent',
  waveSpeedX = 0.02,
  waveSpeedY = 0.01,
  waveAmpX = 40,
  waveAmpY = 20,
  xGap = 12,
  yGap = 36,
  friction = 0.9,
  tension = 0.01,
  maxCursorMove = 120,
}: WavesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const boundingRef = useRef({ width: 0, height: 0, left: 0, top: 0 });
  const noiseRef = useRef(0);
  const pointsRef = useRef<Point[][]>([]);
  const mouseRef = useRef({ x: 9999, y: 9999, lx: 0, ly: 0 });
  const rafRef = useRef<number>();

  const initPoints = useCallback(() => {
    const points: Point[][] = [];
    const { width, height } = boundingRef.current;
    const rows = Math.ceil(height / yGap) + 1;
    const cols = Math.ceil(width / xGap) + 1;

    for (let y = 0; y <= rows; y++) {
      const row: Point[] = [];
      for (let x = 0; x <= cols; x++) {
        row.push({
          x: x * xGap,
          y: y * yGap,
          wave: { x: 0, y: 0 },
          cursor: { x: 0, y: 0, vx: 0, vy: 0 },
        });
      }
      points.push(row);
    }
    pointsRef.current = points;
  }, [xGap, yGap]);

  const updatePoints = useCallback(() => {
    const points = pointsRef.current;
    const mouse = mouseRef.current;

    for (let y = 0; y < points.length; y++) {
      const row = points[y];
      for (let x = 0; x < row.length; x++) {
        const point = row[x];
        const nX = point.x * 0.006;
        const nY = point.y * 0.006;
        const noise = perlin2(nX + noiseRef.current * waveSpeedX, nY + noiseRef.current * waveSpeedY);

        point.wave.x = Math.cos(noise * Math.PI * 2) * waveAmpX;
        point.wave.y = Math.sin(noise * Math.PI * 2) * waveAmpY;

        const dx = mouse.x - point.x;
        const dy = mouse.y - point.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 150;

        if (dist < maxDist) {
          const intensity = (1 - dist / maxDist) * maxCursorMove;
          const ax = dx / dist || 0;
          const ay = dy / dist || 0;
          point.cursor.vx += (ax * intensity - point.cursor.x) * tension;
          point.cursor.vy += (ay * intensity - point.cursor.y) * tension;
        }

        point.cursor.vx *= friction;
        point.cursor.vy *= friction;
        point.cursor.x += point.cursor.vx;
        point.cursor.y += point.cursor.vy;
        point.cursor.x = Math.max(-maxCursorMove, Math.min(maxCursorMove, point.cursor.x));
        point.cursor.y = Math.max(-maxCursorMove, Math.min(maxCursorMove, point.cursor.y));
      }
    }
    noiseRef.current += 0.004;
  }, [waveSpeedX, waveSpeedY, waveAmpX, waveAmpY, friction, tension, maxCursorMove]);

  const drawLines = useCallback(() => {
    const ctx = ctxRef.current;
    if (!ctx) return;

    const points = pointsRef.current;
    const { width, height } = boundingRef.current;

    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = 1;

    for (let y = 0; y < points.length; y++) {
      const row = points[y];
      for (let x = 0; x < row.length - 1; x++) {
        const curr = row[x];
        const next = row[x + 1];

        const currX = curr.x + curr.wave.x + curr.cursor.x;
        const currY = curr.y + curr.wave.y + curr.cursor.y;
        const nextX = next.x + next.wave.x + next.cursor.x;
        const nextY = next.y + next.wave.y + next.cursor.y;

        ctx.moveTo(currX, currY);
        ctx.lineTo(nextX, nextY);
      }
    }

    ctx.stroke();
  }, [lineColor]);

  const tick = useCallback(() => {
    updatePoints();
    drawLines();
    rafRef.current = requestAnimationFrame(tick);
  }, [updatePoints, drawLines]);

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const rect = parent.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(dpr, dpr);
      ctxRef.current = ctx;
    }

    boundingRef.current = {
      width: rect.width,
      height: rect.height,
      left: rect.left,
      top: rect.top,
    };

    initPoints();
  }, [initPoints]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const { left, top } = boundingRef.current;
    mouseRef.current.x = e.clientX - left;
    mouseRef.current.y = e.clientY - top;
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current.x = 9999;
    mouseRef.current.y = 9999;
  }, []);

  useEffect(() => {
    resize();
    tick();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [resize, tick, handleMouseMove, handleMouseLeave]);

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ backgroundColor }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  );
};

export default WavesBackground;
