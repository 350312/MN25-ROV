/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { TelemetryCard } from './components/TelemetryCard';
import { FooterControls } from './components/FooterControls';
import { SiteFooter } from './components/SiteFooter';
import { GalleryModal } from './components/GalleryModal';
import { MissionDrawer } from './components/MissionDrawer';
import { SocialModal } from './components/SocialModal';
import { RoverDeepDiveSection } from './components/RoverDeepDiveSection';
import { VisionSection } from './components/VisionSection';
import { MissionSection } from './components/MissionSection';
import { TeamSection } from './components/TeamSection';
import { BangladeshTeamsSection } from './components/BangladeshTeamsSection';
import { AnimatedMarsBackground } from './components/AnimatedMarsBackground';
import { ROVER_DATA, RoverTelemetry } from './data/marsData';

export default function App() {
  const [solMode, setSolMode] = useState<'day' | 'night'>('night');
  const [currentRover, setCurrentRover] = useState<RoverTelemetry>(ROVER_DATA.perseverance);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [drawerSection, setDrawerSection] = useState<string | null>(null);
  const [activeSocialPlatform, setActiveSocialPlatform] = useState<string | null>(null);
  const [isFramedView, setIsFramedView] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  // Keyboard shortcut support (ESC to close modals)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsGalleryOpen(false);
        setDrawerSection(null);
        setActiveSocialPlatform(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHero = () => {
    if (heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-transparent flex flex-col items-center justify-start overflow-x-hidden font-sans">
      
      {/* Fixed Vivid Reddish Animated Mars Background for all sections */}
      <AnimatedMarsBackground />

      {/* View Mode Toggle Switcher (Mockup Frame vs Full Canvas Edge-to-Edge) */}
      <div className="fixed top-3 right-4 z-40 hidden sm:flex items-center gap-2 bg-black/75 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full text-xs font-mono text-slate-300 shadow-2xl">
        <span className="text-[10px] text-slate-400 uppercase">View:</span>
        <button
          onClick={() => setIsFramedView(false)}
          className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${
            !isFramedView ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold' : 'hover:text-white'
          }`}
        >
          Full Canvas
        </button>
        <span className="text-slate-600">|</span>
        <button
          onClick={() => setIsFramedView(true)}
          className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${
            isFramedView ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold' : 'hover:text-white'
          }`}
        >
          Mockup Frame
        </button>
      </div>

      {/* Outer Wrapper for Hero section (Opaque so Hero has its own video background) */}
      <div className={`relative z-10 w-full flex justify-center bg-[#030406] ${isFramedView ? 'p-3 md:p-6 lg:p-8' : 'p-0'}`}>
        
        {/* Main Hero Section Container */}
        <div
          ref={heroRef}
          className={`relative w-full overflow-hidden transition-all duration-500 flex flex-col justify-between ${
            isFramedView
              ? 'max-w-[1440px] aspect-[16/9] min-h-[640px] md:min-h-[740px] lg:min-h-[840px] rounded-2xl md:rounded-3xl border border-amber-600/40 mars-frame-glow shadow-2xl'
              : 'min-h-screen w-full rounded-none border-none'
          }`}
        >
          {/* Background Video Layer with Kling AI Watermark Eradication */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Scale video by 1.10 and offset slightly to push Kling AI watermarks outside the overflow container */}
            <video
              src="https://res.cloudinary.com/znntbref/video/upload/v1790133333/kling_20260923_VIDEO__2792_0.mp4"
              autoPlay
              loop
              muted
              playsInline
              className={`w-full h-full object-cover transform scale-[1.10] origin-center -translate-y-1 transition-all duration-700 ${
                solMode === 'day' 
                  ? 'brightness-105 contrast-105' 
                  : 'brightness-100 contrast-100'
              }`}
            />

            {/* Seamless corner gradient masks to permanently conceal any bottom-right Kling watermark artifact */}
            <div className="absolute bottom-0 right-0 w-64 h-32 bg-gradient-to-tl from-black/95 via-black/75 to-transparent pointer-events-none z-10" />
            <div className="absolute bottom-0 left-0 w-64 h-28 bg-gradient-to-tr from-black/80 to-transparent pointer-events-none z-10" />
            <div className="absolute top-0 right-0 w-48 h-24 bg-gradient-to-bl from-black/80 to-transparent pointer-events-none z-10" />
          </div>

          {/* 1. Header Zone: Reticle Logo & Navigation Pill */}
          <Header 
            activeTab={drawerSection || ''} 
            onSelectTab={(tabId) => {
              if (!tabId) {
                scrollToHero();
                return;
              }
              scrollToSection(tabId);
            }} 
          />

          {/* 2. Hero Center Zone: Headlines, CTAs, and HUD Telemetry */}
          <main className="relative z-20 flex-1 flex flex-col justify-center px-6 md:px-12 py-4 md:py-8">
            <div className="w-full flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 lg:gap-12">
              
              {/* Left Hero Narrative Block */}
              <div className="max-w-xl xl:max-w-2xl space-y-4 md:space-y-6">
                
                {/* Team MN -25 Micro Badge */}
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-amber-500/40 bg-black/70 backdrop-blur-md text-amber-300 text-xs font-mono tracking-wider shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                  <img
                    src="/assets/images/bup_mn25_logo_1790137193440.jpg"
                    alt="MN -25 Logo"
                    className="w-4 h-4 rounded-full object-cover border border-amber-500/50"
                  />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] animate-pulse" />
                  <span>MN -25 // BUP MARS ROVER TEAM</span>
                </div>

                {/* Massive Bold Headline matching reference typography */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-space font-extrabold uppercase tracking-tight text-[#f5f3ef] leading-[1.02] drop-shadow-lg">
                  <span className="block">EXPLORING</span>
                  <span className="block text-white">THE RED PLANET</span>
                </h1>

                {/* Subheading */}
                <p className="text-base sm:text-lg md:text-xl text-slate-200/90 font-normal leading-relaxed max-w-lg drop-shadow">
                  Unveiling Mars: The Latest Findings from our Robotic Missions & Team MN -25 Prototypes.
                </p>

                {/* Primary & Secondary Call to Actions matching the reference */}
                <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-5">
                  {/* Primary Button: Glowing Emerald Neon Pill -> Smooth scroll to Vision */}
                  <button
                    onClick={() => scrollToSection('vision')}
                    className="neon-glow-green neon-glow-green-hover relative px-8 py-3 rounded-full bg-emerald-500/25 border border-emerald-400 text-emerald-200 hover:text-white font-space font-bold text-sm tracking-wide transition-all duration-300 cursor-pointer active:scale-95 group flex items-center gap-2"
                  >
                    <span>Learn More</span>
                    <svg className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </button>

                  {/* Secondary Button: Outlined Glass Pill -> Opens Lightbox Gallery */}
                  <button
                    onClick={() => setIsGalleryOpen(true)}
                    className="px-8 py-3 rounded-full border border-emerald-500/40 hover:border-emerald-400 bg-black/40 hover:bg-emerald-950/40 backdrop-blur-md text-emerald-100 hover:text-white font-space font-medium text-sm tracking-wide transition-all duration-300 cursor-pointer active:scale-95 shadow-lg"
                  >
                    View Gallery
                  </button>
                </div>
              </div>

              {/* Right Telemetry HUD Panel matching reference placement */}
              <div className="w-full lg:w-auto flex justify-start lg:justify-end">
                <TelemetryCard
                  currentRover={currentRover}
                  onChangeRover={(rover) => setCurrentRover(rover)}
                  onOpenSpecs={() => setDrawerSection('LATEST')}
                />
              </div>

            </div>
          </main>

          {/* 3. Footer Zone: Controls (Sun/Moon/Audio) & Social Links */}
          <FooterControls
            solMode={solMode}
            onToggleSolMode={(mode) => setSolMode(mode)}
            onOpenSocialModal={(platform) => setActiveSocialPlatform(platform)}
          />

        </div>
      </div>

      {/* Container for all sections except hero (Transparent so the fixed animated bright reddish Mars background shows through) */}
      <div className="relative z-10 w-full bg-transparent">
        {/* 4. Vision Section: Monpura 25 Vision & Benchmark */}
        <VisionSection 
          onExploreMission={() => scrollToSection('mission')}
        />

        {/* 5. Mission Section: Monpura 25 Mandate & 3 Core Engineering Pillars */}
        <MissionSection
          onBackToTop={scrollToHero}
          onOpenGallery={() => setIsGalleryOpen(true)}
        />

        {/* 6. Team Section: Meet Team Monpura 25 Roster & Sub-Teams */}
        <TeamSection />

        {/* 7. Bonus Section: Mars Rover Teams in Bangladesh Comparison */}
        <BangladeshTeamsSection />

        {/* 8. Dedicated Science Section: "What is a Rover?" (Benefits, Innovations, and Orbit View) */}
        <RoverDeepDiveSection
          onBackToHero={scrollToHero}
          onOpenGallery={() => setIsGalleryOpen(true)}
        />

        {/* 9. Comprehensive Official Site Footer with Animated Quote, Directory & Telemetry Controls */}
        <SiteFooter
          solMode={solMode}
          onToggleSolMode={(mode) => setSolMode(mode)}
          onOpenSocialModal={(platform) => setActiveSocialPlatform(platform)}
          onOpenGallery={() => setIsGalleryOpen(true)}
          onScrollToSection={scrollToSection}
          onScrollToTop={scrollToHero}
        />
      </div>

      {/* Interactive Modals & Slide-over Drawer */}
      <GalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />

      <MissionDrawer
        isOpen={!!drawerSection}
        onClose={() => setDrawerSection(null)}
        activeSection={drawerSection || 'MISSION'}
        currentRover={currentRover}
        onChangeRover={(rover) => setCurrentRover(rover)}
      />

      <SocialModal
        platform={activeSocialPlatform}
        onClose={() => setActiveSocialPlatform(null)}
      />

    </div>
  );
}
