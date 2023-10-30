import { Metadata } from 'next';
import GASnippet from 'components/headless/GASnippet';
import { getTranslations } from 'helpers/i18n/get-translations';
import getServerOptions from 'helpers/server/get-server-options';
import { getLocalizationInfo } from 'project.config';
import { Providers } from 'providers';
import { sdk } from 'sdk';
import { PageProps } from 'types/next';
import Renderer from 'frontastic/renderer';

export const revalidate = 300; // 5 minutes
export const fetchCache = 'force-cache';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: nextLocale, slug } = params;

  sdk.configureForNext(nextLocale);

  const response = await sdk.page.getPage({ path: `/${(slug as string[])?.join('/') ?? ''}` });

  if (response.isError) return {};

  const { seoTitle, seoDescription, seoKeywords } = response.data.pageFolder.configuration;

  const { locale } = getLocalizationInfo(nextLocale);

  return {
    title: seoTitle?.[locale],
    description: seoDescription?.[locale],
    keywords: seoKeywords?.[locale],
  };
}

export default async function Page({ params, searchParams }: PageProps) {
  const { locale, slug } = params;

  sdk.configureForNext(locale);

  const response = await sdk.page.getPage({
    path: `/${(slug as string[])?.join('/') ?? ''}`,
    query: searchParams as Record<string, string>,
    ...getServerOptions(),
  });

  if (response.isError) return <></>;

  const accountResult = await sdk.composableCommerce.account.getAccount({ ...getServerOptions() });

  const categoriesResult = await sdk.composableCommerce.product.queryCategories(
    { limit: 99 },
    { ...getServerOptions() },
  );

  const translations = await getTranslations(
    [locale],
    [
      'common',
      'cart',
      'product',
      'payment',
      'checkout',
      'account',
      'customer-support',
      'error',
      'success',
      'wishlist',
      'newsletter',
      'orders',
      'thank-you',
    ],
  );

  return (
    <Providers translations={translations} accountResult={accountResult}>
      <Renderer
        data={response.data}
        params={params}
        searchParams={searchParams}
        categories={categoriesResult.isError ? [] : categoriesResult.data.items}
      />
      <GASnippet />
    </Providers>
  );
}
