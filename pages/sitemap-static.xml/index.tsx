import { GetServerSideProps } from 'next';
import { getServerSideSitemap, ISitemapField } from 'next-sitemap';
import { siteUrl } from 'next-sitemap.config';
import { mapLanguage } from 'project.config';
import { createClient } from 'frontastic';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const fields = [] as ISitemapField[];
  const path = '';
  const depth = '';

  const frontastic = createClient();
  const data = await frontastic.getStructure(path, depth, mapLanguage(context.locale), context.req, context.res);

  if (data?.pageFolderStructure) {
    fields.push(
      ...data.pageFolderStructure?.map((pageFolderStructureValue) => ({
        loc: `${siteUrl}${pageFolderStructureValue._url}`,
        lastmod: new Date().toISOString(),
        changefreq: 'daily' as const,
      })),
    );
  }

  context.res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');

  return getServerSideSitemap(context, fields);
};

//eslint-disable-next-line @typescript-eslint/no-empty-function
export default function Sitemap() {}
