import { archive, featured, secondary } from '../content/work';
import BookingDiagram from './diagrams/BookingDiagram';
import Icon from './primitives/Icon';
import Panel, { Readout } from './primitives/Panel';
import Reveal from './primitives/Reveal';
import Section from './primitives/Section';

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li
          key={item}
          className="border border-edge px-2 py-1 font-mono text-[0.6875rem] text-mid"
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
      <Icon
        name="arrow"
        className="h-3 w-3 text-lo transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber"
      />
    </a>
  );
}

function Featured() {
  return (
    <article>
      <Reveal>
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-edge pb-4">
          <div className="flex items-baseline gap-3">
            <span className="t-label text-lo">01</span>
            <h3 className="t-h2">{featured.title}</h3>
            <span className="flex items-center gap-1.5 font-mono text-[0.6875rem] text-green">
              <span aria-hidden="true" className="h-1.5 w-1.5 bg-green" />
              LIVE
            </span>
          </div>
          <p className="t-label">{featured.kind}</p>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="t-body text-hi">{featured.lede}</p>
            <p className="t-body mt-4">{featured.premise}</p>
          </Reveal>

          <Reveal delay={60}>
            <div className="mt-6">
              <Panel title="Build sheet">
                <div className="row-divide">
                  <Readout k="my role" v={featured.role} block />
                  <Readout k="modules" v="10+" accent />
                  <Readout k="surfaces" v="admin panel · patient app" />
                  <Readout k="tenancy" v="isolated, 19+ models" />
                  <Readout k="gateways" v="stripe · razorpay" />
                  <Readout k="queues" v="bullmq" />
                </div>
              </Panel>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-5">
              <Chips items={featured.stack} />
            </div>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
              {featured.links.map((link) => (
                <OutLink key={link.href} {...link} />
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={80} className="lg:col-span-7">
          <BookingDiagram />
        </Reveal>
      </div>

      {/* Technical highlights, as a dense instrument grid. */}
      <div className="mt-8 grid gap-px border border-edge bg-edge md:grid-cols-2">
        {featured.highlights.map((item, i) => (
          <Reveal key={item.title} delay={i * 50} className="group bg-void">
            <div className="h-full p-5">
              <div className="flex items-baseline gap-3">
                <span className="t-label text-amber">{String(i + 1).padStart(2, '0')}</span>
                <h4 className="t-h3">{item.title}</h4>
              </div>
              <p className="t-body mt-2.5 text-[0.875rem]">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
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
            meta={String(i + 2).padStart(2, '0')}
            className="h-full"
          >
            <div className="flex flex-1 flex-col p-5">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="t-h3">{project.title}</h3>
                {project.context && <span className="t-label text-amber">{project.context}</span>}
              </div>
              <p className="t-body mt-2.5 text-[0.875rem]">{project.lede}</p>
              <p className="t-body mt-2 text-[0.875rem] text-lo">{project.role}</p>

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
    </div>
  );
}

function Archive() {
  return (
    <div className="mt-16">
      <Reveal>
        <div className="flex items-center gap-4">
          <h3 className="t-label">archive / university</h3>
          <span aria-hidden="true" className="h-px flex-1 bg-edge" />
        </div>
      </Reveal>

      <ul className="mt-5 border border-edge">
        {archive.map((project, i) => (
          <Reveal
            as="li"
            key={project.title}
            delay={i * 50}
            className={i > 0 ? 'border-t border-edge' : ''}
          >
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-2 p-4 transition-colors hover:bg-panel-2 md:grid-cols-12 md:items-center md:gap-6"
            >
              <div className="md:col-span-3">
                <h4 className="font-mono text-[0.875rem] text-hi transition-colors group-hover:text-amber">
                  {project.title}
                </h4>
                <p className="t-label mt-1">{project.context}</p>
              </div>
              <p className="t-body text-[0.8125rem] md:col-span-6">{project.note}</p>
              <div className="flex items-center justify-between gap-3 md:col-span-3">
                <Chips items={project.stack} />
                <Icon
                  name="arrow"
                  className="hidden h-3.5 w-3.5 shrink-0 text-edge-hi transition-colors group-hover:text-amber md:block"
                />
              </div>
            </a>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

export default function Work() {
  return (
    <Section
      id="work"
      index="02"
      label="Selected work"
      meta="6 projects"
      intro="Products built outside the day job — shipped, in use, and maintained. The first gets the most room because it earned it."
    >
      <Featured />
      <Secondary />
      <Archive />
    </Section>
  );
}
