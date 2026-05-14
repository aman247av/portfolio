import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowDown, HiMail } from 'react-icons/hi';
import CodeSnippet from './CodeSnippet';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-0"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyber-500/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-neon-600/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyber-700/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyber-500/20 bg-cyber-500/5 mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
          </span>
          <span className="text-sm font-mono text-dark-200">
            Open to opportunities
          </span>
        </motion.div>

        {/* Terminal-style greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4"
        >
          <span className="font-mono text-cyber-500 text-sm md:text-base">
            {'>'} Hello, World! I'm
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-4 leading-tight"
        >
          Aman{' '}
          <span className="bg-gradient-to-r from-cyber-400 via-cyber-500 to-neon-400 bg-clip-text text-transparent glow-text">
            Verma
          </span>
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl font-mono text-dark-200 mb-8 h-8"
        >
          <span className="text-cyber-500 mr-2">{'>'}</span>
          <TypeAnimation
            sequence={[
              'Software Developer Engineer',
              2500,
              'Backend · APIs · Microservices',
              2500,
              'Distributed Systems · Streaming at Scale',
              2500,
              'SDE I @ MAQ Software × LinkedIn',
              2000,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            className="text-dark-100"
          />
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl mx-auto mb-10"
        >
          <p className="text-dark-200 text-base md:text-lg leading-relaxed mb-4">
            Building production-grade{' '}
            <span className="text-cyber-400 font-semibold">APIs</span> &{' '}
            <span className="text-cyber-400 font-semibold">microservices</span> that
            handle millions of requests, and{' '}
            <span className="text-neon-400 font-semibold">distributed systems</span> that
            process trillions of events — powering real-time pipelines behind{' '}
            <span className="text-white font-semibold">LinkedIn's</span> infrastructure.
          </p>
          <div className="flex items-center justify-center gap-3 font-mono text-xs text-dark-400 flex-wrap">
            <span className="px-2.5 py-1 rounded-md border border-dark-500/50 bg-dark-800/50">MAQ Software × LinkedIn XInfra</span>
            <span className="text-dark-500">·</span>
            <span className="px-2.5 py-1 rounded-md border border-dark-500/50 bg-dark-800/50">Java · Kafka · Python · Spring Boot</span>
            <span className="text-dark-500">·</span>
            <span className="px-2.5 py-1 rounded-md border border-dark-500/50 bg-dark-800/50">B.Tech CSE @ IIITG</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="group relative px-8 py-3.5 bg-gradient-to-r from-cyber-500 to-cyber-600 text-dark-900 font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,245,255,0.35)]"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-400 to-neon-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-dark-400 text-dark-100 font-semibold rounded-lg hover:border-cyber-500/50 hover:text-cyber-400 hover:bg-cyber-500/5 transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center justify-center gap-5"
        >
          {[
            { icon: FaGithub, href: 'https://github.com/aman247av', label: 'GitHub' },
            { icon: FaLinkedin, href: 'https://www.linkedin.com/in/aman247av/', label: 'LinkedIn' },
            { icon: HiMail, href: 'mailto:aman247av@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-xl border border-dark-500 text-dark-300 hover:text-cyber-400 hover:border-cyber-500/40 hover:bg-cyber-500/5 transition-all duration-300"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Floating code snippet decorations */}
      <CodeSnippet variant="api" className="absolute top-32 right-8 xl:right-24 animate-float opacity-60 hidden lg:block" />
      <CodeSnippet variant="stream" className="absolute top-74 left-8 xl:left-24 animate-float opacity-60 hidden lg:block" style={{ animationDelay: '3s' }} />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-dark-400 hover:text-cyber-400 transition-colors"
        >
          <span className="text-xs font-mono">scroll</span>
          <HiArrowDown className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </section>
  );
}
