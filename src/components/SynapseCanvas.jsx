import React, { useEffect, useRef } from 'react';

/**
 * SynapseCanvas - Neural Network / Particle Connection Effect
 * Optimized for Mockup B: Minimalist engineering aesthetic, non-intrusive readability,
 * Retina HiDPI support, mobile-friendly particle scaling, and energy-efficient RAF loops.
 */
export default function SynapseCanvas({ 
  theme = 'dark', 
  className = '',
  opacity = null,
  accentColor = '255, 85, 0' 
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let isVisible = true;

    // Viewport & DPI Sizing
    let displayWidth = canvas.parentElement ? canvas.parentElement.offsetWidth : window.innerWidth;
    let displayHeight = canvas.parentElement ? canvas.parentElement.offsetHeight : window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const setupCanvasSize = () => {
      if (!canvas.parentElement) return;
      displayWidth = canvas.parentElement.offsetWidth;
      displayHeight = canvas.parentElement.offsetHeight;
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    setupCanvasSize();

    // Responsive configuration
    const isMobile = displayWidth < 768;
    const isTablet = displayWidth >= 768 && displayWidth < 1024;
    
    // Scale node count to prevent cluttering Hero text
    let targetNodeCount;
    let maxConnectDist;
    let maxSpeed;

    if (isMobile) {
      targetNodeCount = 16;
      maxConnectDist = 80;
      maxSpeed = 0.3;
    } else if (isTablet) {
      targetNodeCount = 26;
      maxConnectDist = 110;
      maxSpeed = 0.4;
    } else {
      const calculated = Math.floor((displayWidth * displayHeight) / 24000);
      targetNodeCount = Math.min(Math.max(calculated, 30), 55);
      maxConnectDist = 130;
      maxSpeed = 0.55;
    }

    const nodes = [];
    for (let i = 0; i < targetNodeCount; i++) {
      nodes.push({
        x: Math.random() * displayWidth,
        y: Math.random() * displayHeight,
        vx: (Math.random() - 0.5) * maxSpeed,
        vy: (Math.random() - 0.5) * maxSpeed,
        radius: isMobile ? (Math.random() * 1.2 + 1) : (Math.random() * 1.8 + 1.2),
        baseAlpha: Math.random() * 0.4 + 0.25
      });
    }

    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      setupCanvasSize();
    };

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible) {
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(render);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Delta-time based animation loop
    let lastTime = performance.now();

    const render = (time) => {
      if (!isVisible) return;

      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      ctx.clearRect(0, 0, displayWidth, displayHeight);

      // Light vs Dark tone tuning: Light mode requires softer alphas to preserve text contrast
      const isDark = theme === 'dark';
      const lineMultiplier = isDark ? 0.22 : 0.14;
      const mouseMultiplier = isDark ? 0.6 : 0.4;
      const nodeAlphaScale = isDark ? 1 : 0.75;

      // Update & Draw Nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        node.x += node.vx * (dt * 60);
        node.y += node.vy * (dt * 60);

        // Boundary bounce
        if (node.x <= 0) { node.x = 0; node.vx = Math.abs(node.vx); }
        else if (node.x >= displayWidth) { node.x = displayWidth; node.vx = -Math.abs(node.vx); }
        if (node.y <= 0) { node.y = 0; node.vy = Math.abs(node.vy); }
        else if (node.y >= displayHeight) { node.y = displayHeight; node.vy = -Math.abs(node.vy); }

        // Render node dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${accentColor}, ${node.baseAlpha * nodeAlphaScale})`;
        ctx.fill();

        // Connect with nearby neighbors
        for (let j = i + 1; j < nodes.length; j++) {
          const node2 = nodes[j];
          const dx = node.x - node2.x;
          const dy = node.y - node2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            const alpha = (1 - dist / maxConnectDist) * lineMultiplier;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(node2.x, node2.y);
            ctx.strokeStyle = `rgba(${accentColor}, ${alpha})`;
            ctx.lineWidth = isMobile ? 0.6 : 0.75;
            ctx.stroke();
          }
        }

        // Mouse interaction (Desktop only)
        if (!isMobile) {
          const mdx = node.x - mouse.x;
          const mdy = node.y - mouse.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mDist < 140) {
            const mAlpha = (1 - mDist / 140) * mouseMultiplier;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(${accentColor}, ${mAlpha})`;
            ctx.lineWidth = 1.0;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme, accentColor]);

  // Default calibrated opacities
  const defaultOpacity = theme === 'dark' ? 'opacity-30' : 'opacity-20';
  const resolvedOpacity = opacity ? `opacity-[${opacity}]` : defaultOpacity;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none z-0 transition-opacity duration-500 ${resolvedOpacity} ${className}`}
    />
  );
}
