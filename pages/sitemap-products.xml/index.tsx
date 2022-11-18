import { GetServerSideProps } from 'next';
import { Product } from '@Types/product/Product';
import { Result } from '@Types/product/Result';
import { getServerSideSitemap, ISitemapField } from 'next-sitemap';
import { siteUrl } from 'next-sitemap.config';
import { mapLanguage } from 'project.config';
import { fetchApiHubServerSide } from 'frontastic';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const fields = [] as ISitemapField[];

  let nextCursor: string;

  do {
    const products = (await fetchApiHubServerSide(
      `/action/product/query?cursor=${nextCursor}&limit=128&locale=${mapLanguage(context.locale)}`,
      {
        req: context.req,
        res: context.res,
      },
    )) as Result;

    fields.push(
      ...(products.items as Product[]).map((product) => ({
        loc: `${siteUrl}${product._url}`,
        lastmod: new Date().toISOString(),
        changefreq: 'daily' as const,
      })),
    );

    nextCursor = products.nextCursor;
  } while (nextCursor);

  context.res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');

  return getServerSideSitemap(context, fields);
};

//eslint-disable-next-line @typescript-eslint/no-empty-function
export default function SitemapCategories() {}
