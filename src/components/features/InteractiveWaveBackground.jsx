"use client";

import { useEffect, useRef } from "react";

export default function InteractiveWaveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener("resize", resize);
    resize();

    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.005;

      // Draw 3 subtle waves
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        // Shift waves down to bottom third
        const baseY = canvas.height * 0.7 + i * 50;
        ctx.moveTo(0, baseY);

        for (let x = 0; x < canvas.width; x++) {
          const y =
            Math.sin(x * 0.001 + time + i) * 60 +
            Math.sin(x * 0.002 + time * 1.5 + i) * 40;
          ctx.lineTo(x, baseY + y);
        }

        ctx.strokeStyle = `rgba(212, 175, 55, ${0.15 - i * 0.05})`; // Accent color
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      animationFrameId = window.requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none opacity-40 mix-blend-screen"
    />
  );
}
