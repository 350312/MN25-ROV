import React, { useState, useEffect } from 'react';
import { marsAudio } from '../utils/marsAudio';

interface SiteFooterProps {
  solMode: 'day' | 'night';
  onToggleSolMode: (mode: 'day' | 'night') => void;
  onOpenSocialModal: (platform: string) => void;
  onOpenGallery: () => void;
  onScrollToSection: (sectionId: string) => void;
  onScrollToTop: () => void;
}

export const SiteFooter: React.FC<SiteFooterProps> = ({
  solMode,
  onToggleSolMode,
  onOpenSocialModal,
  onOpenGallery,
  onScrollToSection,
  onScrollToTop,
}) => {
  const [audioActive, setAudioActive] = useState(false);

  useEffect(() => {
    return () => {
      marsAudio.stop();
    };
  }, []);

  const handleToggleAudio = () => {
    const active = marsAudio.toggle();
    setAudioActive(active);
  };

  return (
    <footer className="relative w-full bg-[#07090e] border-t border-amber-500/30 text-white overflow-hidden pt-16 md:pt-24 pb-12 px-6 md:px-12 lg:px-16 z-20">
      {/* Background Ambient Cosmic Nebulae */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-gradient-to-r from-red-600/15 via-amber-500/15 to-[#00ff9d]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-red-600/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-amber-500/10 rounded-full blur-[160px]" />
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-16 md:space-y-20">
        
        {/* ================================================================ */}
        {/* 1. HERO ANIMATED QUOTE SHOWCASE (HIGH VISIBILITY & COLOR GRADIENT) */}
        {/* ================================================================ */}
        <div className="relative mx-auto max-w-5xl group">
          {/* Ambient Multi-Hue Pulsing Glow behind Quote */}
          <div className="absolute -inset-4 bg-gradient-to-r from-red-600/30 via-amber-500/25 to-[#00ff9d]/25 rounded-3xl blur-2xl opacity-80 group-hover:opacity-100 transition duration-700 pointer-events-none animate-pulse" />

          {/* Main Card with Animated Border */}
          <div className="relative rounded-3xl bg-[#0b0f19]/95 border-2 border-amber-500/40 animate-quote-border backdrop-blur-2xl p-8 sm:p-10 md:p-14 shadow-[0_0_60px_rgba(245,158,11,0.25)] text-center space-y-6 overflow-hidden">
            
            {/* Top Micro-HUD Bar */}
            <div className="flex items-center justify-between border-b border-white/15 pb-4 text-xs font-mono">
              <div className="flex items-center gap-2 text-amber-300">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                <span className="tracking-widest uppercase font-semibold">
                  EXPEDITION MOTTO // BUP MARS ROVER PROGRAM
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-emerald-400 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>CODENAME: MN -25</span>
              </div>
            </div>

            {/* Corner Reticle Accents */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-amber-400 pointer-events-none" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-amber-400 pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-emerald-400 pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-emerald-400 pointer-events-none" />

            {/* Large Decorative Quote Marks & Animated Gradient Quote */}
            <div className="relative py-2 sm:py-4">
              <span className="select-none font-serif text-5xl sm:text-6xl md:text-7xl text-amber-400/30 absolute -top-4 sm:-top-6 left-0 sm:left-4">
                “
              </span>

              <blockquote className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-space font-extrabold tracking-tight leading-[1.25] sm:leading-[1.2] px-4 sm:px-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d2d] via-[#f59e0b] via-[#ffffff] to-[#00ff9d] animate-shimmer-flow animate-quote-glow inline-block">
                  "The red sands of Mars await the innovation driven by BUP's finest minds."
                </span>
              </blockquote>

              <span className="select-none font-serif text-5xl sm:text-6xl md:text-7xl text-emerald-400/30 absolute -bottom-8 sm:-bottom-10 right-0 sm:right-4">
                ”
              </span>
            </div>

            {/* Attribution with BUP MN -25 Circular Emblem */}
            <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <div className="w-10 h-10 rounded-full border-2 border-amber-500/80 p-0.5 bg-black shadow-[0_0_15px_rgba(245,158,11,0.5)] shrink-0">
                <img
                  src="/assets/images/bup_mn25_logo_1790137193440.jpg"
                  alt="BUP Mars Rover MN -25 Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div className="text-center sm:text-left">
                <div className="font-space font-bold text-sm sm:text-base text-white tracking-wider uppercase">
                  TEAM MN -25 // BANGLADESH UNIVERSITY OF PROFESSIONALS (BUP)
                </div>
                <div className="text-xs font-mono text-emerald-400 mt-0.5">
                  FACULTY OF SCIENCE & TECHNOLOGY • INTERPLANETARY ROBOTICS INITIATIVE
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ================================================================ */}
        {/* 2. COMPREHENSIVE HIGH-VISIBILITY FOOTER DIRECTORY & CONTROLS    */}
        {/* ================================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pt-8 border-t border-white/15">
          
          {/* Column 1: Brand & Synopsis (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full border-2 border-amber-500 bg-black overflow-hidden shadow-[0_0_15px_rgba(245,158,11,0.4)]">
                <img
                  src="/assets/images/bup_mn25_logo_1790137193440.jpg"
                  alt="MN -25 Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-space font-extrabold text-base tracking-wider text-white">
                  MN -25 <span className="text-amber-400">MARS ROVER</span>
                </div>
                <div className="text-xs font-mono text-emerald-400 font-semibold tracking-wider">
                  BUP // EXPEDITION CORPS
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-200 leading-relaxed font-normal">
              Representing Bangladesh University of Professionals on the global stage. Engineering autonomous rocker-bogie planetary explorers, 5-DOF cycloidal robotic manipulators, and real-time ROS 2 neural costmapping stacks for URC and ARDC.
            </p>

            {/* University Coordinates Tag */}
            <div className="p-3 rounded-xl bg-black/60 border border-white/15 space-y-1 text-xs font-mono">
              <div className="text-slate-300 uppercase tracking-wider flex items-center justify-between">
                <span>HEADQUARTERS</span>
                <span className="text-emerald-400 font-bold">● ACTIVE LAB</span>
              </div>
              <div className="text-white font-semibold">
                Bangladesh University of Professionals (BUP)
              </div>
              <div className="text-amber-300">
                23.8103° N, 90.4125° E • Mirpur Cantonment, Dhaka
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>EXPLORATION DIRECTORY</span>
            </div>

            <ul className="space-y-2.5 text-sm font-space">
              <li>
                <button
                  onClick={onScrollToTop}
                  className="text-slate-200 hover:text-[#00ff9d] transition-colors flex items-center gap-2 cursor-pointer font-medium"
                >
                  <span className="text-emerald-400 font-mono text-xs">01</span>
                  <span>Surface Hero View</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('vision')}
                  className="text-slate-200 hover:text-[#00ff9d] transition-colors flex items-center gap-2 cursor-pointer font-medium"
                >
                  <span className="text-emerald-400 font-mono text-xs">02</span>
                  <span>Vision & Strategic Directive</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('mission')}
                  className="text-slate-200 hover:text-[#00ff9d] transition-colors flex items-center gap-2 cursor-pointer font-medium"
                >
                  <span className="text-emerald-400 font-mono text-xs">03</span>
                  <span>Tactical Execution & Pillars</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('team')}
                  className="text-slate-200 hover:text-[#00ff9d] transition-colors flex items-center gap-2 cursor-pointer font-medium"
                >
                  <span className="text-emerald-400 font-mono text-xs">04</span>
                  <span>BUP Mars Rover Science Team</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('what-is-rover')}
                  className="text-slate-200 hover:text-[#00ff9d] transition-colors flex items-center gap-2 cursor-pointer font-medium"
                >
                  <span className="text-emerald-400 font-mono text-xs">05</span>
                  <span>What is a Rover? Science Hub</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenGallery}
                  className="text-amber-300 hover:text-white transition-colors flex items-center gap-2 cursor-pointer font-medium"
                >
                  <span className="text-amber-400 font-mono text-xs">06</span>
                  <span>Mars Telemetry Gallery (9 Transmissions)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Telemetry Controls & Audio (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-5">
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>SIMULATION & SENSORS</span>
            </div>

            {/* Sol Day/Night Switcher */}
            <div className="p-3.5 rounded-2xl bg-black/60 border border-white/15 space-y-2">
              <div className="text-xs font-mono text-slate-300 uppercase">
                Martian Sol Illumination:
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => onToggleSolMode('day')}
                  className={`py-2 px-3 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    solMode === 'day'
                      ? 'bg-amber-500/30 text-amber-300 border border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-transparent'
                  }`}
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2" />
                  </svg>
                  <span>DAY SOL</span>
                </button>

                <button
                  onClick={() => onToggleSolMode('night')}
                  className={`py-2 px-3 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    solMode === 'night'
                      ? 'bg-cyan-500/30 text-cyan-300 border border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-transparent'
                  }`}
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                  </svg>
                  <span>NIGHT SOL</span>
                </button>
              </div>
            </div>

            {/* Audio Wind Synthesizer */}
            <div className="p-3.5 rounded-2xl bg-black/60 border border-white/15 flex items-center justify-between">
              <div>
                <div className="text-xs font-mono text-slate-300 uppercase">
                  SuperCam Audio Wind:
                </div>
                <div className="text-[11px] font-mono text-emerald-400 font-semibold mt-0.5">
                  {audioActive ? 'MARTIAN WIND SYNTH: ON' : 'ATMOSPHERIC AUDIO: MUTED'}
                </div>
              </div>

              <button
                onClick={handleToggleAudio}
                className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                  audioActive
                    ? 'bg-emerald-500/30 border-emerald-400 text-emerald-300 shadow-[0_0_15px_rgba(0,255,157,0.4)]'
                    : 'bg-white/5 border-white/15 text-slate-300 hover:text-white hover:bg-white/10'
                }`}
                title="Toggle Martian Atmosphere Audio"
              >
                {audioActive ? (
                  <svg className="w-5 h-5 text-emerald-400 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <line x1="23" y1="9" x2="17" y2="15" />
                    <line x1="17" y1="9" x2="23" y2="15" />
                  </svg>
                )}
              </button>
            </div>

            {/* Back to Top Quick Action */}
            <button
              onClick={onScrollToTop}
              className="w-full py-2.5 px-4 rounded-xl border border-white/15 bg-white/5 hover:bg-emerald-500/20 hover:border-emerald-400 hover:text-emerald-300 text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Back to Surface Top</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>

          {/* Column 4: Social Channels & Competitions (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>COMMUNICATION</span>
            </div>

            {/* Social Buttons */}
            <div className="flex flex-col gap-2">
              <button
                onClick={() => onOpenSocialModal('X / Twitter')}
                className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/15 hover:border-white text-xs font-mono text-slate-200 hover:text-white flex items-center justify-between transition-colors cursor-pointer"
              >
                <span>X / Twitter</span>
                <span className="text-slate-400">↗</span>
              </button>
              <button
                onClick={() => onOpenSocialModal('Facebook')}
                className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/15 hover:border-[#1877f2] text-xs font-mono text-slate-200 hover:text-white flex items-center justify-between transition-colors cursor-pointer"
              >
                <span>Facebook</span>
                <span className="text-slate-400">↗</span>
              </button>
              <button
                onClick={() => onOpenSocialModal('LinkedIn')}
                className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/15 hover:border-[#0a66c2] text-xs font-mono text-slate-200 hover:text-white flex items-center justify-between transition-colors cursor-pointer"
              >
                <span>LinkedIn</span>
                <span className="text-slate-400">↗</span>
              </button>
            </div>

            {/* Target Arena Badges */}
            <div className="pt-2 space-y-2">
              <div className="text-[10px] font-mono uppercase text-slate-400">
                Target Arenas:
              </div>
              <div className="flex flex-wrap gap-1.5 text-[10px] font-mono">
                <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-300">
                  URC 2025 (USA)
                </span>
                <span className="px-2 py-0.5 rounded bg-amber-950/80 border border-amber-500/40 text-amber-300">
                  ARDC 2025 (TURKEY)
                </span>
                <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyan-300">
                  ERC (POLAND)
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* ================================================================ */}
        {/* 3. SUB-FOOTER PROTOCOL & RIGHTS BAR                              */}
        {/* ================================================================ */}
        <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>MN -25 PROTOCOL // ALL SYSTEMS NOMINAL</span>
          </div>

          <div className="text-center sm:text-right">
            © {new Date().getFullYear()} Team MN -25 • Bangladesh University of Professionals (BUP). All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
