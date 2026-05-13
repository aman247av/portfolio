import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiAcademicCap, HiLightningBolt, HiStar, HiSparkles, HiUserGroup } from 'react-icons/hi';

const achievements = [
  {
    icon: HiStar,
    title: 'Amazon ML Summer School 2024',
    description: 'Qualified for Amazon\'s prestigious Machine Learning Summer School — a highly selective program covering advanced ML topics.',
    tag: 'ML / AI',
    accent: 'cyber',
  },
  {
    icon: HiSparkles,
    title: '2nd Place — Tink-A-Thon',
    description: 'Secured 2nd place in the inter-college hackathon organized by IIIT Guwahati and IIIT Kota.',
    tag: 'Hackathon',
    accent: 'neon',
  },
  {
    icon: HiLightningBolt,
    title: 'Top 20 — COMSYS-23 Kaggle',
    description: 'Ranked in Top 20 in the COMSYS-23 Kaggle Hackathon organized by Jadavpur University and IIT Mandi.',
    tag: 'Data Science',
    accent: 'cyber',
  },
  {
    icon: HiAcademicCap,
    title: '350+ DSA Problems',
    description: 'Solved 350+ Data Structures & Algorithms problems on GeeksforGeeks, building strong competitive programming foundations.',
    tag: 'Problem Solving',
    accent: 'neon',
  },
  {
    icon: HiUserGroup,
    title: 'Campus Leadership',
    description: 'Programming Club Coordinator, App Development Lead, and GDSC Lead at IIIT Guwahati — organized events, mentored peers, and led technical communities.',
    tag: 'Leadership',
    accent: 'cyber',
  },
];

const education = {
  degree: 'B.Tech in Computer Science & Engineering',
  institution: 'Indian Institute of Information Technology, Guwahati',
  period: '2021 — 2025',
  cgpa: '8.59 / 10',
};

export default function Achievements() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="achievements" className="relative py-28 md:py-36">
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-30" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-neon-600/5 rounded-full blur-[130px]" />
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-cyber-500 text-sm tracking-wider">
            {'// 05. '}MILESTONES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mt-3">
            <span className="bg-gradient-to-r from-cyber-400 to-neon-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
        </motion.div>

        {/* Achievements grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className={`group relative p-6 rounded-2xl border border-dark-500/50 bg-dark-800/30 hover:border-cyber-500/20 hover:bg-dark-800/50 transition-all duration-500 overflow-hidden ${
                i === achievements.length - 1 && achievements.length % 2 !== 0 ? 'md:col-span-2 md:max-w-md md:mx-auto' : ''
              }`}
            >
              {/* Subtle gradient overlay on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                item.accent === 'cyber'
                  ? 'bg-gradient-to-br from-cyber-500/5 to-transparent'
                  : 'bg-gradient-to-br from-neon-500/5 to-transparent'
              }`} />

              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl shrink-0 ${
                    item.accent === 'cyber'
                      ? 'bg-cyber-500/10 text-cyber-400'
                      : 'bg-neon-500/10 text-neon-400'
                  }`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-full ${
                        item.accent === 'cyber'
                          ? 'bg-cyber-500/10 text-cyber-400'
                          : 'bg-neon-500/10 text-neon-400'
                      }`}>
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-lg font-display font-bold text-white mt-2 group-hover:text-cyber-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-dark-300 text-sm mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative p-8 rounded-2xl border border-dark-500/50 bg-dark-800/30 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-500/3 via-transparent to-neon-500/3" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <HiAcademicCap className="w-5 h-5 text-cyber-400" />
                <span className="font-mono text-cyber-400 text-xs tracking-wider">
                  EDUCATION
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-white">
                {education.degree}
              </h3>
              <p className="text-neon-400 font-medium mt-1">
                {education.institution}
              </p>
              <p className="text-dark-300 text-sm font-mono mt-2">
                {education.period}
              </p>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl border border-cyber-500/20 bg-cyber-500/5 shrink-0">
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-cyber-400">
                  {education.cgpa}
                </div>
                <div className="text-[10px] font-mono text-dark-300 mt-1 tracking-wider">
                  CGPA
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
