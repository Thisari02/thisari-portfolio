import { Project, Skill, Experience, Education, Certification, Service, Achievement } from './types';

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ach-1',
    metric: '4+',
    label: 'Featured Software Systems',
    description: 'Designed and engineered complex IoT, analytics, monitoring, and luxury commercial platforms.',
  },
  {
    id: 'ach-2',
    metric: '95+',
    label: 'Avg Lighthouse Score',
    description: 'Optimized for high-performance loading times, seamless accessibility, and perfect SEO configurations.',
  },
  {
    id: 'ach-3',
    metric: '3+ Yrs',
    label: 'Logic & Dev Journey',
    description: 'Blending software engineering, logical teaching, corporate internships, and business management workflows.',
  },
  {
    id: 'ach-4',
    metric: '100%',
    label: 'Success Rate',
    description: 'Delivering pixel-perfect, highly operational solutions, exceeding modern design and performance guidelines.',
  }
];

export const SKILLS: Skill[] = [
  { name: 'React', level: 'Advanced', category: 'Frontend Development' },
  { name: 'TypeScript', level: 'Proficient', category: 'Frontend Development' },
  { name: 'JavaScript', level: 'Proficient', category: 'Frontend Development' },
  { name: 'HTML5', level: 'Advanced', category: 'Frontend Development' },
  { name: 'CSS3', level: 'Advanced', category: 'Frontend Development' },
  { name: 'Tailwind CSS', level: 'Proficient', category: 'Frontend Development' },
  { name: 'Vite', level: 'Proficient', category: 'Frontend Development' },
  { name: 'Responsive Web Design', level: 'Advanced', category: 'Frontend Development' },
  { name: 'Framer Motion', level: 'Intermediate', category: 'Frontend Development' },

  { name: 'Node.js', level: 'Proficient', category: 'Backend Development' },
  { name: 'Express.js', level: 'Proficient', category: 'Backend Development' },
  { name: 'REST API Development', level: 'Proficient', category: 'Backend Development' },
  { name: 'Authentication & Authorization', level: 'Intermediate', category: 'Backend Development' },
  { name: 'CRUD Operations', level: 'Proficient', category: 'Backend Development' },
  { name: 'API Validation', level: 'Intermediate', category: 'Backend Development' },
  { name: 'Role-Based Access Control (RBAC)', level: 'Intermediate', category: 'Backend Development' },

  { name: 'MongoDB', level: 'Proficient', category: 'Database' },
  { name: 'Mongoose ODM', level: 'Proficient', category: 'Database' },
  { name: 'MongoDB Schema Design', level: 'Intermediate', category: 'Database' },
  { name: 'Firebase / Firestore', level: 'Intermediate', category: 'Database' },

  { name: 'Git', level: 'Proficient', category: 'Development Tools' },
  { name: 'GitHub', level: 'Proficient', category: 'Development Tools' },
  { name: 'Postman', level: 'Proficient', category: 'Development Tools' },
  { name: 'VS Code', level: 'Proficient', category: 'Development Tools' },
  { name: 'Figma', level: 'Intermediate', category: 'Development Tools' },
  { name: 'Vercel', level: 'Proficient', category: 'Development Tools' },
  { name: 'Render', level: 'Intermediate', category: 'Development Tools' },

  { name: 'Component-Based Architecture', level: 'Proficient', category: 'Software Engineering' },
  { name: 'API Integration', level: 'Proficient', category: 'Software Engineering' },
  { name: 'System Architecture', level: 'Intermediate', category: 'Software Engineering' },
  { name: 'Security-Aware Development', level: 'Intermediate', category: 'Software Engineering' },
  { name: 'Data-Driven Architecture', level: 'Intermediate', category: 'Software Engineering' },
  { name: 'Debugging & Troubleshooting', level: 'Proficient', category: 'Software Engineering' },
  { name: 'Testing & QA', level: 'Intermediate', category: 'Software Engineering' },
  { name: 'Problem Solving', level: 'Proficient', category: 'Software Engineering' },
  { name: 'UI/UX Implementation', level: 'Proficient', category: 'Software Engineering' },
  { name: 'Performance Optimization', level: 'Intermediate', category: 'Software Engineering' }
];

export const PROJECTS: Project[] = [
  {
    id: 'ol-maths-hub',
    title: 'O/L Maths Hub | Grade 10–11',
    subtitle: 'Interactive Mathematics EdTech Platform',
    description: 'An interactive EdTech platform for Sri Lankan Grade 10–11 Mathematics, designed around structured learning, method selection, guided practice, and exam preparation.',
    longDescription: 'O/L Maths Hub is an active personal project and prototype/MVP for Sri Lankan Grade 10–11 students. It combines structured curriculum-based lessons, theory, worked examples, “Which Method?” guidance, guided practice, quizzes, exam-style questions, common-mistake analysis, quick revision, and progress tracking.\n\nThe current curriculum milestone is Grade 10 Term 1, structured into 12 topics: Perimeter, Square Root, Fractions, Binomial Expressions, Congruence of Triangles, Area, Factors of Quadratic Expressions, Triangles I, Triangles II, Inverse Proportions, Data Representation, and Least Common Multiple of Algebraic Expressions. Interactive Maths Labs are in progress, including Graph Lab, Geometry Explorer, and Solid Visualizer.',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'REST API', 'MongoDB', 'EdTech'],
    status: 'Active',
    year: '2026',
    category: 'EdTech',
    featured: true,
    role: 'Founder / Product Designer / Full-Stack Developer / Mathematics Educator',
    roleDescription: 'Defining the learning product, designing the student experience, building the full-stack architecture, and shaping curriculum-aligned Mathematics content.',
    keyFeatures: [
      'Grade 10 Term 1 curriculum with 12 integrated topics',
      'Data-driven Grade → Term → Topic → Lesson structure',
      'Interactive lessons and practice experience',
      'Method-selection learning with “Which Method?” guidance',
      'Diagnostic quizzes and progress features',
      'Exam-style questions, mistake analysis, and revision workflows',
      'Authentication/RBAC and security architecture',
      'Math Labs in development: Graph Lab, Geometry Explorer, Solid Visualizer'
    ],
    challenges: [
      'Structuring curriculum content for reusable learning flows',
      'Making method selection and worked examples clear for different learners',
      'Designing progress and diagnostic features that support revision',
      'Planning secure full-stack foundations for future content and user growth'
    ],
    solutions: [
      'Data-driven curriculum hierarchy for reusable Grade, Term, Topic, and Lesson content',
      'Interactive lesson and practice patterns focused on guided problem solving',
      'Diagnostic quiz and progress architecture for identifying learning gaps',
      'React and TypeScript frontend with a Node.js and Express.js REST API foundation'
    ],
    impact: 'Aims to make structured, practical Mathematics learning more accessible to Sri Lankan secondary students through a locally relevant digital learning experience.',
    technologiesUsed: {
      frontend: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
      backend: ['Node.js', 'Express.js', 'REST API'],
      database: ['MongoDB']
    },
    implementationStatus: {
      implemented: [
        'Grade 10 Term 1 content covering 12 integrated topics',
        'Data-driven curriculum navigation and lesson architecture',
        'Interactive lesson, practice, quiz, and progress foundations',
        'Authentication and RBAC architecture foundations',
        'Responsive student learning interface'
      ],
      prototype: [
        'AI Maths Assistant'
      ],
      inProgress: [
        'Complete Grade 10–11 curriculum',
        'Graph Lab, Geometry Explorer, and Solid Visualizer Maths Labs'
      ]
    }
  },
  {
    id: 'ceylonvolt',
    title: 'CeylonVolt',
    subtitle: 'Smart Electricity Monitoring Platform',
    description: 'A full-stack electricity monitoring and bill-management platform designed around meter readings, tariff-based bill estimation, and secure user accounts.',
    longDescription: 'CeylonVolt is a full-stack electricity monitoring and bill-management platform. Its completed core implementation includes a modular Node.js and Express.js backend with routes, controllers, services, models, middleware, REST API versioning, MongoDB/Mongoose integration, secure authentication, tariff logic, meter readings, and bill estimation.\n\nThe platform is a software project rather than a production commercial electricity service. It does not claim integration with an actual utility provider.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'TypeScript', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST API', 'JWT', 'Zod', 'Vitest', 'Swagger/OpenAPI'],
    githubUrl: 'https://github.com/Thisari02/ceylonvolt',
    status: 'Active',
    year: '2026',
    category: 'Full Stack Web Application',
    featured: true,
    videoUrl: 'https://res.cloudinary.com/fv9dk5wa/video/upload/v1784202482/Recording_2026-07-16_171644_qspqgu.mp4',
    role: 'Full-Stack Developer',
    roleDescription: 'Built the frontend and completed core backend architecture, authentication, validation, tariff/billing logic, and API documentation.',
    keyFeatures: [
      'Electricity bill calculator',
      'Meter reading tracker',
      'Tariff breakdown visualization',
      'Monthly consumption history',
      'Cost prediction',
      'Energy-saving recommendations',
      'Responsive dashboard',
      'Secure user accounts',
      'REST API and OpenAPI documentation',
      'Automated integration and boundary tests'
    ],
    challenges: [
      'Implementing Sri Lankan CEB tariff calculations accurately',
      'Handling multiple billing slabs and edge cases',
      'Designing an intuitive dashboard for complex billing information',
      'Maintaining clear boundaries across backend modules and protected routes'
    ],
    solutions: [
      'Modular tariff calculation engine',
      'Responsive React component architecture',
      'Reusable UI system',
      'Optimized state management',
      'Interactive dashboard visualizations',
      'Centralized validation, error handling, and structured logging'
    ],
    impact: 'Helps households understand electricity usage, predict future bills, and make informed decisions that reduce energy costs.',
    technologiesUsed: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      backend: ['Node.js', 'Express.js'],
      database: ['MongoDB', 'Mongoose'],
      tools: ['Zod', 'Vitest', 'Supertest', 'Swagger/OpenAPI']
    },
    implementationStatus: {
      implemented: [
        'Modular backend architecture with routes, controllers, services, models, and middleware',
        'Registration, normalized email handling, duplicate detection, secure password hashing, and login',
        'JWT verification middleware, protected routes, /auth/me, and safe user responses',
        'Zod validation, centralized error handling, structured logging, API versioning, and health endpoint',
        'Tariff and billing logic, meter readings, bill estimation, and prorated tariff calculations',
        'Automated integration/boundary tests and Swagger/OpenAPI documentation'
      ]
    }
  },
  {
    id: 'kawichchi',
    title: 'Kawichchi — Custom Furniture Platform',
    subtitle: 'Production Full-Stack Website for a Sri Lankan Furniture Business',
    description: 'A production full-stack website developed for a Sri Lankan custom furniture business, taking the project from requirements and UI/UX through API integration, database implementation, deployment, and launch.',
    longDescription: 'Kawichchi is a completed and launched full-stack business website for a Sri Lankan custom furniture company. The platform combines a premium responsive browsing experience with furniture and project showcases, gallery presentation, workshop and material storytelling, customer-focused navigation, WhatsApp inquiries, backend API integration, MongoDB content management, and production deployment.\n\nThe implementation covered business requirements, product experience, frontend development, backend integration, database work, deployment, debugging, and launch.',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'JavaScript', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'Vercel', 'Render'],
    liveUrl: 'https://kawichchi.com/',
    githubUrl: 'https://github.com/Thisari02/kawichchi-furniture',
    status: 'Completed',
    year: '2026',
    category: 'Business Website',
    role: 'Full-Stack Developer / Product Developer',
    roleDescription: 'Took the website from business requirements and UI/UX through full-stack implementation, content management functionality, deployment, debugging, and launch.',
    keyFeatures: [
      'Premium responsive website',
      'Furniture and project showcase',
      'Gallery and workshop storytelling',
      'WhatsApp inquiry integration',
      'Backend API integration',
      'MongoDB content management',
      'Production deployment and launch',
      'Responsive customer browsing experience'
    ],
    challenges: [
      'Translating a furniture business into a premium digital experience',
      'Managing dynamic project and content data',
      'Connecting customer-facing pages to backend services',
      'Preparing the application for deployment and launch'
    ],
    solutions: [
      'Component-based React architecture',
      'Tailwind CSS and responsive layout patterns',
      'REST API and MongoDB integration',
      'Reusable showcase and content components',
      'Deployment, debugging, and launch workflow'
    ],
    impact: 'Strengthens the company\'s online brand, improves customer engagement, and supports digital marketing and lead generation.',
    technologiesUsed: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js', 'Express.js'],
      database: ['MongoDB'],
      deployment: ['Vercel', 'Render']
    }
  },
  {
    id: 'elesafe',
    title: 'EleSafe',
    subtitle: 'IoT-Based Elephant Detection & Driver Alert System for Wildlife Safety',
    description: 'An IoT-based intelligent wildlife early warning detection system developed as a final-year research project to reduce road accidents involving elephants.',
    longDescription: 'An IoT-based intelligent wildlife detection system developed as a final-year research project to reduce road accidents involving elephants. The system combines multiple environmental sensors to detect elephant movement near roads and instantly notify approaching drivers through a connected mobile application.\n\nThe project demonstrates embedded systems development, real-time monitoring, IoT communication, and cloud-based data synchronization.',
    image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&q=80&w=800',
    tags: ['Flutter', 'Firebase', 'ESP32', 'C++', 'Dart', 'IoT', 'REST APIs'],
    liveUrl: 'https://elephant-alert.example.com',
    githubUrl: 'https://github.com/Thisari02/elephant-detection',
    status: 'Completed',
    year: '2025',
    category: 'IoT Research Project',
    role: 'IoT Software Research Engineer',
    roleDescription: 'Co-developed ESP32 hardware interfaces, designed the Firebase database synchronization schemas, and implemented real-time driver alert triggers.',
    keyFeatures: [
      'Multi-sensor detection',
      'Real-time alerts',
      'Mobile application',
      'Firebase integration',
      'Live monitoring',
      'Event logging',
      'Prototype hardware',
      'Cloud synchronization'
    ],
    challenges: [
      'Reducing false detections',
      'Sensor fusion',
      'Reliable real-time communication',
      'Low-latency notification delivery',
      'Outdoor environmental conditions'
    ],
    solutions: [
      'Sensor fusion using PIR, Doppler Radar, and Laser Grid',
      'ESP32 microcontroller integration',
      'Firebase cloud synchronization',
      'Optimized detection logic',
      'Real-time mobile notifications'
    ],
    impact: 'Provides an affordable wildlife protection solution that improves road safety while helping reduce human-elephant conflicts.',
    technologiesUsed: {
      hardware: ['ESP32', 'PIR Sensor', 'Doppler Radar', 'Laser Sensor'],
      software: ['Flutter', 'Firebase', 'REST APIs'],
      programming: ['C++', 'Dart']
    }
  },
  {
    id: 'edupulse',
    title: 'EduPulse',
    subtitle: 'Smart Student Dashboard for Academic Analytics & Student Performance Platform',
    description: 'A modern academic dashboard designed to centralize student information, visualize academic performance, and simplify educational data management.',
    longDescription: 'A modern academic dashboard designed to centralize student information, visualize academic performance, and simplify educational data management. The application provides interactive analytics and responsive interfaces that help users monitor progress and interpret performance metrics effectively.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://student-dashboard.example.com',
    githubUrl: 'https://github.com/Thisari02/student-dashboard',
    status: 'Completed',
    year: '2024',
    category: 'Web Application',
    featured: false,
    videoUrl: 'https://res.cloudinary.com/fv9dk5wa/video/upload/v1784203142/Screen_Recording_2026-07-16_172714_jvtv00.mp4',
    role: 'Frontend Developer',
    roleDescription: 'Created dynamic academic visualization charts, designed responsive student reporting grids, and built modular UI components.',
    keyFeatures: [
      'Student analytics dashboard',
      'Performance visualization',
      'Responsive interface',
      'Dynamic charts',
      'Search & filtering',
      'Academic reporting',
      'Clean UI',
      'Modern dashboard design'
    ],
    challenges: [
      'Organizing large datasets',
      'Building reusable dashboard components',
      'Responsive data visualization',
      'Performance optimization'
    ],
    solutions: [
      'Component-driven React architecture',
      'Efficient state management',
      'Responsive dashboard layout',
      'Optimized rendering',
      'Interactive charts'
    ],
    impact: 'Improves access to academic insights through an intuitive dashboard that enables better monitoring of student performance.',
    technologiesUsed: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS'],
      tools: ['Git', 'GitHub', 'Vercel']
    }
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'exp-1',
    role: 'Freelance Full Stack Web Developer',
    company: 'Independent Professional',
    location: 'Colombo, Sri Lanka (Remote)',
    period: '2024 – Present',
    description: [
      'Designed, developed, and maintained responsive web applications for clients using modern web technologies.',
      'Collaborated directly with clients to gather requirements, propose technical solutions, and deliver customized software products.',
      'Built reusable frontend components and integrated backend services using RESTful APIs.',
      'Implemented responsive UI/UX designs to improve usability across desktop and mobile devices.',
      'Managed application deployment, maintenance, debugging, and feature enhancements.',
      'Applied Git version control and modern software development best practices throughout the development lifecycle.'
    ],
    skillsUsed: ['React', 'Node.js', 'JavaScript', 'REST APIs', 'Responsive Design', 'Git', 'Client Communication', 'Problem Solving', 'Software Development Lifecycle']
  },
  {
    id: 'exp-2',
    role: 'Project Support Coordinator (Part-Time)',
    company: 'Kawichchi by Siriwardana (Pvt) LTD',
    location: 'Sri Lanka',
    period: 'Dec 2024 – Mar 2026',
    description: [
      'Coordinated multiple client projects by managing schedules, milestones, and project documentation.',
      'Worked closely with clients, consultants, production teams, and management to ensure timely project execution.',
      'Organized project meetings, site visits, and follow-up activities while maintaining clear communication between stakeholders.',
      'Prepared project reports, technical documentation, and progress updates for management.',
      'Monitored project timelines, identified risks, and supported issue resolution to maintain delivery schedules.',
      'Strengthened planning, organizational, communication, and coordination skills within a fast-paced project environment.'
    ],
    skillsUsed: ['Project Coordination', 'Stakeholder Management', 'Documentation', 'Client Communication', 'Planning', 'Problem Solving', 'Team Collaboration']
  },
  {
    id: 'exp-3',
    role: 'IT Intern',
    company: 'SunTech Information Systems (Pvt) Ltd',
    location: 'Sri Lanka',
    period: 'Nov 2022 – Mar 2023',
    description: [
      'Supported software testing activities by identifying, documenting, and tracking application defects.',
      'Assisted in system documentation, technical support, and software maintenance activities.',
      'Participated in quality assurance processes to improve software reliability and system performance.',
      'Collaborated with technical teams to troubleshoot issues and verify software functionality.',
      'Gained practical exposure to professional software development workflows, quality assurance, and system reliability practices.'
    ],
    skillsUsed: ['Software Testing', 'Quality Assurance', 'Documentation', 'Technical Support', 'Troubleshooting', 'Team Collaboration']
  },
  {
    id: 'exp-4',
    role: 'English Medium Mathematics Tutor',
    company: 'O14 Institute',
    location: 'Sri Lanka',
    period: 'Dec 2025 – Present',
    description: [
      'Deliver engaging Mathematics lessons to secondary students using structured, problem-solving approaches.',
      'Design lesson plans, assessments, and revision resources tailored to different learning abilities.',
      'Monitor student performance, analyze learning progress, and provide individualized academic guidance.',
      'Simplify complex mathematical concepts into clear, practical explanations to improve student understanding.',
      'Strengthened analytical thinking, logical reasoning, communication, and presentation skills through continuous teaching practice.'
    ],
    skillsUsed: ['Analytical Thinking', 'Logical Reasoning', 'Communication', 'Presentation', 'Planning', 'Problem Solving']
  },
  {
    id: 'exp-5',
    role: 'English Medium Mathematics & ICT Tutor',
    company: 'Sciencom Education (Pvt) Ltd',
    location: 'Sri Lanka',
    period: 'Jun 2023 – Nov 2025',
    description: [
      'Conducted Mathematics and ICT lessons for junior secondary students in English medium.',
      'Designed interactive learning activities and practical exercises to improve student engagement.',
      'Supported students in developing logical reasoning, computational thinking, and problem-solving skills.',
      'Assisted students in achieving improved academic performance through structured revision programs.',
      'Developed strong classroom management, leadership, communication, and mentoring skills.'
    ],
    skillsUsed: ['Teaching', 'Logical Thinking', 'ICT Fundamentals', 'Leadership', 'Communication', 'Mentoring']
  }
];

export const EDUCATION: Education[] = [
  {
    id: 'edu-1',
    degree: 'BSc (Hons) in Information Technology',
    institution: 'University of West London, UK (via ANC)',
    period: '2025 - 2026',
    schoolTag: 'UWL, UK',
    details: [
      'Specialized in strategic software development, database intelligence systems, and enterprise security management.',
      'Completed Modules: Managing Information Systems Projects, Business Intelligence Technologies, Databases and Analytics, Enterprise Security Management'
    ],
    achievements: [
      'First Class Honors',
      'Final Year Project: IoT-based Elephant Detection System with Firebase and Mobile Application'
    ]
  },
  {
    id: 'edu-2',
    degree: 'Pearson BTEC Higher National Diploma (HND) in Computing',
    institution: 'CINEC Campus',
    period: '2022 - 2024',
    schoolTag: 'CINEC CAMPUS',
    details: [
      'Established solid foundations in algorithmic logic, discrete mathematics, and secure system architectures.',
      'Focus Areas: Programming, Database Design, Business Intelligence, Data Structures, Networking, Math for computing, Security, Website Design, discrete math'
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-1',
    title: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Meta (via Coursera)',
    date: '2024',
    iconName: 'Meta',
    credentialUrl: 'https://coursera.org'
  },
  {
    id: 'cert-2',
    title: 'React Software Developer Specialist',
    issuer: 'HackerRank Academic Certification',
    date: '2024',
    iconName: 'Atom',
    credentialUrl: 'https://hackerrank.com'
  },
  {
    id: 'cert-3',
    title: 'Responsive Web Design Professional License',
    issuer: 'freeCodeCamp Org',
    date: '2023',
    iconName: 'Wind',
    credentialUrl: 'https://freecodecamp.org'
  },
  {
    id: 'cert-4',
    title: 'JavaScript Algorithms and Data Structures Core',
    issuer: 'freeCodeCamp Org',
    date: '2023',
    iconName: 'FileCode',
    credentialUrl: 'https://freecodecamp.org'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'srv-1',
    title: 'Frontend Development',
    description: 'Engineering breath-taking, responsive, interactive single-page interfaces utilizing ultra-clean Tailwind grids and fluid Framer animation sequences.',
    iconName: 'Atom',
    features: ['React & TypeScript standard architecture', 'Pixel-perfect, high-performance styling', 'Motion transitions & scrolling effects', 'Optimal Lighthouse SEO scores']
  },
  {
    id: 'srv-2',
    title: 'Full Stack Systems',
    description: 'Formulating end-to-end web software. Bridging fluid UX states to fast Node/Express servers, secure REST endpoints, and optimized modern databases.',
    iconName: 'Layers',
    features: ['Express server construction', 'Secure API design & token authorization', 'Structured database schemas (Postgres/Mongo)', 'Deployment and container orchestration']
  },
  {
    id: 'srv-3',
    title: 'Luxury Brand Showcase',
    description: 'Transforming premium products and agencies into highly customized digital masterpieces that command client authority and highlight attention to detail.',
    iconName: 'Sparkles',
    features: ['Glassmorphic product presentation', 'Advanced interactive scrolling reveal mechanics', 'Dynamic inventory and media compression', 'High-end layout framing']
  }
];
