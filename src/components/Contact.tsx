import { services } from '../content/about';
import { links, site } from '../content/site';
import Icon, { type IconName } from './primitives/Icon';
import Panel from './primitives/Panel';
import Reveal from './primitives/Reveal';
import Section from './primitives/Section';

const channels: { label: string; value: string; href: string; icon: IconName }[] = [
  { label: 'email', value: site.email, href: links.mail, icon: 'mail' },
  { label: 'linkedin', value: 'in/aman247av', href: links.linkedin, icon: 'linkedin' },
  { label: 'github', value: 'aman247av', href: links.github, icon: 'github' },
  { label: 'whatsapp', value: site.phone, href: links.whatsapp, icon: 'whatsapp' },
];

export default function Contact() {
  return (
    <Section id="contact" index="04" label="Contact" meta="open to work">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="t-display max-w-[15ch]">
              Have something you want <span className="text-amber">built?</span>
            </p>
          </Reveal>

          <Reveal delay={70}>
            <p className="t-body mt-6 max-w-xl">
              I am always happy to talk — about a role, a project, or anything technical.
              Recruiters, hiring managers, and fellow developers all welcome.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <p className="t-body mt-4 max-w-xl">
              Building a product, or need a reliable dev team? I take on a small amount of
              freelance work alongside my job, and{' '}
              <span className="text-amber">Nxa</span> — the product studio I co-build —
              takes on select client projects. Tell me what it is and what it needs to do,
              and I will tell you honestly whether we are the right fit for it.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <a
              href={links.mail}
              className="group mt-8 inline-flex items-center gap-3 border border-edge-hi px-5 py-4 font-mono text-[0.9375rem] text-hi transition-colors hover:border-amber hover:text-amber sm:text-lg"
            >
              <span aria-hidden="true" className="text-lo group-hover:text-amber">
                $
              </span>
              {site.email}
              <Icon
                name="arrow"
                className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </Reveal>

          <Reveal delay={160}>
            <p className="t-label mt-6">
              {site.location} · working remotely
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={100}>
            <Panel title="Usually this kind of thing">
              <ul className="row-divide">
                {services.map((service) => (
                  <li key={service} className="flex items-center gap-3 px-4 py-3">
                    <span aria-hidden="true" className="text-amber">
                      ▸
                    </span>
                    <span className="t-mono text-hi">{service}</span>
                  </li>
                ))}
              </ul>
            </Panel>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-5">
              <Panel title="Channels">
                <ul className="row-divide">
                  {channels.map((channel) => (
                    <li key={channel.label}>
                      <a
                        href={channel.href}
                        target={channel.href.startsWith('mailto:') ? undefined : '_blank'}
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 px-4 py-3 transition-colors hover:bg-panel-2"
                      >
                        <Icon
                          name={channel.icon}
                          className="h-4 w-4 shrink-0 text-lo transition-colors group-hover:text-amber"
                        />
                        <span className="t-label">{channel.label}</span>
                        <span className="t-mono ml-auto truncate text-hi">
                          {channel.value}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </Panel>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
