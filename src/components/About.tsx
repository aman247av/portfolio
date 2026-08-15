import { about, education, recognition, stack } from '../content/about';
import Icon from './primitives/Icon';
import Panel, { Readout } from './primitives/Panel';
import Reveal from './primitives/Reveal';
import Section from './primitives/Section';

export default function About() {
  return (
    <Section id="about" index="03" label="About" meta="background & stack">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          {about.map((paragraph, i) => (
            <Reveal key={i} delay={i * 50}>
              <p
                className={`t-body max-w-[62ch] ${
                  i === 0 ? 'text-[1.0625rem] text-hi' : 'mt-5'
                }`}
              >
                {paragraph}
              </p>
            </Reveal>
          ))}

          <Reveal delay={220}>
            <div className="mt-8 grid items-start gap-5 sm:grid-cols-2">
              <Panel title="Education">
                <div className="p-4">
                  <p className="t-mono text-hi">{education.degree}</p>
                  <p className="t-body mt-2 text-[0.8125rem]">{education.institution}</p>
                </div>
                <div className="row-divide border-t border-edge">
                  <Readout k="location" v={education.location} />
                  <Readout k="period" v={education.period} />
                  <Readout k="cgpa" v={education.detail.replace('CGPA ', '')} accent />
                </div>
              </Panel>

              <Panel title="Recognition">
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
                          <p className="t-body mt-1 text-[0.8125rem]">{item.detail}</p>
                        </div>
                        <Icon
                          name="arrow"
                          className="mt-1 h-3.5 w-3.5 shrink-0 text-edge-hi transition-colors group-hover:text-amber"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </Panel>
            </div>
          </Reveal>
        </div>

        {/* Stack matrix — grouped by what it is for, not a wall of logos. */}
        <Reveal delay={120} className="lg:col-span-5">
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
    </Section>
  );
}
