export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const stats = [
  { value: 10, suffix: '+', label: 'Projects Completed' },
  { value: 100, suffix: '+', label: 'Students Taught' },
  { value: 2, suffix: '+', label: 'Years Teaching' },
  { value: 1, suffix: '', label: 'Cybersecurity Internship' },
];

export const skills = [
  {
    category: 'Frontend',
    color: '#00F5FF',
    items: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'React', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    category: 'Backend',
    color: '#7C3AED',
    items: [
      { name: 'Node.js', level: 75 },
      { name: 'Express.js', level: 72 },
    ],
  },
  {
    category: 'Database',
    color: '#00FFA3',
    items: [
      { name: 'MongoDB', level: 70 },
      { name: 'MySQL', level: 72 },
    ],
  },
  {
    category: 'Programming',
    color: '#F59E0B',
    items: [
      { name: 'Java', level: 80 },
      { name: 'Python', level: 65 },
      { name: 'C++', level: 60 },
    ],
  },
  {
    category: 'Tools',
    color: '#EC4899',
    items: [
      { name: 'Git', level: 85 },
      { name: 'GitHub', level: 85 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 75 },
    ],
  },
  {
    category: 'Cybersecurity',
    color: '#EF4444',
    items: [
      { name: 'Kali Linux', level: 65 },
      { name: 'Wireshark', level: 60 },
      { name: 'Nmap', level: 65 },
      { name: 'Metasploit', level: 55 },
      { name: 'Burp Suite', level: 58 },
    ],
  },
];

export const projects = [
  {
    title: 'KU Campus Navigator',
    description: 'Mobile application helping students navigate and explore Karachi University campus with real-time maps, department locations, and interactive navigation.',
    longDesc: 'A comprehensive mobile solution designed to help new and existing students navigate the vast Karachi University campus effortlessly.',
    features: ['Interactive Maps', 'User Authentication', 'Department Navigation', 'Mobile-First UI'],
    tech: ['React Native', 'Firebase', 'Maps API'],
    color: '#00F5FF',
    gradient: 'from-cyan-500/20 to-blue-600/20',
    icon: '🗺️',
    github: 'https://github.com/talhaobaidafzal/KUNav',
    demo: '#',
    featured: true,
  },
  {
    title: 'Hospital Management System',
    description: 'Object-oriented Java desktop application for managing patients, appointments, and medical records with a full GUI and MySQL integration.',
    longDesc: 'A complete hospital management solution built with Java OOP principles, featuring patient management, appointment scheduling, and data persistence.',
    features: ['Patient Management', 'Appointment Scheduling', 'Database Integration', 'Full GUI'],
    tech: ['Java', 'MySQL', 'OOP', 'Swing'],
    color: '#7C3AED',
    gradient: 'from-purple-500/20 to-pink-600/20',
    icon: '🏥',
    github: 'https://github.com/talhaobaidafzal/HMS_GUI',
    demo: '#',
    featured: true,
  },
  {
    title: 'AI Student Assistant',
    description: 'AI-powered educational assistant that helps students learn efficiently through intelligent question answering, learning recommendations, and study assistance.',
    longDesc: 'A smart educational platform leveraging AI APIs to provide personalized learning experiences and instant academic help.',
    features: ['Question Answering', 'Learning Assistance', 'Smart Recommendations', 'Progress Tracking'],
    tech: ['React', 'Node.js', 'AI APIs', 'Express'],
    color: '#00FFA3',
    gradient: 'from-emerald-500/20 to-teal-600/20',
    icon: '🤖',
    github: 'https://github.com/talhaobaidullah',
    demo: '#',
    featured: true,
  },
];

export const experiences = [
  {
    role: 'Cybersecurity Intern',
    company: 'Redynox',
    period: '2025',
    location: 'Karachi, Pakistan',
    description: 'Completed a hands-on cybersecurity internship gaining practical experience in network security, vulnerability assessment, and ethical hacking techniques.',
    responsibilities: [
      'Performed network scanning and reconnaissance using Nmap and Wireshark',
      'Conducted vulnerability assessments on test environments',
      'Practiced ethical hacking techniques using Metasploit and Burp Suite',
      'Analyzed network traffic and identified potential security threats',
      'Worked with Kali Linux as primary security testing platform',
    ],
    color: '#EF4444',
  },
  {
    role: 'Computer Science Teacher',
    company: 'Educational Institution',
    period: '2022 – Present',
    location: 'Karachi, Pakistan',
    description: 'Teaching Computer Science, Programming concepts, and Problem Solving to students at various levels.',
    responsibilities: [
      'Designed and delivered engaging Computer Science curriculum',
      'Taught programming concepts including Python, Java, and web development',
      'Mentored 100+ students through practical coding projects',
      'Developed problem-solving skills through hands-on exercises',
      'Created learning materials and resources for students',
    ],
    color: '#00F5FF',
  },
];

export const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Karachi',
    period: '2023 – Expected 2027',
    location: 'Karachi, Pakistan',
    description: 'Pursuing a comprehensive CS degree covering algorithms, data structures, software engineering, and modern computing technologies.',
    badge: 'GPA: 3.4 / 4.0',
    color: '#7C3AED',
    icon: '🎓',
  },
  {
    degree: 'Intermediate (Pre-Engineering)',
    institution: 'Bahria College Karsaz',
    period: '2021 – 2023',
    location: 'Karachi, Pakistan',
    description: 'Completed Intermediate education under the Federal Board of Intermediate and Secondary Education (FBISE) with a strong academic record.',
    badge: 'Federal Board — 80%',
    color: '#00F5FF',
    icon: '🏫',
  },
];

export const achievements = [
  { title: '100+ Students Taught', desc: 'Impacted over 100 students through CS education', icon: '👨‍🏫', color: '#00F5FF' },
  { title: 'Multiple Projects Built', desc: 'Developed real-world full-stack applications', icon: '💻', color: '#7C3AED' },
  { title: 'Computer Science Educator', desc: 'Teaching programming and CS fundamentals', icon: '📚', color: '#00FFA3' },
  { title: 'Full Stack Journey', desc: 'Mastering end-to-end web development', icon: '🚀', color: '#F59E0B' },
  { title: 'Cybersecurity Internship', desc: 'Hands-on security training at Redynox', icon: '🛡️', color: '#EF4444' },
];

export const currentLearning = [
  { title: 'Artificial Intelligence', progress: 40, icon: '🧠', color: '#00F5FF' },
  { title: 'Advanced React', progress: 70, icon: '⚛️', color: '#7C3AED' },
  { title: 'React Native', progress: 55, icon: '📱', color: '#00FFA3' },
  { title: 'Backend Architecture', progress: 50, icon: '🏗️', color: '#F59E0B' },
  { title: 'System Design', progress: 35, icon: '📐', color: '#EC4899' },
  { title: 'Cybersecurity', progress: 60, icon: '🛡️', color: '#EF4444' },
];

export const timeline = [
  { year: '2020', label: 'HTML & CSS', color: '#00F5FF' },
  { year: '2021', label: 'JavaScript', color: '#F7DF1E' },
  { year: '2022', label: 'React', color: '#61DAFB' },
  { year: '2022', label: 'Teaching CS', color: '#7C3AED' },
  { year: '2023', label: 'Full Stack Dev', color: '#00FFA3' },
  { year: '2024', label: 'AI Exploration', color: '#F59E0B' },
  { year: '2025', label: 'Cybersecurity Internship', color: '#EF4444' },
];
