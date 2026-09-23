import React, { useState, useEffect } from 'react';
import { marsAudio } from '../utils/marsAudio';

interface FooterControlsProps {
  solMode: 'day' | 'night';
  onToggleSolMode: (mode: 'day' | 'night') => void;
  onOpenSocialModal: (platform: string) => void;
}

export const FooterControls: React.FC<FooterControlsProps> = ({
  solMode,
  onToggleSolMode,
  onOpenSocialModal,
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
    <footer className="relative z-30 w-full flex items-center justify-between px-6 md:px-12 pb-6 md:pb-8">
      {/* Bottom Left Controls: Sun, Moon, Audio */}
      <div className="flex items-center gap-3">
        {/* Sun Button (Day Sol) */}
        <button
          onClick={() => onToggleSolMode('day')}
          className={`p-2 rounded-full transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
            solMode === 'day'
              ? 'text-amber-300 bg-white/15 shadow-[0_0_12px_rgba(251,191,36,0.5)] scale-110'
              : 'text-slate-400 hover:text-white hover:bg-white/10'
          }`}
          title="Martian Day Mode (Sol High Sun)"
          aria-label="Toggle Day Sol Mode"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </svg>
        </button>

        {/* Moon Button (Night Sol) */}
        <button
          onClick={() => onToggleSolMode('night')}
          className={`p-2 rounded-full transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
            solMode === 'night'
              ? 'text-cyan-200 bg-white/15 shadow-[0_0_12px_rgba(103,232,249,0.5)] scale-110'
              : 'text-slate-400 hover:text-white hover:bg-white/10'
          }`}
          title="Martian Night Mode (Cosmic Horizon & Stars)"
          aria-label="Toggle Night Sol Mode"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        </button>

        {/* Audio Speaker Button (Martian Atmospheric Wind Synthesizer) */}
        <button
          onClick={handleToggleAudio}
          className={`relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
            audioActive
              ? 'text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 shadow-[0_0_15px_rgba(52,211,153,0.5)]'
              : 'text-slate-400 hover:text-white hover:bg-white/10'
          }`}
          title={audioActive ? 'Mute Martian Atmospheric Audio' : 'Play Martian Atmospheric Wind (SuperCam Simulation)'}
          aria-label="Toggle Martian ambient sound"
        >
          {audioActive ? (
            <>
              <svg className="w-4 h-4 text-emerald-400 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              </svg>
              <span className="hidden sm:inline text-[10px] font-mono tracking-wider text-emerald-300 uppercase">
                WIND LIVE
              </span>
            </>
          ) : (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          )}
        </button>
      </div>

      {/* Bottom Right Controls: Social Links */}
      <div className="flex items-center gap-4 text-slate-300">
        {/* Twitter / X */}
        <button
          onClick={() => onOpenSocialModal('X / Twitter')}
          className="hover:text-white hover:scale-110 transition-transform cursor-pointer p-1.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded"
          aria-label="Share on X"
          title="Share on X (@NASA_Mars)"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </button>

        {/* Facebook */}
        <button
          onClick={() => onOpenSocialModal('Facebook')}
          className="hover:text-white hover:scale-110 transition-transform cursor-pointer p-1.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded"
          aria-label="Share on Facebook"
          title="Share on Facebook"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </button>

        {/* LinkedIn */}
        <button
          onClick={() => onOpenSocialModal('LinkedIn')}
          className="hover:text-white hover:scale-110 transition-transform cursor-pointer p-1.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded"
          aria-label="Share on LinkedIn"
          title="Share on LinkedIn"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.225 0z" />
          </svg>
        </button>
      </div>
    </footer>
  );
};
