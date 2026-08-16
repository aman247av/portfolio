import { about, education, recognition, stack, strengths } from '../content/about';
import Icon from './primitives/Icon';
import Panel, { Readout } from './primitives/Panel';
import Reveal from './primitives/Reveal';
import Section from './primitives/Section';

export default function About() {
  return (
    <Section
      id="about"
      index="03"
      label="About"
      title="What I am good at, and how I work."
      meta="strengths & stack"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          {/* The four-item answer first, for anyone not reading three paragraphs. */}
          <div className="grid gap-px border border-edge bg-edge sm:grid-cols-2">
            {strengths.map((item, i) => (
              <Reveal key={item.title} delay={i * 50} className="bg-void">
                <div className="h-full p-5">
                  <h3 className="t-h3">{item.title}</h3>
                  <p className="t-body-sm mt-2.5">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10">
            {about.map((paragraph, i) => (
              <Reveal key={i} delay={i * 50}>
                <p className={`max-w-[62ch] ${i === 0 ? 't-lede' : 't-body mt-5'}`}>
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

        </div>

        {/* Narrative left, stack right. These two run within ~70px of each
            other, so the row closes cleanly; credentials moved out to their own
            full-width band below rather than stretching either column. */}
        <div className="lg:col-span-5">
          <Reveal delay={120}>
            <Panel title="Stack" meta="what I reach for">
              <div className="row-divide">
                {stack.map((group) => (
                  <div key={group.label} className="p-4">
                    <p className="t-label">{group.label}</p>
                    <ul className="mt-2.5 flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="border border-edge px-2 py-1 font-mono text-[0.6875rem] text-hi"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Panel>
          </Reveal>

        </div>
      </div>

      {/* Credentials band. A full-width row closes the section on a horizontal
          rather than leaving one column hanging 300px below the other. */}
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <Reveal delay={60}>
          <Panel title="Education" className="h-full">
            <div className="p-4">
              <p className="t-mono text-hi">{education.degree}</p>
              <p className="t-body-sm mt-2">{education.institution}</p>
            </div>
            <div className="row-divide mt-auto border-t border-edge">
              <Readout k="location" v={education.location} />
              <Readout k="period" v={education.period} />
            </div>
          </Panel>
        </Reveal>

        <Reveal delay={100}>
          <Panel title="Recognition" className="h-full">
            <ul className="row-divide">
              {recognition.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 p-4 transition-colors hover:bg-panel-2"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="t-mono text-hi transition-colors group-hover:text-amber">
                        {item.title}
                      </p>
                      <p className="t-body-sm mt-1">{item.detail}</p>
                    </div>
                    <Icon
                      name="arrow"
                      className="mt-1 h-3.5 w-3.5 shrink-0 text-lo transition-colors group-hover:text-amber"
                    />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </Panel>
        </Reveal>
      </div>
    </Section>
  );
}
