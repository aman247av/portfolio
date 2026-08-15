import type { ReactNode } from 'react';
import Reveal from './Reveal';

type SectionProps = {
  id: string;
  index: string;
  label: string;
  /** Right-aligned counter or status, e.g. "6 ROLES". */
  meta?: string;
  intro?: string;
  children: ReactNode;
};

/**
 * Every section opens with the same index rule, which is what gives the page
 * its instrument-panel rhythm.
 */
export default function Section({ id, index, label, meta, intro, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className="section-pad relative z-10">
      <div className="shell">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="t-label text-amber">[{index}]</span>
            <h2 id={headingId} className="t-label text-hi">
              {label}
            </h2>
            <span aria-hidden="true" className="h-px flex-1 bg-edge" />
            {meta && <span className="t-label hidden sm:block">{meta}</span>}
          </div>
        </Reveal>

        {intro && (
          <Reveal delay={60}>
            <p className="t-body mt-6 max-w-2xl">{intro}</p>
          </Reveal>
        )}

        <div className="mt-10 md:mt-12">{children}</div>
      </div>
    </section>
  );
}
