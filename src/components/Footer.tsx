import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

export default function Footer() {
  return (
    <footer className="relative py-10 border-t border-dark-500/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-cyber-500 to-neon-500 flex items-center justify-center font-display font-bold text-dark-900 text-xs">
              AV
            </div>
            <span className="font-mono text-dark-400 text-sm">
              Designed & Built by Aman Verma
            </span>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: FaGithub, href: 'https://github.com/aman247av' },
              { icon: FaLinkedin, href: 'https://www.linkedin.com/in/aman247av/' },
              { icon: HiMail, href: 'mailto:aman247av@gmail.com' },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-400 hover:text-cyber-400 transition-colors duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <span className="font-mono text-dark-400 text-xs">
            &copy; {new Date().getFullYear()} All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
