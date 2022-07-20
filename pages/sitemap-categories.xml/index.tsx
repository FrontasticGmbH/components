import next, { GetServerSideProps } from 'next';
import { getServerSideSitemap, ISitemapField } from 'next-sitemap';
import { fetchApiHubServerSide } from 'frontastic';
import { Result } from '@Types/product/Result';
import { Category } from '@Types/product/Category';
import { siteUrl } from 'next-sitemap.config';
import { mapLanguage } from 'project.config';

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
        loc: `${siteUrl}${category.path}`,
        lastmod: new Date().toISOString(),
        changefreq: 'always' as const,
      })),
    );

    nextCursor = categories.nextCursor;
  } while (nextCursor);

  return getServerSideSitemap(context, fields);
};

//eslint-disable-next-line @typescript-eslint/no-empty-function
export default function SitemapCategories() {}
