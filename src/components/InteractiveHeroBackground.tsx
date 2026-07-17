import { useEffect, useRef } from 'react';

export default function InteractiveHeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000, radius: 180 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.targetX = -1000;
      mouseRef.current.targetY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseAlpha: number;
      alpha: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4 - 0.1;
        this.radius = Math.random() * 1.5 + 1;
        this.baseAlpha = Math.random() * 0.4 + 0.15;
        this.alpha = this.baseAlpha;
        
        const r = Math.random();
        if (r < 0.4) this.color = '56, 189, 248';
        else if (r < 0.8) this.color = '139, 92, 246';
        else this.color = '6, 182, 212';
      }

      update(mouseX: number, mouseY: number, mouseRadius: number) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = height;

        if (mouseX > -1000 && mouseY > -1000) {
          const dx = this.x - mouseX;
          const dy = this.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseRadius) {
            const force = (mouseRadius - dist) / mouseRadius;
            const angle = Math.atan2(dy, dx);
            this.x += Math.cos(angle) * force * 1.5;
            this.y += Math.sin(angle) * force * 1.5;
            this.alpha = Math.min(0.8, this.baseAlpha + force * 0.4);
          } else {
            this.alpha = this.baseAlpha;
          }
        } else {
          this.alpha = this.baseAlpha;
        }
      }

      draw(c: CanvasRenderingContext2D) {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = `rgba(${this.color}, ${this.alpha})`;
        c.shadowBlur = 4;
        c.shadowColor = `rgba(${this.color}, 0.5)`;
        c.fill();
        c.shadowBlur = 0;
      }
    }

    const particleCount = Math.min(80, Math.floor((width * height) / 18000));
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let blob1Angle = 0;
    let blob2Angle = Math.PI;

    const draw = () => {
      const mouse = mouseRef.current;
      if (mouse.targetX > -1000) {
        if (mouse.x === -1000) {
          mouse.x = mouse.targetX;
          mouse.y = mouse.targetY;
        } else {
          mouse.x += (mouse.targetX - mouse.x) * 0.1;
          mouse.y += (mouse.targetY - mouse.y) * 0.1;
        }
      } else {
        mouse.x = -1000;
        mouse.y = -1000;
      }

      ctx.clearRect(0, 0, width, height);

      blob1Angle += 0.0012;
      blob2Angle += 0.0008;

      const b1x = width / 2 + Math.cos(blob1Angle) * (width * 0.25);
      const b1y = height / 2 + Math.sin(blob1Angle * 1.5) * (height * 0.2);

      const b2x = width / 2 + Math.cos(blob2Angle * 1.2) * (width * 0.2);
      const b2y = height / 2 + Math.sin(blob2Angle) * (height * 0.25);

      const g1 = ctx.createRadialGradient(b1x, b1y, 50, b1x, b1y, width * 0.45);
      g1.addColorStop(0, 'rgba(6, 182, 212, 0.05)');
      g1.addColorStop(0.5, 'rgba(56, 189, 248, 0.02)');
      g1.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, width, height);

      const g2 = ctx.createRadialGradient(b2x, b2y, 50, b2x, b2y, width * 0.45);
      g2.addColorStop(0, 'rgba(139, 92, 246, 0.05)');
      g2.addColorStop(0.6, 'rgba(236, 72, 153, 0.015)');
      g2.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, width, height);

      if (mouse.x > -1000) {
        const mouseGlow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, mouse.radius);
        mouseGlow.addColorStop(0, 'rgba(56, 189, 248, 0.08)');
        mouseGlow.addColorStop(0.5, 'rgba(139, 92, 246, 0.03)');
        mouseGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = mouseGlow;
        ctx.fillRect(0, 0, width, height);
      }

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update(mouse.x, mouse.y, mouse.radius);

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = 130;
          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.12 * Math.min(p1.alpha, p2.alpha);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(148, 163, 184, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        p.draw(ctx);
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      id="hero-canvas"
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
