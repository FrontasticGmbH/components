import next, { GetServerSideProps } from 'next';
import { getServerSideSitemap, ISitemapField } from 'next-sitemap';
import { fetchApiHubServerSide } from 'frontastic';
import { Result } from '@Types/product/Result';
import { Product } from '@Types/product/Product';
import { siteUrl } from 'next-sitemap.config';
import { mapLanguage } from 'project.config';

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
        changefreq: 'always' as const,
      })),
    );

    nextCursor = products.nextCursor;
  } while (nextCursor);

  return getServerSideSitemap(context, fields);
};

//eslint-disable-next-line @typescript-eslint/no-empty-function
export default function SitemapCategories() {}
