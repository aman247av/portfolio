import { useEffect, useRef, useState } from 'react';
import { nav, site } from '../content/site';
import Icon from './primitives/Icon';

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState('');

  useEffect(() => {
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => n !== null);

    if (!nodes.length || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-15% 0px -65% 0px' },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const sectionIds = nav.map((n) => n.href.slice(1));

export default function Header() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    panelRef.current?.querySelector<HTMLAnchorElement>('a')?.focus();
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-amber focus:px-3 focus:py-2 focus:font-mono focus:text-sm focus:text-void"
      >
        skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-edge bg-void/92 backdrop-blur-[3px]">
        <div className="shell flex h-14 items-center justify-between gap-6">
          <a href="#top" className="group flex items-center gap-2.5 py-2.5 font-mono text-sm">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 shrink-0 bg-green"
              title="available"
            />
            <span className="text-hi">{site.handle}</span>
          </a>

          <nav aria-label="Primary" className="hidden items-center md:flex">
            {nav.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`group relative px-3.5 py-2 font-mono text-[0.8125rem] transition-colors ${
                    isActive ? 'text-amber' : 'text-mid hover:text-hi'
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`mr-1 transition-opacity ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    ▸
                  </span>
                  {item.label}
                </a>
              );
            })}

            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-flex items-center gap-1.5 border border-edge-hi px-3 py-1.5 font-mono text-[0.8125rem] text-hi transition-colors hover:border-amber hover:text-amber"
            >
              resume
              <Icon name="arrow" className="h-3 w-3" />
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="-mr-2 p-2 text-hi md:hidden"
          >
            <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" />
          </button>
        </div>

        {open && (
          <div id="mobile-nav" ref={panelRef} className="border-t border-edge bg-void md:hidden">
            <nav aria-label="Primary" className="shell flex flex-col py-1">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-edge py-3.5 font-mono text-base text-hi"
                >
                  <span aria-hidden="true" className="mr-2 text-lo">
                    ▸
                  </span>
                  {item.label}
                </a>
              ))}
              <a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="my-3 inline-flex items-center justify-center gap-2 border border-edge-hi py-2.5 font-mono text-sm text-hi"
              >
                resume
                <Icon name="arrow" className="h-3.5 w-3.5" />
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
