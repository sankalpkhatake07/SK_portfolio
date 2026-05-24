export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export const roleLoop = [
  "AI Engineer",
  "ML Engineer",
  "Generative AI Developer",
  "Computer Vision Engineer",
  "IoT Innovator",
] as const;

export const skillCategories = [
  {
    title: "AI/ML",
    skills: ["Python", "TensorFlow", "PyTorch", "Scikit-Learn"],
  },
  {
    title: "Generative AI",
    skills: ["LangChain", "RAG", "Prompt Engineering", "LLM Ops"],
  },
  {
    title: "Computer Vision",
    skills: ["OpenCV", "YOLOv8", "Image Segmentation", "Edge Vision"],
  },
  {
    title: "Full Stack",
    skills: ["Next.js", "React", "Node.js", "FastAPI"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "GitHub Actions", "Nginx"],
  },
  {
    title: "IoT",
    skills: ["Arduino", "ESP8266", "MQTT", "Sensor Fusion"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "Firebase", "PostgreSQL", "Redis"],
  },
] as const;

export const projects = [
  {
    title: "AgriAura",
    description:
      "AI-powered smart irrigation ecosystem combining sensor telemetry, weather intelligence, NDVI signals, and predictive watering control.",
    stack: ["Python", "IoT", "ESP8266", "Firebase", "AWS"],
    features: [
      "Adaptive irrigation schedules with weather-aware ML",
      "30% water savings and 45% higher irrigation accuracy",
      "Govt. of India copyright registration (LD-32050/2025-CO)",
    ],
    github: "https://github.com",
    demo: "https://github.com/sankalpkhatake07/Water_irrigation-",
  },
  {
    title: "VisionGuard",
    description:
      "AI obstacle awareness system for visually impaired users with edge inference and sensor fusion.",
    stack: ["YOLO", "OpenCV", "Raspberry Pi", "Depth Sensor", "Python"],
    features: [
      "Low-latency obstacle recognition",
      "Improved navigation assistance by 40%",
      "Govt. of India copyright registration (LD-46387/2025-CO)",
    ],
    github: "https://github.com/sankalpkhatake07/VisionGuard_project",
    demo: "https://github.com/sankalpkhatake07/VisionGuard_project",
  },
  {
    title: "Vital Monitoring System",
    description:
      "Healthcare monitoring suite with real-time vitals tracking and predictive risk scoring for proactive intervention.",
    stack: ["Python", "ML", "IoT", "ESP32", "Streamlit"],
    features: [
      "Multi-sensor health ingestion",
      "92% cardiac risk prediction accuracy",
      "Automated cloud alerts and anomaly detection",
    ],
    github: "https://github.com/sankalpkhatake07/Heartbeat-IOT",
    demo: "https://github.com/sankalpkhatake07/Heartbeat-IOT",
  },
  {
    title: "CO2 Emission Prediction",
    description:
      "Industrial emission and failure prediction system for predictive maintenance and sustainability planning.",
    stack: ["Python", "ML", "ESP32", "AWS", "Sensor Fusion"],
    features: [
      "Forecasting and what-if simulation",
      "95% fault detection accuracy",
      "Reduced unplanned downtime by 28%",
    ],
    github: "https://github.com/sankalpkhatake07/Heliosense",
    demo: "https://github.com/sankalpkhatake07/Heliosense",
  },
  {
    title: "Chain Snatching Detection",
    description:
      "Real-time surveillance intelligence system using YOLOv8 for suspicious activity detection and event alerts.",
    stack: ["YOLOv8", "OpenCV", "Flask", "WebSockets"],
    features: [
      "Live anomaly detection",
      "Instant incident notifications",
      "Forensic event tagging",
    ],
    github: "https://github.com/sankalpkhatake07/SUGARCANE_AI",
    demo: "https://github.com/sankalpkhatake07/SUGARCANE_AI",
  },
] as const;

export const experiences = [
  {
    org: "Krishi Vigyan Kendra (KVK)",
    role: "AI & IoT Innovation Intern",
    duration: "Jan 2026 - May 2026",
    technologies: ["YOLO", "Roboflow", "React", "AWS", "Firebase"],
    achievements: [
      "Built YOLO-based sugarcane disease detection and smart irrigation solution",
      "Integrated predictive analytics with full-stack dashboard workflows",
      "Delivered production-like pipeline with cloud data services",
    ],
    impact: "92% detection accuracy and 30% water efficiency improvement",
  },
  {
    org: "Uptoskill",
    role: "AI/ML Engineering Intern",
    duration: "Jan 2026 - May 2026",
    technologies: ["LangChain", "LangGraph", "YOLO", "OpenCV", "FastAPI"],
    achievements: [
      "Developed LLM, RAG, AI agent, and anomaly monitoring systems",
      "Optimized retrieval and caching pipelines for faster responses",
      "Improved real-time inference behavior for surveillance applications",
    ],
    impact: "35% retrieval speed gain and 40% inference performance boost",
  },
] as const;

export const achievements = [
  { label: "Hackathon Wins", value: 7, suffix: "+" },
  { label: "Govt Copyright Registrations", value: 2, suffix: "" },
  { label: "Students Mentored", value: 100, suffix: "+" },
  { label: "AI Model Accuracy", value: 95, suffix: "%" },
] as const;

export const certifications = [
  "Generative AI Engineering Professional",
  "Advanced Computer Vision with Deep Learning",
  "AWS Cloud Practitioner",
  "Machine Learning Specialization",
  "IoT Systems Architecture Certification",
] as const;
