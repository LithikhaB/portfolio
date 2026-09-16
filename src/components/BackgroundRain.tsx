"use client";

import { useEffect, useRef } from "react";

const CHARS = "01{}[]∑λ#$_<>";

export default function BackgroundRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const fontSize = 16;
    let width = 0;
    let height = 0;
    let columns = 0;
    let drops: number[] = [];
    let animationFrame: number;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width;
      canvas.height = height;

      columns = Math.floor(width / fontSize);

      drops = Array.from(
        { length: columns },
        () => Math.random() * -50
      );
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;
      ctx.fillStyle = "#7DD3FC";

      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];

        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.globalAlpha = 0.1 + Math.random() * 0.1;

        ctx.fillText(char, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = Math.random() * -20;
        }

        drops[i] += 0.4;
      }

      ctx.globalAlpha = 1;

      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}