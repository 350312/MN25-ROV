import React, { useState } from 'react';
import { TEAM_MEMBERS } from '../data/monpuraData';

export const TeamSection: React.FC = () => {
  const [selectedSubteam, setSelectedSubteam] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Personnel' },
    { id: 'mechanical', label: 'Mechanical' },
    { id: 'electrical', label: 'Electrical' },
    { id: 'software', label: 'Software & Autonomy' },
    { id: 'science', label: 'Science Division' },
  ];

  const filteredMembers = selectedSubteam === 'all'
    ? TEAM_MEMBERS
    : TEAM_MEMBERS.filter((m) => m.subteam === selectedSubteam);

  return (
    <section 
      id="team" 
      className="relative w-full bg-transparent text-[#f5f3ef] overflow-hidden py-20 md:py-28 px-6 md:px-12 lg:px-16 border-t border-white/10"
    >
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Ambient green & orange glows */}
        <div className="absolute top-1/4 -left-32 w-[550px] h-[550px] bg-[#00ff9d]/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -right-32 w-[550px] h-[550px] bg-amber-500/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        
        {/* Telemetry Opening Line */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-5">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00ff9d] animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-[#00ff9d] uppercase font-bold">
              TEAM STATUS: ACTIVE // BUP MARS ROVER PROGRAM
            </span>
          </div>
          <div className="text-xs font-mono text-slate-300 font-medium">
            LOC: DHAKA, BANGLADESH // ELEVATION: 12M // AFFILIATION: BUP
          </div>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-300 font-bold">
            <img
              src="/assets/images/bup_mn25_logo_1790137193440.jpg"
              alt="MN -25 Logo"
              className="w-5 h-5 rounded-full object-cover border border-amber-500/60 shadow-[0_0_8px_rgba(245,158,11,0.4)]"
            />
            <span>PERSONNEL ROSTER // MULTI-DISCIPLINARY COHORT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-space font-extrabold uppercase text-white tracking-tight leading-tight drop-shadow-md">
            Meet Team MN -25
          </h2>
          <p className="text-base text-slate-100 leading-relaxed font-normal bg-black/40 backdrop-blur-md p-5 rounded-2xl border border-white/10">
            An elite student engineering and planetary science division from Bangladesh University of Professionals. Our members design custom planetary drivetrains, power electronics, embedded firmware, neural vision stacks, and onboard bio-chemical science assay instruments to compete on the world stage.
          </p>
        </div>

        {/* Stat Strip Reusing the Mission Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-[#0b0e18]/90 border border-white/15 backdrop-blur-xl shadow-lg">
            <div className="text-[11px] font-mono uppercase text-slate-300 font-semibold">Roster Strength</div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-[#00ff9d] mt-1.5">30+</div>
            <div className="text-[11px] text-slate-200 mt-0.5 font-mono">Engineers & Scientists</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0b0e18]/90 border border-white/15 backdrop-blur-xl shadow-lg">
            <div className="text-[11px] font-mono uppercase text-slate-300 font-semibold">Core Sub-Teams</div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-amber-400 mt-1.5">04 Units</div>
            <div className="text-[11px] text-slate-200 mt-0.5 font-mono">Mech, Elec, Soft, Science</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0b0e18]/90 border border-white/15 backdrop-blur-xl shadow-lg">
            <div className="text-[11px] font-mono uppercase text-slate-300 font-semibold">Systems & Autonomy</div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400 mt-1.5">06 Specialists</div>
            <div className="text-[11px] text-slate-200 mt-0.5 font-mono">Lead: Sourav Ahmed</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0b0e18]/90 border border-white/15 backdrop-blur-xl shadow-lg">
            <div className="text-[11px] font-mono uppercase text-slate-300 font-semibold">Competition Targets</div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-[#00ff9d] mt-1.5">URC & ARDC</div>
            <div className="text-[11px] text-slate-200 mt-0.5 font-mono">Utah, USA & Turkey</div>
          </div>
        </div>

        {/* Rounded-Pill Tab Nav */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-white/15">
          {categories.map((cat) => {
            const isActive = selectedSubteam === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedSubteam(cat.id)}
                className={`px-5 py-2.5 rounded-full font-space font-bold text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#00ff9d]/25 text-[#00ff9d] border border-[#00ff9d] shadow-[0_0_15px_rgba(0,255,157,0.35)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/10 border border-white/15'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Grid of Team Member Cards (3-4 columns desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMembers.map((member) => {
            const isSoftware = member.subteam === 'software';
            const isElectrical = member.subteam === 'electrical';
            const isScience = member.subteam === 'science';
            
            const accentColor = isSoftware 
              ? 'text-cyan-300 border-cyan-500/40 bg-cyan-950/40' 
              : isElectrical 
              ? 'text-amber-300 border-amber-500/40 bg-amber-950/40' 
              : isScience
              ? 'text-purple-300 border-purple-500/40 bg-purple-950/40' 
              : 'text-[#00ff9d] border-[#00ff9d]/40 bg-emerald-950/40';

            return (
              <div
                key={member.id}
                className="group relative rounded-2xl bg-[#0b0e18]/90 border border-white/15 hover:border-[#00ff9d]/50 backdrop-blur-xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,255,157,0.2)] hover:-translate-y-1 shadow-lg"
              >
                <div className="space-y-4">
                  {/* Avatar / Photo Placeholder with Tech Border */}
                  <div className="flex items-center justify-between">
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-white/20 bg-slate-900 group-hover:border-[#00ff9d]/60 transition-colors">
                      <img
                        src={`https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${member.avatarSeed}&backgroundColor=0b1120`}
                        alt={member.name}
                        className="w-full h-full object-cover p-1"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                    </div>

                    <span className={`text-[10px] font-mono tracking-wider font-semibold px-2.5 py-1 rounded-full border ${accentColor}`}>
                      {member.subteamLabel.toUpperCase()}
                    </span>
                  </div>

                  {/* Name & Role */}
                  <div>
                    <h3 className="text-lg font-space font-bold text-white tracking-wide group-hover:text-[#00ff9d] transition-colors">
                      {member.name}
                    </h3>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-amber-300 font-semibold mt-0.5 leading-snug">
                      {member.role}
                    </div>
                  </div>

                  {/* Subteam Squad if present */}
                  {member.squad && (
                    <div className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40 inline-block">
                      {member.squad}
                    </div>
                  )}

                  {/* Bio */}
                  <p className="text-xs text-slate-100 leading-relaxed font-normal">
                    {member.bio}
                  </p>

                  {/* Tools / Stacks */}
                  {member.tools && (
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {member.tools.map((t, idx) => (
                        <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Subsystem Focus Badge */}
                <div className="mt-5 pt-3 border-t border-white/15 flex items-center justify-between text-[10px] font-mono text-slate-300">
                  <span className="truncate max-w-[190px] font-medium">{member.focus}</span>
                  <span className="text-[#00ff9d] font-bold">ACTIVE</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

