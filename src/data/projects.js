export const projectsData = [
  {
    id: "sneakers-shop",
    title: "Sneakers Shop",
    tagline: "Modern E-Commerce Web Application",
    category: "Full-Stack / React",
    description:
      "A complete e-commerce style web application built with React.js, featuring product browsing, category filtering, cart management, search functionality, quantity controls and checkout flow.",
    technologies: ["React.js", "JavaScript", "CSS", "Local Storage"],
    features: [
      "Product browsing with detailed cards and high-res imagery",
      "Dynamic Men / Women and category filtering system",
      "Instant real-time search across inventory",
      "Full shopping cart state management with badge counters",
      "Real-time quantity increment/decrement and price calculation",
      "Interactive checkout flow with order summary",
      "Fluid responsive layout optimized for mobile and desktop",
      "Persistent cart state using browser Local Storage"
    ],
    demoUrl: null, // Placeholder as instructed
    githubUrl: "https://github.com/Mathan-dev2006",
    status: "Completed Project",
    year: "2025–2026",
    caseStudy: {
      overview:
        "Sneakers Shop is an interactive e-commerce web application engineered to solve state synchronicity and seamless shopping UX on the client side. It was developed to practice scalable React component architecture, robust cart state management, and real-time client filtering.",
      problem:
        "Building e-commerce interfaces requires handling multiple independent yet synchronized UI states: instant search without lag, category filtering that updates URL or active views, and a shopping cart that persists across refreshes while accurately calculating totals and quantities.",
      approach:
        "Adopted a modular component-driven architecture in React.js. Created dedicated state hooks for cart actions (add, remove, update quantity, clear), memoized filtered product lists for snappy search performance, and synchronized cart storage with the browser's Local Storage API.",
      developmentProcess: [
        "Architected reusable component tree: Header, ProductGrid, ProductCard, FilterBar, CartDrawer, and CheckoutModal.",
        "Implemented clean state management flow passing actions via custom callbacks and state containers.",
        "Engineered live search and category pills with debounced filtering logic.",
        "Integrated Local Storage hydration on initial load with fallback defaults.",
        "Styled custom responsive CSS grid with subtle hover elevations and smooth transitions."
      ],
      challenges:
        "Handling edge cases in shopping cart updates—such as preventing negative item counts, smoothly updating totals when item quantities change rapidly, and keeping the UI responsive on smaller mobile screens.",
      whatILearned:
        "Gained deep hands-on mastery of React hooks (useState, useEffect, useMemo), state lifting, immutable state updates, responsive grid layouts, and managing persistent browser storage reliably."
    }
  },
  {
    id: "personal-portfolio",
    title: "Personal Developer Portfolio",
    tagline: "Bespoke Editorial Developer Experience",
    category: "Frontend / React",
    description:
      "Personal developer portfolio designed to showcase projects, technical skills and career information with a responsive modern interface.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Vite"],
    features: [
      "Deep charcoal dark developer aesthetic with hairline borders",
      "Interactive Hero featuring a VS Code-style syntax-highlighted code editor",
      "Accessible modal dialogs for in-depth project case studies",
      "Honest skill categorization without misleading percentage bars",
      "Learning & development journey timeline",
      "Client-side validated contact form with copy-to-clipboard email action",
      "Full keyboard navigation and prefers-reduced-motion support",
      "Zero layout shift, fast initial load, and complete responsive layout"
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/Mathan-dev2006",
    status: "Live Production",
    year: "2026",
    caseStudy: {
      overview:
        "This portfolio serves as an authentic representation of my journey as a 2026 B.Com Computer Applications graduate transitioning into Full-Stack and MERN development. Every section is designed to communicate technical competence honestly and cleanly.",
      problem:
        "Many junior developer portfolios rely on generic templates, fake statistics, or exaggerated claims that recruiters immediately discard. The challenge was to design a distinctive, mature, high-performance portfolio that highlights real project work without pretense.",
      approach:
        "Designed from scratch using an editorial dark palette, subtle geometric grids, accessible semantic markup, and modular React components. Kept project data decoupled from presentation components to ensure maintainability.",
      developmentProcess: [
        "Crafted design tokens in CSS and Tailwind for consistent typography and spacing.",
        "Built an interactive code preview widget to showcase real code syntax in the hero.",
        "Engineered modal dialogs with light-dismiss, ESC key listeners, and focus trapping.",
        "Implemented real-time input validation for the contact form with helpful error messaging.",
        "Audited against accessibility criteria, ensuring 44px touch targets and high-contrast text."
      ],
      challenges:
        "Balancing rich visual design (subtle glow, glass effects, animations) with strict performance and accessibility, ensuring the site feels lively without distracting recruiters from the core project work.",
      whatILearned:
        "Strengthened component architecture, accessible UI patterns (dialogs, drawers, keyboard focus), CSS custom properties, and production asset bundling with Vite."
    }
  },
  {
    id: "ai-resume-analyzer",
    title: "AI Resume Analyzer",
    tagline: "Smart Career Optimization Concept",
    category: "Full-Stack / Concept",
    description:
      "An AI-focused resume analysis concept designed to evaluate resumes and provide useful feedback for improving job applications.",
    technologies: ["React.js", "JavaScript", "Node.js", "CSS"],
    features: [
      "Clean drag-and-drop document upload interface concept",
      "Skill extraction and core competency breakdown",
      "Job description keyword alignment checker",
      "Formatting and structural readability scoring system",
      "Actionable recommendations tab for junior job seekers",
      "Visual score indicators and section-by-section audit"
    ],
    demoUrl: null, // Concept in progress
    githubUrl: "https://github.com/Mathan-dev2006",
    status: "In Development",
    year: "2025–2026",
    caseStudy: {
      overview:
        "AI Resume Analyzer is a targeted utility concept engineered to assist fresh graduates in aligning their technical resumes with job requirements. It breaks down resume content into structured technical skills, experience bullets, and quantifiable keywords.",
      problem:
        "Fresh graduates often struggle with Applicant Tracking Systems (ATS) and unclear resume phrasing, missing out on opportunities despite possessing the required coding skills.",
      approach:
        "Designed a clean dual-pane UI where candidates can review their uploaded resume alongside categorized AI insights: formatting score, detected tech stack, missing keywords, and readability suggestions.",
      developmentProcess: [
        "Researched ATS parsing criteria and key structural sections needed for junior developers.",
        "Built responsive mock-data parsing pipelines in React to model real-world API responses.",
        "Designed clear visual feedback cards with color-coded badges for strengths and areas to improve.",
        "Structured the Node.js backend integration schema for future LLM API connection."
      ],
      challenges:
        "Structuring the data presentation so that automated analysis feels constructive, transparent, and easy to act upon rather than overwhelming.",
      whatILearned:
        "Deepened understanding of JSON schema design, complex multi-card UI layouts, state transitions during asynchronous file processing, and designing user-centric developer tools."
    }
  }
];

export const projectCategories = ["All", "Full-Stack / React", "Frontend / React", "Full-Stack / Concept"];
