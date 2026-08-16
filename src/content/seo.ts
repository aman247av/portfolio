import { education, services, stack } from './about';
import { roles } from './experience';
import { links, site } from './site';
import { caseStudies, secondary } from './work';

/**
 * Structured data, derived from the same content the page renders.
 *
 * This used to be a hand-written block in index.html, and it drifted exactly
 * the way hand-written duplication does: the ProfilePage name still said
 * "Software Developer Engineer" long after every visible instance had been
 * corrected. Generating it here means the markup cannot disagree with the page
 * — and `scripts/prerender.mjs` fails the build if the <title> drifts from
 * `pageTitle` below.
 */

export const SITE_URL = 'https://amanverma.me';
export const pageTitle = `${site.name} | ${site.role}`;

const PERSON = `${SITE_URL}/#person`;
const WEBSITE = `${SITE_URL}/#website`;

/** Flattened, de-duplicated, order preserved — feeds Person.knowsAbout. */
function knowsAbout(): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const group of stack) {
    for (const item of group.items) {
      const clean = item.replace(/\s*\([^)]*\)/, '').trim();
      if (!seen.has(clean)) {
        seen.add(clean);
        out.push(clean);
      }
    }
  }
  return out;
}

/**
 * One node per project.
 *
 * NxaCare and Knowledgify are real software products with public URLs, so they
 * get software types. The LinkedIn migration is proprietary work described on
 * the page rather than a shippable artefact, so it is a plain CreativeWork with
 * no URL. Deliberately no `aggregateRating` on Knowledgify: the 4.1 stars are
 * Google Play's data, and restating them as first-party review markup is the
 * kind of thing that earns a manual action.
 */
function projects() {
  const nodes: Record<string, unknown>[] = [];

  for (const study of caseStudies) {
    const url = study.links[0]?.href;
    nodes.push({
      '@type': study.slug === 'nxacare' ? 'SoftwareApplication' : 'CreativeWork',
      '@id': `${SITE_URL}/#project-${study.slug}`,
      name: study.title,
      headline: study.lede,
      description: `${study.problem} ${study.role}`,
      creator: { '@id': PERSON },
      keywords: [...study.demonstrates, ...study.stack].join(', '),
      ...(url ? { url, sameAs: url } : {}),
      ...(study.slug === 'nxacare'
        ? { applicationCategory: 'BusinessApplication', operatingSystem: 'Web' }
        : {}),
    });
  }

  for (const project of secondary) {
    const store = project.links.find((l) => l.href.includes('play.google.com'));
    nodes.push({
      '@type': store ? 'MobileApplication' : 'CreativeWork',
      '@id': `${SITE_URL}/#project-${project.title.toLowerCase()}`,
      name: project.title,
      description: `${project.lede} ${project.role}`,
      creator: { '@id': PERSON },
      keywords: project.stack.join(', '),
      ...(store
        ? { url: store.href, sameAs: store.href, operatingSystem: 'Android',
            applicationCategory: 'EducationalApplication' }
        : {}),
    });
  }

  return nodes;
}

/** Services are what a freelance client searches for; state them as offers. */
function offers() {
  return services.map((service) => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: service.title,
      description: service.body,
      provider: { '@id': PERSON },
    },
  }));
}

export function buildGraph(dateModified: string) {
  const current = roles.find((r) => r.current) ?? roles[0];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': PERSON,
        name: site.name,
        givenName: 'Aman',
        familyName: 'Verma',
        jobTitle: site.role,
        description:
          "Backend and platform engineer building production systems end to end, from system design through deployment. Owns the platform layer of a greenfield cross-border logistics product at NAVIOM; previously migrated a high-volume financial stream-processing pipeline from Samza to Apache Flink on LinkedIn's data infrastructure.",
        url: `${SITE_URL}/`,
        image: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/og.png`,
          width: 1200,
          height: 630,
        },
        email: `mailto:${site.email}`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Gurugram',
          addressRegion: 'Haryana',
          addressCountry: 'IN',
        },
        worksFor: {
          '@type': 'Organization',
          name: current.company,
          address: {
            '@type': 'PostalAddress',
            addressLocality: current.location,
            addressCountry: 'IN',
          },
        },
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: education.institution,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Guwahati',
            addressRegion: 'Assam',
            addressCountry: 'IN',
          },
        },
        hasCredential: {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'degree',
          name: education.degree,
          recognizedBy: {
            '@type': 'CollegeOrUniversity',
            name: education.institution,
          },
        },
        hasOccupation: {
          '@type': 'Occupation',
          name: site.role,
          // US SOC code for Software Developers — the identifier search engines
          // actually resolve, rather than a free-text job title.
          occupationalCategory: '15-1252',
          occupationLocation: { '@type': 'City', name: 'Gurugram' },
          skills: knowsAbout().join(', '),
        },
        makesOffer: offers(),
        knowsAbout: knowsAbout(),
        knowsLanguage: [{ '@type': 'Language', name: 'English' }],
        sameAs: [links.github, links.linkedin, links.leetcode],
      },
      {
        '@type': 'WebSite',
        '@id': WEBSITE,
        url: `${SITE_URL}/`,
        name: site.name,
        description: `Portfolio of ${site.name}, ${site.role.toLowerCase()}.`,
        inLanguage: 'en',
        publisher: { '@id': PERSON },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${SITE_URL}/#profilepage`,
        url: `${SITE_URL}/`,
        name: pageTitle,
        isPartOf: { '@id': WEBSITE },
        about: { '@id': PERSON },
        mainEntity: { '@id': PERSON },
        inLanguage: 'en',
        dateModified,
        hasPart: projects().map((p) => ({ '@id': p['@id'] })),
      },
      ...projects(),
    ],
  };
}
