"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useCallback } from "react";

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

  const initParticles = useCallback((width: number, height: number) => {
    const particles = [];
    const count = Math.min(50, Math.floor((width * height) / 25000));
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.3,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.35 + 0.05,
        hue: Math.random() > 0.7 ? 0 : 45,
      });
    }
    return particles;
  }, []);

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

    const animate = () => {
      ctx.clearRect(0, 0, width!, height!);

      // Draw grid lines (subtle)
      ctx.strokeStyle = "rgba(212, 175, 55, 0.015)";
      ctx.lineWidth = 0.5;
      const gridSize = 80;
      for (let x = 0; x < width!; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height!);
        ctx.stroke();
      }
      for (let y = 0; y < height!; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width!, y);
        ctx.stroke();
      }

      // Animate particles
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

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

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
        style={{ opacity: 0.7 }}
      />

      {/* Layer 1: Large gradient orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Gold orb top-left */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(212,175,55,0.07) 0%, rgba(212,175,55,0.03) 40%, transparent 70%)",
            left: "-10%",
            top: "-10%",
            filter: "blur(80px)",
          }}
          animate={{
            x: [0, 80, 0],
            y: [0, 60, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Red accent orb bottom-right */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(255,51,51,0.05) 0%, rgba(255,51,51,0.02) 40%, transparent 70%)",
            right: "-8%",
            bottom: "-8%",
            filter: "blur(80px)",
          }}
          animate={{
            x: [0, -60, 0],
            y: [0, -40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Center gold orb */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            filter: "blur(60px)",
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Accent orb mid-right */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "350px",
            height: "350px",
            background:
              "radial-gradient(circle, rgba(184,134,11,0.05) 0%, transparent 70%)",
            right: "20%",
            top: "30%",
            filter: "blur(70px)",
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Subtle moving light streak */}
        <motion.div
          className="absolute h-px"
          style={{
            width: "40%",
            background:
              "linear-gradient(90deg, transparent, rgba(212,175,55,0.1), transparent)",
            top: "35%",
            left: "30%",
          }}
          animate={{
            x: [-100, 100, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Secondary light streak */}
        <motion.div
          className="absolute w-px"
          style={{
            height: "30%",
            background:
              "linear-gradient(180deg, transparent, rgba(212,175,55,0.08), transparent)",
            left: "60%",
            top: "20%",
          }}
          animate={{
            y: [-50, 50, -50],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Noise texture overlay */}
      <div
        className="fixed inset-0 -z-5 pointer-events-none"
        style={{
          opacity: 0.025,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </>
  );
}
