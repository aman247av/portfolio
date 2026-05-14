import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiCode, HiServer, HiDatabase, HiChip } from 'react-icons/hi';

const highlights = [
  { icon: HiCode, label: 'Backend & APIs', desc: 'Java, Spring Boot, Django, Node.js, REST & Microservices' },
  { icon: HiChip, label: 'Distributed & Stream Processing', desc: 'Kafka, gRPC, Beam, Flink, Real-Time Pipelines' },
  { icon: HiDatabase, label: 'Databases & Caching', desc: 'PostgreSQL, MySQL, MongoDB, Redis' },
  { icon: HiServer, label: 'Cloud & DevOps', desc: 'AWS (EC2, RDS), Cloud Run, Docker, Kubernetes, Linux, Git' },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="relative py-28 md:py-36">

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-cyber-500 text-sm tracking-wider">
            {'// 01. '}ABOUT ME
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mt-3">
            Building backend systems that{' '}
            <span className="bg-gradient-to-r from-cyber-400 to-neon-400 bg-clip-text text-transparent">
              scale reliably
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3 space-y-5"
          >
            <p className="text-dark-200 leading-relaxed text-base md:text-lg">
              I'm a Software Developer Engineer at{' '}
              <span className="text-cyber-400 font-medium">MAQ Software</span>, where I
              build backend services, APIs, and microservices for LinkedIn's data
              infrastructure. My current work involves migrating streaming pipelines
              from Samza to Apache Flink — delivering{' '}
              <span className="text-white font-medium">+20% throughput</span>,{' '}
              <span className="text-white font-medium">-45% Kafka I/O memory</span>, and{' '}
              <span className="text-white font-medium">-35% end-to-end latency</span>.
            </p>
            <p className="text-dark-200 leading-relaxed text-base md:text-lg">
              I graduated with a B.Tech in Computer Science from{' '}
              <span className="text-neon-400 font-medium">
                IIIT Guwahati
              </span>{' '}
              (CGPA 8.59). Previously, I built microservices and REST APIs at Scholify
              using Django, Redis, PostgreSQL, and AWS (EC2, RDS), and delivered
              full-stack feature enhancements in Django + React at Avant Enterprises.
            </p>
            <p className="text-dark-200 leading-relaxed text-base md:text-lg">
              I care about writing clean, scalable backend code, designing systems that
              can handle real-world load, and building APIs that developers love to
              consume. I've solved 350+ DSA problems and qualified for the Amazon ML
              Summer School 2024. Outside of code, you'll find me exploring places
              across India or hunting for indie music.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {[
                { value: '1+', label: 'Years Exp.' },
                { value: '20%', label: 'Throughput Boost' },
                { value: '350+', label: 'DSA Problems' },
                { value: '10K+', label: 'App Installs' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="text-center p-4 rounded-xl border border-dark-500/50 bg-dark-800/50"
                >
                  <div className="text-2xl font-display font-bold text-cyber-400">
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono text-dark-300 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 space-y-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="group p-5 rounded-xl border border-dark-500/50 bg-dark-800/30 hover:border-cyber-500/30 hover:bg-cyber-500/5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-cyber-500/10 text-cyber-400 group-hover:bg-cyber-500/20 transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm">
                      {item.label}
                    </h3>
                    <p className="text-dark-300 text-xs mt-1 font-mono">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
