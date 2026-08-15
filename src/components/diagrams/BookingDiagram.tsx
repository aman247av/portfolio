import Panel from '../primitives/Panel';

function Arrow() {
  return (
    <div className="flex items-center justify-center py-1 md:py-0" aria-hidden="true">
      <span className="text-edge-hi md:hidden">↓</span>
      <span className="hidden text-edge-hi md:block">→</span>
    </div>
  );
}

export default function BookingDiagram() {
  return (
    <figure className="m-0">
      <Panel title="Nxacare / booking + payment path" meta="request flow">
        <div className="p-4 sm:p-5">
          {/* Happy path, left to right on desktop and top to bottom on mobile. */}
          <div className="grid items-stretch gap-1 md:grid-cols-[1fr_auto_1.5fr_auto_1.1fr]">
            <div className="node node-dim flex items-center justify-center text-center">
              concurrent
              <br />
              booking requests
            </div>
            <Arrow />
            <div className="node node-accent">
              <div>availability engine</div>
              <div className="t-label mt-1.5 normal-case tracking-normal">
                schedules · capacity · slot lock
              </div>
            </div>
            <Arrow />
            <div className="node flex flex-col items-center justify-center text-center">
              <span>one booking</span>
              <span className="mt-0.5 whitespace-nowrap text-green">no double-booking</span>
            </div>
          </div>

          <div className="relative flex justify-center py-1">
            <div className="wire-v h-6" />
          </div>

          {/* Payment fan-out. */}
          <div className="border border-edge-hi bg-void/40 p-3">
            <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr] md:items-start">
              <div className="node">
                <div>payment factory</div>
                <div className="t-label mt-1.5 normal-case tracking-normal">
                  webhook signature verified
                </div>
              </div>
              <Arrow />
              <div className="grid gap-2">
                <div className="node flex items-center justify-between gap-2">
                  <span>stripe</span>
                  <span className="text-green" aria-hidden="true">
                    ●
                  </span>
                </div>
                <div className="node flex items-center justify-between gap-2">
                  <span>razorpay</span>
                  <span className="text-green" aria-hidden="true">
                    ●
                  </span>
                </div>
                <div className="t-label normal-case tracking-normal text-lo">
                  circuit breaker fails over between gateways
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center py-1">
            <div className="wire-v h-6" />
          </div>

          <div className="node node-dim flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
            <span>bullmq workers</span>
            <span className="t-label normal-case tracking-normal text-lo">
              notifications · invoicing · appointment lifecycle
            </span>
          </div>
        </div>
      </Panel>

      <figcaption className="t-label mt-3 normal-case tracking-normal">
        Concurrency is resolved before a slot is held, payments sit behind one interface
        with gateway failover, and everything non-urgent leaves the request path.
      </figcaption>
    </figure>
  );
}
