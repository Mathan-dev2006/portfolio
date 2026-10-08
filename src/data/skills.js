export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    badge: "Client-Side",
    description: "Building responsive, accessible, and interactive user interfaces.",
    skills: [
      {
        name: "React.js",
        level: "Core Stack",
        description: "Building component-based interactive interfaces using modern hooks and state management.",
        icon: "Atom",
        tags: ["Components", "Hooks", "Virtual DOM", "SPA"]
      },
      {
        name: "JavaScript (ES6+)",
        level: "Core Language",
        description: "Creating dynamic and functional web experiences with modern syntax, async/await, and DOM APIs.",
        icon: "FileCode2",
        tags: ["ES6+", "Async/Await", "DOM", "Fetch API"]
      },
      {
        name: "CSS3 / Modern CSS",
        level: "Styling & Layout",
        description: "Crafting fluid layouts with Flexbox, CSS Grid, custom properties, and responsive design patterns.",
        icon: "Palette",
        tags: ["Flexbox", "Grid", "Animations", "Tailwind"]
      },
      {
        name: "HTML5",
        level: "Structure",
        description: "Structuring clean, semantic, and accessible markup complying with modern web standards.",
        icon: "LayoutTemplate",
        tags: ["Semantic HTML", "Accessibility (a11y)", "SEO Basics"]
      }
    ]
  },
  {
    id: "backend",
    title: "Backend Development",
    badge: "Server-Side",
    description: "Developing REST APIs, server logic, and backend request handling.",
    skills: [
      {
        name: "Node.js",
        level: "Runtime",
        description: "Executing server-side JavaScript to power fast, non-blocking asynchronous services.",
        icon: "Server",
        tags: ["V8 Engine", "NPM Ecosystem", "REST APIs", "Async I/O"]
      },
      {
        name: "Express.js",
        level: "Framework",
        description: "Structuring server routing, custom middleware pipelines, and API endpoints for MERN stacks.",
        icon: "Layers",
        tags: ["Routing", "Middleware", "CORS", "JSON Endpoints"]
      },
      {
        name: "PHP",
        level: "Server Scripting",
        description: "Server-side scripting and traditional backend logic learned during academic coursework.",
        icon: "CodeXml",
        tags: ["Server Scripting", "Form Handling", "Database Connect"]
      }
    ]
  },
  {
    id: "database",
    title: "Databases & Storage",
    badge: "Data Layer",
    description: "Data modeling, schema structuring, and persistent query operations.",
    skills: [
      {
        name: "MongoDB",
        level: "NoSQL Database",
        description: "Document-oriented database modeling, JSON collections, and CRUD operations for MERN apps.",
        icon: "Database",
        tags: ["Document Store", "Mongoose / BSON", "CRUD Operations"]
      },
      {
        name: "MySQL",
        level: "Relational DB",
        description: "Relational database schema design, structured queries, primary/foreign keys, and data normalization.",
        icon: "Table2",
        tags: ["SQL Queries", "Schema Design", "Relational Keys"]
      }
    ]
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    badge: "Environment",
    description: "Version control, developer toolchains, and collaborative platforms.",
    skills: [
      {
        name: "Git",
        level: "Version Control",
        description: "Tracking code revisions, managing feature branches, and maintaining clean commit histories.",
        icon: "GitBranch",
        tags: ["Commit History", "Branching", "Merge Workflows"]
      },
      {
        name: "GitHub",
        level: "Code Hosting",
        description: "Remote code repository hosting, release publishing, and open portfolio showcase.",
        icon: "GitPullRequest",
        tags: ["Repositories", "Open Source", "Code Sharing"]
      },
      {
        name: "VS Code",
        level: "Editor",
        description: "Primary development workspace configured with linting, debugging, and productivity tooling.",
        icon: "Terminal",
        tags: ["Debugging", "Extensions", "Integrated Terminal"]
      }
    ]
  }
];
