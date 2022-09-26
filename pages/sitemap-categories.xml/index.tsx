import next, { GetServerSideProps } from 'next';
import { Category } from '@Types/product/Category';
import { Result } from '@Types/product/Result';
import { getServerSideSitemap, ISitemapField } from 'next-sitemap';
import { siteUrl } from 'next-sitemap.config';
import { mapLanguage } from 'project.config';
import { fetchApiHubServerSide } from 'frontastic';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const fields = [] as ISitemapField[];

  let nextCursor: string;

  do {
    const categories = (await fetchApiHubServerSide(
      `/action/product/queryCategories?cursor=${nextCursor}&limit=128&locale=${mapLanguage(context.locale)}`,
      {
        req: context.req,
        res: context.res,
      },
    )) as Result;

    fields.push(
      ...(categories.items as Category[]).map((category) => ({
        loc: `${siteUrl}${category._url}`,
        lastmod: new Date().toISOString(),
        changefreq: 'daily' as const,
      })),
    );

    nextCursor = categories.nextCursor;
  } while (nextCursor);

  context.res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');

  return getServerSideSitemap(context, fields);
};

//eslint-disable-next-line @typescript-eslint/no-empty-function
export default function SitemapCategories() {}
