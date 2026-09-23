import React, { useEffect, useRef } from 'react';

export const AnimatedMarsBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Twinkling stars & drifting Martian cosmic embers
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    interface Star {
      x: number;
      y: number;
      radius: number;
      alpha: number;
      baseAlpha: number;
      speedX: number;
      speedY: number;
      color: string;
      pulseSpeed: number;
      pulseVal: number;
    }

    const particles: Star[] = [];
    // Concentrate stars more on the right half where deep space is
    const count = 90;

    for (let i = 0; i < count; i++) {
      const isRedEmber = Math.random() > 0.65;
      const isGolden = Math.random() > 0.85;
      
      const color = isGolden 
        ? '255, 185, 80' 
        : isRedEmber 
        ? '255, 80, 50' 
        : '255, 255, 255';

      const baseAlpha = Math.random() * 0.6 + 0.2;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.5,
        alpha: baseAlpha,
        baseAlpha,
        speedX: -Math.random() * 0.25 - 0.05, // solar wind drifting leftward
        speedY: (Math.random() - 0.5) * 0.15,
        color,
        pulseSpeed: Math.random() * 0.04 + 0.015,
        pulseVal: Math.random() * Math.PI * 2,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.pulseVal += p.pulseSpeed;
        p.alpha = p.baseAlpha + Math.sin(p.pulseVal) * 0.25;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${Math.max(0.1, p.alpha)})`;
        ctx.fill();

        // Extra glowing corona halo for larger embers
        if (p.radius > 1.4) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.color}, ${Math.max(0.02, p.alpha * 0.2)})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
      
      {/* 1. Deep Space Black Canvas Base */}
      <div className="absolute inset-0 bg-[#060405]" />

      {/* 2. Radiant Reddish Mars Planet - High-res Crescent Image matching user upload */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Desktop / Landscape view */}
        <img
          src="/assets/images/vivid_red_mars_bright_1790135712320.jpg"
          alt="Bright Reddish Animated Mars"
          className="hidden md:block absolute w-[116%] h-[116%] -top-[8%] -left-[8%] object-cover object-left animate-mars-orbit filter brightness-115 contrast-125 saturate-135"
        />

        {/* Mobile / Vertical view */}
        <img
          src="/assets/images/vivid_red_mars_vertical_1790135730689.jpg"
          alt="Bright Reddish Animated Mars Mobile"
          className="md:hidden absolute w-[124%] h-[124%] -top-[12%] -left-[12%] object-cover object-left animate-mars-orbit filter brightness-115 contrast-125 saturate-135"
        />
      </div>

      {/* 3. Luminous Radiant Sunburst Corona along the right rim (Pulsing Animation) */}
      <div 
        className="absolute top-1/3 right-[12%] w-[600px] md:w-[950px] h-[600px] md:h-[950px] -translate-y-1/2 rounded-full pointer-events-none animate-corona-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(255, 110, 30, 0.55) 0%, rgba(240, 60, 20, 0.35) 30%, rgba(255, 160, 40, 0.15) 60%, transparent 80%)',
          filter: 'blur(45px)',
        }}
      />

      {/* Atmospheric Solar Rays shimmer */}
      <div 
        className="absolute top-1/3 right-[5%] w-[800px] h-[800px] pointer-events-none animate-solar-ray"
        style={{
          background: 'conic-gradient(from 180deg at 50% 50%, transparent 0deg, rgba(255, 180, 50, 0.25) 30deg, transparent 65deg, rgba(255, 70, 20, 0.3) 90deg, transparent 135deg)',
          filter: 'blur(35px)',
        }}
      />

      {/* Atmospheric limb glow sheen along the crescent edge */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/15 via-orange-500/10 to-transparent pointer-events-none animate-atmospheric-sheen" />

      {/* 4. Canvas Particle Layer: Floating Twinkling Stars & Reddish Solar Embers */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* 5. Minimal Atmospheric Sheen (preserving the vibrant red Mars without darkening) */}
      {/* Light warm tint overlay to accentuate the reddish Martian warmth */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-950/20 via-transparent to-red-950/15 pointer-events-none" />

      {/* Very subtle edge vignette so screen border doesn't clip harshly */}
      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/40 pointer-events-none" />
    </div>
  );
};
