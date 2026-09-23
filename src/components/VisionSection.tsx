import React from 'react';

interface VisionSectionProps {
  onExploreMission: () => void;
}

export const VisionSection: React.FC<VisionSectionProps> = ({ onExploreMission }) => {
  return (
    <section 
      id="vision" 
      className="relative w-full min-h-screen bg-transparent text-[#f5f3ef] overflow-hidden py-20 md:py-28 px-6 md:px-12 lg:px-16 border-t border-amber-500/20"
    >
      {/* Background Ambience & Starfield */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle orange/amber planet glow on right */}
        <div className="absolute top-1/3 -right-32 w-[650px] h-[650px] bg-red-600/10 rounded-full blur-[140px]" />
        {/* Emerald tech glow on left */}
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-emerald-500/8 rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        
        {/* Micro Telemetry Header */}
        <div className="flex items-center gap-3 border-b border-white/15 pb-5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-emerald-300 font-semibold uppercase">
            STRATEGIC DIRECTIVE // BUP MARS ROVER PROGRAM
          </span>
          <span className="text-slate-500">/</span>
          <span className="text-xs font-mono text-slate-200 font-semibold uppercase">
            MN -25 VISION STATEMENT
          </span>
        </div>

        {/* Hero Grid: Vision Statement & Floating Telemetry Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Vision Narrative */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Small emblem badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-amber-500/50 bg-black/90 text-amber-300 text-xs font-mono uppercase tracking-wider shadow-[0_0_18px_rgba(245,158,11,0.25)] font-semibold">
              <img
                src="/assets/images/bup_mn25_logo_1790137193440.jpg"
                alt="MN -25 Logo"
                className="w-4 h-4 rounded-full object-cover border border-amber-500/60"
              />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              TEAM MN -25 // BUP
            </div>

            {/* Large Gradient Headline Text */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-space font-extrabold uppercase tracking-tight text-white leading-[1.06] drop-shadow-md">
              ENGINEERING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-300 to-[#00ff9d]">
                BANGLADESH'S LEAP
              </span> <br />
              TO MARTIAN SOIL.
            </h2>

            {/* Vision Body with High Visibility */}
            <div className="space-y-4 text-base md:text-lg text-slate-100 leading-relaxed font-normal bg-black/40 backdrop-blur-md p-5 rounded-2xl border border-white/10">
              <p>
                Founded at Bangladesh University of Professionals (BUP), <strong className="text-white font-bold text-amber-300">MN -25</strong> envisions establishing Bangladesh as an indispensable frontier force in planetary robotics, building upon the storied legacy of national trailblazers like UIU UMRT, BUET Interplanetar, BRACU Mongol Tori, MIST Mongol Barota, IUT Avijatrik, GUB, and Rover 71.
              </p>
              <p>
                By relentlessly benchmarking against world-class international standards—such as Tsukuba Rover Team's advanced ROS 2 and 3D LiDAR architecture—we engineer field-hardened, mission-critical autonomous systems designed to conquer the harshest Martian terrains at the University Rover Challenge (URC) and Anatolian Rover Challenge (ARDC).
              </p>
            </div>

            {/* Bold Standalone Closing Line */}
            <div className="pt-3 border-l-2 border-emerald-400 pl-4 sm:pl-5">
              <p className="text-lg sm:text-xl md:text-2xl font-space font-bold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-white to-amber-300">
                "FROM DHAKA TO JEZERO: WE DO NOT JUST COMPETE; WE PIONEER."
              </p>
            </div>

            {/* Action Pill */}
            <div className="pt-2">
              <button
                onClick={onExploreMission}
                className="neon-glow-green relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-emerald-500/25 border border-emerald-400 text-emerald-200 hover:text-white font-space font-bold text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer active:scale-95"
              >
                <span>Explore Rover Architecture</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>

          </div>

          {/* Right Column: Floating Telemetry Card with Rover CAD Render */}
          <div className="lg:col-span-5 relative group">
            
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500/30 to-amber-500/40 rounded-3xl blur-2xl opacity-40 group-hover:opacity-75 transition duration-700 pointer-events-none" />

            <div className="relative rounded-2xl md:rounded-3xl border border-emerald-500/40 bg-black/80 backdrop-blur-xl overflow-hidden shadow-2xl">
              
              {/* Orbital Telemetry Micro-Bar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-slate-950/90 text-[11px] font-mono">
                <div className="flex items-center gap-2 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="tracking-wider">ORBITAL ALTITUDE: 385 KM // JEZERO DELTA APEX</span>
                </div>
                <span className="text-slate-400 font-bold">SOL 041</span>
              </div>

              {/* Rover CAD Image */}
              <div className="relative aspect-[4/3] bg-black overflow-hidden flex items-center justify-center">
                <img
                  src="/assets/images/monpura25_cad_sample_1790136646700.jpg"
                  alt="Monpura 25 Rover Prototype CAD Render from Design Sample Slide 15"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* HUD Scanline & Crosshair Grid */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />
                
                {/* Micro Reticle Badges */}
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-emerald-500/30 text-[10px] font-mono text-emerald-300">
                  TARGET: URC / ARDC 2025
                </div>

                <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-amber-500/30 text-[10px] font-mono text-amber-300">
                  CHASSIS: 6061-T6 ALLOY
                </div>
              </div>

              {/* Mission Log Caption Block */}
              <div className="p-5 md:p-6 space-y-2.5 bg-slate-950/95 border-t border-white/15">
                <div className="flex items-center justify-between text-[11px] font-mono text-emerald-300">
                  <span className="uppercase tracking-widest font-semibold">MISSION LOG // BENCHMARK VERIFIED</span>
                  <span className="text-slate-300 font-medium">BUP LAB PROTOCOL</span>
                </div>

                <h3 className="text-base font-space font-bold text-white tracking-wide">
                  MN -25 Generation-III Surface Scout
                </h3>

                <p className="text-xs text-slate-100 leading-relaxed font-mono">
                  Integrated with ROS 2 Foxy stack, 16-channel 3D Velodyne LiDAR, and custom 5-DOF cycloidal robotic manipulator. Benchmarked against high-performance Japanese and American rover architectures.
                </p>

                <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-slate-300 border-t border-white/15">
                  <span className="font-semibold text-slate-200">AUTONOMOUS STACK: ONLINE</span>
                  <span className="text-emerald-300 font-bold">READINESS: T-MINUS ARDC</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
