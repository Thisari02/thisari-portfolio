import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const mouse = { x: -100, y: -100, targetX: -100, targetY: -100 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX - 4}px, ${e.clientY - 4}px, 0)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[role="button"]') ||
        target.closest('.interactive-card');

      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    let animationFrameId: number;
    const animateRing = () => {
      if (mouse.x === -100) {
        mouse.x = mouse.targetX;
        mouse.y = mouse.targetY;
      } else {
        mouse.x += (mouse.targetX - mouse.x) * 0.15;
        mouse.y += (mouse.targetY - mouse.y) * 0.15;
      }

      if (ringRef.current) {
        const sizeOffset = isHovering ? 24 : 16;
        ringRef.current.style.transform = `translate3d(${mouse.x - sizeOffset}px, ${mouse.y - sizeOffset}px, 0) scale(${isHovering ? 1.5 : 1})`;
        ringRef.current.style.borderColor = isHovering ? 'rgba(139, 92, 246, 0.8)' : 'rgba(56, 189, 248, 0.5)';
        ringRef.current.style.backgroundColor = isHovering ? 'rgba(139, 92, 246, 0.05)' : 'transparent';
      }

      animationFrameId = requestAnimationFrame(animateRing);
    };

    animateRing();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovering]);

  if (!isVisible) return null;

  return (
    <>
      <div
        id="cursor-dot"
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-sky-400 pointer-events-none z-50 transition-opacity duration-300 shadow-[0_0_8px_rgba(56,189,248,0.8)]"
      />
      <div
        id="cursor-ring"
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-sky-400/50 pointer-events-none z-50 transition-all duration-300 ease-out shadow-[0_0_12px_rgba(56,189,248,0.15)]"
        style={{ width: isHovering ? '48px' : '32px', height: isHovering ? '48px' : '32px' }}
      />
    </>
  );
}
