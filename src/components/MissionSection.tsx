import React, { useState } from 'react';

interface MissionSectionProps {
  onBackToTop: () => void;
  onOpenGallery: () => void;
}

export const MissionSection: React.FC<MissionSectionProps> = ({
  onBackToTop,
  onOpenGallery,
}) => {
  const [activePill, setActivePill] = useState<'MISSION' | 'CHASSIS' | 'NAVIGATION' | 'ARM'>('MISSION');

  const pillars = [
    {
      id: 'CHASSIS',
      title: 'Rocker-Bogie Chassis',
      subtitle: 'Mobility & Structural Dynamics',
      tag: 'MECHANICAL SUBSYSTEM',
      color: 'amber',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" strokeWidth="1.75" />
          <circle cx="12" cy="12" r="3" strokeWidth="1.75" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 3v6m0 6v6M3 12h6m6 0h6" />
        </svg>
      ),
      description:
        'Engineered without traditional springs, our rocker-bogie mechanism utilizes a precision central differential gearbox to maintain all six machined aluminum wheels in continuous ground contact over 35-degree boulder fields. The modular aircraft-grade 6061-T6 alloy frame provides an ultra-low center of gravity while resisting catastrophic torsional shear.',
      specs: [
        'Cleat tread pattern for loose regolith traction',
        'Individual planetary gearhub drive motors',
        'Zero-spring differential axle balance',
      ],
      highlight: '35° INCLINE CONQUERED',
    },
    {
      id: 'NAVIGATION',
      title: 'Autonomous Navigation',
      subtitle: 'Perception & Neural Costmapping',
      tag: 'SOFTWARE SUBSYSTEM',
      color: 'emerald',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      description:
        'Our ROS 2 software stack fuses high-rate 16-beam 3D LiDAR point clouds with stereoscopic visual odometry to construct real-time 3D voxel costmaps at 30Hz without GPS reliance. Onboard Nvidia Jetson Orin compute nodes execute obstacle-avoidance vector field histograms to traverse unmapped treacherous washouts completely driverless.',
      specs: [
        'Real-time stereoscopic hazard detection',
        'Slip-evaluation wheel odometry',
        'Dynamic path recalculation in motion',
      ],
      highlight: '30HZ VOXEL MAPPING',
    },
    {
      id: 'ARM',
      title: 'Robotic Sample Arm',
      subtitle: 'Kinematics & Astrobiology End-Effector',
      tag: 'MECHATRONICS SUBSYSTEM',
      color: 'cyan',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      description:
        'Equipped with 5 degrees of freedom and custom cycloidal planetary drives, the manipulator executes millimetric positioning for soil extraction, equipment servicing, and percussive rock coring. An integrated hermetic carousel seals uncontaminated extraterrestrial geological samples inside clean titanium cylinders for immediate onboard spectroscopic assay.',
      specs: [
        '5.0 kg payload capacity at full 1.2m reach',
        'Cycloidal zero-backlash joint reduction',
        'Integrated spectrometer & coring toolhead',
      ],
      highlight: '5-DOF DUAL CORING',
    },
  ];

  const filteredPillars = activePill === 'MISSION' 
    ? pillars 
    : pillars.filter(p => p.id === activePill);

  return (
    <section 
      id="mission" 
      className="relative w-full bg-transparent text-[#f5f3ef] overflow-hidden py-20 md:py-24 px-6 md:px-12 lg:px-16 border-t border-white/10"
    >
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        
        {/* Monospace Header Micro-bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <img
              src="/src/assets/images/bup_mn25_logo_1790137193440.jpg"
              alt="MN -25 Logo"
              className="w-5 h-5 rounded-full object-cover border border-amber-500/40"
            />
            <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase">
              TACTICAL EXECUTION // MN -25 MISSION
            </span>
          </div>
          <span className="text-xs font-mono text-slate-400">
            SYSTEM BENCHMARK: URC 2025 // ARDC COMPLIANT
          </span>
        </div>

        {/* Mission Statement Block */}
        <div className="max-w-4xl space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-amber-300 font-bold">
            MANDATE // ENGINEERING THE IMPOSSIBLE
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-space font-extrabold uppercase text-white tracking-tight leading-tight">
            Forging Mars-Ready Systems In Bangladesh
          </h2>

          <p className="text-base md:text-lg text-slate-100 leading-relaxed font-normal bg-black/40 backdrop-blur-md p-5 rounded-2xl border border-white/10">
            MN -25 engineers, prototypes, and field-tests high-end Mars rover platforms to compete in premier national and international robotics arenas, pushing the boundaries of extreme-environment robotics from Bangladesh. Through relentless interdisciplinary rigor across mechanical, electrical, software, and astrobiological domains, we cultivate the next generation of aerospace innovators ready to solve humanity's most complex extraplanetary challenges.
          </p>
        </div>

        {/* Pill Tab Navigation matching reference style */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {(['MISSION', 'CHASSIS', 'NAVIGATION', 'ARM'] as const).map((tab) => {
            const isActive = activePill === tab;
            return (
              <button
                key={tab}
                onClick={() => setActivePill(tab)}
                className={`px-5 py-2.5 rounded-full font-space font-bold text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-emerald-500/30 text-emerald-300 border border-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.35)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/10 border border-white/15'
                }`}
              >
                {tab === 'MISSION' ? 'ALL PILLARS' : tab}
              </button>
            );
          })}
        </div>

        {/* 3 Pillars Feature Card Grid matching reference layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-2">
          {filteredPillars.map((pillar) => {
            const isAmber = pillar.color === 'amber';
            const isCyan = pillar.color === 'cyan';
            
            return (
              <div
                key={pillar.id}
                className="group relative rounded-2xl border border-white/15 bg-[#0b0e18]/90 hover:bg-[#0e1320] backdrop-blur-xl p-6 md:p-7 flex flex-col justify-between transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(52,211,153,0.15)] shadow-xl"
              >
                <div className="space-y-5">
                  {/* Colored Icon in Rounded Square */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
                        isAmber
                          ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                          : isCyan
                          ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300'
                          : 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                      }`}
                    >
                      {pillar.icon}
                    </div>

                    <span className="text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-full border border-white/20 text-slate-200 bg-black/60">
                      {pillar.highlight}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-widest text-slate-300 font-semibold">
                      {pillar.tag}
                    </div>
                    <h3 className="text-xl font-space font-bold text-white tracking-wide mt-1">
                      {pillar.title}
                    </h3>
                  </div>

                  {/* 2-Sentence Technical Description */}
                  <p className="text-sm text-slate-100 leading-relaxed font-normal">
                    {pillar.description}
                  </p>

                  {/* 3 Bullet Specs in Accent Color */}
                  <div className="pt-2 border-t border-white/15 space-y-2">
                    <div className="text-[11px] font-mono text-slate-300 uppercase tracking-wider font-semibold">
                      Technical Specifications:
                    </div>
                    <ul className="space-y-1.5 text-xs font-mono">
                      {pillar.specs.map((spec, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span
                            className={
                              isAmber
                                ? 'text-amber-400 font-bold'
                                : isCyan
                                ? 'text-cyan-400 font-bold'
                                : 'text-emerald-400 font-bold'
                            }
                          >
                            •
                          </span>
                          <span className="text-slate-100 font-medium">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Subsystem State Bar */}
                <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between text-[10px] font-mono text-slate-300">
                  <span className="font-semibold text-slate-200">SUBSYSTEM STATUS</span>
                  <span className="text-emerald-400 font-bold">READY // VALIDATED</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Strip in Monospace matching reference exactly */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="text-slate-400 tracking-wider flex items-center gap-2">
            <img
              src="/src/assets/images/bup_mn25_logo_1790137193440.jpg"
              alt="MN -25 Logo"
              className="w-4 h-4 rounded-full object-cover border border-amber-500/40"
            />
            <span>MN -25 ARCHIVE // BUP MARS ROVER TEAM</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onBackToTop}
              className="px-5 py-2 rounded-full border border-white/20 text-slate-300 hover:text-white hover:bg-white/10 font-space text-xs tracking-wider uppercase transition-colors cursor-pointer"
            >
              ↑ BACK TO TOP
            </button>
            <button
              onClick={onOpenGallery}
              className="px-5 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 hover:text-white hover:bg-emerald-500/30 font-space text-xs tracking-wider uppercase transition-colors cursor-pointer"
            >
              OPEN GALLERY
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
