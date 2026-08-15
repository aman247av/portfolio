import Panel from '../primitives/Panel';

/** Values are indexed to the pre-migration baseline (100), not absolute units. */
const rows = [
  { metric: 'Kafka I/O memory', before: 100, after: 55, delta: '−45%', good: 'lower' },
  { metric: 'Throughput', before: 100, after: 120, delta: '+20%', good: 'higher' },
  { metric: 'Manual migration effort', before: 100, after: 30, delta: '−70%', good: 'lower' },
] as const;

const SCALE = 120;

function Bar({ value, muted }: { value: number; muted?: boolean }) {
  return (
    <div className="h-2 w-full bg-void" aria-hidden="true">
      <div
        className={muted ? 'h-full bg-edge-hi' : 'h-full bg-amber'}
        style={{ width: `${(value / SCALE) * 100}%` }}
      />
    </div>
  );
}

export default function MigrationChart() {
  return (
    <figure className="m-0">
      <Panel title="Samza → Flink" meta="indexed to baseline">
        <div className="row-divide">
          {rows.map((row) => (
            <div key={row.metric} className="px-4 py-4">
              <div className="flex items-baseline justify-between gap-4">
                <span className="t-mono text-hi">{row.metric}</span>
                <span
                  className={`t-mono font-medium ${
                    row.good === 'lower' ? 'text-green' : 'text-amber'
                  }`}
                >
                  {row.delta}
                </span>
              </div>

              <div className="mt-3 grid grid-cols-[3.5rem_1fr] items-center gap-x-3 gap-y-1.5">
                <span className="t-label">before</span>
                <Bar value={row.before} muted />
                <span className="t-label">after</span>
                <Bar value={row.after} />
              </div>
            </div>
          ))}
        </div>
      </Panel>

      <figcaption className="t-label mt-3 normal-case tracking-normal">
        Memory from object reuse and fewer intermediate allocations; throughput from
        parallel execution and operator chaining.
      </figcaption>
    </figure>
  );
}
