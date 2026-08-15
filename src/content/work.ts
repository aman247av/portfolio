export type Link = { label: string; href: string };

export type Highlight = { title: string; body: string };

export type FeaturedProject = {
  slug: string;
  title: string;
  kind: string;
  context: string;
  /** What it is, in one confident sentence. */
  lede: string;
  /** Why it exists. */
  premise: string;
  /** What I personally did. */
  role: string;
  highlights: Highlight[];
  stack: string[];
  links: Link[];
};

export type SecondaryProject = {
  title: string;
  kind: string;
  context?: string;
  lede: string;
  role: string;
  facts?: string[];
  stack: string[];
  links: Link[];
};

export type ArchiveProject = {
  title: string;
  context: string;
  note: string;
  stack: string[];
  href: string;
};

/* The one that gets a full case-study treatment: it is the clearest proof
   of shipping a whole product, and the most relevant to client work. */
export const featured: FeaturedProject = {
  slug: 'nxacare',
  title: 'Nxacare',
  kind: 'Product · Multi-tenant SaaS',
  context: 'Built with Nxa',
  lede:
    'A clinic management platform that runs the whole operation — appointments, treatment plans, prescriptions, billing, and patient chat — across ten-plus modules, serving a staff admin panel and a separate patient app.',
  premise:
    'Small clinics run on paper diaries and phone calls. The hard part is not any single feature; it is that scheduling, payments, and billing all have to agree with each other while several people touch them at once — and that every clinic on the platform has to stay sealed off from every other one.',
  role:
    'I built the appointment-booking system, architected the payment layer, and automated the operational workflows behind it.',
  highlights: [
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
      title: 'Billing with teeth',
      body:
        'Subscription billing with tiered plans, usage quotas, and feature gating — the plan a tenant is on actually determines what the product will do for them.',
    },
    {
      title: 'One platform, two front ends',
      body:
        'A staff admin panel and a patient-facing app sit on the same API, so a booking made by a receptionist and one made by a patient travel the same code path and obey the same rules.',
    },
    {
      title: 'Tenants that cannot see each other',
      body:
        'Multi-tenant isolation runs through 19+ data models, so a clinic’s patients, schedules, and invoices are scoped to that clinic rather than filtered in the UI after the fact.',
    },
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
  links: [
    { label: 'Visit nxacare.com', href: 'https://nxacare.com' },
    { label: 'Backend source', href: 'https://github.com/aman247av/nxacare-backend' },
  ],
};

export const secondary: SecondaryProject[] = [
  {
    title: 'Knowledgify',
    kind: 'Android app · Published',
    context: 'Built with Nxa',
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
  {
    title: 'Currency Exchange',
    kind: 'Backend · Microservices',
    lede:
      'A Spring Boot microservice set — exchange and conversion services behind an API gateway, with Eureka handling discovery.',
    role: 'Built the services and the Docker Compose setup that brings the whole system up in one command.',
    stack: ['Java', 'Spring Boot', 'Eureka', 'Docker'],
    links: [
      { label: 'Source', href: 'https://github.com/aman247av/Currency-Exchange-Application' },
    ],
  },
];

export const archive: ArchiveProject[] = [
  {
    title: 'Mess Management System',
    context: 'IIIT Guwahati',
    note: 'QR-based complaint tracking, role-based access, and payments for campus mess operations. Cut complaint resolution time by roughly 30%.',
    stack: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    href: 'https://github.com/aman247av/Mess-Management-System-IIITG',
  },
  {
    title: 'Face Recognition Attendance',
    context: 'Computer vision',
    note: 'One-shot face verification with Siamese networks, logging attendance in real time at ~99% accuracy.',
    stack: ['Python', 'TensorFlow', 'Firebase'],
    href: 'https://github.com/aman247av/ML-Projects/tree/main/Face-Recognition-Attendence-System',
  },
  {
    title: 'AI Game Agents',
    context: 'Search & constraints',
    note: 'Tic-tac-toe on minimax, checkers with alpha-beta pruning, and a Sudoku solver built on constraint satisfaction.',
    stack: ['Python'],
    href: 'https://github.com/aman247av/AI-Projects',
  },
];
