export const site = {
  name: 'Aman Verma',
  handle: 'aman.verma',
  role: 'Software Engineer',
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
  whatsapp: 'https://wa.me/917317270278',
  mail: `mailto:${site.email}`,
} as const;

export const nav = [
  { label: 'experience', href: '#experience' },
  { label: 'work', href: '#work' },
  { label: 'about', href: '#about' },
  { label: 'contact', href: '#contact' },
] as const;
