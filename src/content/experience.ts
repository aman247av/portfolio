export type Figure = { value: string; label: string };

export type Workstream = {
  title: string;
  summary: string;
  detail: string[];
  figures?: Figure[];
};

export type Role = {
  company: string;
  note?: string;
  title: string;
  period: string;
  location: string;
  current?: boolean;
  /** One line on what the job actually was. */
  premise: string;
  workstreams: Workstream[];
  stack: string[];
};

export const roles: Role[] = [
  {
    company: 'NAVIOM',
    title: 'Software Engineer I',
    period: 'Jul 2026 — Present',
    location: 'Gurugram',
    current: true,
    premise:
      'Designing and building the core platform systems for a greenfield cross-border logistics product — built from an empty repository. I own the layer everything else is assembled from.',
    workstreams: [
      {
        title: 'Platform packages',
        summary:
          'Four versioned internal packages — Workflow Engine, Rules Engine, Integration Adapter Framework, and Vault — consumed by the product services.',
        detail: [
          'Each package ships independently with its own versioning, so product teams upgrade on their own schedule instead of moving in lockstep with the platform.',
        ],
        figures: [
          { value: '4', label: 'packages' },
          { value: '6', label: 'consuming services' },
        ],
      },
      {
        title: 'Workflow Engine',
        summary:
          'A case management system that turns operational exceptions into owned, SLA-tracked tickets.',
        detail: [
          'Designed and built end to end: auto-assignment routes each exception to an owner, maker-checker approvals keep a second pair of eyes on consequential actions, and closure is evidence-gated so a case cannot be marked resolved without proof.',
        ],
      },
      {
        title: 'Integrations & rules',
        summary:
          'A unified partner Integration Adapter, and a versioned Rules Engine on the hot path.',
        detail: [
          'The adapter handles retries and fail-closed routing, with a Redis sliding-window circuit breaker that holds state across instances — so one partner degrading does not take the fleet with it.',
          'The Rules Engine is versioned, which means a decision made last month can still be explained with the rules that were live at the time.',
        ],
        figures: [
          { value: 'p95 < 150ms', label: 'rules evaluation' },
          { value: '75', label: 'unit & integration tests' },
        ],
      },
      {
        title: 'AI-assisted delivery',
        summary:
          'Rolled out an AI-assisted delivery workflow built on Claude Code, with human review and CI gates kept firmly in place.',
        detail: [
          'Repo-level context, custom skills, and MCP-backed spec-to-test scaffolding and PR review. Nothing merges without a person and the pipeline agreeing.',
        ],
        figures: [{ value: '−40%', label: 'spec-to-merge time' }],
      },
    ],
    stack: ['TypeScript', 'NestJS', 'Next.js', 'PostgreSQL', 'Redis', 'RabbitMQ', 'GCP', 'Docker'],
  },
  {
    company: 'MAQ Software',
    note: 'Client: LinkedIn',
    title: 'Software Engineer I · intern → FTE',
    period: 'Jan 2025 — Jun 2026',
    location: 'Noida',
    premise:
      'Worked on LinkedIn’s data infrastructure — high-throughput distributed stream processing, and the tooling to move it safely. Started as an intern and converted to full time.',
    workstreams: [
      {
        title: 'Samza → Flink migration',
        summary:
          'Migrated a high-volume financial stream-processing pipeline from Samza to Apache Flink.',
        detail: [
          'The memory win came from object reuse and cutting intermediate allocations; the throughput win from parallel execution and operator chaining. Financial pipelines are the kind you do not get to replay casually, so correctness came before either number.',
        ],
        figures: [
          { value: '−45%', label: 'Kafka I/O memory' },
          { value: '+20%', label: 'throughput' },
        ],
      },
      {
        title: 'Migration tooling',
        summary:
          'Built the tooling that scaled the migration across repositories rather than doing it by hand.',
        detail: [
          'Automated code transformation, metric-gated progressive rollout, and checkpoint-aware rollback — so a bad deploy could be walked back to a known-good checkpoint instead of being fixed forward under pressure.',
        ],
        figures: [{ value: '−70%', label: 'manual effort' }],
      },
      {
        title: 'MegaRefresh — model lineage',
        summary:
          'DAG-based model-lineage discovery and metadata collection.',
        detail: [
          'Made reproducibility, tiering, and policy-gated publishing possible across the model estate — you can answer where a model’s inputs came from before you publish it.',
        ],
        figures: [{ value: '850+', label: 'models covered' }],
      },
    ],
    stack: ['Java', 'Apache Flink', 'Apache Kafka', 'Python', 'Kubernetes', 'PostgreSQL', 'Linux'],
  },
  {
    company: 'Avant Enterprises',
    note: 'Freelance',
    title: 'Developer',
    period: 'Aug 2024 — Sep 2024',
    location: 'Remote',
    premise:
      'A short freelance engagement shipping project-management modules and customer-facing dashboards.',
    workstreams: [
      {
        title: 'Modules & dashboards',
        summary:
          'Shipped project management modules and customer-facing dashboards, and worked directly with stakeholders on fixes and new features.',
        detail: [
          'Reported a 25% improvement in task completion after the workflow changes landed.',
        ],
      },
    ],
    stack: ['Django', 'React', 'JavaScript', 'REST APIs'],
  },
  {
    company: 'Scholify',
    title: 'Software Engineering Intern',
    period: 'Oct 2023 — Jun 2024',
    location: 'Remote',
    premise:
      'Backend services for a scholarship campaign platform, plus the AWS infrastructure under them.',
    workstreams: [
      {
        title: 'Services & infrastructure',
        summary:
          'Designed microservices and REST APIs for the Go-Pro scholarship campaign, including PhonePe payment integration.',
        detail: [
          'Cut API response times by 20% with Redis caching over PostgreSQL, and handled releases on EC2 with auto-scaling, load balancers, and RDS migrations in production.',
        ],
      },
    ],
    stack: ['Python', 'JavaScript', 'Redis', 'PostgreSQL', 'AWS EC2', 'RDS'],
  },
];
