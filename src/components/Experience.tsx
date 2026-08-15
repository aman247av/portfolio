import { roles } from '../content/experience';
import MigrationChart from './diagrams/MigrationChart';
import Panel, { Metric, Readout } from './primitives/Panel';
import Reveal from './primitives/Reveal';
import Section from './primitives/Section';

export default function Experience() {
  return (
    <Section
      id="experience"
      index="01"
      label="Experience"
      meta={`${roles.length} roles`}
      intro="Production backend systems end to end, from system design through deployment — currently platform work on a greenfield product, previously high-throughput stream processing."
    >
      <div className="space-y-6">
        {roles.map((role, i) => (
          <Reveal key={role.company} delay={i * 60}>
            <Panel>
              <div className="grid gap-px bg-edge lg:grid-cols-12">
                {/* Identity rail */}
                <div className="bg-void p-5 lg:col-span-3">
                  <div className="flex items-center gap-2.5">
                    {role.current && (
                      <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 bg-green" />
                    )}
                    <h3 className="t-h3">{role.company}</h3>
                  </div>

                  {role.note && (
                    <p className="t-label mt-2 text-amber">{role.note}</p>
                  )}

                  <p className="t-body mt-3 text-[0.875rem]">{role.title}</p>

                  <div className="mt-5 border border-edge">
                    <div className="row-divide">
                      <Readout k="period" v={role.period} />
                      <Readout k="location" v={role.location} />
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

                {/* Content */}
                <div className="bg-void p-5 lg:col-span-9 lg:p-6">
                  <p className="t-body text-hi">{role.premise}</p>

                  <div className="mt-6 space-y-6">
                    {role.workstreams.map((stream) => (
                      <div key={stream.title} className="border-l border-edge pl-4">
                        <h4 className="font-mono text-[0.8125rem] text-amber">
                          <span aria-hidden="true" className="mr-2 text-lo">
                            ▸
                          </span>
                          {stream.title}
                        </h4>
                        <p className="t-body mt-2 text-[0.875rem] text-hi">
                          {stream.summary}
                        </p>
                        {stream.detail.map((line) => (
                          <p key={line} className="t-body mt-2 text-[0.875rem]">
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

                  {/* The migration is the clearest thing to show rather than tell. */}
                  {role.company === 'MAQ Software' && (
                    <div className="mt-8">
                      <MigrationChart />
                    </div>
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
