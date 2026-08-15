import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  // ── Featured ───────────────────────────────────────────────
  {
    title: 'Nxacare',
    subtitle: 'Multi-Tenant SaaS Clinic Management Platform',
    org: 'Nxa',
    description:
      'Full-stack healthcare SaaS digitizing end-to-end clinic operations across 10+ modules — appointments, treatment plans, billing, prescriptions, and real-time chat. Built the availability engine reconciling doctor schedules, slot capacity, and concurrent requests to prevent double-booking; architected the payment layer integrating Stripe and Razorpay via a factory pattern with webhook signature verification and circuit-breaker gateway fallback; automated notification, invoicing, and appointment workflows with BullMQ, plus subscription billing with tiered plans, usage quotas, and feature gating.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'BullMQ', 'Socket.IO', 'Stripe', 'Razorpay', 'Docker'],
    github: 'https://github.com/aman247av/nxacare-backend',
    live: 'https://nxacare.com',
    featured: true,
    metrics: ['Zero double-bookings', 'Dual payment gateways', 'Multi-tenant isolation'],
  },
  {
    title: 'Currency Exchange Microservices',
    subtitle: 'Cloud-Native Java Backend',
    description:
      'Production-ready microservices architecture for currency exchange built with Spring Boot. Includes API gateway, Eureka naming server, currency-conversion and currency-exchange services, containerized with Docker Compose for single-command deployment.',
    tech: ['Java', 'Spring Boot', 'Docker', 'API Gateway', 'REST APIs'],
    github: 'https://github.com/aman247av/Currency-Exchange-Application',
    live: null,
    featured: true,
    metrics: ['Service discovery', 'Docker Compose deploy', 'API Gateway routing'],
  },
  {
    title: 'Knowledgify',
    subtitle: 'Published Android App — 10K+ Installs',
    org: 'Nxa',
    description:
      'Educational Android app for diploma students with 10,000+ installs and 4.1-star rating on Google Play Store. Built with Java, Android SDK, and Firebase for real-time community engagement, cloud storage, and peer learning.',
    tech: ['Java', 'Android SDK', 'Firebase', 'Cloud Storage'],
    github: 'https://github.com/aman247av/Knowledgify',
    live: 'https://play.google.com/store/apps/details?id=com.gap.mobigpk1',
    featured: true,
    metrics: ['10K+ installs', '4.1 ★ rating', 'Play Store published'],
  },
  // ── Other Noteworthy ──────────────────────────────────────
  {
    title: 'Mess Management System',
    subtitle: 'IIIT Guwahati — Campus Platform',
    description:
      'Full-stack MERN application digitizing campus mess operations. Features QR-based complaint tracking, real-time menu display, role-based access control, and secure payment transactions. Reduced complaint resolution time by ~30%.',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/aman247av/Mess-Management-System-IIITG',
    live: null,
    featured: false,
    metrics: ['~30% faster resolution', 'Role-based auth', 'QR complaint tracking'],
  },
  {
    title: 'Face Recognition Attendance',
    subtitle: 'Computer Vision + Deep Learning',
    description:
      'Intelligent attendance system using Siamese neural networks for one-shot face verification. Achieves ~99% accuracy with TensorFlow and Firebase backend integration for real-time attendance logging.',
    tech: ['Python', 'TensorFlow', 'Siamese Networks'],
    github: 'https://github.com/aman247av/ML-Projects/tree/main/Face-Recognition-Attendence-System',
    live: null,
    featured: false,
    metrics: ['~99% accuracy', 'One-shot verification', 'Real-time logging'],
  },
  {
    title: 'AI Game Agents',
    subtitle: 'Adversarial Search & Constraint Solving',
    description:
      'Collection of AI-powered game agents — Tic-tac-toe (Minimax), Checkers (Alpha-Beta pruning), and Sudoku solver (Constraint Satisfaction). Implements optimal adversarial strategies and backtracking search.',
    tech: ['Python', 'Minimax Algorithm', 'Alpha-Beta Pruning'],
    github: 'https://github.com/aman247av/AI-Projects',
    live: null,
    featured: false,
    metrics: ['3 game agents', 'Optimal play', 'AI algorithms'],
  },
];

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" className="relative py-28 md:py-36">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-cyber-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-neon-600/5 rounded-full blur-[120px]" />
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-cyber-500 text-sm tracking-wider">
            {'// 04. '}THINGS I'VE BUILT
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mt-3">
            Featured{' '}
            <span className="bg-gradient-to-r from-cyber-400 to-neon-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </motion.div>

        {/* Featured projects */}
        <div className="space-y-8 mb-12">
          {projects
            .filter((p) => p.featured)
            .map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
                className="group relative p-6 md:p-8 rounded-2xl border border-dark-500/50 bg-dark-800/30 hover:border-cyber-500/25 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,245,255,0.06)]"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-mono text-cyber-400 text-xs">
                        {project.subtitle}
                      </p>
                      <div className="flex items-center gap-2 shrink-0 ml-3">
                        {project.org && (
                          <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider bg-neon-500/10 text-neon-400 border border-neon-500/20">
                            {project.org}
                          </span>
                        )}
                        <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider bg-cyber-500/10 text-cyber-400 border border-cyber-500/20">
                          FEATURED
                        </span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-cyber-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-dark-200 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-3 mb-5">
                      {project.metrics.map((m) => (
                        <span
                          key={m}
                          className="flex items-center gap-1.5 text-xs font-mono"
                        >
                          <span className="w-1 h-1 rounded-full bg-green-400" />
                          <span className="text-dark-200">{m}</span>
                        </span>
                      ))}
                    </div>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-[11px] font-mono rounded-md border border-dark-400/40 text-dark-200 bg-dark-700/40"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-dark-300 hover:text-cyber-400 transition-colors"
                        >
                          <FaGithub className="w-4 h-4" />
                          <span className="font-mono">Source</span>
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-dark-300 hover:text-cyber-400 transition-colors"
                        >
                          <FaExternalLinkAlt className="w-3.5 h-3.5" />
                          <span className="font-mono">Live</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Other projects grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="font-display font-semibold text-white text-xl mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-gradient-to-r from-cyber-500 to-transparent" />
            Other Noteworthy Projects
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects
              .filter((p) => !p.featured)
              .map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="group p-5 rounded-xl border border-dark-500/40 bg-dark-800/20 hover:border-cyber-500/20 hover:bg-dark-800/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-mono text-xs text-neon-400">
                      {project.subtitle}
                    </p>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark-400 hover:text-cyber-400 transition-colors"
                    >
                      <FaGithub className="w-4 h-4" />
                    </a>
                  </div>
                  <h4 className="font-display font-semibold text-white text-base mb-2 group-hover:text-cyber-300 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-dark-300 text-xs leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono text-dark-300 px-2 py-0.5 rounded-md bg-dark-700/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
