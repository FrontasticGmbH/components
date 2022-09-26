/* Website URL */

const siteUrl = process.env.SITE_URL;

/* Site map generator configuration */

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl,
  exclude: ['/sitemap-categories.xml', '/sitemap-products.xml', '/verify', '/__preview'],
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
    additionalSitemaps: [`${siteUrl}/sitemap-categories.xml`, `${siteUrl}/sitemap-products.xml`],
  },
  alternateRefs: [
    { href: `${siteUrl}/en`, hreflang: 'en' },
    { href: `${siteUrl}/de`, hreflang: 'de' },
  ],
};

module.exports = config;
