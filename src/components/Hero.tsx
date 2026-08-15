import { links, site } from '../content/site';
import PlatformDiagram from './diagrams/PlatformDiagram';
import Icon from './primitives/Icon';
import Reveal from './primitives/Reveal';

const strip = [
  { k: 'experience', v: '1.5+ years, backend & platform' },
  { k: 'current', v: 'NAVIOM — platform layer', accent: true },
  { k: 'previously', v: 'LinkedIn data infra, via MAQ' },
  { k: 'freelance', v: 'open — web apps, backends, MVPs' },
];

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
                <span className="block font-mono text-[1.05rem] font-medium uppercase tracking-[0.2em] text-hi">
                  {site.name}
                </span>{' '}
                {/* Wraps naturally at every width — no forced breaks to overflow. */}
                <span className="t-display mt-5 block max-w-[21ch]">
                  I build backend systems that hold up when{' '}
                  <span className="text-amber">things break.</span>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={110}>
              <p className="mt-6 font-mono text-[0.875rem] text-mid">
                {site.role} at <span className="text-hi">{site.company}</span>
                <span aria-hidden="true" className="mx-2 text-edge-hi">
                  ·
                </span>
                {site.location}
              </p>
            </Reveal>

            <Reveal delay={130}>
              <p className="t-body mt-7 max-w-xl">
                Software engineer with 1.5+ years building production backend systems end
                to end — system design through deployment. Right now I own the platform
                layer of a greenfield cross-border logistics product at NAVIOM: the
                workflow engine, the rules engine, and the partner integrations every
                other service is built on. Before that, high-throughput stream processing
                inside LinkedIn’s data infrastructure.
              </p>
            </Reveal>

            <Reveal delay={170}>
              <p className="t-body mt-4 max-w-xl">
                I also build whole products end to end, and take on freelance work — web
                apps, backends, and MVPs that need to actually ship.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 bg-amber px-4 py-2.5 font-mono text-[0.8125rem] font-medium text-void transition-colors hover:bg-hi"
                >
                  see the work
                  <Icon
                    name="arrow"
                    className="h-3.5 w-3.5 rotate-45 transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 border border-edge-hi px-4 py-2.5 font-mono text-[0.8125rem] text-hi transition-colors hover:border-amber hover:text-amber"
                >
                  start a project
                </a>
                <div className="ml-1 flex items-center gap-1">
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="p-2.5 text-lo transition-colors hover:text-hi"
                  >
                    <Icon name="github" className="h-[17px] w-[17px]" />
                  </a>
                  <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="p-2.5 text-lo transition-colors hover:text-hi"
                  >
                    <Icon name="linkedin" className="h-[17px] w-[17px]" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={260} className="lg:col-span-5">
            <PlatformDiagram />
          </Reveal>
        </div>

        {/* Readout strip — the four facts, stated as instrument values. */}
        <Reveal delay={320}>
          <dl className="mt-14 grid gap-px border border-edge bg-edge sm:grid-cols-2 lg:grid-cols-4">
            {strip.map((cell) => (
              <div key={cell.k} className="bg-void p-4">
                <dt className="t-label">{cell.k}</dt>
                <dd
                  className={`t-mono mt-2 ${cell.accent ? 'text-amber' : 'text-hi'}`}
                >
                  {cell.v}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
