import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  SiPython, SiJavascript,
  SiCplusplus, SiApachekafka, SiApacheflink, SiSpringboot,
  SiReact, SiNodedotjs, SiDjango, SiExpress,
  SiMongodb, SiMysql, SiPostgresql, SiRedis,
  SiDocker, SiKubernetes, SiLinux, SiGit,
  SiTensorflow, SiPytorch, SiGooglecloud,
} from 'react-icons/si';
import { FaJava, FaAws, FaAndroid } from 'react-icons/fa';
import { HiCube, HiServer } from 'react-icons/hi';
import { TbApi, TbBrain } from 'react-icons/tb';
import { VscSymbolInterface } from 'react-icons/vsc';

const categories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java', icon: FaJava, color: '#f89820' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'C/C++', icon: SiCplusplus, color: '#00599C' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'SQL', icon: SiMysql, color: '#4479A1' },
    ],
  },
  {
    title: 'Backend & APIs',
    skills: [
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Django', icon: SiDjango, color: '#092E20' },
      { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
      { name: 'REST APIs', icon: TbApi, color: '#00f5ff' },
      { name: 'Microservices', icon: HiServer, color: '#22d3ee' },
    ],
  },
  {
    title: 'Databases & Caching',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Redis', icon: SiRedis, color: '#DC382D' },
    ],
  },
  {
    title: 'Distributed Systems',
    skills: [
      { name: 'Apache Kafka', icon: SiApachekafka, color: '#FFFFFF' },
      { name: 'gRPC', icon: VscSymbolInterface, color: '#5AC0C2' },
      { name: 'Apache Flink', icon: SiApacheflink, color: '#E6526F' },
      { name: 'Apache Beam', icon: HiCube, color: '#FF6F00' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS (EC2, RDS)', icon: FaAws, color: '#FF9900' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Linux', icon: SiLinux, color: '#FCC624' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GCP', icon: SiGooglecloud, color: '#4285F4' },
      { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
    ],
  },
  {
    title: 'Frontend & ML',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Android (Java)', icon: FaAndroid, color: '#3DDC84' },
      { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
      { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
      { name: 'CNNs', icon: TbBrain, color: '#9333EA' },
    ],
  },
];

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="skills" className="relative py-28 md:py-36">
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-30" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyber-500/5 rounded-full blur-[150px]" />
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-cyber-500 text-sm tracking-wider">
            {'// 03. '}TECH STACK
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mt-3">
            Skills &{' '}
            <span className="bg-gradient-to-r from-cyber-400 to-neon-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + ci * 0.08 }}
              className="group p-6 rounded-2xl border border-dark-500/50 bg-dark-800/30 hover:border-cyber-500/20 hover:bg-dark-800/50 transition-all duration-500"
            >
              <h3 className="font-display font-semibold text-white text-lg mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyber-500 to-neon-500" />
                {cat.title}
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.2 + ci * 0.08 + si * 0.04 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg border border-dark-500/30 bg-dark-700/50 hover:border-cyber-500/30 hover:bg-cyber-500/5 transition-all duration-300 cursor-default"
                  >
                    <skill.icon
                      className="w-4 h-4 shrink-0"
                      style={{ color: skill.color }}
                    />
                    <span className="text-xs font-mono text-dark-200 whitespace-nowrap">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
