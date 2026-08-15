import { site } from '../content/site';
import Icon from './primitives/Icon';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-edge">
      <div className="shell flex flex-col gap-3 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="t-label">
          {site.handle}
          <span aria-hidden="true" className="mx-2 text-edge-hi">
            /
          </span>
          &copy; {new Date().getFullYear()}
        </p>

       

        <a
          href="#top"
          className="group inline-flex items-center gap-2 self-start py-2 font-mono text-[0.8125rem] text-mid transition-colors hover:text-hi sm:self-auto"
        >
          back to top
          <Icon
            name="arrow"
            className="h-3.5 w-3.5 -rotate-45 transition-transform duration-200 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </footer>
  );
}
