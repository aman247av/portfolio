import { engagement, services } from '../content/about';
import Icon from './primitives/Icon';
import Panel, { Readout } from './primitives/Panel';
import Reveal from './primitives/Reveal';
import Section from './primitives/Section';

/**
 * The freelance-client answer to "what can I actually hire you for".
 *
 * Every service carries a proof line pointing at work that already exists.
 * A service without one would be a claim, and this site does not make claims
 * it cannot point at.
 */
export default function Services() {
  return (
    <Section
      id="services"
      index="04"
      label="Services"
      title="What you can hire me to build."
      meta="freelance & contract"
      intro="I take on a small amount of freelance work alongside my full-time role, and larger scope goes through NxaOne, the product studio I co-build. Each of these is something I have already shipped, not something I am willing to try."
    >
      <div className="grid gap-px border border-edge bg-edge md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={i * 50} className="bg-void">
            <div className="flex h-full flex-col p-5">
              <div className="flex items-baseline gap-3">
                <span className="t-label text-amber">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="t-h3">{service.title}</h3>
              </div>
              <p className="t-body-sm mt-2.5">{service.body}</p>
              <p className="t-body-sm mt-auto flex items-start gap-2 pt-4 text-lo">
                <Icon name="check" className="mt-[3px] h-3 w-3 shrink-0 text-green" />
                <span>{service.proof}</span>
              </p>
            </div>
          </Reveal>
        ))}

        {/* Fills the trailing grid cell with the conversion path rather than
            leaving a hole — and puts the CTA inside the scan, not after it. */}
        <Reveal delay={services.length * 50} className="bg-void">
          <div className="flex h-full flex-col justify-between gap-5 p-5">
            <div>
              <h3 className="t-h3">Something not on this list?</h3>
              <p className="t-body-sm mt-2.5">
                If it is a backend, a product, or an integration problem, ask anyway. If it
                is not a fit, I will say so.
              </p>
            </div>
            <a href="#contact" className="btn btn-primary group w-full">
              start a project
              <Icon
                name="arrow"
                className="h-3.5 w-3.5 rotate-45 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={80}>
        <div className="mt-6">
          <Panel title="How working together works" meta="before you ask">
            {/* gap-px over the edge colour gives the hairline grid without the
                border-arithmetic that `row-divide` would need in two columns. */}
            <div className="grid gap-px bg-edge sm:grid-cols-2">
              {engagement.map((item) => (
                <div key={item.k} className="bg-void">
                  <Readout
                    k={item.k}
                    block
                    v={
                      item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-underline pb-0.5"
                        >
                          {item.v}
                          <span className="sr-only">(opens in a new tab)</span>
                        </a>
                      ) : (
                        item.v
                      )
                    }
                  />
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </Reveal>
    </Section>
  );
}
