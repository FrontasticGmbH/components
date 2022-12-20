/* Website URL */

const { languageMapper } = require('./project.config');

const siteUrl = process.env.SITE_URL;

const alternateRefs = []
for (const [key] of Object.entries(languageMapper)) {
  alternateRefs.push({
    href: `${siteUrl}/${key}`,
    hreflang: key
  })
}
/* Site map generator configuration */

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl,
  exclude: ['/sitemap-static.xml', '/sitemap-categories.xml', '/sitemap-products.xml', '/verify', '/__preview'],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: '/api',
      },
      {
        userAgent: '*',
        disallow: ['/__preview'],
      },
    ],
    additionalSitemaps: [
      `${siteUrl}/sitemap-static.xml`,
      `${siteUrl}/sitemap-categories.xml`,
      `${siteUrl}/sitemap-products.xml`,
    ],
  },
  alternateRefs: alternateRefs
};

module.exports = config;
