import React, { useState } from 'react';

interface RoverDeepDiveSectionProps {
  onBackToHero: () => void;
  onOpenGallery: () => void;
}

export const RoverDeepDiveSection: React.FC<RoverDeepDiveSectionProps> = ({
  onBackToHero,
  onOpenGallery,
}) => {
  const [activeTab, setActiveTab] = useState<'what-is-rover' | 'benefits' | 'innovations' | 'vision'>('what-is-rover');

  const tabs = [
    { id: 'what-is-rover', label: 'What is a Rover?' },
    { id: 'benefits', label: 'Planetary Benefits' },
    { id: 'innovations', label: 'Breakthrough Innovations' },
    { id: 'vision', label: 'The Mars Vision' },
  ] as const;

  return (
    <section 
      id="what-is-rover" 
      className="relative w-full min-h-screen bg-transparent text-[#f5f3ef] overflow-hidden py-16 md:py-24 px-6 md:px-12 lg:px-16 border-t border-amber-500/20"
    >
      {/* Background Ambience & Starfield */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle red/amber glow from the orbital planet */}
        <div className="absolute top-1/4 -right-48 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-amber-600/8 rounded-full blur-[120px]" />
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        
        {/* Top Breadcrumb & Return Nav */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase">
              MARS EXPLORATION INITIATIVE // ARCHIVE 04
            </span>
            <span className="text-slate-500">/</span>
            <span className="text-xs font-mono text-slate-400 uppercase">
              DEEP EXPEDITION INTELLIGENCE
            </span>
          </div>

          <button
            onClick={onBackToHero}
            className="flex items-center gap-2 text-xs font-space font-medium text-slate-300 hover:text-emerald-400 transition-colors cursor-pointer px-3 py-1.5 rounded-lg border border-white/10 hover:border-emerald-500/40 bg-black/40"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span>Return to Surface View</span>
          </button>
        </div>

        {/* Section Hero Header with reference orbital image layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Title and Core Definition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-emerald-300 text-xs font-mono uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Autonomous Extraterrestrial Robotics
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-space font-extrabold uppercase tracking-tight text-white leading-[1.08] drop-shadow-md">
              What is a <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-300 to-emerald-400">Mars Rover?</span>
            </h2>

            <p className="text-base md:text-lg text-slate-100 leading-relaxed max-w-2xl font-normal bg-black/40 backdrop-blur-md p-5 rounded-2xl border border-white/10">
              A <strong className="text-white font-bold text-amber-300">Mars Rover</strong> is a car-sized, autonomous mobile laboratory engineered to survive the freezing, radioactive vacuum of the Red Planet. Unlike fixed landers, a rover traverses rugged Martian terrain to discover ancient water systems, extract pristine sub-surface samples, and pave the logistical path for human colonization.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-[#0b0e18]/90 border border-white/15 backdrop-blur-xl shadow-lg">
                <div className="text-[11px] font-mono uppercase text-slate-300 font-semibold">Total Distance</div>
                <div className="text-xl md:text-2xl font-bold font-mono text-emerald-400 mt-1">100+ km</div>
                <div className="text-[11px] text-slate-200 mt-0.5">Across 4 generations</div>
              </div>

              <div className="p-4 rounded-xl bg-[#0b0e18]/90 border border-white/15 backdrop-blur-xl shadow-lg">
                <div className="text-[11px] font-mono uppercase text-slate-300 font-semibold">Operational Sols</div>
                <div className="text-xl md:text-2xl font-bold font-mono text-emerald-400 mt-1">7,000+</div>
                <div className="text-[11px] text-slate-200 mt-0.5">Continuous science</div>
              </div>

              <div className="p-4 rounded-xl bg-[#0b0e18]/90 border border-white/15 backdrop-blur-xl shadow-lg col-span-2 sm:col-span-1">
                <div className="text-[11px] font-mono uppercase text-slate-300 font-semibold">Hermetic Cores</div>
                <div className="text-xl md:text-2xl font-bold font-mono text-emerald-400 mt-1">24 Cached</div>
                <div className="text-[11px] text-slate-200 mt-0.5">Ready for Earth return</div>
              </div>
            </div>
          </div>

          {/* Right Column: Reference Mars Orbital Crescent Artwork */}
          <div className="lg:col-span-5 relative group">
            {/* Golden atmospheric glow matching reference */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-red-600 to-amber-500 rounded-3xl blur-xl opacity-35 group-hover:opacity-60 transition duration-700" />

            <div className="relative rounded-2xl md:rounded-3xl border border-amber-500/30 overflow-hidden bg-black shadow-2xl aspect-[9/14] max-h-[580px] mx-auto flex items-center justify-center">
              <img
                src="/src/assets/images/mars_orbit_crescent_1790134071042.jpg"
                alt="Orbital crescent view of planet Mars with illuminated atmospheric rim and craters"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              {/* HUD Telemetry overlay inspired by reference */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

              {/* Technical Reticle in corner */}
              <div className="absolute top-4 left-4 font-mono text-[10px] text-amber-300 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-amber-500/30">
                ORBITAL ALTITUDE: 385 KM // JEZERO DELTA APEX
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-5 left-5 right-5 space-y-1.5">
                <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                  MARS TARGET RECONNAISSANCE
                </div>
                <div className="text-base font-space font-bold text-white">
                  The Red Planet from Orbit
                </div>
                <p className="text-xs text-slate-300 line-clamp-2">
                  High-resolution orbital pass revealing ancient alluvial fans, Valles Marineris fault lines, and thin CO₂ atmospheric glow.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Interactive Deep-Dive Tabs (What is a Rover, Benefits, Innovations, Vision) */}
        <div className="space-y-8 pt-4">
          
          {/* Tab Selector Buttons */}
          <div className="flex items-center gap-2 md:gap-3 overflow-x-auto pb-2 border-b border-white/10">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-3 rounded-xl font-space font-bold text-xs md:text-sm tracking-wider uppercase whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.3)] scale-102'
                      : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Dynamic Tab Content Area */}
          <div className="min-h-[380px]">
            
            {/* 1. What is a Rover? */}
            {activeTab === 'what-is-rover' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
                
                {/* Card 1: Mobile Geochemical Laboratory */}
                <div className="p-6 rounded-2xl bg-[#0b0e18]/90 border border-white/15 hover:border-emerald-500/50 transition-all space-y-4 shadow-lg backdrop-blur-xl">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-space font-bold text-white">Mobile Geochemical Lab</h3>
                  <p className="text-sm text-slate-100 leading-relaxed font-normal">
                    Rather than relying on returning dust to orbit immediately, rovers contain integrated mass spectrometers, Raman laser detectors, and micro-imaging systems capable of analyzing minerals at sub-micron scales directly in the Martian field.
                  </p>
                  <ul className="text-xs font-mono text-emerald-300 space-y-1.5 pt-2">
                    <li>• SuperCam laser vaporization</li>
                    <li>• SHERLOC organic Raman scanner</li>
                    <li>• PIXL X-ray mineral elemental mapper</li>
                  </ul>
                </div>

                {/* Card 2: Six-Wheel Rocker-Bogie Mobility */}
                <div className="p-6 rounded-2xl bg-[#0b0e18]/90 border border-white/15 hover:border-emerald-500/50 transition-all space-y-4 shadow-lg backdrop-blur-xl">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="9" strokeWidth="1.75" />
                      <circle cx="12" cy="12" r="3" strokeWidth="1.75" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 3v6m0 6v6M3 12h6m6 0h6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-space font-bold text-white">Rocker-Bogie Suspension</h3>
                  <p className="text-sm text-slate-100 leading-relaxed font-normal">
                    Engineered without traditional springs, the rocker-bogie mechanism articulates six machined aluminum wheels independently. It climbs boulders twice the wheel diameter and ascends steep 30° crater dune slopes without tipping.
                  </p>
                  <ul className="text-xs font-mono text-amber-300 space-y-1.5 pt-2">
                    <li>• Cleat tread pattern for regolith traction</li>
                    <li>• Individual brushless steering actuators</li>
                    <li>• Zero-spring differential axle balance</li>
                  </ul>
                </div>

                {/* Card 3: Autonomous Neural Telemetry */}
                <div className="p-6 rounded-2xl bg-[#0b0e18]/90 border border-white/15 hover:border-emerald-500/50 transition-all space-y-4 shadow-lg backdrop-blur-xl">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-space font-bold text-white">Autonomous Navigation AI</h3>
                  <p className="text-sm text-slate-100 leading-relaxed font-normal">
                    With radio signals taking up to 22 minutes to travel between Mars and Earth, real-time joystick driving is impossible. Onboard AutoNav software constructs 3D point-clouds every second to route around treacherous crevasses and sand traps.
                  </p>
                  <ul className="text-xs font-mono text-cyan-300 space-y-1.5 pt-2">
                    <li>• Real-time stereoscopic hazard detection</li>
                    <li>• Slip-evaluation wheel odometry</li>
                    <li>• Dynamic path recalculation in motion</li>
                  </ul>
                </div>

              </div>
            )}

            {/* 2. Benefits */}
            {activeTab === 'benefits' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                
                <div className="p-6 rounded-2xl bg-[#0b0e18]/90 border border-white/15 space-y-3 shadow-lg backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400 font-mono text-lg font-bold">01.</span>
                    <h3 className="text-lg font-space font-bold text-white">Unprecedented Scientific Reach</h3>
                  </div>
                  <p className="text-sm text-slate-100 leading-relaxed font-normal">
                    Stationary landers only analyze the immediate few square meters where they touch down. A rover travels across geological epochs—from ancient 3.8-billion-year-old crater floors up steep river delta ridges, examining multiple environmental transitions in a single mission.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#0b0e18]/90 border border-white/15 space-y-3 shadow-lg backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400 font-mono text-lg font-bold">02.</span>
                    <h3 className="text-lg font-space font-bold text-white">Hermetic Sample Caching for Earth Return</h3>
                  </div>
                  <p className="text-sm text-slate-100 leading-relaxed font-normal">
                    Rovers drill pristine geological core samples and seal them in ultra-clean titanium tubes. By depositing these caches on the Martian surface, they create the essential staging ground for the NASA/ESA Mars Sample Return campaign to bring them back to Earth.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#0b0e18]/90 border border-white/15 space-y-3 shadow-lg backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400 font-mono text-lg font-bold">03.</span>
                    <h3 className="text-lg font-space font-bold text-white">Human Precursor & Hazard Profiling</h3>
                  </div>
                  <p className="text-sm text-slate-100 leading-relaxed font-normal">
                    Before sending human crews, rovers quantify severe environmental threats: the abrasiveness and toxicity of perchlorate-rich dust, surface cosmic radiation dosages, dust devil electrical discharges, and thermal cycling swings from -125°C to +20°C.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#0b0e18]/90 border border-white/15 space-y-3 shadow-lg backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400 font-mono text-lg font-bold">04.</span>
                    <h3 className="text-lg font-space font-bold text-white">Multi-Decade Nuclear Endurance</h3>
                  </div>
                  <p className="text-sm text-slate-100 leading-relaxed font-normal">
                    Equipped with Multi-Mission Radioisotope Thermoelectric Generators (MMRTGs) powered by the decay heat of Plutonium-238, modern rovers operate day and night through ferocious Martian dust storms that smothered earlier solar-powered landers.
                  </p>
                </div>

              </div>
            )}

            {/* 3. Innovations */}
            {activeTab === 'innovations' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
                
                <div className="p-6 rounded-2xl bg-[#0b0e18]/90 border border-white/15 space-y-4 shadow-lg backdrop-blur-xl">
                  <div className="inline-block px-3 py-1 rounded bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-bold">
                    ISRU BREAKTHROUGH
                  </div>
                  <h3 className="text-lg font-space font-bold text-white">MOXIE Oxygen Factory</h3>
                  <p className="text-sm text-slate-100 leading-relaxed font-normal">
                    The Mars Oxygen ISRU Experiment proved that we can harvest the unbreathable CO₂ Martian atmosphere and electrochemically convert it into pure, breathable O₂ and rocket propellant oxidizer at 800°C.
                  </p>
                  <div className="text-xs font-mono text-emerald-300 pt-1 font-semibold">
                    ✓ 122g of pure O₂ generated on Mars
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#0b0e18]/90 border border-white/15 space-y-4 shadow-lg backdrop-blur-xl">
                  <div className="inline-block px-3 py-1 rounded bg-amber-500/25 border border-amber-500/40 text-amber-300 font-mono text-xs font-bold">
                    AERIAL SCOUTING
                  </div>
                  <h3 className="text-lg font-space font-bold text-white">Ingenuity Mars Helicopter</h3>
                  <p className="text-sm text-slate-100 leading-relaxed font-normal">
                    Proved controlled, powered atmospheric flight in air less than 1% as dense as Earth's. Flew 72 missions to survey dangerous rocky terrain ahead of the rover, cutting pathfinding risks by over 60%.
                  </p>
                  <div className="text-xs font-mono text-amber-300 pt-1 font-semibold">
                    ✓ 72 flights // 17.0 km flown
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#0b0e18]/90 border border-white/15 space-y-4 shadow-lg backdrop-blur-xl">
                  <div className="inline-block px-3 py-1 rounded bg-cyan-500/25 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-bold">
                    ENTRY & DESCENT
                  </div>
                  <h3 className="text-lg font-space font-bold text-white">Sky-Crane & TRN Landing</h3>
                  <p className="text-sm text-slate-100 leading-relaxed font-normal">
                    Terrain Relative Navigation matches downward camera images against orbital maps in milliseconds during descent, guiding the rocket-powered sky-crane to hover and gently lower the 1-ton rover on nylon tethers.
                  </p>
                  <div className="text-xs font-mono text-cyan-300 pt-1 font-semibold">
                    ✓ Zero-bounce soft touchdown
                  </div>
                </div>

              </div>
            )}

            {/* 4. Vision */}
            {activeTab === 'vision' && (
              <div className="space-y-6 animate-fade-in">
                
                <div className="p-8 rounded-2xl bg-gradient-to-r from-red-950/40 via-slate-900/80 to-slate-900/80 border border-red-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="space-y-3 max-w-2xl">
                    <span className="text-xs font-mono text-red-400 uppercase tracking-widest">
                      2030s DECADE AND BEYOND
                    </span>
                    <h3 className="text-2xl font-space font-bold text-white">
                      The Next Frontier: Swarm Robotics & Human Base Preparation
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Future rovers won't explore in isolation. Cooperative fleets of autonomous robotic builders, drilling platforms, and subterranean explorers will precede the first human boots on Mars, excavating sub-surface water ice glaciers and erecting radiation-shielded habitats inside ancient volcanic lava tubes.
                    </p>
                  </div>

                  <button
                    onClick={onOpenGallery}
                    className="shrink-0 neon-glow-green px-6 py-3.5 rounded-full bg-emerald-500/25 border border-emerald-400 text-emerald-200 hover:text-white font-space font-bold text-xs tracking-wider uppercase transition-all cursor-pointer"
                  >
                    View Rover Archives &rarr;
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-5 rounded-xl bg-black/40 border border-white/10 space-y-2">
                    <div className="text-xs font-mono text-emerald-400">STAGE I: SAMPLE RETURN</div>
                    <div className="text-base font-bold text-white">Return to Earth Laboratories</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Retrieving cached sample tubes via Mars Ascent Vehicle (MAV) for atomic-probe tomography in Earth facilities.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-black/40 border border-white/10 space-y-2">
                    <div className="text-xs font-mono text-amber-400">STAGE II: WATER MINING</div>
                    <div className="text-base font-bold text-white">Glacier Extraction Scouting</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Ground-penetrating radar rovers charting vast subsurface ice sheets in Arcadia Planitia for drinking water and propellant synthesis.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-black/40 border border-white/10 space-y-2">
                    <div className="text-xs font-mono text-cyan-400">STAGE III: CREWED BASE</div>
                    <div className="text-base font-bold text-white">Human Outpost Tele-operation</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Astronauts in Martian orbit and surface habitats directing heavy rovers in zero-latency to build landing aprons and pressurized complexes.
                    </p>
                  </div>
                </div>

              </div>
            )}

          </div>

        </div>

        {/* Bottom CTA Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-10 border-t border-white/10">
          <div className="text-xs font-mono text-slate-400">
            MARS SCIENCE ARCHIVE // TRANSMISSION VERIFIED BY NASA/JPL TELEMETRY PROTOCOLS
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onBackToHero}
              className="px-6 py-2.5 rounded-full border border-white/20 text-slate-300 hover:text-white hover:bg-white/10 font-space text-xs tracking-wider uppercase transition-colors cursor-pointer"
            >
              ↑ Back to Top
            </button>
            <button
              onClick={onOpenGallery}
              className="px-6 py-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 hover:text-white hover:bg-emerald-500/30 font-space text-xs tracking-wider uppercase transition-colors cursor-pointer"
            >
              Open Gallery
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
