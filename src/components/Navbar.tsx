import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass shadow-lg shadow-cyber-500/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="group flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyber-500 to-neon-500 flex items-center justify-center font-display font-bold text-dark-900 text-lg group-hover:shadow-[0_0_20px_rgba(0,245,255,0.4)] transition-shadow duration-300">
            AV
          </div>
          <span className="font-display font-semibold text-white text-lg hidden sm:block">
            aman<span className="text-cyber-500">.dev</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
              className="relative px-4 py-2 text-sm font-medium text-dark-200 hover:text-cyber-400 transition-colors duration-300 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-cyber-500 to-neon-500 group-hover:w-3/4 transition-all duration-300" />
            </motion.a>
          ))}
          <motion.a
            href="/Aman_Verma_Resume.pdf"
            target="_blank"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="ml-4 px-5 py-2 text-sm font-mono font-medium border border-cyber-500/50 text-cyber-400 rounded-lg hover:bg-cyber-500/10 hover:shadow-[0_0_15px_rgba(0,245,255,0.2)] transition-all duration-300"
          >
            Resume
          </motion.a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-cyber-400 text-2xl"
        >
          {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-cyber-500/10"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-dark-200 hover:text-cyber-400 font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/Aman_Verma_Resume.pdf"
                target="_blank"
                className="mt-2 px-5 py-2 text-sm font-mono font-medium border border-cyber-500/50 text-cyber-400 rounded-lg text-center hover:bg-cyber-500/10 transition-all"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
