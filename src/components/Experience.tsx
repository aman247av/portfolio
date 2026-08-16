import { roles } from '../content/experience';
import Icon from './primitives/Icon';
import Panel, { Metric, Readout } from './primitives/Panel';
import Reveal from './primitives/Reveal';
import Section from './primitives/Section';

export default function Experience() {
  return (
    <Section
      id="experience"
      index="01"
      label="Experience"
      title="Four roles, all of them shipping production backends."
      meta={`${roles.length} roles`}
      intro="Platform work on a greenfield product today; high-throughput stream processing on LinkedIn's data infrastructure before that. Freelance and internship work before that again — all of it backend, all of it in production."
    >
      <div className="space-y-6">
        {roles.map((role, i) => (
          <Reveal key={role.company} delay={i * 60}>
            <Panel>
              <div className="grid gap-px bg-edge lg:grid-cols-12">
                {/* Identity rail. The NAVIOM card runs ~890px — taller than a
                    laptop viewport — so the company, dates, and stack scrolled
                    away while you were still reading its workstreams, and left
                    ~470px of dead rail behind. Sticking the plate to the top
                    turns that gap into the reason it exists. The wrapper keeps
                    its own background so the hairline grid stays unbroken. */}
                <div className="bg-void p-5 lg:col-span-3">
                  <div className="lg:sticky lg:top-24">
                  <div className="flex items-center gap-2.5">
                    {role.current && (
                      <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 bg-green" />
                    )}
                    <h3 className="t-h3">{role.company}</h3>
                  </div>

                  {/* The client brand is the most valuable word in the block,
                      so it is stated at readable size rather than as a caption. */}
                  {role.client && (
                    <p className="mt-2.5 border border-amber/40 bg-amber/[0.07] px-2.5 py-1.5 font-mono text-[0.8125rem] text-amber">
                      Client: {role.client}
                    </p>
                  )}

                  <p className="t-body-sm mt-3 text-hi">{role.title}</p>
                  {role.note && <p className="t-label mt-1.5">{role.note}</p>}

                  <div className="mt-5 border border-edge">
                    <div className="row-divide">
                      <Readout k="period" v={role.period} />
                      <Readout k="location" v={role.location} />
                      <Readout k="industry" v={role.industry} />
                    </div>
                  </div>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {role.stack.map((tech) => (
                      <li
                        key={tech}
                        className="border border-edge px-2 py-1 font-mono text-[0.6875rem] text-mid"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  </div>
                </div>

                {/* Content */}
                <div className="bg-void p-5 lg:col-span-9 lg:p-6">
                  <p className="t-body text-hi">{role.premise}</p>

                  <div className="mt-6 space-y-6">
                    {role.workstreams.map((stream) => (
                      <div key={stream.title} className="border-l border-edge pl-4">
                        <h4 className="marker font-mono text-[0.8125rem] text-amber">
                          {stream.title}
                        </h4>
                        <p className="t-body-sm mt-2 text-hi">
                          {stream.summary}
                        </p>
                        {stream.detail.map((line) => (
                          <p key={line} className="t-body-sm mt-2">
                            {line}
                          </p>
                        ))}
                        {stream.figures && (
                          <div className="mt-4 flex flex-wrap gap-x-8 gap-y-4">
                            {stream.figures.map((figure) => (
                              <Metric
                                key={figure.label}
                                value={figure.value}
                                label={figure.label}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {role.caseStudy && (
                    <a
                      href={role.caseStudy.href}
                      className="group mt-7 inline-flex items-center gap-2 border border-edge-hi px-3.5 py-2 font-mono text-[0.8125rem] text-hi transition-colors hover:border-amber hover:text-amber"
                    >
                      {role.caseStudy.label}
                      <Icon
                        name="arrow"
                        className="h-3.5 w-3.5 rotate-45 transition-transform duration-200 group-hover:translate-x-0.5"
                      />
                    </a>
                  )}
                </div>
              </div>
            </Panel>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
