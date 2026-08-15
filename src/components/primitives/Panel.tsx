import type { ReactNode } from 'react';

type PanelProps = {
  /** Tab label rendered into the top edge, like a schematic callout. */
  title?: string;
  meta?: ReactNode;
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export default function Panel({
  title,
  meta,
  children,
  className = '',
  hover = false,
}: PanelProps) {
  return (
    // Column flex so a child can claim the leftover height with flex-1.
    // (Using h-full on the child instead would measure the panel *including*
    // this header, overflowing the bottom border by the header's height.)
    <div
      className={`panel ticks flex flex-col ${hover ? 'panel-hover' : ''} ${className}`}
    >
      {(title || meta) && (
        <div className="flex shrink-0 items-center justify-between gap-4 border-b border-edge px-4 py-2.5">
          {title && <span className="t-label text-mid">{title}</span>}
          {meta && <span className="t-label">{meta}</span>}
        </div>
      )}
      {children}
    </div>
  );
}

/**
 * Key/value readout row — the densest way to state a fact.
 *
 * `block` stacks the value under its label instead of right-aligning beside it.
 * Right-aligned prose that wraps to three or four lines reads as cramped, so
 * anything longer than a short value should use it.
 */
export function Readout({
  k,
  v,
  accent = false,
  block = false,
}: {
  k: string;
  v: ReactNode;
  accent?: boolean;
  block?: boolean;
}) {
  const value = `t-mono ${accent ? 'text-amber' : 'text-hi'}`;

  if (block) {
    return (
      <div className="px-4 py-3">
        <span className="t-label block">{k}</span>
        <span className={`${value} mt-1.5 block`}>{v}</span>
      </div>
    );
  }

  return (
    <div className="flex items-baseline justify-between gap-4 px-4 py-2.5">
      <span className="t-label shrink-0">{k}</span>
      <span className={`${value} text-right`}>{v}</span>
    </div>
  );
}

/** A large single metric, for numbers that deserve to be read first. */
export function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-l border-amber/50 pl-3">
      <div className="t-readout">{value}</div>
      <div className="t-label mt-1.5">{label}</div>
    </div>
  );
}
