/**
 * Answers "why should I hire this person", not "who is this person".
 * Autobiography was cut: it was the least useful thing on the page for
 * every one of the five audiences this site is written for.
 */
export const about = [
  'I work on the unglamorous middle of products. The scheduling, the retries, the part that decides what happens when a partner API stops answering. Most of what I have built lately is platform code, the libraries other engineers depend on, where a careless change is someone else’s outage.',
  'That shapes how I work. I would rather ship a versioned package with a boring upgrade path than a clever abstraction nobody can reason about six months later. I like problems where correctness is load-bearing: concurrent bookings, payment webhooks, checkpointed stream jobs. Those are the ones where the details actually decide whether it works.',
  'I also build whole products end to end. Most of that happens through NxaOne, a small product studio I co-build with a few people I trust. We shipped NxaCare, a clinic platform running real operations, and Knowledgify, an Android app with ten thousand installs. Doing both keeps me honest: infrastructure work teaches you what breaks at scale, and product work reminds you that someone has to use the thing.',
];

/** The short version, for anyone who is not going to read three paragraphs. */
export const strengths = [
  {
    title: 'Systems that fail well',
    body: 'Circuit breakers, retries, fail-closed routing, checkpoint-aware rollback. I design for the day the dependency is down, not the day it works.',
  },
  {
    title: 'Correctness under concurrency',
    body: 'Slot locking, payment webhooks, exactly-once-shaped stream processing. The problems where being roughly right is the same as being wrong.',
  },
  {
    title: 'Platform code others depend on',
    body: 'Versioned internal packages with upgrade paths, consumed by six services. Written to be depended on, not just to work once.',
  },
  {
    title: 'Shipping the whole thing',
    body: 'System design through deployment: schema, API, queues, CI, infra. I have taken products from an empty repository to production.',
  },
];

export type StackGroup = { label: string; items: string[] };

/** What I actually reach for, grouped by what it is for — not a logo wall. */
export const stack: StackGroup[] = [
  {
    label: 'Day to day',
    items: ['TypeScript', 'NestJS', 'Node.js', 'PostgreSQL', 'Redis', 'Next.js'],
  },
  {
    label: 'At scale',
    items: ['Java', 'Apache Kafka', 'Apache Flink', 'RabbitMQ', 'Protobuf / Avro'],
  },
  {
    label: 'Shipping',
    items: ['GCP', 'AWS (EC2, RDS, Lambda)', 'Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD', 'Linux'],
  },
  {
    label: 'Also fluent',
    items: ['Python', 'Spring', 'Django', 'React', 'MongoDB', 'gRPC', 'C/C++'],
  },
  {
    label: 'Working with AI',
    items: ['Claude Code', 'MCP', 'RAG', 'Agentic workflows', 'AI-assisted review'],
  },
  {
    label: 'Practices',
    items: [
      'System design',
      'Distributed systems',
      'Data modelling',
      'Unit & integration testing',
      'Shell scripting',
    ],
  },
];

export const education = {
  degree: 'B.Tech, Computer Science & Engineering',
  institution: 'Indian Institute of Information Technology, Guwahati',
  location: 'Guwahati, Assam',
  period: 'Dec 2021 — May 2025',
};

export const recognition = [
  {
    title: 'Amazon ML Summer School',
    detail: 'Selected as a mentee for the 2024 cohort.',
    href: 'https://drive.google.com/file/d/19E522lADRYezV9ARg0-ZXNUXLddJR46r/view?usp=sharing',
  },
  {
    title: 'COMSYS-23',
    detail: 'Top 20 in the ML Kaggle hackathon run by Jadavpur University and IIT Mandi.',
    href: 'https://drive.google.com/file/d/17vUw7MplaIk9Calt-YFmTe4liszmf09X/view?usp=drive_link',
  },
];

export type Service = {
  title: string;
  body: string;
  /** Evidence that this is a thing I have actually done, not a wish list. */
  proof: string;
};

/**
 * Only services the existing work actually supports, each tied to the project
 * that proves it. A service with no proof line does not belong here.
 */
export const services: Service[] = [
  {
    title: 'Backends & APIs',
    body: 'REST and gRPC services, data modelling, schema design, auth, queues, caching, and the deployment around them.',
    proof: 'Platform services at NAVIOM · microservices and PhonePe payments at Scholify',
  },
  {
    title: 'Full-stack product MVPs',
    body: 'An idea taken from empty repository to something real users log into, from schema through UI through infrastructure.',
    proof: 'NxaCare, a live multi-tenant SaaS · Knowledgify, 10,000+ installs',
  },
  {
    title: 'Payments & integrations',
    body: 'Gateway integration, webhook signature verification, idempotency, reconciliation, and failover between providers.',
    proof: 'Stripe and Razorpay behind one interface at NxaCare · PhonePe at Scholify',
  },
  {
    title: 'Web apps & dashboards',
    body: 'Internal tools and customer-facing dashboards where the hard part is the data behind the screen, not the screen.',
    proof: 'Project management modules and dashboards for Avant Enterprises',
  },
  {
    title: 'Platform & internal tooling',
    body: 'Versioned internal packages, migration tooling, and the automation that turns a one-off job into a repeatable one.',
    proof: 'Four internal packages at NAVIOM · migration tooling on LinkedIn data infra',
  },
];

export type Engagement = { k: string; v: string; href?: string };

/** How working together actually works. Stated up front to pre-empt the ask. */
export const engagement: Engagement[] = [
  { k: 'availability', v: 'A small amount of freelance work alongside my full-time role' },
  {
    k: 'larger scope',
    v: 'Taken on through NxaOne, the product studio I co-build',
    href: 'https://nxaone.vercel.app/',
  },
  { k: 'working style', v: 'Remote, direct with stakeholders, written updates' },
  { k: 'first step', v: 'Tell me what it is and what it needs to do, and I will tell you honestly if I am the right fit' },
];
