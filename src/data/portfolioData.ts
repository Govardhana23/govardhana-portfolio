import { Project, SkillCategory, Experience, Education, Achievement, Certification } from '../types';

export const PERSONAL_INFO = {
  name: 'GOVARDHANA GUHANESH K',
  shortName: 'Govardhana Guhanesh',
  title: 'Artificial Intelligence & Data Science Undergraduate',
  tagline: 'Engineering Intelligent Experiences.',
  supportingStatement: 'Building intelligent systems, scalable software, and technology that solves real-world problems.',
  bioShort: "I'm an Artificial Intelligence & Data Science undergraduate passionate about software engineering, AI-powered applications, backend systems, and building meaningful products.",
  bioDetailed: [
    "I'm Govardhana Guhanesh K, an Artificial Intelligence and Data Science undergraduate based in Chennai, India.",
    "My interests lie at the intersection of software engineering and artificial intelligence. I enjoy transforming complex problems into practical software solutions, developing backend systems, experimenting with machine learning, and building applications that create measurable impact.",
    "From developing computer vision applications to designing intelligent infrastructure monitoring systems and building enterprise AI platforms, I believe great engineering combines technical depth, thoughtful design, and real-world usefulness.",
    "I'm continuously learning, experimenting, and challenging myself to build better technology."
  ],
  status: 'OPEN TO OPPORTUNITIES',
  location: 'Chennai, India',
  email: 'govardhanaguhan@gmail.com',
  phone: '+91 8148601125',
  github: 'https://github.com/Govardhana23',
  linkedin: 'https://linkedin.com/in/govardhana-guhanesh-k',
  leetcode: 'https://leetcode.com/u/Govardhan2006',
  roles: ['SOFTWARE ENGINEER', 'AI/ML ENTHUSIAST', 'BUILDER'],
  quote: 'Think deeply. Build intelligently. Create impact.'
};

export const SPECMATCH_DATA = {
  id: 'specmatch-ai',
  title: 'SpecMatch AI',
  tagline: 'Engineering Decisions. Backed by Evidence.',
  category: 'Enterprise AI | RAG | Full-Stack Engineering | Intelligent Procurement',
  badges: ['FLAGSHIP PROJECT', 'ENTERPRISE AI', 'B2B SOURCING COPILOT'],
  description: 'SpecMatch AI is a production-oriented B2B electronic-component sourcing copilot designed to help engineers and procurement teams research, compare, and source electronic components using manufacturer datasheets, distributor APIs, and verified distributor datasets. Instead of generating unsupported answers, SpecMatch AI responds only using evidence it actually possesses, with traceable citations and strict grounding mechanisms.',
  problemStatement: 'Electronic component sourcing requires engineers and procurement professionals to search through manufacturer datasheets, distributor catalogs, inventory platforms, and pricing databases. This creates fragmented workflows, time-consuming research, and difficulty verifying technical specifications. SpecMatch AI brings these workflows together through an intelligent, evidence-grounded sourcing platform.',
  
  coreFeatures: [
    {
      title: 'Evidence-Grounded AI Copilot',
      points: [
        'Answers engineering questions strictly using ingested manufacturer datasheets.',
        'Provides traceable citations [Doc:Page] for technical specifications.',
        'Supports component comparisons and datasheet research.',
        'Uses strict evidence and citation guardrails with repair loops.',
        'Eliminates unsupported AI hallucinations through rigorous grounding validation.'
      ]
    },
    {
      title: 'Hybrid Retrieval-Augmented Generation',
      points: [
        'Dense semantic retrieval using FastEmbed and BGE embeddings.',
        'Sparse lexical retrieval using Qdrant BM25.',
        'Hybrid search fusing dense and sparse with Reciprocal Rank Fusion (RRF).',
        'Cross-encoder reranking for maximum precision.',
        'Metadata filtering and duplicate removal with MPN isolation.'
      ]
    },
    {
      title: 'Intelligent Component Sourcing',
      points: [
        'Component catalog with normalized manufacturer part numbers (MPNs).',
        'Deterministic replacement component matching based on parameter tolerances.',
        'Distributor pricing and availability queries across quantity break tiers.',
        'Manufacturer lifecycle (Active/NRND/EOL) and compliance data management.',
        'Support for CSV, TSV, JSON, and JSONL distributor offer imports.'
      ]
    },
    {
      title: 'Automated Datasheet Intelligence',
      points: [
        'Automated manufacturer PDF ingestion with PyMuPDF.',
        'Structural HTML extraction using BeautifulSoup and lxml.',
        'Document section extraction and hierarchical chunking.',
        'Embedding generation and vector indexing in Qdrant collections.',
        'Asynchronous ingestion workers backed by RabbitMQ with retry queues.'
      ]
    },
    {
      title: 'Intelligent Query Processing',
      points: [
        'Query normalization and automated MPN extraction.',
        'Deterministic routing across Help, Catalog, Pricing, Availability, Lifecycle, Replacement, Datasheet, and Comparison.',
        'SQL-based structured data retrieval combined with vector search.',
        'Streaming Server-Sent Events (SSE) for low-latency copilot responses.',
        'Full query trace logging, latencies, and automated evaluation history.'
      ]
    },
    {
      title: 'Enterprise Security & Infrastructure',
      points: [
        'Server-side API key management with zero browser credential exposure.',
        'Privileged API proxy through Next.js 15 server routes.',
        'PostgreSQL 16 and SQLite storage engines with Alembic migrations.',
        'Docker Compose and Kubernetes (Kustomize) deployment pipelines.',
        'Terraform IaC provisioning AWS VPC and EKS clusters with Prometheus observability.'
      ]
    }
  ],

  techStack: {
    frontend: ['Next.js 15.5.28', 'React 19.1.1', 'TypeScript 5', 'Tailwind CSS 3.4', 'Lucide React'],
    backend: ['Python 3.12+', 'FastAPI', 'Uvicorn', 'Pydantic v2', 'SQLAlchemy 2', 'Alembic', 'httpx', 'Tenacity'],
    aiRetrieval: ['FastEmbed', 'BGE Embeddings', 'Qdrant Vector DB', 'BM25 Sparse', 'Reciprocal Rank Fusion', 'Cross-Encoder Rerank', 'Sentence Transformers', 'OpenAI / Anthropic / Ollama / Qwen2.5'],
    dataStorage: ['PostgreSQL 16', 'SQLite', 'Qdrant Collections', 'Redis Cache', 'SQLAlchemy 2.0'],
    asyncWorkers: ['RabbitMQ', 'Background Workers', 'Async PDF Pipeline', 'SSE Streaming'],
    infrastructure: ['Docker', 'Docker Compose', 'Kubernetes', 'Kustomize', 'Terraform', 'AWS VPC / EKS'],
    observability: ['PyTest', 'pytest-asyncio', 'Respx', 'Ruff', 'Mypy', 'Prometheus', 'Langfuse', 'OpenTelemetry']
  },

  evaluation: {
    tag: 'REAL-CORPUS EVALUATION — LATEST RUN',
    date: 'Golden Dataset Corpus Run',
    note: 'SpecMatch AI evaluates responses against a golden-question dataset using the live indexed corpus. Questions whose required documents or component MPNs are not indexed are reported as skipped rather than counted as successful answers.',
    gate: 'PASS',
    totalQuestions: '7 / 7 Grounded Answers',
    metrics: [
      { name: 'Faithfulness', value: '1.0000', percentage: '100%', description: 'Every claim is directly supported by datasheet citations', status: 'optimal' },
      { name: 'Answer Correctness', value: '1.0000', percentage: '100%', description: 'Technical parameters match verified manufacturer specs', status: 'optimal' },
      { name: 'Context Recall', value: '0.9643', percentage: '96.43%', description: 'Retrieved chunks capture almost all relevant technical nuances', status: 'high' },
      { name: 'Context Precision', value: '0.8758', percentage: '87.58%', description: 'Signal-to-noise ratio in retrieved context windows', status: 'high' }
    ]
  },

  interactiveQueries: [
    {
      id: 'q1',
      question: 'What is the supply voltage range of the NE555?',
      mpn: 'NE555',
      route: 'Datasheet / Hybrid RAG',
      citations: ['TI-NE555-Datasheet.pdf (Page 4, Table 6.3)'],
      answer: "According to the Texas Instruments NE555 Precision Timers datasheet (Section 6.3 'Recommended Operating Conditions', p. 4), the recommended supply voltage (VCC) range is 4.5 V to 16 V for standard operation (up to 18 V absolute maximum). For military-temperature grade SE555 variants, operation is supported up to 18 V.",
      latency: '240ms',
      grounded: true
    },
    {
      id: 'q2',
      question: 'Compare the LM358 and TL072 input bias current.',
      mpn: 'LM358 vs TL072',
      route: 'Comparison / Cross-Document RAG',
      citations: ['TI-LM358-Dual-OpAmp.pdf (p. 6)', 'TI-TL072-JFET-OpAmp.pdf (p. 5)'],
      answer: "The input bias current difference highlights bipolar vs JFET architectures:\n• LM358 (Bipolar): Typical input bias current is 20 nA, with a maximum of 100 nA over temperature (Table 6.5, p. 6).\n• TL072 (Low-Noise JFET-Input): Typical input bias current is 65 pA at 25°C, rising to a maximum of 7 nA at 70°C (Table 6.5, p. 5).\nThe TL072 provides over 300× lower input bias current at room temperature, making it far superior for high-impedance transducer interfaces.",
      latency: '380ms',
      grounded: true
    },
    {
      id: 'q3',
      question: 'Is the L7805 in stock and what does it cost at 1k units?',
      mpn: 'L7805CV',
      route: 'Pricing & Availability / Distributor API & Offer Store',
      citations: ['STMicroelectronics L7805CV Catalog Record', 'Verified Distributor Offer Feed #2026-Q1'],
      answer: "L7805CV (STMicroelectronics, TO-220 package, Positive Voltage Regulator 5V 1.5A):\n• Stock Status: IN STOCK across verified distributors (Total aggregate available: 42,850 units).\n• Unit Pricing at 1,000 unit tier: $0.384 USD / unit ($384.00 total for 1k batch).\n• Minimum Order Quantity (MOQ): 1 unit (Factory box: 1,000 units).\n• Lifecycle status: ACTIVE (No EOL notices announced).",
      latency: '110ms',
      grounded: true
    }
  ],

  architectureSteps: [
    {
      id: 'browser',
      layer: 'FRONTEND CLIENT',
      title: 'Browser — Next.js 15 / React 19',
      subtitle: 'Modern Copilot Interface',
      details: 'Streaming AI copilot chat interface with markdown rendering, interactive component catalog, component parameter visualizer, PDF datasheet drag-and-drop ingestion portal, and live telemetry evaluation dashboard.',
      tech: 'Next.js 15.5.28, React 19.1.1, TypeScript 5, Tailwind CSS, Lucide Icons'
    },
    {
      id: 'api-gateway',
      layer: 'API GATEWAY',
      title: 'FastAPI Backend Core',
      subtitle: 'High-Throughput Async Engine',
      details: 'High-concurrency API gateway handling authentication, request validation with Pydantic v2, CORS security, administrative routes, and real-time Server-Sent Events (SSE) token streaming.',
      tech: 'Python 3.12+, FastAPI, Uvicorn, Pydantic v2, Tenacity'
    },
    {
      id: 'router',
      layer: 'DECISION LAYER',
      title: 'Intelligent Query Router',
      subtitle: 'Deterministic Execution Paths',
      details: 'Inspects query semantics and extracts MPNs. Dispatches queries to specialized pipelines: Catalog queries → SQL structured search; Pricing/Availability → Distributor APIs/offers; Replacement → Deterministic tolerance matcher; Datasheet/Comparison → Hybrid RAG; Help → Static guidance.',
      tech: 'Regex normalization, Intent Classifier, MPN Extractor'
    },
    {
      id: 'intelligence',
      layer: 'CORE INTELLIGENCE LAYER',
      title: 'Multi-Engine Processing Subsystems',
      subtitle: 'Vector, Relational, LLM & Worker Grid',
      subsystems: [
        {
          name: 'SQL Relational DB',
          details: 'Stores normalized components, manufacturers, parameters, distributor offers, and query audit traces.',
          tech: 'PostgreSQL 16 / SQLite, SQLAlchemy 2, Alembic'
        },
        {
          name: 'Qdrant Hybrid Search',
          details: 'Executes dense vector similarity + sparse BM25 retrieval, fused with Reciprocal Rank Fusion (RRF) and Cross-Encoder reranking.',
          tech: 'Qdrant Vector DB, FastEmbed BGE, Cross-Encoder'
        },
        {
          name: 'LLM Generation Tier',
          details: 'Synthesizes grounded answers based solely on retrieved context windows with explicit citation instructions.',
          tech: 'OpenAI, Anthropic Claude, Ollama, local Qwen2.5-1.5B'
        },
        {
          name: 'Asynchronous Workers',
          details: 'Processes background datasheet ingestion queues, structural PDF parsing, table extraction, chunking, and embedding generation.',
          tech: 'RabbitMQ, PyMuPDF, BeautifulSoup, Async Workers'
        }
      ]
    },
    {
      id: 'guardrails',
      layer: 'SAFETY & GROUNDING',
      title: 'Evidence Validation & Citation Guardrails',
      subtitle: 'Zero-Hallucination Assurance',
      details: 'Rigorous post-generation verification: cross-checks generated numerical claims against retrieved datasheet spans, verifies citation page numbers, checks MPN consistency, triggers automated repair loops if ungrounded claims are detected, and persists evaluation traces.',
      tech: 'Regex Citation Matcher, Faithfulness Checker, Repair Fallback'
    },
    {
      id: 'response',
      layer: 'OUTPUT STREAM',
      title: 'Final Grounded Response',
      subtitle: 'Evidence-Backed Engineering Answers',
      details: 'Delivers streaming SSE responses with formatted markdown, clickable datasheet citations, exact numerical values, pin configurations, and live sourcing availability tables.',
      tech: 'Server-Sent Events (SSE), Markdown Parser'
    }
  ]
};

export const OTHER_PROJECTS: Project[] = [
  {
    id: 'gold-chain-appraisal',
    title: 'Gold Chain Appraisal System',
    tagline: 'Automating precious metal appraisal through computer vision.',
    category: 'Computer Vision | AI | Desktop Application',
    description: 'An AI-powered image processing desktop application designed to automate and improve gold chain appraisal workflows for jewelry appraisers and manufacturing quality assurance.',
    highlights: [
      'Developed an end-to-end desktop image processing application using OpenCV and Tkinter.',
      'Implemented custom contour detection algorithms and image-based composition estimation models.',
      'Improved composition estimation accuracy by 24% through advanced image-processing filters and lighting correction.',
      'Reduced manual appraisal turnaround time by 40% across benchmark appraisal batches.',
      'Achieved an additional 18% composition estimation accuracy improvement after targeted domain feature engineering.'
    ],
    technologies: ['Python', 'OpenCV', 'Tkinter', 'NumPy', 'Image Processing', 'Feature Engineering'],
    metrics: [
      { label: 'Estimation Improvement', value: '+24%', note: 'Through computer vision filtering' },
      { label: 'Manual Time Reduction', value: '40%', note: 'Faster appraisal workflow' },
      { label: 'Feature Engineering Boost', value: '+18%', note: 'Domain-specific accuracy gain' }
    ],
    accentColor: '#F59E0B'
  },
  {
    id: 'smart-pothole-detection',
    title: 'Smart Pothole Detection System',
    tagline: 'Intelligent road anomaly detection via IoT telemetry and machine learning.',
    category: 'AI/ML | IoT | Smart Infrastructure',
    description: 'An intelligent road anomaly detection system designed to identify potholes and surface irregularities in real time using edge sensors, GPS coordinates, and asynchronous message queues.',
    highlights: [
      'Integrated Raspberry Pi edge sensors (accelerometers, gyroscopes) with live GPS telemetry capture.',
      'Developed machine learning models for real-time classification of road anomalies and pothole severity.',
      'Integrated RabbitMQ message broker for reliable asynchronous communication between edge devices and the central monitoring service.',
      'Designed a low-latency real-time data processing workflow for municipal road maintenance departments.'
    ],
    technologies: ['Python', 'Machine Learning', 'Raspberry Pi', 'GPS', 'RabbitMQ', 'Sensor Fusion', 'IoT'],
    metrics: [
      { label: 'Architecture', value: 'Edge-to-Cloud', note: 'Raspberry Pi + RabbitMQ' },
      { label: 'Processing', value: 'Real-Time', note: 'Asynchronous event stream' },
      { label: 'Domain', value: 'Smart Cities', note: 'Municipal infrastructure' }
    ],
    accentColor: '#10B981'
  },
  {
    id: 'fake-news-detection',
    title: 'Fake News Detection System',
    tagline: 'Classifying journalistic veracity with NLP pipelines and FastAPI services.',
    category: 'Natural Language Processing | Machine Learning | Backend Engineering',
    description: 'A machine learning application that analyzes news content and classifies articles as potentially fake or real, exposing high-throughput prediction endpoints via FastAPI.',
    highlights: [
      'Developed an end-to-end NLP-based classification pipeline with linguistic preprocessing and n-gram extraction.',
      'Implemented TF-IDF text vectorization and trained discriminative classification models.',
      'Integrated the trained ML model with a production-ready FastAPI backend service.',
      'Created an API-driven interface for displaying classification probabilities, confidence scores, and explanatory text tokens.'
    ],
    technologies: ['Python', 'Machine Learning', 'NLP', 'TF-IDF', 'FastAPI', 'Scikit-learn', 'REST APIs'],
    metrics: [
      { label: 'Inference Backend', value: 'FastAPI', note: 'Sub-50ms API endpoint latency' },
      { label: 'Representation', value: 'TF-IDF', note: 'Linguistic n-gram vectorization' },
      { label: 'Pipeline', value: 'End-to-End', note: 'Preprocessing to API serving' }
    ],
    accentColor: '#4D8DFF'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'PROGRAMMING',
    badge: 'Core Languages',
    description: 'Foundational programming languages used for systems, backend, and algorithms.',
    skills: [
      { name: 'Java', level: 'Advanced', context: 'OOP, DSA, Enterprise Patterns' },
      { name: 'Python', level: 'Advanced', context: 'AI/ML, FastAPI, RAG, Scripting' },
      { name: 'SQL', level: 'Advanced', context: 'Complex queries, indexing, joins' },
      { name: 'JavaScript', level: 'Proficient', context: 'ESNext, Async/Await, Web APIs' },
      { name: 'HTML5', level: 'Proficient', context: 'Semantic, Accessible, SEO' },
      { name: 'CSS3', level: 'Proficient', context: 'Flexbox, Grid, Animations' }
    ]
  },
  {
    name: 'FRONTEND',
    badge: 'UI & Web Engineering',
    description: 'Modern reactive component frameworks and design system engineering.',
    skills: [
      { name: 'React', level: 'Proficient', context: 'React 19, Hooks, Context, Virtual DOM' },
      { name: 'Next.js', level: 'Proficient', context: 'App Router, Server Actions, SSR/SSG' },
      { name: 'TypeScript', level: 'Proficient', context: 'Type safety, Generics, Interfaces' },
      { name: 'Tailwind CSS', level: 'Advanced', context: 'Design tokens, Custom utilities, Responsive' }
    ]
  },
  {
    name: 'BACKEND',
    badge: 'Distributed & API Services',
    description: 'High-throughput servers, microservices, and asynchronous communication.',
    skills: [
      { name: 'Node.js', level: 'Proficient', context: 'Event loop, V8 runtime, Streams' },
      { name: 'Express.js', level: 'Proficient', context: 'REST routing, Middleware pipelines' },
      { name: 'Spring Boot', level: 'Familiar', context: 'Dependency injection, REST controllers' },
      { name: 'FastAPI', level: 'Advanced', context: 'Async endpoints, Pydantic, Swagger' },
      { name: 'REST APIs', level: 'Advanced', context: 'Idempotency, status codes, OpenAPI' },
      { name: 'Firebase', level: 'Proficient', context: 'Auth, Firestore, Cloud Functions' },
      { name: 'API Integration', level: 'Advanced', context: 'OAuth, webhooks, rate limits' }
    ]
  },
  {
    name: 'DATABASES',
    badge: 'Relational & Document Stores',
    description: 'Data modeling, ACID transactions, migrations, and vector storage.',
    skills: [
      { name: 'MySQL', level: 'Advanced', context: 'InnoDB, schema design, relational integrity' },
      { name: 'PostgreSQL', level: 'Advanced', context: 'JSONB, indexes, pgvector, production RAG' },
      { name: 'MongoDB', level: 'Proficient', context: 'Document modeling, aggregation pipelines' },
      { name: 'SQLite', level: 'Advanced', context: 'Embedded storage, testing fixtures' }
    ]
  },
  {
    name: 'AI & MACHINE LEARNING',
    badge: 'Applied AI & RAG Engineering',
    description: 'Modern generative AI architectures, retrieval, vector search, and model tuning.',
    skills: [
      { name: 'Machine Learning', level: 'Advanced', context: 'Supervised/unsupervised, feature engineering' },
      { name: 'Retrieval-Augmented Generation (RAG)', level: 'Advanced', context: 'Hybrid search, grounding, guardrails' },
      { name: 'Scikit-learn', level: 'Advanced', context: 'Classifiers, pipelines, evaluation metrics' },
      { name: 'TensorFlow', level: 'Proficient', context: 'Deep learning, neural architectures' },
      { name: 'PyTorch', level: 'Proficient', context: 'Tensors, autograd, transformer fine-tuning' },
      { name: 'FastEmbed & BGE Embeddings', level: 'Advanced', context: 'Dense embeddings, low-latency inference' },
      { name: 'BM25 & TF-IDF', level: 'Advanced', context: 'Sparse keyword retrieval, lexical scoring' },
      { name: 'Hybrid Search (RRF)', level: 'Advanced', context: 'Reciprocal Rank Fusion dense+sparse' },
      { name: 'Cross-Encoder Reranking', level: 'Advanced', context: 'Deep contextual relevance scoring' },
      { name: 'Model Evaluation', level: 'Advanced', context: 'Faithfulness, precision, recall, correctness' },
      { name: 'AI-assisted Engineering', level: 'Advanced', context: 'LLM agents, automated reasoning' }
    ]
  },
  {
    name: 'CLOUD & DEVOPS',
    badge: 'Infrastructure & Orchestration',
    description: 'Containerization, IaC, cloud resources, and distributed brokers.',
    skills: [
      { name: 'Docker & Docker Compose', level: 'Advanced', context: 'Multi-stage builds, orchestration' },
      { name: 'Kubernetes', level: 'Proficient', context: 'Pods, services, Kustomize manifests' },
      { name: 'Terraform', level: 'Proficient', context: 'AWS VPC, EKS provisioning, IaC' },
      { name: 'Git & GitHub', level: 'Advanced', context: 'Branching, PRs, CI workflows' },
      { name: 'CI/CD Basics', level: 'Proficient', context: 'Automated test suites, build pipelines' },
      { name: 'BigQuery', level: 'Proficient', context: 'Data warehousing, analytical queries' },
      { name: 'AWS EC2 & EKS', level: 'Proficient', context: 'Cloud compute, managed Kubernetes' },
      { name: 'Microsoft Azure', level: 'Familiar', context: 'Cloud fundamentals, VMs' },
      { name: 'RabbitMQ', level: 'Advanced', context: 'Async message queues, worker decoupling' },
      { name: 'Redis', level: 'Proficient', context: 'In-memory caching, rate limiting' }
    ]
  },
  {
    name: 'TESTING & ENGINEERING',
    badge: 'Code Quality & Reliability',
    description: 'Automated test suites, typing, schema validation, and DB migrations.',
    skills: [
      { name: 'PyTest & pytest-asyncio', level: 'Advanced', context: 'Async test fixtures, mocking, coverage' },
      { name: 'Selenium', level: 'Proficient', context: 'Browser automation, E2E testing' },
      { name: 'Unit Testing & Debugging', level: 'Advanced', context: 'TDD, stack trace diagnosis, profiling' },
      { name: 'Pydantic v2', level: 'Advanced', context: 'Type validation, schema enforcement' },
      { name: 'SQLAlchemy 2 & Alembic', level: 'Advanced', context: 'ORM models, schema versioning' }
    ]
  },
  {
    name: 'CORE COMPUTER SCIENCE',
    badge: 'Theoretical Foundations',
    description: 'Fundamental principles of computing, algorithms, and systems.',
    skills: [
      { name: 'Data Structures & Algorithms', level: 'Advanced', context: 'Graphs, trees, DP, 150+ LeetCode' },
      { name: 'OOP', level: 'Advanced', context: 'SOLID principles, encapsulation, polymorphism' },
      { name: 'DBMS', level: 'Advanced', context: 'Normalization, ACID, indexing, query execution' },
      { name: 'Operating Systems', level: 'Advanced', context: 'Processes, concurrency, memory paging' },
      { name: 'Computer Networks', level: 'Advanced', context: 'TCP/IP, HTTP/3, OSI model, DNS' }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'FemtoSofts Technologies',
    role: 'Software Development Intern',
    period: 'June 2025 – July 2025',
    location: 'Chennai, India',
    description: 'Contributed to backend development and application engineering through Python, SQL, and REST API integration.',
    achievements: [
      'Developed and rigorously tested 5+ backend modules ensuring high data integrity and reliability.',
      'Automated 3 internal operational workflows using robust Python automation scripts, cutting repetitive execution time.',
      'Diagnosed, debugged, and resolved 20+ functional bugs across the codebase while optimizing backend query logic.',
      'Integrated RESTful APIs and connected relational MySQL databases with standardized schema validation.'
    ],
    technologies: ['Python', 'SQL', 'REST APIs', 'MySQL', 'Backend Engineering', 'Workflow Automation']
  }
];

export const EDUCATION: Education = {
  institution: 'Sri Sairam Institute of Technology',
  degree: 'B.Tech — Artificial Intelligence & Data Science',
  graduation: 'Expected Graduation: June 2027',
  location: 'Chennai, India',
  coursework: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Database Management Systems',
    'Machine Learning',
    'Artificial Intelligence',
    'Operating Systems',
    'Computer Networks'
  ]
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'imobilothon',
    title: 'TOP 10 FINALIST — iMobilothon 5.0',
    subtitle: 'National Smart Mobility & Infrastructure Hackathon',
    description: 'Shortlisted among the top 10 finalists nationwide for an innovative data-driven smart infrastructure solution, evaluated on technical robustness, edge telemetry, and real-world viability.',
    year: '2025',
    category: 'Hackathon',
    badge: 'National Finalist'
  },
  {
    id: 'samartha',
    title: 'FIRST PRIZE — Samartha 2K25 Hackathon',
    subtitle: 'Competitive Innovation Challenge',
    description: 'Awarded 1st place among dozens of competing engineering teams for delivering an end-to-end technology-enabled solution combining software engineering and applied artificial intelligence.',
    year: '2025',
    category: 'Hackathon',
    badge: '1st Place Champion'
  },
  {
    id: 'gate',
    title: 'GATE 2026 QUALIFIED',
    subtitle: 'Graduate Aptitude Test in Engineering',
    description: 'Successfully qualified the prestigious GATE examination, demonstrating high national-level mastery across Core Computer Science, Algorithms, Mathematics, and Systems.',
    year: '2026',
    category: 'Academic',
    badge: 'National Qualification'
  },
  {
    id: 'innovathon',
    title: 'FIRST PRIZE — Innovathon 4.0',
    subtitle: 'Flagship College Hackathon & Innovation Challenge',
    description: 'Secured first prize in the competitive university innovation challenge for developing a high-impact technical prototype addressing real-world problem statements.',
    year: '2025',
    category: 'Hackathon',
    badge: '1st Place Winner'
  },
  {
    id: 'leetcode',
    title: '150+ LEETCODE PROBLEMS SOLVED',
    subtitle: 'Algorithmic Problem-Solving & Programming Mastery',
    description: 'Consistent algorithmic problem-solving across Data Structures, Dynamic Programming, Graph Theory, and Tree Traversal algorithms, reinforcing analytical rigour.',
    metric: '150+',
    category: 'Competitive',
    badge: 'Problem Solver'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'nptel-hci',
    title: 'Design & Implementation of Human-Computer Interaction',
    issuer: 'NPTEL (National Programme on Technology Enhanced Learning)',
    verificationAvailable: true
  },
  {
    id: 'guvi-bigdata',
    title: 'Big Data & Analytics',
    issuer: 'GUVI HCL',
    verificationAvailable: true
  },
  {
    id: 'cisco-datascience',
    title: 'Introduction to Data Science',
    issuer: 'Cisco Networking Academy',
    verificationAvailable: true
  },
  {
    id: 'hackerrank-sql',
    title: 'SQL Programming',
    issuer: 'HackerRank',
    verificationAvailable: true
  }
];
