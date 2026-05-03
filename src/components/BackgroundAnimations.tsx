"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useCallback, useState } from "react";

export default function BackgroundAnimations() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<
    Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      hue: number;
    }>
  >([]);
  const animationRef = useRef<number>(0);
  const [isLowPerf, setIsLowPerf] = useState(false);

  const initParticles = useCallback((width: number, height: number) => {
    const particles = [];
    const count = isLowPerf
      ? 15
      : Math.min(40, Math.floor((width * height) / 30000));
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.3,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.25 + 0.05,
        hue: Math.random() > 0.7 ? 0 : 45,
      });
    }
    return particles;
  }, [isLowPerf]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width: number, height: number;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      particlesRef.current = initParticles(width, height);
    };

    resize();
    window.addEventListener("resize", resize);

    let lastTime = 0;
    const fpsInterval = 1000 / 30;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - lastTime;

      if (elapsed > fpsInterval) {
        lastTime = currentTime - (elapsed % fpsInterval);
        ctx.clearRect(0, 0, width!, height!);

        // Only draw subtle particles
        particlesRef.current.forEach((p) => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          if (p.hue === 0) {
            ctx.fillStyle = `rgba(255, 51, 51, ${p.opacity})`;
          } else {
            ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity})`;
          }
          ctx.fill();

          p.x += p.speedX;
          p.y += p.speedY;

          if (p.x < 0 || p.x > width!) p.speedX *= -1;
          if (p.y < 0 || p.y > height!) p.speedY *= -1;
        });
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [initParticles]);

  return (
    <>
      {/* Base canvas layer */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{ opacity: 0.5 }}
      />

      {/* Simplified gradient orbs - only 2 for better performance */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)",
            left: "-10%",
            top: "-10%",
            filter: "blur(80px)",
          }}
          animate={{
            x: [0, 60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute rounded-full"
          style={{
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(255,51,51,0.04) 0%, transparent 70%)",
            right: "-8%",
            bottom: "-8%",
            filter: "blur(80px)",
          }}
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </>
  );
}
