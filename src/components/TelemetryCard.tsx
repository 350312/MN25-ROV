import React, { useState } from 'react';
import { ROVER_DATA, RoverTelemetry } from '../data/marsData';

interface TelemetryCardProps {
  currentRover: RoverTelemetry;
  onChangeRover: (rover: RoverTelemetry) => void;
  onOpenSpecs: () => void;
}

export const TelemetryCard: React.FC<TelemetryCardProps> = ({
  currentRover,
  onChangeRover,
  onOpenSpecs,
}) => {
  const [showSelector, setShowSelector] = useState(false);
  const rovers = Object.values(ROVER_DATA);

  return (
    <div className="relative group">
      {/* Telemetry card container matching reference image */}
      <div className="relative w-full max-w-[340px] md:max-w-[380px] rounded-2xl border border-white/15 bg-black/60 backdrop-blur-xl p-5 md:p-6 shadow-2xl transition-all duration-300 hover:border-emerald-500/40">
        
        {/* Subtle green ambient reflection at the bottom */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-5 bg-emerald-500/25 blur-xl pointer-events-none rounded-full" />

        <div className="space-y-3.5 text-xs md:text-[13px]">
          {/* Active Rover Row with interactive switch */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <span className="text-slate-300 font-medium">Active Rover:</span>
            <div className="relative">
              <button
                onClick={() => setShowSelector(!showSelector)}
                className="flex items-center gap-1.5 font-space font-bold text-emerald-400 hover:text-emerald-300 tracking-wider uppercase cursor-pointer py-0.5 px-2 rounded hover:bg-emerald-950/40 transition-colors"
                title="Click to switch rover telemetry"
              >
                <span>{currentRover.name}</span>
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${showSelector ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Rover Selector Dropdown */}
              {showSelector && (
                <div className="absolute right-0 top-full mt-2 w-48 rounded-xl border border-emerald-500/30 bg-slate-950/95 backdrop-blur-xl shadow-2xl py-1 z-40">
                  <div className="px-3 py-1.5 text-[10px] uppercase font-mono tracking-wider text-slate-400 border-b border-white/10">
                    Select Exploration Asset
                  </div>
                  {rovers.map((r) => (
                    <button
                      key={r.id}
                      onClick={() => {
                        onChangeRover(r);
                        setShowSelector(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs font-mono flex items-center justify-between hover:bg-emerald-900/30 transition-colors cursor-pointer ${
                        r.id === currentRover.id ? 'text-emerald-300 font-bold bg-emerald-950/50' : 'text-slate-300'
                      }`}
                    >
                      <span>{r.name}</span>
                      <span className="text-[10px] text-slate-400">{r.solActive}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sol Active */}
          <div className="flex items-center justify-between">
            <span className="text-slate-300 font-medium">Sol Active:</span>
            <span className="font-mono-data text-emerald-400 font-bold tracking-wide text-sm">
              {currentRover.solActive}
            </span>
          </div>

          {/* Distance Traveled */}
          <div className="flex items-center justify-between">
            <span className="text-slate-300 font-medium">Distance Traveled:</span>
            <span className="font-mono-data text-emerald-400 font-bold tracking-wide text-sm">
              {currentRover.distanceTraveled}
            </span>
          </div>

          {/* Atmospheric Temp */}
          <div className="flex items-center justify-between">
            <span className="text-slate-300 font-medium">Atmospheric Temp:</span>
            <span className="font-mono-data text-emerald-400 font-bold tracking-wide text-sm">
              {currentRover.atmosphericTemp}
            </span>
          </div>
        </div>

        {/* Action affordance to expand rover telemetry */}
        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400/90">{currentRover.status}</span>
          </span>
          <button
            onClick={onOpenSpecs}
            className="hover:text-emerald-300 transition-colors underline decoration-dotted underline-offset-2 cursor-pointer"
          >
            Telemetry Specs &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
