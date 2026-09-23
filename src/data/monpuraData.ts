export interface TeamMember {
  id: string;
  name: string;
  role: string;
  subteam: 'mechanical' | 'electrical' | 'software' | 'outreach';
  subteamLabel: string;
  bio: string;
  focus: string;
  avatarSeed: string;
  squad?: string;
  squadMotto?: string;
  tools?: string[];
  milestone?: string;
  isLead?: boolean;
}

export interface BdRoverTeam {
  id: string;
  name: string;
  university: string;
  generations: string;
  notableModel: string;
  acronym: string;
  benchmark: string;
  status: string;
  image: string;
  models?: string[];
  keySpecs?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  // Mechanical
  {
    id: 'mech-1',
    name: 'Tanvir Hossain',
    role: 'MECHANICAL LEAD // SYSTEM ARCHITECT',
    subteam: 'mechanical',
    subteamLabel: 'Mechanical',
    bio: 'Engineers differential bevel gear rocker-bogie linkages in aerospace-grade 6061-T6 aluminum to withstand 45-degree slope shear stresses.',
    focus: 'FEA Stress Analysis & Differential Gearboxes',
    avatarSeed: 'tanvir',
  },
  {
    id: 'mech-2',
    name: 'Samiul Alim',
    role: 'CHASSIS & MOBILITY ENGINEER',
    subteam: 'mechanical',
    subteamLabel: 'Mechanical',
    bio: 'Designs hollow-chevron cleat wheel geometries and planetary hub reductions to eliminate rover wheel slippage on unbonded sand dunes.',
    focus: 'Tire Soil Mechanics & Hub Actuation',
    avatarSeed: 'samiul',
  },
  {
    id: 'mech-3',
    name: 'Nafisa Rahman',
    role: 'ARM & END-EFFECTOR SPECIALIST',
    subteam: 'mechanical',
    subteamLabel: 'Mechanical',
    bio: 'Fabricates 5-DOF inverse-kinematics manipulator arms with cycloidal planetary gearheads, sustaining 5.0 kg payload lifts at full 1.2m extension.',
    focus: 'Cycloidal Drives & Core Drill Tooling',
    avatarSeed: 'nafisa',
  },

  // Electrical
  {
    id: 'elec-1',
    name: 'Fahim Shahriar',
    role: 'ELECTRICAL LEAD // POWER SYSTEMS',
    subteam: 'electrical',
    subteamLabel: 'Electrical',
    bio: 'Architects multi-rail 24V/12V/5V bus distributions with smart BMS telemetry and isolated CAN bus transceivers for zero electrical ground loop noise.',
    focus: 'Smart BMS & High-Current Distribution',
    avatarSeed: 'fahim',
  },
  {
    id: 'elec-2',
    name: 'Abrar Zahin',
    role: 'EMBEDDED HARDWARE ENGINEER',
    subteam: 'electrical',
    subteamLabel: 'Electrical',
    bio: 'Programs dual STM32H7 real-time microcontrollers with hardware interrupt watchdog routines for microsecond motor quadrature feedback.',
    focus: 'STM32 Firmware & BLDC Closed Loops',
    avatarSeed: 'abrar',
  },
  {
    id: 'elec-3',
    name: 'Tasfia Anjum',
    role: 'RF & TELEMETRY COMMS ENGINEER',
    subteam: 'electrical',
    subteamLabel: 'Electrical',
    bio: 'Deploys 2.4GHz COFDM IP mesh video relays alongside 915MHz LoRa spread-spectrum links to maintain 1.5 km non-line-of-sight command control.',
    focus: 'COFDM Video Uplink & LoRa Telemetry',
    avatarSeed: 'tasfia',
  },

  // Systems and Autonomous (Software) Team from Charter
  {
    id: 'soft-lead',
    name: 'Sourav Ahmed',
    role: 'SOFTWARE / AUTONOMY LEAD // TEAM C (GUI & INTEGRATION)',
    subteam: 'software',
    subteamLabel: 'Software',
    squad: 'Team C — GUI & Integration',
    bio: 'Leads the Systems & Autonomous team. Authors the mission operator console GUI, system bringup launch files orchestrating all ROS2 nodes, and cross-team integration testing pipelines.',
    focus: 'ROS2 Orchestration, Web GUI & System Integration',
    avatarSeed: 'sourav',
  },
  {
    id: 'soft-tarana',
    name: 'Tarana',
    role: 'TEAM A — PERCEPTION & NAVIGATION',
    subteam: 'software',
    subteamLabel: 'Software',
    squad: 'Team A — Perception & Navigation',
    bio: 'Gives the rover eyes and spatial cognition. Integrates ZED2/RealSense depth cameras into 3D point clouds and maintains the SLAM pipeline so the rover navigates reliably even without GPS.',
    focus: 'Depth Camera 3D Vision & SLAM Pipeline',
    avatarSeed: 'tarana',
  },
  {
    id: 'soft-nishat',
    name: 'Nishat',
    role: 'TEAM A — PERCEPTION & NAVIGATION',
    subteam: 'software',
    subteamLabel: 'Software',
    squad: 'Team A — Perception & Navigation',
    bio: 'Implements waypoint navigation logic and path-planning algorithms (A*, Dijkstra, RRT) using ROS2 Nav2. Detects terrain obstacles in real-time for autonomous gate-to-gate traversal.',
    focus: 'Autonomous Waypoint Traverse & Path Planning',
    avatarSeed: 'nishat',
  },
  {
    id: 'soft-rohan',
    name: 'Rohan',
    role: 'TEAM B — CONTROL & COMMUNICATIONS',
    subteam: 'software',
    subteamLabel: 'Software',
    squad: 'Team B — Control & Communications',
    bio: 'Bridges high-level software navigation decisions to physical motion. Translates autonomy commands into low-level motor and robotic arm instructions over serial and CAN protocols.',
    focus: 'ROS2-to-Firmware Bridge & CAN Actuation',
    avatarSeed: 'rohan',
  },
  {
    id: 'soft-hozaib',
    name: 'Hozaib',
    role: 'TEAM B — CONTROL & COMMUNICATIONS',
    subteam: 'software',
    subteamLabel: 'Software',
    squad: 'Team B — Control & Communications',
    bio: 'Builds and maintains the rover-to-base-station long-range communication link (WebSocket/TCP over WiFi). Handles real-time telemetry logging, manages packet loss, and provisions backup radio fallback.',
    focus: 'Base Station Telemetry & Network Links',
    avatarSeed: 'hozaib',
  },
  {
    id: 'soft-rafa',
    name: 'Rafa',
    role: 'TEAM C — GUI & INTEGRATION',
    subteam: 'software',
    subteamLabel: 'Software',
    squad: 'Team C — GUI & Integration',
    bio: 'Constructs the operator console window into the rover: live video streaming feeds, real-time telemetry dashboard, and teleoperation controls. Runs weekly integration tests combining all software packages.',
    focus: 'Operator Console Dashboard & System Integration',
    avatarSeed: 'rafa',
  },

  // Business & Outreach
  {
    id: 'out-1',
    name: 'Kazi Farhan',
    role: 'TEAM DIRECTOR // OPERATIONS',
    subteam: 'outreach',
    subteamLabel: 'Outreach',
    bio: 'Manages multi-subteam agile sprints, competition compliance dossiers for URC/ARDC, and corporate procurement pipelines for aerospace materials.',
    focus: 'Agile Program Governance & Sponsorships',
    avatarSeed: 'farhan',
  },
  {
    id: 'out-2',
    name: 'Sadia Tabassum',
    role: 'MEDIA & STEM ENGAGEMENT LEAD',
    subteam: 'outreach',
    subteamLabel: 'Outreach',
    bio: 'Spearheads inter-university robotics symposiums, high-school space technology workshops, and technical video documentation for international judges.',
    focus: 'STEM Community & Media Communications',
    avatarSeed: 'sadia',
  },
];

export const BD_ROVER_TEAMS: BdRoverTeam[] = [
  {
    id: 'uiu',
    name: 'UIU Mars Rover Team',
    university: 'United International University (UIU)',
    generations: '05 Generations',
    notableModel: 'AURION // UMRT Flagship',
    acronym: 'UIU UMRT',
    benchmark: 'Consistent Global Top-Ranker at University Rover Challenge (URC)',
    status: 'ACTIVE PIONEER',
    image: '/src/assets/images/team_uiu_umrt_rover_1790136477005.jpg',
    models: ['MAVEN (1st Gen)', 'TELOS (2nd Gen)', 'YGGDRASIL (3rd Gen)', 'AXIOS (4th Gen)', 'AURION (Flagship)'],
    keySpecs: 'Full Pneumatic Off-Road Wheels • Multi-Axis Manipulator • Autonomous Voxel Nav',
  },
  {
    id: 'buet',
    name: 'BUET Team Interplanetar',
    university: 'Bangladesh University of Engineering & Tech (BUET)',
    generations: '05 Generations',
    notableModel: 'Prochesta V1.0 // URC',
    acronym: 'BUET INTERPLANETAR',
    benchmark: 'High-Torque Rocker Arm & European Rover Challenge (ERC) Finalist',
    status: 'ACTIVE PIONEER',
    image: '/src/assets/images/team_buet_interplanetar_1790136499809.jpg',
    models: ['Mongol-E V4.0 (2020)', 'Anweshan V3.0 (2021)', 'Renaissance V1.0 (ERC 2022)', 'Renaissance V2.0 (ERC Finals)', 'Prochesta V1.0 (URC 2023)'],
    keySpecs: 'Gold-Link Rocker-Bogie • Geotechnical Drill • High-Torque Multi-Joint Arm',
  },
  {
    id: 'bracu',
    name: 'BRACU Mongol Tori',
    university: 'BRAC University (BRACU)',
    generations: '06 Generations',
    notableModel: 'Mongol Tori MK-VI',
    acronym: 'BRACU MONGOL TORI',
    benchmark: 'First Generation Pioneer of Bangladesh Mars Rover Community',
    status: 'VETERAN ROVER',
    image: '/src/assets/images/team_bracu_mongol_tori_1790136526770.jpg',
    models: ['Mongol Tori MK-I through MK-VI', 'Robotic Manipulator Arm', 'Wireframe Wheel System'],
    keySpecs: 'Curved Aluminum Suspension • Open Mesh Wireframe Wheels • Extended Arm Gripper',
  },
  {
    id: 'mist',
    name: 'MIST Mongol Barota',
    university: 'Military Institute of Science & Tech (MIST)',
    generations: '04 Generations',
    notableModel: 'Barota Phoenix',
    acronym: 'MIST MONGOL BAROTA',
    benchmark: 'Military-Grade Ruggedized Chassis & European Rover Challenge Finalist',
    status: 'ACTIVE CONTENDER',
    image: '/src/assets/images/team_mist_mongol_barota_1790136539171.jpg',
    models: ['Flag-Chassis Rover', 'Barota Phoenix', 'Desert Analog Sampling Rig'],
    keySpecs: '6-Wheel Sand Balloon Tires • Reinforced Arm Linkages • Hermetic Electronics Enclosure',
  },
  {
    id: 'iut',
    name: 'IUT Team Avijatrik',
    university: 'Islamic University of Technology (IUT)',
    generations: '03 Generations',
    notableModel: 'Avijatrik Prime',
    acronym: 'IUT AVIJATRIK',
    benchmark: 'Advanced Autonomous Waypoint Navigation & LiDAR Mapping Stack',
    status: 'ACTIVE CONTENDER',
    image: '/src/assets/images/team_iut_avijatrik_1790136589546.jpg',
    models: ['Avijatrik 1.0', 'Avijatrik Prime', 'Campus Grand Arch Testing Rover'],
    keySpecs: 'Precision Rocker-Bogie • Carbon Arm Links • Multi-Camera Mast Sensor Array',
  },
  {
    id: 'gub',
    name: 'Green University GUB Mars Rover Team',
    university: 'Green University of Bangladesh (GUB)',
    generations: '02 Generations',
    notableModel: 'Project CLADOS (ARC 2026)',
    acronym: 'GUB MARS ROVER TEAM',
    benchmark: 'Qualified for Anatolian Rover Challenge (ARC 2026) with Score 88.43/100',
    status: 'QUALIFIED CONTENDER',
    image: '/src/assets/images/team_gub_clados_rover_1790136569976.jpg',
    models: ['Project Lotus (Qualified ARC 2025)', 'Project CLADOS (Qualified ARC 2026 - Score 88.43)'],
    keySpecs: 'Electric Blue Arched Linkages • Heavy Manipulator • High-Efficiency ARC Drivetrain',
  },
  {
    id: 'aaub',
    name: 'AAUB Rover 71',
    university: 'Aviation & Aerospace University Lalmonirhat (AAUB / BSMRAAU)',
    generations: '04 Generations',
    notableModel: 'Rover 71 Valkyrie',
    acronym: 'AAUB ROVER 71',
    benchmark: 'Aerospace Systems Engineering & High-Bandwidth Mesh Telemetry',
    status: 'ACTIVE CONTENDER',
    image: '/src/assets/images/team_aaub_rover71_1790136605164.jpg',
    models: ['Rover 71 Valkyrie', 'AAUB Desert Testing Rig', 'Aerospace Soil Collector'],
    keySpecs: 'Aerospace-Grade Rigging • High-Gain Telemetry Mast • Desert Terrain Mobility',
  },
  {
    id: 'tsukuba',
    name: 'Tsukuba Rover Team (Japan)',
    university: 'University of Tsukuba, Japan',
    generations: '01 Generation',
    notableModel: 'TSUKUBA ROVER 1',
    acronym: 'TSUKUBA ROVER (T.R.T)',
    benchmark: 'Tottori Rover Challenge 2026 Contender • 4-Wheel Independent Steering',
    status: 'GLOBAL BENCHMARK',
    image: '/src/assets/images/team_tsukuba_rover_1790136619135.jpg',
    models: ['TSUKUBA ROVER 1 (40kg, 1000x1000x1000mm)', '4-Axis Arm & Teensy 4.1 Motor Control', 'ROS 2 Autonomous LiDAR'],
    keySpecs: '4-Wheel Independent Steering • 3D Printed Sand Wheels • ROS 2 Navigation Stack',
  },
];

export interface SubSquadCharter {
  id: string;
  name: string;
  motto: string;
  members: string[];
  mission: string;
  milestone: string;
  tech: string[];
  tasks: string[];
  roadmap: { phase: string; description: string }[];
}

export const SYSTEMS_AUTONOMOUS_CHARTER = {
  department: 'Systems and Autonomous (Software) Team',
  lead: 'Sourav Ahmed',
  leadTitle: 'Software / Autonomy Lead (Team Lead)',
  vision:
    'The Systems and Autonomous Team is the software backbone of BUP Mars Rover 25. Our goal is to move the rover beyond simple remote-control teleoperation and build a rover that can perceive its environment, plan its own path, communicate reliably over distance, and give the operator a clear, real-time window into everything the rover sees and does.',
  principles: [
    {
      title: 'Simulate before you build',
      desc: 'Test logic in software before hardware is ready, so no one sits idle waiting for parts.',
    },
    {
      title: 'Reliability over flash',
      desc: 'A rover that completes a task slowly beats one with impressive features that fail under pressure.',
    },
    {
      title: 'Clear interfaces',
      desc: "Every team's output (data, commands, video) should be well-defined so other teams can build against it independently.",
    },
    {
      title: 'Document everything',
      desc: 'Future members and competition judges should be able to understand our system from our documentation alone.',
    },
  ],
  squads: [
    {
      id: 'team-a',
      name: 'Team A — Perception & Navigation',
      motto: '“Where am I, and where do I go?”',
      members: ['Tarana', 'Nishat'],
      mission:
        'Gives the rover eyes and a sense of direction. They turn raw camera and sensor data into a usable map of the world, then decide the safest and most efficient path through it — including avoiding obstacles the rover has never seen before.',
      milestone: 'Depth camera feed working in simulation',
      tech: ['ROS2', 'OpenCV', 'Gazebo simulation', 'Nav2', 'slam_toolbox', 'Python/C++'],
      tasks: [
        'Integrate depth camera (ZED2/RealSense) into 3D voxel point clouds',
        'Build & maintain SLAM pipeline (slam_toolbox) for GPS-denied localization',
        'Detect obstacles in real-time and feed into path planning',
        'Implement waypoint navigation logic for autonomous traverse (gate to gate)',
        'Fuse data from camera, IMU, and GPS into one reliable estimate',
      ],
      roadmap: [
        { phase: 'Weeks 1-2', description: 'Learn ROS2 basics (nodes, topics, publishers/subscribers, launch files). Follow official tutorials.' },
        { phase: 'Weeks 3-4', description: 'Learn fundamentals of computer vision (OpenCV) — image processing, point clouds, depth maps.' },
        { phase: 'Weeks 5-6', description: 'Study SLAM concepts (occupancy grids, visual odometry). Test existing ROS2 SLAM packages (slam_toolbox) in simulation.' },
        { phase: 'Weeks 7-8', description: 'Learn basic path-planning algorithms (A*, Dijkstra, RRT) and how they are used in ROS2 Nav2 stack.' },
        { phase: 'Ongoing', description: 'Practice everything in Gazebo simulation first — do not wait for the physical camera/rover to be ready.' },
      ],
    },
    {
      id: 'team-b',
      name: 'Team B — Control & Communications',
      motto: '“Move the rover, talk to base.”',
      members: ['Rohan', 'Hozaib'],
      mission:
        "The bridge between software decisions and physical motion, and between the rover and the operator. They make sure that when Team A's navigation logic says 'turn left,' the wheels actually turn left — and live telemetry keeps flowing back to base station.",
      milestone: 'Mock motor commands sent over serial bridge',
      tech: ['ROS2', 'micro-ROS / rosserial', 'WebSocket/TCP networking', 'Serial/CAN protocols', 'Python/C++'],
      tasks: [
        "Build the ROS2-to-firmware bridge to the Electrical team's control boards (CAN/serial)",
        'Translate high-level navigation commands into low-level motor/actuator instructions',
        'Build and maintain the rover-to-base-station communication link (WebSocket/TCP over WiFi)',
        'Handle telemetry data logging and manage latency or packet-loss gracefully',
        'Set up backup communication logic (secondary radio link) in case primary fails',
      ],
      roadmap: [
        { phase: 'Weeks 1-2', description: 'Learn ROS2 basics alongside Team A (shared foundation) — focus on services and actions in addition to topics.' },
        { phase: 'Weeks 3-4', description: 'Learn serial communication protocols (UART, CAN bus basics) and microcontroller communication from ROS2 (micro-ROS/rosserial).' },
        { phase: 'Weeks 5-6', description: 'Learn networking fundamentals — sockets, WebSocket vs TCP vs UDP trade-offs, and handling unreliable connections.' },
        { phase: 'Weeks 7-8', description: 'Study basic motor control concepts (PWM, closed-loop control with encoders) to understand command dynamics.' },
        { phase: 'Ongoing', description: 'Test communication link early with mock/dummy data — do not wait for real sensors to validate pipeline.' },
      ],
    },
    {
      id: 'team-c',
      name: 'Team C — GUI & Integration',
      motto: '“Show it, glue it together.”',
      members: ['Sourav Ahmed (Lead)', 'Rafa'],
      mission:
        "Builds the operator's window into the rover and makes sure every piece the other two teams build actually works together as a single system. Owns the mission control dashboard and runs integration tests that catch problems before competition day.",
      milestone: 'GUI displaying mock telemetry end-to-end',
      tech: ['ROS2 (rclpy/rclcpp)', 'rosbridge', 'React Dashboard', 'Git review workflow', 'Video streaming'],
      tasks: [
        'Build operator console GUI: live video feeds, telemetry HUD, teleop & arm controls',
        'Own system bringup & launch files that start every ROS2 node in the right order',
        'Maintain shared topic/message interface specification for Teams A and B',
        'Run weekly integration tests combining all packages and catching mismatches early',
        'Perform code reviews across all three teams and represent software in whole-project meetings',
      ],
      roadmap: [
        { phase: 'Weeks 1-2', description: 'Learn ROS2 basics with the rest of the team, with extra focus on launch files and parameter/config management.' },
        { phase: 'Weeks 3-4', description: 'Learn GUI framework — web-based dashboard (React/HTML+JS with rosbridge) or desktop app (PyQt/RViz).' },
        { phase: 'Weeks 5-6', description: 'Learn how to display live video/telemetry efficiently (video streaming basics, real-time data visualization).' },
        { phase: 'Weeks 7-8', description: 'Learn systems-integration practices — writing clear interface documentation, basic CI/testing, and structured test sessions.' },
        { phase: 'Ongoing', description: 'As Lead, study ROS2 architecture patterns broadly to review code and unblock Teams A and B whenever needed.' },
      ],
    },
  ],
};
