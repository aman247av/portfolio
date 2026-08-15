/** First person, specific, no manifesto lines. */
export const about = [
  'I work on the unglamorous middle of products — the scheduling, the retries, the part that decides what happens when a partner API stops answering. Most of what I have built lately is platform code: libraries other engineers depend on, where a careless change is someone else’s outage.',
  'That shapes how I work. I would rather ship a versioned package with a boring upgrade path than a clever abstraction nobody can reason about six months later. I like problems where correctness is load-bearing - concurrent bookings, payment webhooks, checkpointed stream jobs, because those are the ones where the details actually decide whether it works.',
  'I also build whole products end to end. Most of that happens through Nxa, a small product studio I co-build with a few people I trust — we shipped Nxacare, a clinic platform running real operations, and Knowledgify, an Android app with ten thousand installs. We take on select client work too, from web apps to internal tools. Doing both keeps me honest: infrastructure work teaches you what breaks at scale, and product work reminds you that someone has to use the thing.',
  'Outside of code I am usually somewhere else in India, or looking for music nobody has recommended to me yet.',
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
  detail: 'CGPA 8.59',
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
  {
    title: 'LeetCode',
    detail: '250+ problems solved.',
    href: 'https://leetcode.com/u/aman24av/',
  },
  {
    title: 'GeeksforGeeks',
    detail: '400+ problems solved.',
    href: 'https://www.geeksforgeeks.org/profile/aman247av',
  },
];

/** Only services the existing work actually supports. */
export const services = [
  'Web apps & dashboards',
  'Backends & APIs',
  'Full-stack product MVPs',
  'Payments & integrations',
];
