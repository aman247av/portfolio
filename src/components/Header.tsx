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
  const toggleRef = useRef<HTMLButtonElement>(null);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }

      // Focus trap. Without it, tabbing past the last link walks the reader
      // behind an overlay that is still covering the page.
      if (e.key !== 'Tab' || !panel) return;
      const focusable = panel.querySelectorAll<HTMLElement>('a[href], button');
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    panel?.querySelector<HTMLAnchorElement>('a')?.focus();

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
        <div className="shell flex h-14 items-center justify-between gap-4">
          <a
            href="#top"
            className="group flex shrink-0 items-center gap-2.5 py-2.5 font-mono text-sm"
          >
            <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 bg-green" />
            <span className="text-hi">{site.handle}</span>
            <span className="sr-only">— available for work</span>
          </a>

          <nav aria-label="Primary" className="hidden items-center md:flex">
            {nav.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`nav-link px-3 py-2 font-mono text-[0.8125rem] transition-colors ${
                    isActive ? 'text-amber' : 'text-mid hover:text-hi'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}

            {/* The two things anyone here actually wants to do. */}
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-flex shrink-0 items-center gap-1.5 border border-edge-hi px-3 py-1.5 font-mono text-[0.8125rem] text-hi transition-colors hover:border-amber hover:text-amber"
            >
              resume
              <Icon name="download" className="h-3 w-3" />
              <span className="sr-only">(PDF, opens in a new tab)</span>
            </a>
            {/* No aria-current here: the nav link above already carries it, and
                two elements claiming to be the current page is worse than none.
                This is an action, not wayfinding. */}
            <a
              href="#contact"
              className="ml-2 inline-flex shrink-0 items-center bg-amber px-3 py-1.5 font-mono text-[0.8125rem] font-medium text-void transition-colors hover:bg-hi"
            >
              hire me
            </a>
          </nav>

          <button
            ref={toggleRef}
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
          // Full height: body scroll is already locked while this is open, so a
          // short dropdown floating over frozen content just reads as a glitch.
          <div
            id="mobile-nav"
            ref={panelRef}
            className="min-h-[calc(100dvh-3.5rem)] border-t border-edge bg-void md:hidden"
          >
            <nav aria-label="Primary" className="shell flex flex-col py-1">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active === item.href.slice(1) ? 'page' : undefined}
                  className="border-b border-edge py-3.5 font-mono text-base text-hi aria-[current]:text-amber"
                >
                  <span aria-hidden="true" className="mr-2 text-lo">
                    ▸
                  </span>
                  {item.label}
                </a>
              ))}
              <div className="my-3 grid grid-cols-2 gap-2.5">
                <a
                  href={site.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="btn btn-quiet"
                >
                  resume
                  <Icon name="download" className="h-3.5 w-3.5" />
                </a>
                <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary">
                  hire me
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
