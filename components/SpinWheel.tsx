"use client";
import { useEffect, useRef, useState } from "react";

interface Slice {
  label: string;
  color: string;
}

const DEFAULT_SLICES: Slice[] = [
  { label: "Food 🍕", color: "#7c5cfc" },
  { label: "Travel ✈️", color: "#fc5c8a" },
  { label: "Business 💡", color: "#5cf8c8" },
  { label: "Game 🎮", color: "#fcbc5c" },
  { label: "Movie 🎬", color: "#fc5c5c" },
  { label: "Random 🎲", color: "#5cb8fc" },
  { label: "Sport 🏏", color: "#bc5cfc" },
  { label: "Study 📚", color: "#5cfc7a" },
];

interface Props {
  slices?: Slice[];
}

export default function SpinWheel({ slices = DEFAULT_SLICES }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const angleRef = useRef(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState("");
  const [showToast, setShowToast] = useState(false);

  const draw = (rot: number, s: Slice[]) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const cx = 170, cy = 170, r = 155;
    const n = s.length;
    ctx.clearRect(0, 0, 340, 340);

    s.forEach((slice, i) => {
      const start = rot + i * (2 * Math.PI / n);
      const end = start + (2 * Math.PI / n);
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, r, start, end);
      ctx.closePath();
      ctx.fillStyle = slice.color;
      ctx.fill();
      ctx.strokeStyle = "rgba(10,10,15,0.5)";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(start + Math.PI / n);
      ctx.textAlign = "right";
      ctx.fillStyle = "#fff";
      ctx.font = "bold 12px DM Sans, sans-serif";
      ctx.fillText(slice.label, r - 14, 4);
      ctx.restore();
    });

    // center circle
    ctx.beginPath();
    ctx.arc(cx, cy, 28, 0, 2 * Math.PI);
    ctx.fillStyle = "#0a0a0f";
    ctx.fill();
    ctx.strokeStyle = "rgba(124,92,252,.5)";
    ctx.lineWidth = 2;
    ctx.stroke();

    // pointer triangle
    ctx.beginPath();
    ctx.moveTo(cx + r + 8, cy);
    ctx.lineTo(cx + r - 12, cy - 10);
    ctx.lineTo(cx + r - 12, cy + 10);
    ctx.closePath();
    ctx.fillStyle = "#fff";
    ctx.fill();
  };

  useEffect(() => {
    draw(angleRef.current, slices);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slices]);

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    const extra = 4 * Math.PI + Math.random() * 8 * Math.PI;
    const from = angleRef.current;
    const target = from + extra;
    const dur = 3200;
    const start = performance.now();

    const frame = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const ease = 1 - Math.pow(1 - t, 4);
      const current = from + extra * ease;
      angleRef.current = current;
      draw(current, slices);

      if (t < 1) {
        requestAnimationFrame(frame);
      } else {
        setSpinning(false);
        const norm = current % (2 * Math.PI);
        const idx = Math.floor(((2 * Math.PI - norm) / (2 * Math.PI)) * slices.length) % slices.length;
        const winner = slices[idx].label;
        setResult("🎉 " + winner);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3500);
      }
    };
    requestAnimationFrame(frame);
  };

  return (
    <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
      {showToast && (
        <div style={{
          position: "absolute",
          top: -56,
          left: "50%",
          transform: "translateX(-50%)",
          background: "var(--accent)",
          color: "#fff",
          padding: "10px 24px",
          borderRadius: "100px",
          fontWeight: 600,
          fontSize: 14,
          whiteSpace: "nowrap",
          zIndex: 10,
          animation: "fadeIn .3s ease",
        }}>
          {result}
        </div>
      )}
      <canvas
        ref={canvasRef}
        width={340}
        height={340}
        style={{ cursor: spinning ? "not-allowed" : "pointer" }}
        onClick={spin}
      />
      <button
        onClick={spin}
        disabled={spinning}
        style={{
          position: "absolute",
          width: 68,
          height: 68,
          borderRadius: "50%",
          background: "linear-gradient(135deg, var(--accent), var(--accent2))",
          border: "4px solid var(--bg)",
          color: "#fff",
          fontFamily: "'Syne', sans-serif",
          fontSize: 12,
          fontWeight: 700,
          cursor: spinning ? "not-allowed" : "pointer",
          transition: "transform .2s",
          letterSpacing: "0.05em",
        }}
        onMouseEnter={e => !spinning && ((e.target as HTMLButtonElement).style.transform = "scale(1.1)")}
        onMouseLeave={e => ((e.target as HTMLButtonElement).style.transform = "scale(1)")}
      >
        {spinning ? "..." : "SPIN!"}
      </button>
    </div>
  );
}
