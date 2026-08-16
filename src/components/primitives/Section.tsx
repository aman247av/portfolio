import type { ReactNode } from 'react';
import Reveal from './Reveal';

type SectionProps = {
  id: string;
  index: string;
  /** Eyebrow above the heading — the index-rail label. */
  label: string;
  /** The real heading. Renders as the h2, at heading size. */
  title: string;
  /** Right-aligned counter or status, e.g. "4 roles". */
  meta?: string;
  intro?: string;
  children: ReactNode;
};

/**
 * Every section opens with the same index rule, which is what gives the page
 * its instrument-panel rhythm.
 *
 * The h2 used to be the rail label itself — 11px uppercase grey, which made
 * the chapter markers the smallest text on the page and left a scanner with
 * no landmarks. The rail is now decoration and the h2 carries a real
 * sentence at real size.
 */
export default function Section({
  id,
  index,
  label,
  title,
  meta,
  intro,
  children,
}: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className="section-pad relative z-10">
      <div className="shell">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="t-label text-amber">[{index}]</span>
            <span className="t-label text-mid">{label}</span>
            <span aria-hidden="true" className="h-px flex-1 bg-edge" />
            {meta && <span className="t-label hidden sm:block">{meta}</span>}
          </div>

          <h2 id={headingId} className="t-section mt-5 max-w-3xl">
            {title}
          </h2>
        </Reveal>

        {intro && (
          <Reveal delay={60}>
            <p className="t-body mt-5 max-w-2xl">{intro}</p>
          </Reveal>
        )}

        <div className="mt-10 md:mt-14">{children}</div>
      </div>
    </section>
  );
}
