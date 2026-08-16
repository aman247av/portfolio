import { about, education, engagement, recognition, services, stack } from './about';
import { roles } from './experience';
import { links, site } from './site';
import { caseStudies, secondary, smaller } from './work';
import { SITE_URL } from './seo';

/**
 * Generates `llms.txt` from the content model at build time.
 *
 * This file used to be maintained by hand, which made it the same drift hazard
 * the JSON-LD already turned out to be: a second copy of every fact, with
 * nothing enforcing that the two agree. Now there is one source.
 *
 * Written for answer engines rather than crawlers — plain prose, no markup, and
 * the facts stated in full rather than teased, because a model quoting this has
 * no page to click through to.
 */

const wrap = (text: string, width = 80) => {
  const out: string[] = [];
  let line = '';
  for (const word of text.split(/\s+/)) {
    if (line && (line + ' ' + word).length > width) {
      out.push(line);
      line = word;
    } else {
      line = line ? `${line} ${word}` : word;
    }
  }
  if (line) out.push(line);
  return out.join('\n');
};

const bullets = (items: string[]) => items.map((i) => wrap(`- ${i}`, 80)).join('\n');

export function buildLlmsTxt(): string {
  const current = roles.find((r) => r.current) ?? roles[0];
  const s: string[] = [];

  s.push(`# ${site.name}`);
  s.push('');
  s.push(
    wrap(
      `> ${site.role} based in ${site.location}. ${about[0]}`.replace(/\n/g, ' '),
    )
      .split('\n')
      .map((l, i) => (i === 0 ? l : `> ${l}`))
      .join('\n'),
  );
  s.push('');
  s.push(`- Site: ${SITE_URL}`);
  s.push(`- Email: ${site.email}`);
  s.push(`- GitHub: ${links.github}`);
  s.push(`- LinkedIn: ${links.linkedin}`);
  s.push(`- Location: ${site.location}`);
  s.push(`- Current title: ${site.title} at ${current.company}`);

  /* ---- Roles ---- */
  s.push('', '## Experience', '');
  for (const role of roles) {
    const who = role.client ? `${role.company} (client: ${role.client})` : role.company;
    s.push(`### ${role.title}, ${who}`);
    s.push('');
    s.push(
      `${role.period} · ${role.location} · Industry: ${role.industry}` +
        (role.note ? ` · ${role.note}` : ''),
    );
    s.push(`Stack: ${role.stack.join(', ')}.`);
    s.push('');
    s.push(wrap(role.premise));
    s.push('');
    for (const w of role.workstreams) {
      const figures = w.figures?.length
        ? ` Figures: ${w.figures.map((f) => `${f.value} ${f.label}`).join(', ')}.`
        : '';
      s.push(wrap(`- **${w.title}** — ${[w.summary, ...w.detail].join(' ')}${figures}`));
    }
    s.push('');
  }

  /* ---- Case studies ---- */
  s.push('## Selected work', '');
  for (const c of caseStudies) {
    s.push(`### ${c.title} — ${c.kind} (${c.context}), ${c.status.label}`);
    s.push('');
    s.push(wrap(c.lede));
    s.push('');
    s.push(wrap(`Problem: ${c.problem}`));
    s.push('');
    s.push(wrap(`My role: ${c.role}`));
    s.push('');
    s.push('Decisions:');
    s.push(bullets(c.decisions.map((d) => `${d.title}: ${d.body}`)));
    s.push('');
    s.push(
      wrap(
        `Outcome: ${c.outcomes.map((o) => `${o.value} ${o.label}`).join(', ')}.` +
          (c.outcomeNote ? ` ${c.outcomeNote}` : ''),
      ),
    );
    s.push('');
    s.push(wrap(`Demonstrates: ${c.demonstrates.join(', ')}.`));
    s.push(wrap(`Stack: ${c.stack.join(', ')}.`));
    if (c.links.length) s.push(...c.links.map((l) => `${l.label}: ${l.href}`));
    if (c.linkNote) s.push(wrap(c.linkNote));
    s.push('');
  }

  /* ---- Smaller projects ---- */
  s.push('## Other projects', '');
  for (const p of secondary) {
    s.push(
      wrap(
        `- **${p.title}** (${p.kind}${p.context ? `, ${p.context}` : ''}) — ${p.lede} ${p.role}` +
          (p.facts?.length ? ` ${p.facts.join('. ')}.` : '') +
          ` Stack: ${p.stack.join(', ')}. ${p.links.map((l) => l.href).join(' ')}`,
      ),
    );
  }
  for (const p of smaller) {
    s.push(wrap(`- **${p.title}** (${p.context}) — ${p.note} Stack: ${p.stack.join(', ')}. ${p.href}`));
  }

  /* ---- How he works ---- */
  s.push('', '## Approach', '');
  s.push(about.slice(1).map((p) => wrap(p)).join('\n\n'));

  /* ---- Skills ---- */
  s.push('', '## Technical skills', '');
  s.push(bullets(stack.map((g) => `${g.label}: ${g.items.join(', ')}`)));

  /* ---- Hire ---- */
  s.push('', '## Available for hire', '');
  s.push(wrap('Full-time roles in backend, platform and distributed systems engineering.'));
  s.push('');
  s.push('Freelance and contract work, each backed by shipped work:');
  s.push(bullets(services.map((sv) => `${sv.title} — ${sv.body} Proof: ${sv.proof}`)));
  s.push('');
  s.push(bullets(engagement.map((e) => `${e.k}: ${e.v}`)));

  /* ---- Credentials ---- */
  s.push('', '## Education and recognition', '');
  s.push(wrap(`${education.degree}, ${education.institution}, ${education.location} (${education.period}).`));
  s.push(bullets(recognition.map((r) => `${r.title} — ${r.detail} ${r.href}`)));
  s.push('');

  return s.join('\n').replace(/\n{3,}/g, '\n\n');
}
