import { links, proof, site } from '../content/site';
import PlatformDiagram from './diagrams/PlatformDiagram';
import Icon from './primitives/Icon';
import Reveal from './primitives/Reveal';

/**
 * Three different dimensions, not three synonyms: design ownership, scale, and
 * product shape. Each is backed by a case study or a role further down the
 * page — nothing here is aspirational.
 *
 * "Backend architecture" rather than "backend systems", because the headline
 * directly above already says that and a chip repeating it earns nothing.
 */
const specialisms = ['Backend architecture', 'Distributed systems', 'Multi-tenant SaaS'];

export default function Hero() {
  return (
    <section id="top" className="relative z-10 pt-24 pb-12 md:pt-32 md:pb-16">
      <div className="shell">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="t-label flex items-center gap-2 text-green">
                <span aria-hidden="true" className="h-1.5 w-1.5 bg-green" />
                open to opportunities
              </p>
            </Reveal>

            {/* The name leads the heading so both a reader landing cold and a
                search for "Aman Verma" find it in the h1. */}
            <Reveal delay={70}>
              <h1 className="mt-6">
                <span className="block font-mono text-[1.0625rem] font-medium uppercase tracking-[0.2em] text-hi">
                  {site.name}
                </span>{' '}
                {/* Wraps naturally at every width — no forced breaks to overflow. */}
                <span className="t-display mt-5 block max-w-[21ch]">
                  I build backend systems that hold up when{' '}
                  <span className="text-amber">things break.</span>
                </span>
              </h1>
            </Reveal>

            {/* Current position, stated plainly. The employer carries the
                weight, so it is the only thing lifted to full contrast. */}
            <Reveal delay={110}>
              <p className="mt-6 font-mono text-[0.9375rem] text-mid">
                {site.title} at{' '}
                <span className="font-medium text-hi">{site.company}</span>
                <span aria-hidden="true" className="mx-2 text-edge-hi">
                  ·
                </span>
                {site.location}
              </p>
            </Reveal>

            <Reveal delay={130}>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {specialisms.map((item) => (
                  <li
                    key={item}
                    className="border border-edge px-2.5 py-1 font-mono text-[0.6875rem] text-mid"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={150}>
              <p className="t-body mt-7 max-w-xl">
                I own the platform layer of a greenfield cross-border logistics product at{' '}
                <span className="text-hi">NAVIOM</span> — the workflow engine, the rules
                engine, and the partner integrations every other service is built on.
                Before that, eighteen months on{' '}
                <span className="text-hi">LinkedIn’s data infrastructure</span>, moving a
                high-volume financial pipeline from Samza to Flink.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <p className="t-body mt-4 max-w-xl">
                I also build whole products end to end and take on select freelance work —
                backends, web apps, and MVPs that need to actually ship.
              </p>
            </Reveal>

            {/* Three ranked next actions: the work, the conversation, the CV. */}
            {/* Three actions on one row, socials on their own. Left to wrap
                freely these produced a ragged two-row block on mobile with the
                icons stranded beside a half-width button. */}
            <Reveal delay={220}>
              <div className="mt-9 grid gap-3 sm:flex sm:flex-wrap sm:items-center">
                <a href="#work" className="btn btn-primary group">
                  see the work
                  <Icon
                    name="arrow"
                    className="h-3.5 w-3.5 rotate-45 transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </a>
                <div className="grid grid-cols-2 gap-3 sm:contents">
                  <a href="#contact" className="btn btn-ghost">
                    hire me
                  </a>
                  <a
                    href={site.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-quiet"
                  >
                    resume
                    <Icon name="download" className="h-3.5 w-3.5" />
                    <span className="sr-only">(PDF, opens in a new tab)</span>
                  </a>
                </div>
                <div className="flex items-center gap-1 sm:ml-1">
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub (opens in a new tab)"
                    className="p-2.5 text-lo transition-colors hover:text-hi"
                  >
                    <Icon name="github" className="h-[17px] w-[17px]" />
                  </a>
                  <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn (opens in a new tab)"
                    className="p-2.5 text-lo transition-colors hover:text-hi"
                  >
                    <Icon name="linkedin" className="h-[17px] w-[17px]" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Centred at lg: the diagram is ~200px shorter than the text column,
              and hanging that whole gap off the bottom read as unbalanced.
              On mobile it drops below the credibility strip — names and
              employers are a far faster read than a schematic, and the diagram
              was pushing them ~500px further down the page. */}
          <Reveal
            delay={260}
            className="order-3 lg:order-none lg:col-span-5 lg:self-center"
          >
            <PlatformDiagram />
          </Reveal>

          {/* Credibility strip. Names, not tenure — the names do more work. */}
          <Reveal delay={320} className="order-2 lg:order-none lg:col-span-12 lg:mt-2">
            <dl className="grid grid-cols-2 gap-px border border-edge bg-edge lg:grid-cols-4">
            {proof.map((cell) => (
              <div key={cell.k} className="bg-void p-4">
                <dt className="t-label">{cell.k}</dt>
                <dd
                  className={`mt-2 font-mono text-[0.9375rem] ${
                    'accent' in cell && cell.accent ? 'text-amber' : 'text-hi'
                  }`}
                >
                  {cell.v}
                </dd>
                <dd className="t-body-sm mt-1 text-lo">{cell.note}</dd>
              </div>
            ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
