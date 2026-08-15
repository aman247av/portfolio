import Panel from '../primitives/Panel';

const packages = [
  { name: 'workflow-engine', note: 'cases · SLA · approvals', accent: true },
  { name: 'rules-engine', note: 'versioned · p95 < 150ms', accent: true },
  { name: 'integration-adapter', note: 'retries · fail-closed', accent: false },
  { name: 'vault', note: 'secure file storage', accent: false },
];

/** Wire with an optional label sitting beside it. */
function Wire({ label }: { label?: string }) {
  return (
    <div className="relative flex justify-center py-1">
      <div className="wire-v h-7" />
      {label && (
        // Capped to the space right of the wire so it can never push past the
        // panel — at iPad-landscape width this label was widening the document.
        <span className="t-label absolute left-1/2 top-1/2 ml-3 hidden max-w-[calc(50%-1.5rem)] -translate-y-1/2 sm:block">
          {label}
        </span>
      )}
    </div>
  );
}

export default function PlatformDiagram() {
  return (
    <figure className="m-0">
      <Panel title="Platform layer / NAVIOM" meta="4 packages">
        <div className="p-4 sm:p-5">
          <div className="node node-dim text-center">6 product services</div>

          <Wire label="import @platform/*" />

          <div className="border border-edge-hi bg-void/40 p-3">
            <div className="grid gap-2 sm:grid-cols-2">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`node ${pkg.accent ? 'node-accent' : ''}`}
                >
                  <div>{pkg.name}</div>
                  <div className="t-label mt-1.5 normal-case tracking-normal">
                    {pkg.note}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Wire label="outbound · circuit breaker" />

          <div className="node node-dim flex flex-wrap items-center justify-between gap-2 text-center sm:text-left">
            <span>partner APIs</span>
            <span className="t-label normal-case tracking-normal text-lo">
              redis sliding window
            </span>
          </div>
        </div>
      </Panel>

      <figcaption className="t-label mt-3 normal-case tracking-normal">
        Six services consume four independently versioned packages; all partner traffic
        leaves through one adapter with a cross-instance circuit breaker.
      </figcaption>
    </figure>
  );
}
