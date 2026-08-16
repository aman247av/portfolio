import { useState, type FormEvent } from 'react';
import { links, site } from '../content/site';
import Icon, { type IconName } from './primitives/Icon';
import Panel from './primitives/Panel';
import Reveal from './primitives/Reveal';
import Section from './primitives/Section';

/**
 * ────────────────────────────────────────────────────────────────────────────
 *  PASTE YOUR WEB3FORMS ACCESS KEY HERE. This is the only change needed.
 * ────────────────────────────────────────────────────────────────────────────
 *
 *  1. Go to https://web3forms.com
 *  2. Enter aman247av@gmail.com under "Create your Access Key"
 *  3. Check that inbox and copy the key (a UUID like 1a2b3c4d-...)
 *  4. Paste it between the quotes below, then `npm run build`
 *
 *  The key is public by design — it only ever routes mail to the address it
 *  was issued for, so it is safe in a client bundle and safe in a public repo.
 *
 *  While it is empty the form composes a structured mail in the visitor's own
 *  client instead. That works, but it depends on them having a mail app set
 *  up; with a key set, submissions land in your inbox regardless.
 */
const WEB3FORMS_KEY = '47464c0c-79d4-4f3c-9311-1139a4b09e58';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

const intents = [
  'A role (full-time)',
  'A freelance / contract project',
  'Something else',
] as const;

const channels: { label: string; value: string; href: string; icon: IconName }[] = [
  { label: 'email', value: site.email, href: links.mail, icon: 'mail' },
  { label: 'linkedin', value: 'in/aman247av', href: links.linkedin, icon: 'linkedin' },
  { label: 'github', value: 'aman247av', href: links.github, icon: 'github' },
  { label: 'whatsapp', value: site.phone, href: links.whatsapp, icon: 'whatsapp' },
];

type Status = 'idle' | 'sending' | 'sent' | 'handoff' | 'error';

function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [draft, setDraft] = useState('');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: a field no human can see or tab into, so anything that fills
    // it is automated. Bail silently — a bot told it failed just tries again.
    if (String(data.get('company') ?? '')) {
      setStatus('handoff');
      return;
    }

    const name = String(data.get('name') ?? '');
    const email = String(data.get('email') ?? '');
    const intent = String(data.get('intent') ?? '');
    const message = String(data.get('message') ?? '');

    const subject = `${intent} — ${name}`;

    if (!WEB3FORMS_KEY) {
      const body = `${message}\n\n—\n${name}\n${email}`;
      // Keep a plain-text copy so the visitor can still copy it out if no mail
      // client is registered — on a locked-down work laptop, nothing opens.
      setDraft(`${subject}\n\n${body}`);
      setStatus('handoff');
      window.location.href = `${links.mail}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus('sending');
    try {
      data.append('access_key', WEB3FORMS_KEY);
      data.append('subject', `${subject} — via amanverma.me`);
      data.append('from_name', 'amanverma.me');
      // So hitting reply in the inbox goes to the sender, not to Web3Forms.
      data.append('replyto', email);

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      // Web3Forms answers 200 with {success:false} on a bad key, so the status
      // code alone is not enough to call it delivered.
      const result = (await response.json()) as { success?: boolean; message?: string };
      if (!response.ok || !result.success) {
        throw new Error(result.message ?? String(response.status));
      }
      form.reset();
      setStatus('sent');
    } catch {
      // The POST can fail for reasons that have nothing to do with the visitor:
      // an ad-blocker filtering the endpoint, a corporate proxy, an outage.
      // Falling back to the mail handoff keeps their message recoverable
      // instead of stranding them on an error with nowhere to go.
      const body = `${message}\n\n—\n${name}\n${email}`;
      setDraft(`${subject}\n\n${body}`);
      setStatus('handoff');
      window.location.href = `${links.mail}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;
    }
  }

  /* A real endpoint confirmed the send, so replacing the form is honest. */
  if (status === 'sent') {
    return (
      <div className="mt-8 border border-green/40 bg-green/[0.06] p-5">
        <p className="flex items-center gap-2.5 font-mono text-[0.9375rem] text-green">
          <Icon name="check" className="h-4 w-4 shrink-0" />
          Message sent.
        </p>
        <p className="t-body-sm mt-2">
          I read everything and reply to anything with a real project behind it.
        </p>
      </div>
    );
  }

  /**
   * Mailto handoff. This used to replace the form with "everything you typed is
   * in the draft" — which is only true if a mail client actually opened. When
   * none is registered nothing happens, and the message was destroyed along
   * with the form. Now the text is shown back, selectable, and the form stays
   * mounted underneath with its values intact.
   */
  if (status === 'handoff') {
    return (
      <div className="mt-8">
        <div className="border border-amber/40 bg-amber/[0.06] p-5">
          <p className="font-mono text-[0.9375rem] text-amber">
            Your mail client should have opened.
          </p>
          <p className="t-body-sm mt-2">
            If nothing happened, no mail app is set up on this device. Copy the message
            below and send it to{' '}
            <a href={links.mail} className="link-underline pb-0.5 text-hi">
              {site.email}
            </a>
            .
          </p>
          <textarea
            readOnly
            rows={7}
            value={draft}
            aria-label="Your message, ready to copy"
            onFocus={(e) => e.currentTarget.select()}
            className="field mt-4"
          />
        </div>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="btn btn-quiet mt-4"
        >
          back to the form
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-4">
      {/* Honeypot. Hidden from sight, from screen readers, and from the tab
          order — `hidden` alone would let some bots detect and skip it. */}
      <div aria-hidden="true" className="absolute h-px w-px overflow-hidden opacity-0">
        <label htmlFor="company">Company (leave this empty)</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="t-label block">
            your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Doe"
            className="field mt-2"
          />
        </div>
        <div>
          <label htmlFor="email" className="t-label block">
            email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@company.com"
            className="field mt-2"
          />
        </div>
      </div>

      <div>
        <label htmlFor="intent" className="t-label block">
          what is this about
        </label>
        <select id="intent" name="intent" required defaultValue={intents[0]} className="field mt-2">
          {intents.map((intent) => (
            <option key={intent} value={intent}>
              {intent}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="t-label block">
          what do you need built, or what is the role
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="A sentence or two is plenty. What it is, what it needs to do, and roughly when."
          className="field mt-2"
        />
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
          {status === 'sending' ? 'sending…' : 'send message'}
          <Icon name="send" className="h-3.5 w-3.5" />
        </button>
        <p className="t-body-sm text-lo">
          Or mail me directly —{' '}
          <a href={links.mail} className="link-underline pb-0.5 text-hi">
            {site.email}
          </a>
        </p>
      </div>

      {status === 'error' && (
        <p role="alert" className="font-mono text-[0.8125rem] text-rust">
          That did not go through. Please mail me at {site.email} instead.
        </p>
      )}
    </form>
  );
}

export default function Contact() {
  return (
    <Section
      id="contact"
      index="05"
      label="Contact"
      title="Tell me what you are building, or what you are hiring for."
      meta="open to work"
      intro="Recruiters, hiring managers, founders, and fellow engineers all welcome. I reply to anything with a real project or role behind it."
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <Reveal>
            <ContactForm />
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          {/* Recruiters want the CV in one click; they should not fill a form. */}
          <Reveal delay={80}>
            <Panel title="Hiring? Start here">
              <div className="row-divide">
                <a
                  href={site.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-panel-2"
                >
                  <Icon
                    name="download"
                    className="h-4 w-4 shrink-0 text-lo transition-colors group-hover:text-amber"
                  />
                  <span className="t-mono text-hi">Download résumé (PDF)</span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-panel-2"
                >
                  <Icon
                    name="linkedin"
                    className="h-4 w-4 shrink-0 text-lo transition-colors group-hover:text-amber"
                  />
                  <span className="t-mono text-hi">Message me on LinkedIn</span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
                <a
                  href={links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-panel-2"
                >
                  <Icon
                    name="whatsapp"
                    className="h-4 w-4 shrink-0 text-lo transition-colors group-hover:text-amber"
                  />
                  <span className="t-mono text-hi">WhatsApp for something urgent</span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>
            </Panel>
          </Reveal>

          <Reveal delay={130}>
            <div className="mt-5">
              <Panel title="Channels">
                <ul className="row-divide">
                  {channels.map((channel) => (
                    <li key={channel.label}>
                      <a
                        href={channel.href}
                        target={channel.href.startsWith('mailto:') ? undefined : '_blank'}
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 px-4 py-3 transition-colors hover:bg-panel-2"
                      >
                        <Icon
                          name={channel.icon}
                          className="h-4 w-4 shrink-0 text-lo transition-colors group-hover:text-amber"
                        />
                        <span className="t-label">{channel.label}</span>
                        <span className="t-mono ml-auto truncate text-hi">
                          {channel.value}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </Panel>
            </div>
          </Reveal>

          <Reveal delay={170}>
            <p className="t-label mt-5">{site.location} · available remotely</p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
