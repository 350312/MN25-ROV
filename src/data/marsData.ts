export interface RoverTelemetry {
  id: string;
  name: string;
  solActive: string;
  distanceTraveled: string;
  atmosphericTemp: string;
  landingDate: string;
  landingSite: string;
  status: 'ACTIVE' | 'MISSION COMPLETED';
  batteryStatus: string;
  pressure: string;
  windSpeed: string;
}

export const ROVER_DATA: Record<string, RoverTelemetry> = {
  perseverance: {
    id: 'perseverance',
    name: 'PERSEVERANCE',
    solActive: '1,350+',
    distanceTraveled: '24.5 km',
    atmosphericTemp: '-65°C',
    landingDate: 'Feb 18, 2021',
    landingSite: 'Jezero Crater (18.38°N, 77.58°E)',
    status: 'ACTIVE',
    batteryStatus: '98% (MMRTG Nuclear)',
    pressure: '610 Pa (6.1 mbar)',
    windSpeed: '4.8 m/s NW',
  },
  curiosity: {
    id: 'curiosity',
    name: 'CURIOSITY',
    solActive: '4,300+',
    distanceTraveled: '32.1 km',
    atmosphericTemp: '-58°C',
    landingDate: 'Aug 6, 2012',
    landingSite: 'Gale Crater (4.59°S, 137.44°E)',
    status: 'ACTIVE',
    batteryStatus: '89% (MMRTG Nuclear)',
    pressure: '740 Pa (7.4 mbar)',
    windSpeed: '3.2 m/s ESE',
  },
  opportunity: {
    id: 'opportunity',
    name: 'OPPORTUNITY',
    solActive: '5,111',
    distanceTraveled: '45.16 km',
    atmosphericTemp: '-72°C',
    landingDate: 'Jan 25, 2004',
    landingSite: 'Meridiani Planum (1.95°S, 354.47°E)',
    status: 'MISSION COMPLETED',
    batteryStatus: 'Depleted (Dust storm 2018)',
    pressure: '680 Pa (6.8 mbar)',
    windSpeed: 'Historical Record',
  },
  spirit: {
    id: 'spirit',
    name: 'SPIRIT',
    solActive: '2,210',
    distanceTraveled: '7.73 km',
    atmosphericTemp: '-80°C',
    landingDate: 'Jan 4, 2004',
    landingSite: 'Gusev Crater (14.57°S, 175.47°E)',
    status: 'MISSION COMPLETED',
    batteryStatus: 'Depleted (Winter 2010)',
    pressure: '650 Pa (6.5 mbar)',
    windSpeed: 'Historical Record',
  },
};

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  sol: string;
  camera: string;
  description: string;
  coordinates: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Perseverance at Van Zyl Overlook',
    subtitle: 'Robotic Scout & Ascending Mars Orb',
    imageUrl: '/assets/images/hero_mars_rover_panoramic_1790132830131.jpg',
    sol: 'Sol 1,280',
    camera: 'Mastcam-Z Stereo Array',
    description: 'High-resolution panorama showing the Perseverance rover with deployed sampling arm on the gravel-strewn Martian regolith, with the red planet looming above.',
    coordinates: '18.4447°N 77.4508°E',
  },
  {
    id: '2',
    title: 'Ancient River Delta in Jezero Crater',
    subtitle: 'Sedimentary Strata of Former Lake Jezero',
    imageUrl: '/assets/images/mars_jezero_crater_panorama_1790132843904.jpg',
    sol: 'Sol 1,142',
    camera: 'SuperCam Remote Micro-Imager (RMI)',
    description: 'Layered mudstones and sandstone terraces deposited billions of years ago when liquid water rushed into the 45-kilometer-wide crater basin.',
    coordinates: '18.3800°N 77.5800°E',
  },
  {
    id: '3',
    title: 'Martian Blue Twilight Sunset',
    subtitle: 'Rayleigh Scattering in Dusty Thin Sky',
    imageUrl: '/assets/images/mars_blue_sunset_1790132856633.jpg',
    sol: 'Sol 956',
    camera: 'Left Navigation Camera (Navcam)',
    description: 'Because fine dust particles in the Martian atmosphere scatter red light across the sky, only blue wavelengths penetrate directly towards the camera at sunset.',
    coordinates: '18.4112°N 77.4920°E',
  },
  {
    id: '4',
    title: 'Robotic Percussive Core Drill',
    subtitle: 'Sampling Biosignature Candidates',
    imageUrl: '/assets/images/mars_perseverance_close_drill_1790132867069.jpg',
    sol: 'Sol 1,315',
    camera: 'WATSON / SHERLOC Turret Imager',
    description: 'The 2-meter robotic arm turret presses its hollow diamond coring bit into sedimentary bedrock to extract hermetically sealed chalk-sized rock cores.',
    coordinates: '18.4321°N 77.4619°E',
  },
  {
    id: '5',
    title: 'MN -25 Rover 3D CAD Design Sample',
    subtitle: 'BUP Mars Rover Architecture (Slide 15)',
    imageUrl: '/assets/images/monpura25_cad_sample_1790136646700.jpg',
    sol: 'Sol 041',
    camera: 'SolidWorks / Fusion 360 Engineering Render',
    description: 'White and racing green chassis with 6-wheel rocker-bogie mechanism, red-rimmed sand tires, 5-DOF cycloidal robotic manipulator, and pan-tilt stereo mast camera head.',
    coordinates: '23.8103°N 90.4125°E (Dhaka Lab)',
  },
  {
    id: '6',
    title: 'UIU Mars Rover Team — AURION',
    subtitle: 'Collegiate Rover Benchmark (Slide 3)',
    imageUrl: '/assets/images/team_uiu_umrt_rover_1790136477005.jpg',
    sol: 'Sol 1,204',
    camera: 'Field Telemetry Camera',
    description: 'Flagship rover from United International University (UIU UMRT), equipped with pneumatic all-terrain tires, articulated arm, and autonomous voxel navigation.',
    coordinates: 'Hanksville, Utah (URC MDS)',
  },
  {
    id: '7',
    title: 'BUET Interplanetar — Prochesta V1.0',
    subtitle: 'Engineering Excellence (Slide 4)',
    imageUrl: '/assets/images/team_buet_interplanetar_1790136499809.jpg',
    sol: 'Sol 1,180',
    camera: 'Field Telemetry Camera',
    description: 'BUET Team Interplanetars rock-traversing rocker-bogie platform with gold and carbon-fiber linkages, geotechnical soil corer, and high-torque manipulation system.',
    coordinates: 'Kielce, Poland (ERC)',
  },
  {
    id: '8',
    title: 'GUB Mars Rover Team — Project CLADOS',
    subtitle: 'Anatolian Rover Challenge ARC 2026 Finals (Slide 7)',
    imageUrl: '/assets/images/team_gub_clados_rover_1790136569976.jpg',
    sol: 'Sol 088',
    camera: 'Competition Scrutineering Cam',
    description: 'Green University of Bangladesh Project CLADOS qualified for the Anatolian Rover Challenge 2026 Finals with an outstanding score of 88.43/100.',
    coordinates: 'Anatolia, Turkey (ARC 2026)',
  },
  {
    id: '9',
    title: 'Tsukuba Rover Team — TSUKUBA ROVER 1',
    subtitle: 'Japanese Benchmark (Slide 10-14)',
    imageUrl: '/assets/images/team_tsukuba_rover_1790136619135.jpg',
    sol: 'Sol 026',
    camera: 'Tottori Dunes Field Cam',
    description: 'University of Tsukubas 40kg rover featuring 4-wheel independent steering, custom pink sand-tread wheels, Teensy 4.1 motor controller, and ROS 2 LiDAR autonomous stack.',
    coordinates: 'Tottori Sand Dunes, Japan',
  },
];
