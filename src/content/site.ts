export const site = {
  name: 'Aman Verma',
  handle: 'aman.verma',
  /** Positioning, not job title. The job title lives in experience.ts. */
  role: 'Software Developer Engineer',
  title: 'Software Engineer I',
  company: 'NAVIOM',
  location: 'Gurugram, India',
  email: 'aman247av@gmail.com',
  phone: '+91 7317270278',
  resume: '/Aman_Verma_Resume.pdf',
} as const;

export const links = {
  github: 'https://github.com/aman247av',
  linkedin: 'https://www.linkedin.com/in/aman247av/',
  leetcode: 'https://leetcode.com/u/aman24av/',
  nxa: 'https://nxaone.vercel.app/',
  whatsapp: 'https://wa.me/917317270278',
  mail: `mailto:${site.email}`,
} as const;

/**
 * The text nav indexes the sections; the header buttons are actions.
 *
 * Contact was dropped from here for a while and left to the amber "hire me"
 * button alone. That was wrong twice over: "hire me" is narrower than "contact"
 * — it reads past anyone who wants to talk without hiring — and it left the
 * scroll-spy with a dead zone, so reaching the bottom of the page highlighted
 * nothing at all. The button stays as the conversion CTA; this is wayfinding.
 */
export const nav = [
  { label: 'experience', href: '#experience' },
  { label: 'work', href: '#work' },
  { label: 'about', href: '#about' },
  { label: 'services', href: '#services' },
  { label: 'contact', href: '#contact' },
] as const;

/**
 * The four facts a recruiter needs before they decide to keep reading.
 * Deliberately no tenure figure — years is the weakest number here, and it
 * was previously stated four times above the fold.
 */
export const proof = [
  { k: 'current', v: 'NAVIOM', note: 'platform layer, greenfield', accent: true },
  { k: 'previously', v: 'LinkedIn', note: 'data infrastructure, via MAQ' },
  { k: 'shipped', v: 'NxaCare', note: 'live multi-tenant SaaS' },
  { k: 'education', v: 'IIIT Guwahati', note: 'B.Tech, CSE' },
] as const;
