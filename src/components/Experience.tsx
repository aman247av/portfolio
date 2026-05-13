import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    role: 'Software Developer Engineer I',
    company: 'MAQ Software',
    client: 'Client: LinkedIn',
    period: 'Jan 2025 — Present',
    location: 'Noida, India',
    projects: [
      {
        title: 'Samza → Flink Pipeline Migration',
        points: [
          'Migrated LinkedIn\'s large-scale streaming pipelines from Beam-on-Samza to Beam-on-Flink, deploying them as containerized Flink applications on Kubernetes.',
          'Built migration scripts for code changes and a CLI tool to capture Samza checkpoints and redeploy jobs on Flink from the latest checkpoint, validating Kafka lag, throughput, and recovery during restarts.',
          'Achieved +20% throughput, -45% Kafka I/O memory, and -35% end-to-end latency post-migration.',
        ],
      },
      {
        title: 'Automating Source Delay Ticket Management',
        points: [
          'Developed a Python service to monitor source-table delays from PostgreSQL and auto-raise tickets via the ticketing API, with buffer and cooldown logic to filter noise from frequently delayed tables.',
          'Owned the full ticket lifecycle — dedup, status sync on delay changes, auto-closure on recovery, and added a log table for tracking and auditing.',
          'Reduced 90%+ of manual on-call work across 100+ daily delay events.'
        ],
      },
    ],
    tech: ['Java', 'Python', 'Apache Kafka', 'Apache Beam', 'Kubernetes', 'PostgreSQL', 'REST APIs', 'Linux', 'Git'],
    accent: 'cyber',
  },
  {
    role: 'Freelance Developer',
    company: 'Avant Enterprises',
    client: null,
    period: 'Aug 2024 - Sept 2024',
    location: 'Remote',
    projects: null,
    description: [
      'Shipped project management modules and customer-facing dashboards, boosting task completion by 25% and improving workflow clarity.',
      'Resolved critical system bugs and shipped new features directly with stakeholders, increasing platform stability.'
    ],
    tech: ['Django', 'React', 'JavaScript', 'REST APIs'],
    accent: 'neon',
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
    accent: 'cyber',
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
                      <h3 className="text-xl font-display font-bold text-white">
                        {exp.role}
                      </h3>
                      <p className={`font-semibold ${exp.accent === 'cyber' ? 'text-cyber-400' : 'text-neon-400'}`}>
                        {exp.company}
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
