export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tools: string[];
  duration: string;
  category: string;
  objectives: string[];
  deliverables: string[];
  prerequisites: string[];
}

export interface Tool {
  name: string;
  logo?: string;
  color: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "asic-design-flow",
    title: "ASIC Design Flow Implementation",
    description: "Complete RTL to GDSII flow using industry-standard tools for digital circuit design.",
    longDescription: "This project takes you through the complete ASIC design flow — from writing RTL code in Verilog to generating the final GDSII layout. You'll work with industry-standard EDA tools used by top semiconductor companies, gaining hands-on experience with synthesis, placement, routing, and verification stages.",
    tools: ["Cadence", "Synopsys", "Verilog"],
    duration: "8 weeks",
    category: "VLSI / RTL Design",
    objectives: ["Understand the complete ASIC design flow from RTL to GDSII", "Write synthesizable Verilog RTL code", "Perform logic synthesis using Synopsys Design Compiler", "Complete physical design using Cadence Innovus"],
    deliverables: ["Synthesizable RTL design with testbench", "Synthesis reports (area, timing, power)", "Physical layout (GDSII)", "Final project report with documentation"],
    prerequisites: ["Basic knowledge of digital electronics", "Fundamentals of Verilog HDL", "Understanding of logic gates and flip-flops"],
  },
  {
    id: 2,
    slug: "advanced-pcb-design-iot",
    title: "Advanced PCB Design for IoT",
    description: "Multi-layer PCB design with signal integrity analysis for IoT applications.",
    longDescription: "Design a professional-grade multi-layer PCB for an IoT device from schematic capture to manufacturing-ready output. This project covers component selection, schematic design, multi-layer stackup planning, high-speed signal routing, and signal integrity analysis — all using industry-standard PCB design tools.",
    tools: ["KiCad", "Altium", "Proteus"],
    duration: "6 weeks",
    category: "PCB Design",
    objectives: ["Design multi-layer PCB stackups for IoT devices", "Perform schematic capture and component footprint design", "Route high-speed signals with impedance control", "Run DRC and generate Gerber files for manufacturing"],
    deliverables: ["Complete schematic design", "Multi-layer PCB layout with Gerber files", "Bill of Materials (BOM)", "Signal integrity analysis report"],
    prerequisites: ["Basic electronics and circuit theory", "Understanding of passive and active components", "Familiarity with any PCB design tool is a plus"],
  },
  {
    id: 3,
    slug: "smart-home-automation",
    title: "Smart Home Automation System",
    description: "IoT-based home automation with cloud integration and mobile app control.",
    longDescription: "Build a complete smart home automation system from scratch — integrating sensors, actuators, microcontrollers, and cloud platforms. You'll develop firmware for embedded devices, set up MQTT-based communication, and create a mobile-friendly dashboard for remote monitoring and control.",
    tools: ["Arduino", "Python", "MQTT"],
    duration: "10 weeks",
    category: "Embedded & IoT",
    objectives: ["Design and prototype an IoT-based home automation system", "Implement MQTT communication between devices and cloud", "Develop sensor data acquisition and actuator control firmware", "Build a web-based dashboard for real-time monitoring"],
    deliverables: ["Working hardware prototype with sensors and actuators", "Firmware source code for microcontroller", "Cloud-connected web dashboard", "System architecture documentation"],
    prerequisites: ["Basic programming in C/C++ or Python", "Fundamentals of electronics", "Interest in IoT and embedded systems"],
  },
  {
    id: 4,
    slug: "5g-communication-protocol",
    title: "5G Communication Protocol",
    description: "Implementation of 5G NR physical layer using MATLAB and SDR platforms.",
    longDescription: "Dive deep into 5G NR (New Radio) physical layer implementation. You'll model and simulate key 5G building blocks — OFDM modulation, LDPC/Polar coding, beamforming, and MIMO channels — using MATLAB/Simulink, and validate your designs on Software Defined Radio (SDR) platforms.",
    tools: ["MATLAB", "Simulink", "SDR"],
    duration: "12 weeks",
    category: "Communication Systems",
    objectives: ["Understand 5G NR physical layer architecture", "Implement OFDM modulation and demodulation in MATLAB", "Simulate LDPC and Polar coding schemes", "Validate designs on SDR hardware"],
    deliverables: ["MATLAB simulation scripts and Simulink models", "BER performance analysis reports", "SDR implementation demo", "Technical documentation and presentation"],
    prerequisites: ["Signals and systems fundamentals", "Basic knowledge of digital communication", "MATLAB programming basics"],
  },
  {
    id: 5,
    slug: "autonomous-navigation-robot",
    title: "Autonomous Navigation Robot",
    description: "AI-powered robot with computer vision and path planning algorithms.",
    longDescription: "Design and build an autonomous mobile robot that can perceive its environment through cameras and sensors, plan optimal paths, and navigate obstacles in real time. This project combines robotics, computer vision, and AI to create a fully autonomous system using ROS (Robot Operating System).",
    tools: ["Python", "OpenCV", "ROS"],
    duration: "14 weeks",
    category: "Robotics & AI/ML",
    objectives: ["Build a mobile robot platform with motor control", "Implement computer vision for obstacle detection using OpenCV", "Develop path planning algorithms (A*, RRT)", "Integrate all modules using ROS framework"],
    deliverables: ["Working autonomous robot prototype", "ROS packages for perception and navigation", "Computer vision pipeline code", "Demo video and project report"],
    prerequisites: ["Python programming", "Basic understanding of robotics concepts", "Linear algebra fundamentals"],
  },
  {
    id: 6,
    slug: "fpga-image-processing",
    title: "FPGA-Based Image Processing",
    description: "Real-time image processing implementation on FPGA using Verilog HDL.",
    longDescription: "Implement real-time image processing algorithms directly on FPGA hardware. You'll design hardware modules for image filtering, edge detection, and color space conversion in Verilog HDL, synthesize them onto a Xilinx FPGA, and interface with a camera module for live video processing.",
    tools: ["Vivado", "Verilog", "Xilinx"],
    duration: "10 weeks",
    category: "Final Year Projects",
    objectives: ["Design image processing pipelines in Verilog HDL", "Implement filters (Gaussian, Sobel, Median) in hardware", "Interface FPGA with camera and display modules", "Achieve real-time processing at target frame rates"],
    deliverables: ["Verilog RTL source code with testbenches", "Vivado synthesis and implementation reports", "Working FPGA demo with live video", "Final year project report"],
    prerequisites: ["Digital electronics fundamentals", "Verilog HDL basics", "Understanding of image processing concepts"],
  },
  {
    id: 7,
    slug: "low-power-vlsi-design",
    title: "IEEE: Low Power VLSI Design",
    description: "Research-oriented project on power optimization techniques in VLSI circuits.",
    longDescription: "This IEEE research-oriented project focuses on advanced low-power design techniques for VLSI circuits. You'll explore clock gating, multi-threshold voltage design, power gating, and dynamic voltage scaling — then implement and verify these techniques using industry-standard EDA tools, culminating in an IEEE-format research paper.",
    tools: ["Cadence", "Synopsys", "SPICE"],
    duration: "16 weeks",
    category: "IEEE / Non-IEEE",
    objectives: ["Study state-of-the-art low-power VLSI techniques", "Implement power optimization at RTL and gate level", "Perform power analysis using SPICE simulations", "Write and submit an IEEE-format research paper"],
    deliverables: ["Optimized low-power circuit design", "SPICE simulation results and power reports", "IEEE-format research paper draft", "Conference presentation slides"],
    prerequisites: ["VLSI design fundamentals", "Basic understanding of CMOS technology", "Technical writing skills"],
  },
  {
    id: 8,
    slug: "dsp-system",
    title: "Digital Signal Processing System",
    description: "Real-time DSP implementation for audio and video processing applications.",
    longDescription: "Build a real-time digital signal processing system on an ARM-based microcontroller. You'll implement DSP algorithms for audio filtering, FFT analysis, and noise cancellation — first prototyping in MATLAB, then porting optimized C code to an ARM Cortex-M processor using Keil development tools.",
    tools: ["MATLAB", "Keil", "ARM"],
    duration: "8 weeks",
    category: "Communication Systems",
    objectives: ["Design and simulate DSP algorithms in MATLAB", "Implement FIR/IIR filters and FFT on ARM Cortex-M", "Optimize DSP code for real-time performance", "Interface ADC/DAC for audio signal processing"],
    deliverables: ["MATLAB simulation scripts", "Embedded C source code for ARM", "Working hardware demo with audio I/O", "Performance benchmarking report"],
    prerequisites: ["Signals and systems basics", "C programming", "Basic understanding of microcontrollers"],
  },
];

export const tools: Tool[] = [
  { name: "Cadence", color: "#ED2224" },
  { name: "Synopsys", color: "#6D2077" },
  { name: "Verilog", color: "#4B8BBE" },
  { name: "Vivado", color: "#EE7623" },
  { name: "KiCad", logo: "https://cdn.simpleicons.org/kicad", color: "#314CB0" },
  { name: "MATLAB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg", color: "#E16737" },
  { name: "Python", logo: "https://cdn.simpleicons.org/python", color: "#3776AB" },
  { name: "Arduino", logo: "https://cdn.simpleicons.org/arduino", color: "#00878F" },
  { name: "Keil", logo: "https://cdn.simpleicons.org/armkeil", color: "#394049" },
  { name: "Proteus", logo: "https://cdn.simpleicons.org/proteus", color: "#00A1E0" },
  { name: "Altium", color: "#A5915F" },
  { name: "Xilinx", color: "#E01F27" },
];

export const categories = [
  "VLSI / RTL Design",
  "PCB Design",
  "Embedded & IoT",
  "Communication Systems",
  "Robotics & AI/ML",
  "Final Year Projects",
  "IEEE / Non-IEEE",
];
