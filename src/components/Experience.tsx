import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt } from 'react-icons/fa';

const experiences = [
  {
    role: 'Software Engineer I',
    company: 'NAVIOM',
    client: null,
    period: 'Jul 2026 — Present',
    location: 'Gurugram, India',
    projects: [
      {
        title: 'Platform Layer — Cross-Border Logistics',
        points: [
          'Own the platform layer of a greenfield cross-border logistics product, shipping four versioned internal packages — Workflow Engine, Rules Engine, Integration Adapter Framework, and Vault — consumed by 6 services.',
          'Designed and built the Workflow Engine end-to-end: a case management system turning operational exceptions into owned, SLA-tracked tickets through auto-assignment, maker-checker approvals, and evidence-gated closure.',
          'Built a unified partner Integration Adapter with retries, a cross-instance Redis sliding-window circuit breaker, and fail-closed routing; shipped a versioned Rules Engine at p95 < 150ms, backed by 75 unit and integration tests.',
        ],
      },
      {
        title: 'AI-Assisted Delivery Workflow',
        points: [
          'Rolled out an AI-assisted delivery workflow with Claude Code — repo-level context, custom skills, and MCP-backed spec-to-test scaffolding and PR review.',
          'Cut spec-to-merge time by 40% while keeping human review and CI gates in the loop.',
        ],
      },
    ],
    tech: ['TypeScript', 'NestJS', 'Next.js', 'PostgreSQL', 'Redis', 'RabbitMQ', 'GCP', 'Docker'],
    accent: 'cyber',
  },
  {
    role: 'Software Engineer I',
    company: 'MAQ Software',
    client: 'Client: LinkedIn',
    period: 'Jan 2025 — Jun 2026',
    location: 'Noida, India',
    projects: [
      {
        title: 'Samza → Flink Pipeline Migration',
        points: [
          'Migrated LinkedIn\'s high-volume financial stream-processing pipeline from Samza to Apache Flink, deploying jobs as containerized Flink applications on Kubernetes.',
          'Cut Kafka I/O memory 45% via object reuse and fewer intermediate allocations, and raised throughput 20% through parallel execution and operator chaining.',
          'Built the tooling that scaled the migration across repos — automated code transformation, metric-gated progressive rollout, and checkpoint-aware rollback — cutting manual effort 70%.',
        ],
      },
      {
        title: 'MegaRefresh — Model Lineage & Metadata',
        points: [
          'Built DAG-based model-lineage discovery and metadata collection for LinkedIn\'s MegaRefresh initiative.',
          'Enabled reproducibility, tiering, and policy-gated publishing across 850+ models.',
        ],
      },
    ],
    tech: ['Java', 'Apache Flink', 'Apache Kafka', 'Python', 'Kubernetes', 'PostgreSQL', 'Linux', 'Git'],
    accent: 'neon',
  },
  {
    role: 'Freelance Developer',
    company: 'Avant Enterprises',
    client: null,
    org: 'Nxa',
    link: 'https://avant.reminiscent.in/#/login',
    period: 'Aug 2024 - Sept 2024',
    location: 'Remote',
    projects: null,
    description: [
      'Shipped project management modules and customer-facing dashboards, boosting task completion by 25% and improving workflow clarity.',
      'Resolved critical system bugs and shipped new features directly with stakeholders, increasing platform stability.'
    ],
    tech: ['Django', 'React', 'JavaScript', 'REST APIs'],
    accent: 'cyber',
  },
  {
    role: 'Software Engineering Intern',
    company: 'Scholify',
    client: null,
    period: 'Oct 2023 - Jun 2024',
    location: 'Remote',
    projects: null,
    description: [
      'Designed microservices and REST APIs for the Go-Pro scholarship campaign, integrating PhonePe payment gateway for processing campaign transactions.',
      'Optimized API response times by 20% using Redis caching, with PostgreSQL for reliable data persistence across services.',
      'Deployed releases and managed AWS infrastructure — EC2 instances with Auto-Scaling, load balancers, and RDS database migrations in production.'
    ],
    tech: ['Python', 'JavaScript', 'Redis', 'PostgreSQL', 'AWS EC2', 'RDS'],
    accent: 'neon',
  },
];

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="experience" className="relative py-28 md:py-36">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon-600/5 rounded-full blur-[150px]" />
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-cyber-500 text-sm tracking-wider">
            {'// 02. '}WHERE I'VE WORKED
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mt-3">
            Professional{' '}
            <span className="bg-gradient-to-r from-cyber-400 to-neon-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[11px] md:left-[11px] top-0 bottom-0 w-px bg-gradient-to-b from-cyber-500/50 via-neon-500/30 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="relative pl-10 md:pl-12 group"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-[5px] md:left-[5px] top-8 w-3.5 h-3.5 rounded-full border-2 ${
                    exp.accent === 'cyber'
                      ? 'border-cyber-500 bg-cyber-500/20 shadow-[0_0_10px_rgba(0,245,255,0.3)]'
                      : 'border-neon-500 bg-neon-500/20 shadow-[0_0_10px_rgba(168,85,247,0.3)]'
                  } group-hover:scale-125 transition-transform duration-300`}
                />

                {/* Card */}
                <div className="p-6 md:p-8 rounded-2xl border border-dark-500/50 bg-dark-800/30 hover:border-cyber-500/20 hover:bg-dark-800/50 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(0,245,255,0.05)]">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                        {exp.role}
                        {exp.org && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider bg-neon-500/10 text-neon-400 border border-neon-500/20">
                            {exp.org}
                          </span>
                        )}
                      </h3>
                      <p className={`font-semibold ${exp.accent === 'cyber' ? 'text-cyber-400' : 'text-neon-400'}`}>
                        {exp.company}
                        {exp.link && (
                          <a href={exp.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center ml-2 text-dark-400 hover:text-cyber-400 transition-colors">
                            <FaExternalLinkAlt className="w-3 h-3" />
                          </a>
                        )}
                        {exp.client && (
                          <span className="text-dark-300 font-normal text-sm ml-2">
                            ({exp.client})
                          </span>
                        )}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-sm text-dark-300">
                        {exp.period}
                      </span>
                      <p className="text-xs text-dark-400 mt-0.5">{exp.location}</p>
                    </div>
                  </div>

                  {exp.projects ? (
                    <div className="space-y-5 mb-5">
                      {exp.projects.map((proj, pi) => (
                        <div key={pi}>
                          <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                            <span className={`w-1 h-4 rounded-full ${exp.accent === 'cyber' ? 'bg-cyber-500' : 'bg-neon-500'}`} />
                            {proj.title}
                          </h4>
                          <ul className="space-y-2 pl-3">
                            {proj.points.map((pt, j) => (
                              <li key={j} className="flex items-start gap-3 text-dark-200 text-sm leading-relaxed">
                                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                                  exp.accent === 'cyber' ? 'bg-cyber-500/60' : 'bg-neon-500/60'
                                }`} />
                                {pt}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-2 mb-5">
                      {exp.description?.map((desc, j) => (
                        <li key={j} className="flex items-start gap-3 text-dark-200 text-sm leading-relaxed">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                            exp.accent === 'cyber' ? 'bg-cyber-500' : 'bg-neon-500'
                          }`} />
                          {desc}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs font-mono rounded-full border border-dark-400/50 text-dark-200 bg-dark-700/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
