import { links, site } from '../content/site';
import Icon from './primitives/Icon';

/**
 * The last thing a scroller sees, so it repeats the conversion paths rather
 * than dead-ending on a copyright line.
 */
export default function Footer() {
  const items = [
    { label: 'email', href: links.mail, external: false },
    { label: 'résumé', href: site.resume, external: true },
    { label: 'linkedin', href: links.linkedin, external: true },
    { label: 'github', href: links.github, external: true },
  ];

  return (
    <footer className="relative z-10 border-t border-edge">
      <div className="shell py-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[0.9375rem] text-hi">{site.name}</p>
            <p className="t-body-sm mt-1">
              {site.role} · {site.location}
            </p>
            <p className="t-label mt-3 flex items-center gap-2 text-green">
              <span aria-hidden="true" className="h-1.5 w-1.5 bg-green" />
              open to opportunities
            </p>
          </div>

          <a href="#contact" className="btn btn-primary group">
            get in touch
            <Icon
              name="arrow"
              className="h-3.5 w-3.5 rotate-45 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-t border-edge pt-6">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {items.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="link-underline pb-0.5 font-mono text-[0.8125rem] text-mid transition-colors hover:text-hi"
                >
                  {item.label}
                  {item.external && <span className="sr-only"> (opens in a new tab)</span>}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6">
            <p className="t-label">&copy; {new Date().getFullYear()} {site.handle}</p>
            <a
              href="#top"
              className="group inline-flex items-center gap-2 font-mono text-[0.8125rem] text-mid transition-colors hover:text-hi"
            >
              back to top
              <Icon
                name="arrow"
                className="h-3.5 w-3.5 -rotate-45 transition-transform duration-200 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
