import React, { useState } from 'react';

interface SocialModalProps {
  platform: string | null;
  onClose: () => void;
}

export const SocialModal: React.FC<SocialModalProps> = ({ platform, onClose }) => {
  const [copied, setCopied] = useState(false);
  if (!platform) return null;

  const shareText = "Exploring the Red Planet with the Mars Exploration Initiative. Live rover telemetry and surface discoveries:";
  const shareUrl = window.location.href;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="w-full max-w-md rounded-2xl border border-emerald-500/30 bg-slate-950 p-6 shadow-2xl space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <h3 className="text-sm font-space font-bold uppercase text-white">
              Share Transmission via {platform}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded hover:bg-white/10"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          Broadcast current Mars telemetry and discoveries to your scientific network or public feed.
        </p>

        <div className="p-3 rounded-lg bg-black/50 border border-white/10 text-xs font-mono text-emerald-300">
          "{shareText} {shareUrl}"
        </div>

        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            onClick={handleCopyLink}
            className="px-4 py-2 text-xs font-mono rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30 transition-colors cursor-pointer"
          >
            {copied ? '✓ Transmission Copied' : 'Copy Transmission'}
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-mono rounded-lg bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
