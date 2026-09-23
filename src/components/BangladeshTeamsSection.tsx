import React, { useState } from 'react';
import { BD_ROVER_TEAMS, BdRoverTeam } from '../data/monpuraData';

export const BangladeshTeamsSection: React.FC = () => {
  const [selectedTeam, setSelectedTeam] = useState<BdRoverTeam | null>(null);

  return (
    <section 
      id="bangladesh-teams" 
      className="relative w-full bg-transparent text-[#f5f3ef] overflow-hidden py-20 md:py-28 px-6 md:px-12 lg:px-16 border-t border-white/10"
    >
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -right-24 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        
        {/* Monospace Header Micro-bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">
              NATIONAL ECOSYSTEM // BANGLADESH SPACE ROBOTICS ALLIANCE
            </span>
          </div>
          <span className="text-xs font-mono text-slate-400">
            TOTAL ACTIVE TEAMS: 08 VERIFIED PROGRAMS
          </span>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-[#00ff9d] font-bold">
            COMMUNITY BENCHMARKS & CONTENDERS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-space font-extrabold uppercase text-white tracking-tight leading-tight">
            Mars Rover Teams In Bangladesh
          </h2>
          <p className="text-base text-slate-100 leading-relaxed font-normal bg-black/40 backdrop-blur-md p-5 rounded-2xl border border-white/10">
            Documented from national robotics archives and collegiate competition dossiers. MN -25 collaborates alongside and benchmarks with fellow national pioneers engineering planetary systems from Dhaka, Gazipur, Lalmonirhat, and beyond.
          </p>
        </div>

        {/* Rover Teams Grid with High-Res Rover Imagery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {BD_ROVER_TEAMS.map((team) => (
            <div
              key={team.id}
              onClick={() => setSelectedTeam(team)}
              className="group relative rounded-2xl bg-[#0b0e18]/90 border border-white/15 hover:border-amber-500/60 backdrop-blur-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.25)] hover:-translate-y-1 cursor-pointer shadow-lg"
            >
              <div>
                {/* 1. Rover Image Showcase with HUD Overlays */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                  <img
                    src={team.image}
                    alt={`${team.name} rover`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Gradient Shadow Shroud */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                    <span className="text-[10px] font-mono tracking-wider font-semibold px-2 py-0.5 rounded bg-black/85 border border-white/20 text-[#00ff9d] backdrop-blur-sm">
                      {team.acronym}
                    </span>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-amber-950/90 border border-amber-500/50 text-amber-300 font-bold backdrop-blur-sm">
                      {team.status}
                    </span>
                  </div>

                  {/* Bottom Image Overlay Label */}
                  <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-[11px] font-mono text-slate-100">
                    <span className="font-semibold text-white drop-shadow truncate">
                      {team.notableModel}
                    </span>
                    <span className="text-[10px] text-[#00ff9d] font-bold bg-emerald-950/90 px-1.5 py-0.5 rounded border border-emerald-500/40">
                      {team.generations}
                    </span>
                  </div>
                </div>

                {/* 2. Text & Benchmark Details */}
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="text-base font-space font-bold text-white group-hover:text-amber-300 transition-colors">
                      {team.name}
                    </h3>
                    <div className="text-xs font-mono text-slate-200 mt-0.5 font-medium truncate">
                      {team.university}
                    </div>
                  </div>

                  {/* Generation Models Pill Ribbon */}
                  {team.models && team.models.length > 0 && (
                    <div className="space-y-1.5 pt-1">
                      <div className="text-[9px] font-mono uppercase text-slate-300 tracking-wider font-semibold">
                        Documented Iterations:
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {team.models.slice(0, 3).map((m, idx) => (
                          <span
                            key={idx}
                            className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-900 border border-white/15 text-slate-100"
                          >
                            {m.split(' (')[0]}
                          </span>
                        ))}
                        {team.models.length > 3 && (
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-900 border border-white/15 text-amber-300 font-bold">
                            +{team.models.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Benchmark Highlight */}
                  <p className="text-xs text-slate-100 font-mono leading-relaxed line-clamp-2 pt-1">
                    {team.benchmark}
                  </p>
                </div>
              </div>

              {/* 3. Card Footer Micro-bar */}
              <div className="px-4 py-3 border-t border-white/15 bg-slate-950/60 flex items-center justify-between text-[10px] font-mono text-slate-300">
                <span className="text-slate-300 font-medium">URC / ERC / ARDC</span>
                <span className="text-[#00ff9d] font-bold group-hover:underline flex items-center gap-1">
                  VIEW SPECS <span>→</span>
                </span>
              </div>
            </div>
          ))}

          {/* MN -25 Summary Card with 3D CAD Design Sample from Slide 15 and BUP Emblem Logo */}
          <div 
            onClick={() => setSelectedTeam({
              id: 'mn25',
              name: 'Team MN -25',
              university: 'Bangladesh University of Professionals (BUP)',
              generations: '03 Generations',
              notableModel: 'MN -25 MK-III Scout',
              acronym: 'BUP MN -25',
              benchmark: 'Differential Bevel Gear Rocker-Bogie, ROS 2 LiDAR Costmapping & 5-DOF Cycloidal Robotic Arm',
              status: 'HOST PROGRAM',
              image: '/assets/images/monpura25_cad_sample_1790136646700.jpg',
              models: ['MN -25 MK-I Prototype', 'MN -25 MK-II Telemetry Rig', 'MN -25 MK-III Autonomous Scout (Design Sample Slide 15)'],
              keySpecs: '6-Wheel Rocker Bogie • Red Wheel Rims • Stereo Mast Head • 5.0kg Cycloidal Arm',
            })}
            className="group relative rounded-2xl bg-gradient-to-b from-amber-950/30 via-slate-900/90 to-black/95 border border-amber-500/50 backdrop-blur-md overflow-hidden flex flex-col justify-between shadow-[0_0_30px_rgba(245,158,11,0.25)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <div>
              {/* CAD Design Sample Image with MN -25 Floating Emblem */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                <img
                  src="/assets/images/monpura25_cad_sample_1790136646700.jpg"
                  alt="MN -25 Rover CAD Design Sample"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 pointer-events-none" />
                
                {/* Top Badge with Logo */}
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-wider px-2 py-0.5 rounded bg-black/80 border border-amber-500/50 text-amber-300 font-bold backdrop-blur-sm">
                    <img
                      src="/assets/images/bup_mn25_logo_1790137193440.jpg"
                      alt="MN -25 Logo"
                      className="w-3.5 h-3.5 rounded-full object-cover"
                    />
                    BUP MN -25
                  </span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold animate-pulse">
                    ● ACTIVE
                  </span>
                </div>

                <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-[11px] font-mono">
                  <span className="font-semibold text-white drop-shadow">
                    MK-III Autonomous Scout
                  </span>
                  <span className="text-[10px] text-amber-300 bg-black/80 px-1.5 py-0.5 rounded border border-amber-500/40">
                    CAD SLIDE 15
                  </span>
                </div>
              </div>

              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <h3 className="text-base font-space font-bold text-white group-hover:text-amber-300 transition-colors">
                      MN -25
                    </h3>
                    <div className="text-xs font-mono text-amber-400 mt-0.5">
                      Bangladesh University of Professionals (BUP)
                    </div>
                  </div>
                  <img
                    src="/assets/images/bup_mn25_logo_1790137193440.jpg"
                    alt="MN -25 Emblem"
                    className="w-8 h-8 rounded-full object-cover border border-amber-500/60 shadow-[0_0_10px_rgba(245,158,11,0.3)] shrink-0"
                  />
                </div>

                <div className="space-y-1.5 pt-1">
                  <div className="text-[9px] font-mono uppercase text-slate-400 tracking-wider">
                    Design Sample Subsystems:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-900 border border-white/10 text-slate-300">
                      Rocker-Bogie 6-Wheel
                    </span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-900 border border-white/10 text-slate-300">
                      Stereo Mast
                    </span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-900 border border-white/10 text-slate-300">
                      5-DOF Arm
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 font-mono leading-relaxed pt-1">
                  Differential bevel gear rocker-bogie with 6061-T6 aluminum linkages, ROS 2 autonomous navigation, and percussive coring end-effector.
                </p>
              </div>
            </div>

            <div className="px-4 py-3 border-t border-amber-500/30 bg-amber-950/20 flex items-center justify-between text-[10px] font-mono text-amber-300 font-bold">
              <span>EXPLORE MN -25</span>
              <span className="text-amber-400 group-hover:underline">CAD SPECS →</span>
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Team / Rover Modal */}
      {selectedTeam && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setSelectedTeam(null)}
        >
          <div 
            className="relative w-full max-w-2xl rounded-2xl bg-[#090b10] border border-amber-500/40 p-6 md:p-8 space-y-6 shadow-[0_0_50px_rgba(245,158,11,0.25)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedTeam(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            >
              ✕
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 border-b border-white/15 pb-4">
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-amber-500/20 border border-amber-500/50 text-amber-300 font-bold">
                {selectedTeam.acronym}
              </span>
              <div>
                <h3 className="text-xl font-space font-bold text-white">
                  {selectedTeam.name}
                </h3>
                <p className="text-xs font-mono text-slate-200 font-medium">
                  {selectedTeam.university}
                </p>
              </div>
            </div>

            {/* Rover Image */}
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/15 bg-black">
              <img 
                src={selectedTeam.image} 
                alt={selectedTeam.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-black/85 backdrop-blur-md px-3 py-1 rounded border border-white/20 text-xs font-mono text-[#00ff9d] font-bold">
                Notable Model: {selectedTeam.notableModel}
              </div>
            </div>

            {/* Detailed Info */}
            <div className="space-y-4">
              {selectedTeam.keySpecs && (
                <div className="p-3.5 rounded-xl bg-slate-900 border border-white/15 space-y-1">
                  <div className="text-[10px] font-mono uppercase text-slate-300 font-semibold">Key Engineering Specs:</div>
                  <div className="text-xs font-mono text-emerald-300 font-medium">{selectedTeam.keySpecs}</div>
                </div>
              )}

              {selectedTeam.models && selectedTeam.models.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[10px] font-mono uppercase text-slate-300 font-semibold">Documented Rover Generations:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedTeam.models.map((m, idx) => (
                      <span key={idx} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-900 border border-white/15 text-slate-100 font-medium">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-1">
                <div className="text-[10px] font-mono uppercase text-slate-300 font-semibold">Competition Benchmark:</div>
                <p className="text-xs font-mono text-slate-100 leading-relaxed font-normal">
                  {selectedTeam.benchmark}
                </p>
              </div>
            </div>

            {/* Close Bar */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedTeam(null)}
                className="px-5 py-2 rounded-full bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 text-xs font-mono tracking-wider transition-colors cursor-pointer"
              >
                CLOSE DOSSIER
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
