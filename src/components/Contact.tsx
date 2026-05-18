import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { HiMail, HiLocationMarker } from 'react-icons/hi';

const socials = [
  {
    icon: FaGithub,
    label: 'GitHub',
    handle: 'aman247av',
    href: 'https://github.com/aman247av',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    handle: 'in/aman247av',
    href: 'https://www.linkedin.com/in/aman247av/',
  },
  {
    icon: HiMail,
    label: 'Email',
    handle: 'aman247av@gmail.com',
    href: 'mailto:aman247av@gmail.com',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    handle: '+91 7317270278',
    href: 'https://wa.me/917317270278',
  },
];

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyber-500/5 rounded-full blur-[150px]" />
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-cyber-500 text-sm tracking-wider">
            {'// 06. '}WHAT'S NEXT?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mt-3 mb-6">
            Let's{' '}
            <span className="bg-gradient-to-r from-cyber-400 to-neon-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-dark-200 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-2">
            I'm always open to discussing new opportunities, interesting projects, or
            anything tech. Whether you're a recruiter, hiring manager, or fellow developer
            — feel free to reach out!
          </p>
          <p className="text-dark-300 text-sm max-w-2xl mx-auto leading-relaxed mb-4">
            Building a product or need a reliable dev team?{' '}
            <span className="text-neon-400">Nxa</span> takes on select client projects
            — let's talk.
          </p>
          <div className="flex items-center justify-center gap-2 text-dark-300 text-sm mb-12">
            <HiLocationMarker className="w-4 h-4 text-cyber-400" />
            <span>Noida, India</span>
          </div>
        </motion.div>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-14"
        >
          <a
            href="mailto:aman247av@gmail.com"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-cyber-500 to-cyber-600 text-dark-900 font-display font-bold text-lg rounded-xl hover:shadow-[0_0_40px_rgba(0,245,255,0.3)] transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10">Say Hello</span>
            <HiMail className="w-5 h-5 relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-400 to-neon-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </motion.div>

        {/* Social grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
              className="group flex flex-col items-center gap-3 p-5 rounded-xl border border-dark-500/50 bg-dark-800/30 hover:border-cyber-500/25 hover:bg-cyber-500/5 transition-all duration-300"
            >
              <s.icon className="w-6 h-6 text-dark-300 group-hover:text-cyber-400 transition-colors" />
              <div>
                <p className="text-white font-medium text-sm">{s.label}</p>
                <p className="text-dark-400 text-xs font-mono mt-0.5">{s.handle}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
