import { useEffect, useRef, type ElementType, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  /** Stagger in milliseconds. Keep small — this is punctuation, not choreography. */
  delay?: number;
  as?: ElementType;
  className?: string;
};

function canAnimate() {
  if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
    return false;
  }
  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * The single reveal animation used across the site.
 *
 * Renders plain, visible markup — no hidden state in the output at all. That
 * matters for three reasons: the prerendered HTML is readable, hydration has
 * nothing to mismatch on, and anything already on screen at load is never
 * hidden and re-shown (which would read as a flash).
 *
 * After mount we hide only the elements still below the fold, then reveal each
 * as it scrolls in. Hiding an off-screen element is invisible by definition.
 * The class is toggled directly rather than through state: this synchronises
 * the DOM with an observer, which is exactly what effects are for, and avoids
 * a second render pass on every reveal.
 */
export default function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
  className = '',
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || !canAnimate()) return;

    // Already on screen (or scrolled past) — leave it exactly as rendered.
    if (node.getBoundingClientRect().top < window.innerHeight) return;

    node.classList.add('reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            node.dataset.visible = 'true';
            observer.disconnect();
          }
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={delay ? ({ '--reveal-delay': `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
