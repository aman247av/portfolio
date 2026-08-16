import type { CaseStudy } from '../content/work';
import { caseStudies, secondary, smaller } from '../content/work';
import BookingDiagram from './diagrams/BookingDiagram';
import MigrationChart from './diagrams/MigrationChart';
import Icon from './primitives/Icon';
import Panel from './primitives/Panel';
import Reveal from './primitives/Reveal';
import Section from './primitives/Section';

function Chips({ items, bright = false }: { items: string[]; bright?: boolean }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li
          key={item}
          className={`border border-edge px-2 py-1 font-mono text-[0.6875rem] ${
            bright ? 'text-hi' : 'text-mid'
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function OutLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1.5 py-1.5 font-mono text-[0.8125rem] text-hi"
    >
      <span className="link-underline pb-0.5">{label}</span>
      <span className="sr-only">(opens in a new tab)</span>
      <Icon
        name="arrow"
        className="h-3 w-3 text-lo transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber"
      />
    </a>
  );
}

/** The figure that belongs to each study, keyed by slug. */
const figures: Record<string, React.ReactNode> = {
  'flink-migration': <MigrationChart />,
  nxacare: <BookingDiagram />,
};

function Study({ study, index }: { study: CaseStudy; index: number }) {
  const live = study.status.tone === 'live';

  return (
    <article id={`case-${study.slug}`} className="scroll-mt-28">
      {/* Title, status, and provenance stack on the left instead of throwing
          the metadata to the far right edge, where it sat ~900px from the
          title it described and shouted in uppercase amber. */}
      <Reveal>
        <div className="border-b border-edge pb-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="font-mono text-[0.8125rem] font-medium text-amber">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="t-h2">{study.title}</h3>
            <span
              className={`inline-flex items-center gap-1.5 border px-2 py-1 font-mono text-[0.6875rem] tracking-[0.08em] ${
                live
                  ? 'border-green/40 bg-green/[0.07] text-green'
                  : 'border-edge-hi text-lo'
              }`}
            >
              <span
                aria-hidden="true"
                className={`h-1.5 w-1.5 ${live ? 'bg-green' : 'bg-edge-hi'}`}
              />
              {study.status.label}
            </span>
          </div>
          <p className="mt-2.5 font-mono text-[0.8125rem] text-lo">
            {study.kind}
            <span aria-hidden="true" className="mx-2 text-edge-hi">
              /
            </span>
            {study.contextHref ? (
              <a
                href={study.contextHref}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline pb-0.5 text-amber"
              >
                {study.context}
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ) : (
              <span className="text-amber">{study.context}</span>
            )}
          </p>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="t-lede">{study.lede}</p>
          </Reveal>

          <Reveal delay={60}>
            <div className="mt-6">
              <Panel title="The problem">
                <p className="t-body-sm px-4 py-3.5">{study.problem}</p>
              </Panel>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-5">
              <Panel title="My role">
                <p className="t-body-sm px-4 py-3.5 text-hi">{study.role}</p>
              </Panel>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-5">
              <Chips items={study.stack} />
            </div>

            {/* A live product is the strongest proof a client will see, so the
                first link is a button rather than a 13px text link. */}
            {study.links.length > 0 && (
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {study.links.map((link, i) =>
                  i === 0 ? (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost group"
                    >
                      {link.label}
                      <Icon
                        name="arrow"
                        className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  ) : (
                    <OutLink key={link.href} {...link} />
                  ),
                )}
              </div>
            )}

            {study.linkNote && (
              <p className="t-body-sm mt-5 flex items-start gap-2 border-l border-edge-hi pl-3 text-lo">
                {study.linkNote}
              </p>
            )}
          </Reveal>
        </div>

        {/* Same imbalance as the hero: the figure runs shorter than the column
            of prose beside it, so it sits centred rather than leaving the whole
            gap hanging off the bottom. */}
        <Reveal delay={80} className="lg:col-span-7 lg:self-center">
          {figures[study.slug]}
        </Reveal>
      </div>

      {/* Outcome first, then the decisions that produced it. */}
      <Reveal>
        <div className="mt-10 border border-edge">
          <div className="flex items-center justify-between gap-4 border-b border-edge px-4 py-2.5">
            <span className="t-label text-mid">Outcome</span>
          </div>
          <dl className="grid gap-px bg-edge sm:grid-cols-3">
            {study.outcomes.map((item) => (
              <div key={item.label} className="bg-void px-4 py-5">
                <dt className="sr-only">{item.label}</dt>
                <dd className="t-readout">{item.value}</dd>
                <dd className="t-label mt-2">{item.label}</dd>
              </div>
            ))}
          </dl>
          {study.outcomeNote && (
            <p className="t-body-sm border-t border-edge px-4 py-3 text-lo">
              {study.outcomeNote}
            </p>
          )}
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-10 flex items-center gap-4">
          <h4 className="t-label text-mid">Decisions I made</h4>
          <span aria-hidden="true" className="h-px flex-1 bg-edge" />
        </div>
      </Reveal>

      <div className="mt-5 grid gap-px border border-edge bg-edge md:grid-cols-2">
        {study.decisions.map((item, i) => {
          // An odd count leaves a dead cell in a two-column grid, so the last
          // card takes the full row rather than sitting next to a hole.
          const orphan = study.decisions.length % 2 === 1 && i === study.decisions.length - 1;
          return (
          <Reveal
            key={item.title}
            delay={i * 40}
            className={`group bg-void ${orphan ? 'md:col-span-2' : ''}`}
          >
            <div className="h-full p-5">
              <div className="flex items-baseline gap-3">
                <span className="t-label text-amber">{String(i + 1).padStart(2, '0')}</span>
                <h5 className="t-h3">{item.title}</h5>
              </div>
              <p className="t-body-sm mt-2.5">{item.body}</p>
            </div>
          </Reveal>
          );
        })}
      </div>

      <Reveal>
        <div className="mt-6">
          <Panel title="What this demonstrates">
            <div className="p-4">
              <Chips items={study.demonstrates} bright />
            </div>
          </Panel>
        </div>
      </Reveal>
    </article>
  );
}

function Secondary() {
  return (
    <div className="mt-16 grid gap-5 md:grid-cols-2">
      {secondary.map((project, i) => (
        <Reveal key={project.title} delay={i * 70} className="group">
          <Panel
            hover
            title={project.kind}
            meta={String(caseStudies.length + i + 1).padStart(2, '0')}
            className="h-full"
          >
            <div className="flex flex-1 flex-col p-5">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="t-h3">{project.title}</h3>
                {project.context &&
                  (project.contextHref ? (
                    <a
                      href={project.contextHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="t-label link-underline pb-0.5 text-amber"
                    >
                      {project.context}
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  ) : (
                    <span className="t-label text-amber">{project.context}</span>
                  ))}
              </div>
              <p className="t-body-sm mt-2.5">{project.lede}</p>
              <p className="t-body-sm mt-2 text-lo">{project.role}</p>

              {project.facts && (
                <dl className="mt-4 grid grid-cols-2 gap-px border border-edge bg-edge">
                  {project.facts.map((fact) => (
                    <div key={fact} className="bg-void px-3 py-2.5">
                      <dd className="t-mono text-hi">{fact}</dd>
                    </div>
                  ))}
                </dl>
              )}

              <div className="mt-auto pt-5">
                <Chips items={project.stack} />
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                  {project.links.map((link) => (
                    <OutLink key={link.href} {...link} />
                  ))}
                </div>
              </div>
            </div>
          </Panel>
        </Reveal>
      ))}

      {/* Smaller builds share the row so they read as a footnote, not a tier. */}
      <Reveal delay={140}>
        <Panel title="Also built" className="h-full">
          <ul className="row-divide flex-1">
            {smaller.map((project) => (
              <li key={project.title}>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-4 transition-colors hover:bg-panel-2"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-mono text-[0.875rem] text-hi transition-colors group-hover:text-amber">
                      {project.title}
                    </h3>
                    <Icon
                      name="arrow"
                      className="h-3.5 w-3.5 shrink-0 text-lo transition-colors group-hover:text-amber"
                    />
                  </div>
                  <p className="t-label mt-1">{project.context}</p>
                  <p className="t-body-sm mt-2">{project.note}</p>
                  <div className="mt-3">
                    <Chips items={project.stack} />
                  </div>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </Panel>
      </Reveal>
    </div>
  );
}

export default function Work() {
  return (
    <Section
      id="work"
      index="02"
      label="Selected work"
      title="Two systems, taken apart: what broke, what I decided, what changed."
      meta={`${caseStudies.length} case studies`}
      intro="The first is a product I own end to end and the clearest proof I can ship a whole thing. The second is the hardest single problem I have worked on. Both are written the way I would talk through them in an interview."
    >
      <div className="space-y-20 md:space-y-24">
        {caseStudies.map((study, i) => (
          <Study key={study.slug} study={study} index={i} />
        ))}
      </div>

      <Secondary />
    </Section>
  );
}
