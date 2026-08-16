export type Link = { label: string; href: string };

export type Outcome = { value: string; label: string };

export type Decision = { title: string; body: string };

/**
 * A case study, structured so every project answers the same six questions:
 * what was broken, what I did, what I decided, what it took, what changed,
 * and what that proves I can do.
 */
export type CaseStudy = {
  slug: string;
  title: string;
  kind: string;
  context: string;
  /** Optional link for `context`, e.g. the studio a project was built with. */
  contextHref?: string;
  /** Live / Shipped / Proprietary — set expectations before the links do. */
  status: { label: string; tone: 'live' | 'closed' };
  /** What it is, in one confident sentence. */
  lede: string;
  /** The problem, stated as a problem rather than a feature list. */
  problem: string;
  /** What I personally did, separated from what the team did. */
  role: string;
  /** The calls I made and why — this is the part that reads as seniority. */
  decisions: Decision[];
  /** What changed. Numbers only where I actually have them. */
  outcomes: Outcome[];
  /** Plain-language outcome, for when a number does not exist. */
  outcomeNote?: string;
  /** Named explicitly so a recruiter scanning for keywords finds them. */
  demonstrates: string[];
  stack: string[];
  links: Link[];
  /** Shown in place of links when the source cannot be public. */
  linkNote?: string;
};

export type SecondaryProject = {
  title: string;
  kind: string;
  context?: string;
  contextHref?: string;
  lede: string;
  role: string;
  facts?: string[];
  stack: string[];
  links: Link[];
};

export type SmallProject = {
  title: string;
  context: string;
  note: string;
  stack: string[];
  href: string;
};

/**
 * NxaCare leads: it is the product owned end to end, and the clearest proof of
 * shipping a whole thing rather than a slice of someone else's system — which
 * is what client work is judged on. The LinkedIn migration follows as the
 * hardest single problem.
 *
 * This ordering only works because Experience now comes first: NAVIOM and
 * LinkedIn are already established before a reader reaches this section, so
 * leading here with a studio product no longer costs any employment
 * credibility. Move Experience back below Work and this order should flip.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: 'nxacare',
    title: 'NxaCare',
    kind: 'Multi-tenant SaaS product',
    context: 'Built with NxaOne',
    contextHref: 'https://nxaone.vercel.app/',
    status: { label: 'LIVE', tone: 'live' },
    lede:
      'A clinic management platform that runs the whole operation — appointments, treatment plans, prescriptions, billing, and patient chat — across ten-plus modules, serving a staff admin panel and a separate patient app.',
    problem:
      'Small clinics run on paper diaries and phone calls. The hard part is not any single feature; it is that scheduling, payments, and billing all have to agree with each other while several people touch them at once — and that every clinic on the platform has to stay sealed off from every other one.',
    role:
      'I built the appointment-booking system, architected the payment layer, and automated the operational workflows behind it.',
    decisions: [
      {
        title: 'An availability engine, not a calendar',
        body:
          'Booking reconciles doctor schedules, slot capacity, and concurrent requests so two patients racing for the same slot cannot both win. Double-booking is prevented at the source rather than reconciled afterwards.',
      },
      {
        title: 'Two payment gateways, one interface',
        body:
          'Stripe and Razorpay sit behind a factory pattern, so the rest of the app never learns which processor it is talking to. Webhooks are signature-verified, and a circuit breaker fails over between gateways when one starts misbehaving.',
      },
      {
        title: 'Work that happens without a request',
        body:
          'Notifications, invoicing, and appointment lifecycle jobs run on BullMQ queues instead of blocking the request path — so a slow email provider never becomes a slow booking.',
      },
      {
        title: 'Tenants that cannot see each other',
        body:
          'Multi-tenant isolation runs through 19+ data models, so a clinic’s patients, schedules, and invoices are scoped to that clinic rather than filtered in the UI after the fact.',
      },
      {
        title: 'One platform, two front ends',
        body:
          'A staff admin panel and a patient-facing app sit on the same API, so a booking made by a receptionist and one made by a patient travel the same code path and obey the same rules.',
      },
      {
        title: 'Billing that actually gates the product',
        body:
          'Subscription billing with tiered plans, usage quotas, and feature gating — the plan a tenant is on determines what the product will do for them, enforced server-side.',
      },
    ],
    outcomes: [
      { value: '10+', label: 'product modules' },
      { value: '19+', label: 'tenant-scoped models' },
      { value: '2', label: 'front ends, one API' },
    ],
    outcomeNote:
      'Live at nxacare.com and running real clinic operations. Usage figures are the clinics’ to share, not mine.',
    demonstrates: [
      'Product ownership end to end',
      'Concurrency & data integrity',
      'Payments integration',
      'Multi-tenant architecture',
      'Async job processing',
    ],
    stack: [
      'Node.js',
      'React',
      'PostgreSQL',
      'Redis',
      'BullMQ',
      'Socket.IO',
      'Stripe',
      'Razorpay',
      'Docker',
    ],
    links: [{ label: 'Visit nxacare.com', href: 'https://nxacare.com' }],
  },
  {
    slug: 'flink-migration',
    title: 'Samza → Flink migration',
    kind: 'Distributed stream processing',
    context: 'LinkedIn data infrastructure, via MAQ Software',
    status: { label: 'SHIPPED', tone: 'closed' },
    lede:
      'Migrating a high-volume financial stream-processing pipeline off Apache Samza and onto Apache Flink — and building the tooling that made the same migration repeatable across repositories.',
    problem:
      'The pipeline was expensive in memory and pinned to an ageing runtime, and there were many more like it. Doing the migration by hand would not scale past the first repository. Financial pipelines are also the kind you do not get to replay casually, so a migration that was merely fast would have been the wrong migration.',
    role:
      'I migrated the pipeline and then built the tooling that scaled the work beyond it — code transformation, rollout, and rollback.',
    decisions: [
      {
        title: 'Correctness ahead of either number',
        body:
          'On a financial pipeline, a throughput win that costs you a replay is not a win. Every optimisation below was taken only where it could be made without changing what the pipeline computed.',
      },
      {
        title: 'Object reuse over allocation churn',
        body:
          'The memory cost was dominated by intermediate allocations on the Kafka I/O path. Reusing objects and cutting those intermediates is where the 45% came from — not from tuning heap flags.',
      },
      {
        title: 'Parallel execution and operator chaining',
        body:
          'Throughput came from Flink’s execution model rather than from throwing hardware at it: parallelising the operators that could be parallelised, and chaining the ones whose serialisation between stages was pure overhead.',
      },
      {
        title: 'Automate the migration, not just the migrated',
        body:
          'Automated code transformation turned a per-repository manual edit into a repeatable pass. This is the decision that turned one migration into a programme.',
      },
      {
        title: 'Metric-gated rollout, checkpoint-aware rollback',
        body:
          'Rollout advanced only while the metrics agreed, and rollback was checkpoint-aware — so a bad deploy walked back to a known-good checkpoint instead of being fixed forward under pressure at 2am.',
      },
    ],
    outcomes: [
      { value: '−45%', label: 'Kafka I/O memory' },
      { value: '+20%', label: 'throughput' },
      { value: '−70%', label: 'manual migration effort' },
    ],
    outcomeNote:
      'Figures are indexed to the pre-migration baseline rather than stated in absolute units.',
    demonstrates: [
      'Distributed systems',
      'Stream processing at scale',
      'JVM performance work',
      'Safe production migration',
      'Developer tooling',
    ],
    stack: ['Java', 'Apache Flink', 'Apache Kafka', 'Python', 'Kubernetes'],
    links: [],
    linkNote: 'Proprietary — the code is LinkedIn’s and is not public.',
  },
];

export const secondary: SecondaryProject[] = [
  {
    title: 'Knowledgify',
    kind: 'Android app · Published',
    context: 'Built with NxaOne',
    contextHref: 'https://nxaone.vercel.app/',
    lede:
      'An education app for diploma students, live on the Play Store with a community layer for peer learning.',
    role: 'Built the app and the Firebase backend behind it.',
    facts: ['10,000+ installs', '4.1★ on Google Play'],
    stack: ['Java', 'Android SDK', 'Firebase'],
    links: [
      {
        label: 'Play Store',
        href: 'https://play.google.com/store/apps/details?id=com.gap.mobigpk1',
      },
      { label: 'Source', href: 'https://github.com/aman247av/Knowledgify' },
    ],
  },
];

/** Smaller builds, kept short on purpose. Depth lives in the case studies. */
export const smaller: SmallProject[] = [
  {
    title: 'Mess Management System',
    context: 'IIIT Guwahati · used on campus',
    note: 'QR-based complaint tracking, role-based access, and payments for campus mess operations. Cut complaint resolution time by roughly 30%.',
    stack: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    href: 'https://github.com/aman247av/Mess-Management-System-IIITG',
  },
  {
    title: 'Currency Exchange',
    context: 'Spring Boot microservices',
    note: 'Exchange and conversion services behind an API gateway with Eureka discovery, brought up in one command via Docker Compose.',
    stack: ['Java', 'Spring Boot', 'Eureka', 'Docker'],
    href: 'https://github.com/aman247av/Currency-Exchange-Application',
  },
];
