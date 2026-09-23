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
    { label: 'BD TEAMS', id: 'bangladesh-teams' },
    { label: 'WHAT IS ROVER?', id: 'what-is-rover' },
  ];

  return (
    <header className="relative z-30 w-full flex items-center justify-between px-6 md:px-12 pt-6 md:pt-8">
      {/* Brand / Logo Lockup */}
      <button 
        onClick={() => onSelectTab('')}
        className="group flex items-center gap-3.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg p-1 transition-transform active:scale-98 cursor-pointer"
      >
        {/* Reticle Target Frame with MN -25 Emblem */}
        <div className="relative w-11 h-11 flex items-center justify-center">
          {/* Reticle corner marks */}
          <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-1.5 border-l-1.5 border-slate-300 group-hover:border-amber-400 transition-colors" />
          <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t-1.5 border-r-1.5 border-slate-300 group-hover:border-amber-400 transition-colors" />
          <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-1.5 border-l-1.5 border-slate-300 group-hover:border-amber-400 transition-colors" />
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-1.5 border-r-1.5 border-slate-300 group-hover:border-amber-400 transition-colors" />
          
          {/* Circular MN -25 Logo Emblem from Uploaded Badge */}
          <div className="w-8 h-8 rounded-full border border-amber-500/60 bg-black overflow-hidden relative shadow-[0_0_12px_rgba(245,158,11,0.35)]">
            <img
              src="/src/assets/images/bup_mn25_logo_1790137193440.jpg"
              alt="BUP Mars Rover MN -25 Logo"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Text Wordmark */}
        <div className="flex flex-col tracking-wider leading-[1.08] text-[11px] md:text-[12px] font-space font-bold uppercase text-slate-200">
          <span className="group-hover:text-amber-400 transition-colors text-white tracking-wider font-extrabold">MN -25</span>
          <span className="group-hover:text-white transition-colors">MARS ROVER TEAM</span>
          <span className="text-emerald-400 text-[10px] tracking-widest font-mono">BUP // EXPEDITION</span>
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
    </header>
  );
};
