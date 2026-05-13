import { motion } from 'framer-motion';

function ApiSnippet() {
  return (
    <>
      <div className="flex items-center gap-1.5 mb-3">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <span className="ml-2 text-dark-400 text-[10px]">UserService.java</span>
      </div>
      <div>
        <span className="text-neon-400">@RestController</span>
      </div>
      <div>
        <span className="text-neon-400">class</span>{' '}
        <span className="text-cyber-300">UserService</span>{' '}
        <span className="text-dark-400">{'{'}</span>
      </div>
      <div className="pl-4">
        <span className="text-neon-400">@GetMapping</span>
        <span className="text-dark-400">(</span>
        <span className="text-green-400">"/api/users"</span>
        <span className="text-dark-400">)</span>
      </div>
      <div className="pl-4">
        <span className="text-yellow-300">List</span>
        <span className="text-dark-400">{'<'}</span>
        <span className="text-yellow-300">User</span>
        <span className="text-dark-400">{'>'}</span>{' '}
        <span className="text-cyber-400">getAll</span>
        <span className="text-dark-400">() {'{'}</span>
      </div>
      <div className="pl-8">
        <span className="text-neon-400">return</span>{' '}
        <span className="text-dark-200">repo</span>
        <span className="text-dark-400">.</span>
        <span className="text-cyber-400">findAll</span>
        <span className="text-dark-400">();</span>
      </div>
      <div className="pl-4">
        <span className="text-dark-400">{'}'}</span>
      </div>
      <div>
        <span className="text-dark-400">{'}'}</span>
      </div>
    </>
  );
}

function StreamSnippet() {
  return (
    <>
      <div className="flex items-center gap-1.5 mb-3">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <span className="ml-2 text-dark-400 text-[10px]">StreamPipeline.java</span>
      </div>
      <div>
        <span className="text-neon-400">class</span>{' '}
        <span className="text-cyber-300">StreamProcessor</span>{' '}
        <span className="text-dark-400">{'{'}</span>
      </div>
      <div className="pl-4">
        <span className="text-neon-400">void</span>{' '}
        <span className="text-cyber-400">process</span>
        <span className="text-dark-400">(</span>
        <span className="text-yellow-300">Event</span>{' '}
        <span className="text-dark-200">e</span>
        <span className="text-dark-400">)</span>{' '}
        <span className="text-dark-400">{'{'}</span>
      </div>
      <div className="pl-8">
        <span className="text-dark-200">kafka</span>
        <span className="text-dark-400">.</span>
        <span className="text-cyber-400">emit</span>
        <span className="text-dark-400">(</span>
        <span className="text-dark-200">e</span>
        <span className="text-dark-400">);</span>
      </div>
      <div className="pl-4">
        <span className="text-dark-400">{'}'}</span>
      </div>
      <div>
        <span className="text-dark-400">{'}'}</span>
      </div>
    </>
  );
}

export default function CodeSnippet({
  className = '',
  variant = 'api',
  style,
}: {
  className?: string;
  variant?: 'api' | 'stream';
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: variant === 'api' ? 1 : 1.4 }}
      style={style}
      className={`hidden lg:block font-mono text-[11px] leading-relaxed text-left p-4 rounded-xl border border-dark-500/30 bg-dark-800/40 backdrop-blur-sm max-w-xs ${className}`}
    >
      {variant === 'api' ? <ApiSnippet /> : <StreamSnippet />}
      <div className="mt-2 flex items-center gap-1">
        <span className="w-1.5 h-3 bg-cyber-500 animate-pulse" />
      </div>
    </motion.div>
  );
}
