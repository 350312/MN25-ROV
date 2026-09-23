import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/marsData';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialItemId?: string;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  isOpen,
  onClose,
  initialItemId,
}) => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem>(() => {
    return GALLERY_ITEMS.find((item) => item.id === initialItemId) || GALLERY_ITEMS[0];
  });

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Mars Exploration Image Gallery"
    >
      <div 
        className="relative w-full max-w-5xl max-h-[90vh] flex flex-col rounded-2xl border border-emerald-500/30 bg-slate-950/95 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <h2 className="text-sm font-space font-bold uppercase tracking-wider text-slate-200">
              Mars Planetary Surface Telemetry Gallery
            </h2>
            <span className="hidden sm:inline-block text-[11px] font-mono text-emerald-400/90 border border-emerald-500/30 px-2 py-0.5 rounded-full">
              {GALLERY_ITEMS.length} RAW TRANSMISSIONS
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
            aria-label="Close gallery"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Main Image Display Area */}
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[340px] md:min-h-[460px]">
          <img
            src={selectedItem.imageUrl}
            alt={selectedItem.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain max-h-[60vh] transition-all duration-300"
          />

          {/* Technical Overlay HUD on image */}
          <div className="absolute top-4 left-4 pointer-events-none">
            <div className="flex flex-col gap-1 text-[11px] font-mono text-emerald-300/90 bg-black/60 backdrop-blur-md px-3 py-2 rounded-lg border border-white/10">
              <div><span className="text-slate-400">EPOCH:</span> {selectedItem.sol}</div>
              <div><span className="text-slate-400">PAYLOAD:</span> {selectedItem.camera}</div>
              <div><span className="text-slate-400">COORDS:</span> {selectedItem.coordinates}</div>
            </div>
          </div>
        </div>

        {/* Image Caption & Telemetry Details */}
        <div className="p-5 md:p-6 bg-slate-900/90 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="text-xs uppercase font-mono tracking-wider text-emerald-400 mb-1">
                {selectedItem.subtitle}
              </div>
              <h3 className="text-lg font-bold text-white tracking-wide">
                {selectedItem.title}
              </h3>
              <p className="text-sm text-slate-300 mt-1.5 max-w-2xl leading-relaxed">
                {selectedItem.description}
              </p>
            </div>

            {/* Thumbnail Selector Strip */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 shrink-0">
              {GALLERY_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    item.id === selectedItem.id
                      ? 'border-emerald-400 scale-105 shadow-[0_0_12px_rgba(52,211,153,0.5)]'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                  title={item.title}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
