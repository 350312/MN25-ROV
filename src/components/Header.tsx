import React from 'react';

interface HeaderProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onSelectTab }) => {
  const navItems = [
    { label: 'VISION', id: 'vision' },
    { label: 'MISSION', id: 'mission' },
    { label: 'TEAM', id: 'team' },
    { label: 'WHAT IS ROVER?', id: 'what-is-rover' },
  ];

  return (
    <header className="relative z-30 w-full flex items-center justify-between px-6 md:px-12 pt-6 md:pt-8">
      {/* Brand / Logo Lockup */}
      <button 
        onClick={() => onSelectTab('')}
        className="group flex items-center gap-3.5 md:gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-xl p-1 transition-transform active:scale-98 cursor-pointer"
      >
        {/* Reticle Target Frame with Bigger MN -25 Emblem */}
        <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shrink-0">
          {/* Reticle corner marks */}
          <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-slate-300 group-hover:border-amber-400 transition-colors" />
          <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-slate-300 group-hover:border-amber-400 transition-colors" />
          <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-slate-300 group-hover:border-amber-400 transition-colors" />
          <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-slate-300 group-hover:border-amber-400 transition-colors" />
          
          {/* Circular MN -25 Logo Emblem from Uploaded Badge */}
          <div className="w-11 h-11 md:w-13 md:h-13 rounded-full border-2 border-amber-500/80 bg-black overflow-hidden relative shadow-[0_0_18px_rgba(245,158,11,0.5)]">
            <img
              src="/assets/images/bup_mn25_logo_1790137193440.jpg"
              alt="BUP Mars Rover MN -25 Logo"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Text Wordmark: "BUP MARS ROVER TEAM" */}
        <div className="flex flex-col tracking-wider leading-tight text-left">
          <span className="text-white font-space font-extrabold text-sm sm:text-base md:text-lg tracking-wider group-hover:text-amber-400 transition-colors uppercase drop-shadow">
            BUP MARS ROVER TEAM
          </span>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-amber-400 font-mono text-[11px] sm:text-xs font-extrabold tracking-widest">
              MN -25
            </span>
            <span className="text-slate-500 text-xs">•</span>
            <span className="text-emerald-400 text-[10px] sm:text-[11px] tracking-widest font-mono font-semibold">
              EXPEDITION
            </span>
          </div>
        </div>
      </button>

      {/* Nav Pill Container matching the reference image */}
      <nav 
        aria-label="Main navigation" 
        className="hidden md:flex items-center px-5 py-2 rounded-full border border-white/15 bg-black/40 backdrop-blur-md shadow-lg"
      >
        <div className="flex items-center gap-5 lg:gap-7 text-xs font-space font-medium tracking-wider uppercase">
          {navItems.map((item) => {
            const isActive = activeTab.toLowerCase() === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`transition-all duration-200 whitespace-nowrap focus:outline-none focus-visible:text-emerald-300 cursor-pointer ${
                  isActive 
                    ? 'text-[#00ff9d] font-semibold drop-shadow-[0_0_8px_rgba(0,255,157,0.5)]' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Direct In-App Download Button */}
      <div className="flex items-center gap-2.5">
        <a
          href="/mn25.zip"
          download="mn25.zip"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/50 bg-emerald-950/70 hover:bg-emerald-800/80 text-emerald-300 hover:text-white font-mono text-xs transition-all shadow-[0_0_12px_rgba(0,255,157,0.25)] cursor-pointer"
          title="Download full project code as ZIP"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span className="font-semibold">DOWNLOAD ZIP</span>
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => onSelectTab(activeTab ? '' : 'vision')}
            className="p-2.5 rounded-full border border-white/20 bg-black/50 text-slate-200 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};