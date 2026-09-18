export type ProjectCategory = 'Backend' | 'AI & Data' | 'Engineering'

export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  id: string
  title: string
  eyebrow: string
  summary: string
  highlights: string[]
  tech: string[]
  category: ProjectCategory
  year: string
  featured?: boolean
  image?: string
  imageAlt?: string
  links?: ProjectLink[]
  privateRepository?: boolean
}

export const projects: Project[] = [
  {
    id: 'easyrent',
    title: 'EasyRent Property Platform',
    eyebrow: 'Distributed backend architecture',
    summary:
      'A feature-rich property platform evolved from a modular monolith into an eight-service, message-driven NestJS system.',
    highlights: [
      'RabbitMQ microservices behind an API Gateway with Nginx load balancing',
      'PostGIS radius search, advanced filtering, ranking, and Redis caching',
      'Stripe subscription workflows, scheduled automation, and automated tests',
    ],
    tech: ['NestJS', 'PostgreSQL', 'PostGIS', 'RabbitMQ', 'Redis', 'Docker', 'Nginx'],
    category: 'Backend',
    year: '2025',
    featured: true,
    image: '/images/easyrent-architecture.jpg',
    imageAlt: 'EasyRent microservices architecture diagram',
    links: [
      {
        label: 'Microservices',
        href: 'https://github.com/malaz-3301/properties-microservices',
      },
      {
        label: 'Monolith',
        href: 'https://github.com/malaz-3301/properties',
      },
    ],
  },
  {
    id: 'factnli',
    title: 'FactNLI',
    eyebrow: 'Evidence-based claim verification',
    summary:
      'An Arabic and English fact-checking platform that retrieves evidence, ranks relevant passages, applies NLI, and produces reviewable verdicts.',
    highlights: [
      'FastAPI service with async SQLAlchemy, PostgreSQL, Alembic, JWT rotation, and account-scoped history',
      'Multilingual evidence pipeline: search, extraction, chunking, FAISS retrieval, NLI, and verdict aggregation',
      'React interface, Arabic PDF reports, OSINT modules, and an extensive automated test suite',
    ],
    tech: ['Python', 'FastAPI', 'PyTorch', 'FAISS', 'PostgreSQL', 'React', 'Docker'],
    category: 'AI & Data',
    year: '2026',
    featured: true,
    privateRepository: true,
  },
  {
    id: 'parallel-commerce',
    title: 'Concurrent Commerce Backend',
    eyebrow: 'Queues, consistency, and load',
    summary:
      'A collaborative NestJS commerce backend focused on asynchronous processing, safe concurrent operations, and measurable performance.',
    highlights: [
      'BullMQ workers with tuned concurrency, retries, and exponential backoff',
      'Database transactions and pessimistic locking for race-condition safety',
      'Daily sales aggregation, Redis, Docker, Nginx, and JMeter benchmarks',
    ],
    tech: ['NestJS', 'BullMQ', 'Redis', 'PostgreSQL', 'Docker', 'JMeter'],
    category: 'Backend',
    year: '2026',
    featured: true,
    links: [
      {
        label: 'Repository',
        href: 'https://github.com/malaz-3301/Parallel-Programming',
      },
    ],
  },
  {
    id: 'book-commerce',
    title: 'Book E-commerce Platform',
    eyebrow: 'Spring Boot full-stack application',
    summary:
      'A complete bookstore workflow covering authentication, catalog management, orders, reviews, and role-based administration.',
    highlights: [
      'Spring Security and JWT authentication with customer and admin roles',
      'Layered REST API using Spring Data JPA and PostgreSQL',
      'React dashboard, Dockerized database, Postman collection, and automated tests',
    ],
    tech: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'React', 'Docker'],
    category: 'Backend',
    year: '2026',
    featured: true,
    links: [
      {
        label: 'Repository',
        href: 'https://github.com/malaz-3301/Book-E-commerce-Platform',
      },
    ],
  },
  {
    id: 'marketplace-ddd',
    title: 'Marketplace DDD Backend',
    eyebrow: 'Architecture-focused backend',
    summary:
      'A NestJS marketplace backend exploring domain boundaries, use cases, repository abstractions, and layered architecture.',
    highlights: [
      'Separated domain, application, infrastructure, and presentation layers',
      'Product and user contexts with JWT authorization and TypeORM repositories',
    ],
    tech: ['NestJS', 'TypeScript', 'DDD', 'TypeORM', 'PostgreSQL'],
    category: 'Backend',
    year: '2026',
    links: [
      {
        label: 'Repository',
        href: 'https://github.com/malaz-3301/Market-Place-System',
      },
    ],
  },
  {
    id: 'audio-processing',
    title: 'Audio Processing Studio',
    eyebrow: 'Desktop signal-processing tool',
    summary:
      'A C# desktop application for compressing, reconstructing, inspecting, and comparing audio files through multiple algorithms.',
    highlights: [
      'Nonlinear quantization, DPCM, and Delta Modulation',
      'Cancelable processing, custom binary formats, charts, and compression reports',
    ],
    tech: ['C#', '.NET', 'WinForms', 'NAudio', 'ScottPlot'],
    category: 'Engineering',
    year: '2026',
    links: [
      {
        label: 'Repository',
        href: 'https://github.com/malaz-3301/Multi-Media-Audio-Processing',
      },
    ],
  },
  {
    id: 'senet',
    title: 'Senet Game AI',
    eyebrow: 'Adversarial decision making',
    summary:
      'A playable Python implementation of Senet featuring human and AI modes powered by Expectiminimax search.',
    highlights: [
      'Chance-aware game-tree search and board evaluation',
      'Desktop GUI with configurable game modes and board state',
    ],
    tech: ['Python', 'Expectiminimax', 'Game AI', 'Tkinter'],
    category: 'AI & Data',
    year: '2026',
    links: [
      {
        label: 'Repository',
        href: 'https://github.com/malaz-3301/Senet-Game-Algorithm',
      },
    ],
  },
  {
    id: 'knowledge-system',
    title: 'Flower Gallery Expert System',
    eyebrow: 'Knowledge representation',
    summary:
      'A rule-based planning project that models a flower gallery and compares DFS with A* search over configurable initial states.',
    highlights: [
      'Declarative facts and production rules using Experta',
      'Separate DFS and A* engines with interactive scenario configuration',
    ],
    tech: ['Python', 'Experta', 'A*', 'DFS', 'Knowledge Systems'],
    category: 'AI & Data',
    year: '2026',
    privateRepository: true,
  },
  {
    id: 'fluid-simulation',
    title: 'GPU Fluid & Rope Simulation',
    eyebrow: 'Real-time physical simulation',
    summary:
      'A Unity simulation combining particle-based fluids, rope physics, collision handling, and interactive experiment controls.',
    highlights: [
      'GPU-oriented particle simulation and sorting helpers',
      'Position-based dynamics, rope collision, wind, and interactive controls',
    ],
    tech: ['C#', 'Unity', 'Compute Shaders', 'PBD', 'GPU Simulation'],
    category: 'Engineering',
    year: '2026',
    privateRepository: true,
  },
  {
    id: 'rocket-simulation',
    title: 'Suborbital Rocket Simulation',
    eyebrow: 'Collaborative 3D university project',
    summary:
      'An interactive browser-based visualization of a suborbital rocket flight with custom physics and 3D assets.',
    highlights: [
      'Three.js scene, camera controls, models, textures, and flight physics',
      'Lightweight Vite build for an interactive scientific visualization',
    ],
    tech: ['JavaScript', 'Three.js', 'Vite', '3D Physics'],
    category: 'Engineering',
    year: '2025',
    links: [
      {
        label: 'Repository',
        href: 'https://github.com/malaz-3301/rocket_launch_uni',
      },
    ],
  },
]
