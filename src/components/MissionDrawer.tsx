import React, { useState } from 'react';
import { ROVER_DATA, RoverTelemetry } from '../data/marsData';

interface MissionDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  currentRover: RoverTelemetry;
  onChangeRover: (rover: RoverTelemetry) => void;
}

export const MissionDrawer: React.FC<MissionDrawerProps> = ({
  isOpen,
  onClose,
  activeSection,
  currentRover,
  onChangeRover,
}) => {
  const [selectedTab, setSelectedTab] = useState<string>(activeSection || 'MISSION');

  // Sync when prop changes
  React.useEffect(() => {
    if (activeSection) {
      setSelectedTab(activeSection);
    }
  }, [activeSection]);

  if (!isOpen) return null;

  const sections = [
    { id: 'MISSION', label: 'Mission Overview' },
    { id: 'SCIENCE', label: 'Astrobiology & Delta' },
    { id: 'ROVERS', label: 'Robotic Fleet' },
    { id: 'TECHNOLOGY', label: 'Instruments & MOXIE' },
    { id: 'LATEST', label: 'Telemetry & Findings' },
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Mission Intelligence Drawer"
    >
      <div 
        className="relative w-full max-w-2xl h-full bg-slate-950/98 border-l border-emerald-500/30 shadow-2xl flex flex-col overflow-hidden text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-black/40">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <div>
              <div className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase">
                MARS EXPLORATION INITIATIVE // ARCHIVE
              </div>
              <h2 className="text-base font-space font-bold uppercase tracking-wider text-white">
                Deep Mission Intelligence
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close drawer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Section Tabs */}
        <div className="flex items-center gap-1 px-6 py-2 border-b border-white/10 bg-slate-900/60 overflow-x-auto">
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => setSelectedTab(sec.id)}
              className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedTab === sec.id
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              {sec.label}
            </button>
          ))}
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {selectedTab === 'MISSION' && (
            <div className="space-y-5">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10">
                <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest">
                  Strategic Directive
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  Unveiling Mars: Ancient Habitable Environments
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  The Mars Exploration Initiative coordinates active robotic surface explorers, orbital relay stations, and planetary science laboratories to investigate whether life ever arose on Mars, characterize the planet's paleoclimate, and pave the way for human exploration.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-lg bg-black/40 border border-white/10">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Primary Destination</div>
                  <div className="text-sm font-bold text-emerald-400 mt-1">Jezero Crater Delta</div>
                  <div className="text-xs text-slate-400 mt-0.5">Former 45km ancient paleolake</div>
                </div>
                <div className="p-3.5 rounded-lg bg-black/40 border border-white/10">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Mission Duration</div>
                  <div className="text-sm font-bold text-emerald-400 mt-1">Open-Ended Extended</div>
                  <div className="text-xs text-slate-400 mt-0.5">Surpassed 1,350+ Martian sols</div>
                </div>
                <div className="p-3.5 rounded-lg bg-black/40 border border-white/10">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Sample Tubes Cached</div>
                  <div className="text-sm font-bold text-emerald-400 mt-1">24 Hermetic Cores</div>
                  <div className="text-xs text-slate-400 mt-0.5">Awaiting Mars Sample Return</div>
                </div>
                <div className="p-3.5 rounded-lg bg-black/40 border border-white/10">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Ingenuity Flights</div>
                  <div className="text-sm font-bold text-emerald-400 mt-1">72 Successful Sorties</div>
                  <div className="text-xs text-slate-400 mt-0.5">First aerial scout on another world</div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">Key Milestones</h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-mono">2021.02:</span>
                    <span>Touchdown in Jezero Crater using Terrain Relative Navigation sky-crane landing system.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-mono">2021.04:</span>
                    <span>MOXIE successfully extracts pure oxygen (O₂) from Martian carbon dioxide.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-mono">2023.01:</span>
                    <span>First extraterrestrial sample depot established at Three Forks with 10 backup sample tubes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-mono">Current:</span>
                    <span>Ascending the crater rim margin unit to probe ancient carbonate-rich shores.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {selectedTab === 'SCIENCE' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10">
                <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest">
                  Astrobiological Inquiry
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  Biosignatures & Ancient Hydrothermal Systems
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  Perseverance searches for microscopic fossils, chemical fingerprints, and biogenic structures in fine-grained mudstones. The rover identified complex ringed aromatic organic compounds in samples taken from "Wildcat Ridge" and "Skinner Ridge".
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-lg bg-black/40 border border-white/10">
                  <div className="text-xs font-bold text-emerald-300">1. Carbonate Mineral Deposits</div>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Carbonates precipitate from water and trap organic molecules for billions of years, offering the highest potential for microfossil preservation on Mars.
                  </p>
                </div>
                <div className="p-3.5 rounded-lg bg-black/40 border border-white/10">
                  <div className="text-xs font-bold text-emerald-300">2. Delta Front Siltstones</div>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Sediments washed into the Jezero lake during catastrophic flooding events preserved clear ripples, mud cracks, and chemical differentiation.
                  </p>
                </div>
                <div className="p-3.5 rounded-lg bg-black/40 border border-white/10">
                  <div className="text-xs font-bold text-emerald-300">3. Igneous Floor Rocks (Séítah)</div>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Magmatic olivine-cumulate rocks provide precise radiometric crystallization timestamps, establishing the chronological baseline of Martian history.
                  </p>
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'ROVERS' && (
            <div className="space-y-4">
              <div className="text-xs font-mono text-slate-400">
                Select an active or historical rover to synchronize UI telemetry:
              </div>

              <div className="grid grid-cols-1 gap-3">
                {Object.values(ROVER_DATA).map((rover) => (
                  <div
                    key={rover.id}
                    onClick={() => onChangeRover(rover)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      rover.id === currentRover.id
                        ? 'border-emerald-400 bg-emerald-950/40 shadow-[0_0_15px_rgba(52,211,153,0.2)]'
                        : 'border-white/10 bg-black/40 hover:border-slate-500 hover:bg-slate-900/40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${rover.status === 'ACTIVE' ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'}`} />
                        <h4 className="font-space font-bold text-white text-base tracking-wider">{rover.name}</h4>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-white/20 text-slate-300">
                        {rover.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-white/10 text-xs font-mono">
                      <div>
                        <span className="text-slate-400 text-[10px] block">LANDING</span>
                        <span className="text-slate-200">{rover.landingDate}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 text-[10px] block">SOLS ACTIVE</span>
                        <span className="text-emerald-400 font-bold">{rover.solActive}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 text-[10px] block">ODOMETRY</span>
                        <span className="text-emerald-400 font-bold">{rover.distanceTraveled}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === 'TECHNOLOGY' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10">
                <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest">
                  Payload Engineering
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  Cutting-Edge Scientific Instrumentation
                </h3>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-lg bg-black/40 border border-white/10">
                  <div className="font-bold text-emerald-300 font-mono">MOXIE (Mars Oxygen ISRU Experiment)</div>
                  <p className="text-slate-300 mt-1 leading-relaxed">
                    Electrochemically separates atmospheric CO₂ into pure breathable O₂ and carbon monoxide at 800°C. Proved human in-situ propellant generation on Mars.
                  </p>
                </div>
                <div className="p-3.5 rounded-lg bg-black/40 border border-white/10">
                  <div className="font-bold text-emerald-300 font-mono">SuperCam Laser Spectrometer</div>
                  <p className="text-slate-300 mt-1 leading-relaxed">
                    Fires infrared laser pulses to vaporize pinpoint rock targets up to 7 meters away, studying the light flash with spectrometers and recording acoustic shockwaves via onboard microphone.
                  </p>
                </div>
                <div className="p-3.5 rounded-lg bg-black/40 border border-white/10">
                  <div className="font-bold text-emerald-300 font-mono">PIXL & SHERLOC (Arm Turret)</div>
                  <p className="text-slate-300 mt-1 leading-relaxed">
                    Micro-mapping X-ray fluorescence and deep-UV Raman laser spectroscopy resolving elemental mineral distributions at grains smaller than a salt crystal.
                  </p>
                </div>
                <div className="p-3.5 rounded-lg bg-black/40 border border-white/10">
                  <div className="font-bold text-emerald-300 font-mono">RIMFAX Ground-Penetrating Radar</div>
                  <p className="text-slate-300 mt-1 leading-relaxed">
                    Sounds subsurface geological structures and ancient buried lake layers down to 10 meters beneath the rover wheels.
                  </p>
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'LATEST' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest">
                    Real-Time Telemetry Stream
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">DSN 70m Goldstone Array Relay</span>
                </div>
                <h3 className="text-lg font-bold text-white mt-1">
                  Active Rover Subsystem Health
                </h3>
              </div>

              <div className="space-y-2 text-xs font-mono">
                <div className="p-3 rounded-lg bg-black/40 border border-white/10 flex justify-between">
                  <span className="text-slate-400">Atmospheric Pressure:</span>
                  <span className="text-emerald-400 font-bold">{currentRover.pressure}</span>
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/10 flex justify-between">
                  <span className="text-slate-400">Surface Wind Velocity:</span>
                  <span className="text-emerald-400 font-bold">{currentRover.windSpeed}</span>
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/10 flex justify-between">
                  <span className="text-slate-400">Power Plant Status:</span>
                  <span className="text-emerald-400 font-bold">{currentRover.batteryStatus}</span>
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/10 flex justify-between">
                  <span className="text-slate-400">Landing Coordinates:</span>
                  <span className="text-emerald-400 font-bold">{currentRover.landingSite}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
