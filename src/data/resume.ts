export const resume = {
    personalInfo: {
        name: "Ram Narayan",
        role: "Software Engineer",
        email: "ramj94907@gmail.com",
        phone: "8800977531",
        location: "Delhi, India",
        linkedin: "https://linkedin.com/in/ramn1997",
        github: "https://github.com/ramn1997",
        summary: "Dedicated and experienced Software Engineer with 5+ years building secure, scalable web applications using Angular and ASP.NET Core. Expertise in microservices, REST APIs, JWT-based authentication, SQL databases, and core data structures. Proven ability to improve application performance, strengthen API security, and deliver business-critical solutions in Agile environments.",
    },
    skills: {
        languages: ["C#", "JavaScript", "TypeScript", "SQL", "Python"],
        frontend: ["Angular (v12-15)", "React(Beginner v19)", "HTML5", "CSS3", "jQuery", "Chart.js", "Kendo UI", "PrimeNG"],
        backend: ["ASP.NET Core", "ASP.NET MVC", "REST APIs", "WCF", "Microservices", "JWT", "Entity Framework Core", "LINQ", "CQRS"],
        database: ["MS SQL Server", "PostgreSQL"],
        cloudAndTools: ["Azure", "Azure App Service", "Azure DevOps", "Azure Function", "Azure Blob Storage", "Docker", "RabbitMQ", "Git", "Microsoft Dynamics 365", "PowerApps", "Power Automate", "Postman", "Swagger", "XUnit"],
        coreCompetencies: ["Data Structures & Algorithms", "API Security", "Performance Optimization", "System Design"]
    },
    experience: [
        {
            id: 1,
            role: "Senior Software Engineer",
            company: "Gallagher",
            location: "Gurugram, India",
            duration: "March 2026 – Present",
            achievements: [
                "Developed secure and scalable Insurance Marketplace applications using ASP.NET Core, Angular, and SQL Server.",
                "Implemented JWT authentication and RBAC to secure distributed systems and prevent unauthorized access",
                "Integrated Azure Key Vault for secure secret management and Serilog for centralized logging and monitoring",
                "Automated application deployments and release processes using Azure DevOps CI/CD pipelines while following Agile development practices"
            ]
        },
        {
            id: 2,
            role: "Software Developer",
            company: "Birlasoft Limited",
            location: "Noida, India",
            duration: "Jan 2022 – March 2026",
            achievements: [
                "Designed scalable enterprise microservices with secure REST APIs supporting high-concurrency and real-time processing for Fortune 500 clients",
                "Implemented JWT authentication and RBAC to secure distributed systems and prevent unauthorized access",
                "Improved application response time by 25% through SQL optimization, caching, and indexing",
                "Migrated monolithic applications to Angular SPA, reducing UI load time by 40% for 10,000+ users",
                "Integrated microservices and third-party APIs using RabbitMQ for reliable messaging",
                "Provided L2 production support, resolving issues and maintaining 99.5% uptime SLA"
            ]
        },
        {
            id: 3,
            role: "Trainee Software Engineer",
            company: "RMSI Private Limited",
            location: "Noida, India",
            duration: "Jan 2021 – Aug 2021",
            achievements: [
                "Developed full-stack modules using ASP.NET MVC, PostgreSQL, and JavaScript with secure authentication",
                "Designed RESTful APIs and responsive UI components improving data reporting accuracy by 35%",
                "Worked in Agile teams to deliver features and enhancements in iterative release cycles"
            ]
        },
        {
            id: 4,
            role: "Associate Software Engineer",
            company: "IDEMIA",
            location: "Noida, India",
            duration: "Dec 2019 – Sep 2020",
            achievements: [
                "Built responsive web interfaces using ASP.NET MVC for global portals; secured backend with OAuth and SQL Server",
                "Optimized database queries using Entity Framework, improving application performance by 20%",
                "Partnered with QA teams to ensure secure, stable, and production-ready releases."
            ]
        }
    ],
    projects: [
        {
            title: "Gallagher Insurance Marketplace",
            role: "Senior Developer",
            duration: "March 2026 - Present",
            tech: ["ASP.NET Core", "Angular", "SQL Server", "JWT", "Azure DevOps"],
            description: "High-concurrency Insurance Marketplace application serving scalable broker transactions, JWT security & automated DevOps pipelines.",
            featured: true,
            badge: "Current / Most Active Contribution",
            metrics: ["Scalable Broker Transactions", "99.9% Uptime", "Automated CI/CD"]
        },
        {
            title: "HP CDAX Automation Platform",
            role: "Full Stack Developer",
            duration: "Jun 2023 - Aug 2024",
            tech: ["Dynamics 365", "ASP.NET Core", "Azure DevOps", "Azure Functions", "Azure Blob"],
            description: "Built customer support automation system using Dynamics 365 & Azure microservices for enterprise workflows.",
            featured: true,
            badge: "Key Enterprise Impact",
            metrics: ["35% Faster Resolution", "Fortune 500 Enterprise Scale"]
        },
        {
            title: "Conduent Payment Integrity Platform",
            role: "Full Stack Developer",
            duration: "Oct 2022 - Jun 2023",
            tech: ["Angular 15", "ASP.NET Core", "Azure DevOps", "Azure Blob", "Kendo UI"],
            description: "Developed high-throughput healthcare payment recovery platform processing massive annual insurance claim volumes.",
            featured: true,
            badge: "High Financial Scale",
            metrics: ["$10M+ Annual Claims", "10,000+ Active Users"]
        },
        {
            title: "Progress Rail Business Tools",
            role: "Developer",
            duration: "Sep 2024 - Nov 2025",
            tech: ["PowerApps", "Power Automate", "K2"],
            description: "Migrated legacy K2 business applications to PowerApps and Power Automate, modernizing workflow automation for rail operations."
        },
        {
            title: "Conduent Credit Balance",
            role: "Full Stack Developer",
            duration: "Jan 2022 - Oct 2022",
            tech: ["Angular 12", "PrimeNG", "ASP.NET Core", "Azure DevOps", "Azure Services", "Azure Blob"],
            description: "Modernized legacy healthcare claims tools improving transparency for insurance providers."
        },
        {
            title: "ANRiN",
            role: "Full Stack Developer",
            duration: "Jan 2021 - Aug 2021",
            tech: ["ASP.NET MVC", "PostgreSQL", "jQuery", "Chart.js"],
            description: "Built nutrition service delivery platform for Nigeria’s health sector serving 5,000+ healthcare workers."
        },
        {
            title: "Infinity Global BAP Portal",
            role: "Developer",
            duration: "Jan 2020 - Sep 2020",
            tech: ["ASP.NET MVC", "SQL Server", "Windows application", "WPF"],
            description: "Delivered SIM card monitoring and management portal streamlining operations across multiple regions."
        }
    ],
    personalProjects: [
        {
            title: "Cross-Platform Mobile App (Android/iOS)",
            description: "Feature-rich mobile application built with React Native / Android SDK, consuming ASP.NET Core REST APIs with offline caching, push notifications, and biometric auth.",
            tech: ["React Native", "Android", "TypeScript", "REST API", "AsyncStorage"],
            githubUrl: "https://github.com/ramn1997/mobile-app-starter",
            stars: 34,
            forks: 11,
            commits: 110,
            contributions: "Mobile Application Repository",
            featured: true,
            badge: "📱 Mobile App (GitHub)"
        },
        {
            title: "Microservices Auth Gateway",
            description: "Secure ASP.NET Core API Gateway featuring JWT Bearer authentication, Role-Based Access Control (RBAC), rate limiting, and Azure Key Vault secret management.",
            tech: ["C#", "ASP.NET Core", "JWT", "Azure Key Vault", "Docker"],
            githubUrl: "https://github.com/ramn1997/microservices-auth-gateway",
            stars: 28,
            forks: 9,
            commits: 142,
            contributions: "Most Contributed Backend Repo",
            featured: true,
            badge: "🔥 Top Contributed Backend Repo"
        },
        {
            title: "DevPortfolio & Resume Engine",
            description: "Modern, high-performance developer portfolio built with React, Vite, Framer Motion, and automated PDF generation for instant recruiter downloads.",
            tech: ["React", "TypeScript", "Vite", "Framer Motion", "CSS3"],
            githubUrl: "https://github.com/ramn1997/portfolio",
            stars: 12,
            forks: 4,
            commits: 85,
            contributions: "Most Active Frontend Repo",
            featured: true,
            badge: "⭐ Active GitHub Project"
        },
        {
            title: "Angular Enterprise Starter Kit",
            description: "Production-ready Angular SPA template featuring RxJS state management, PrimeNG UI components, lazy loading, and automated CI/CD build scripts.",
            tech: ["Angular 15", "TypeScript", "RxJS", "PrimeNG", "SCSS"],
            githubUrl: "https://github.com/ramn1997/angular-enterprise-starter",
            stars: 19,
            forks: 6,
            commits: 64,
            contributions: "High Contribution SPA Template",
            featured: true,
            badge: "🚀 Enterprise Architecture Template"
        },
        {
            title: "Iris Recognition Analyzer",
            description: "Biometric pattern analysis tool developed for computer vision research published at NCNCAC conference.",
            tech: ["Python", "OpenCV", "SQL", "Data Structures"],
            githubUrl: "https://github.com/ramn1997/iris-recognition-analysis",
            stars: 15,
            forks: 5,
            commits: 38,
            contributions: "Research & Vision Project",
            featured: false
        }
    ],
    education: [
        {
            institution: "Manav Rachna International Institute of Research & Studies",
            degree: "Bachelor of Technology in Computer Science (Cyber Security & Forensics - IBM)",
            year: "Jul 2015 – Jun 2019",
            details: "CGPA: 6.7/10"
        }
    ],
    achievements: [
        "Smart India Hackathon 2019: National finalist among 10,000+ teams",
        "Research: Published \"Analysis of Iris Recognition\" at NCNCAC"
    ],
    certifications: [
        "Generative AI",
        "Building AI Agents",
        "Data Structures & Algorithms",
        "Microsoft SQL Server",
        "Azure",
        "Android Training (IBM)"
    ]
};
