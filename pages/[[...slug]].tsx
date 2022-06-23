import React from 'react';
import { GetServerSideProps, Redirect } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { createClient, ResponseError } from 'frontastic';
import { FrontasticRenderer } from 'frontastic/lib/renderer';
import { tastics } from 'frontastic/tastics';
import { Log } from '../helpers/errorLogger';
import styles from './slug.module.css';

type SlugProps = {
  // This needs an overhaul. Can be too many things in my opinion (*Marcel)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  // data: RedirectResponse | PageDataResponse | ResponseError | { ok: string; message: string } | string;
};

export default function Slug({ data }: SlugProps) {
  if (!data || typeof data === 'string') {
    return (
      <>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900">Internal Error</h1>
        <p className="mt-2 text-lg">{data}</p>
        <p className="mt-2 text-lg">Check the logs of your Frontastic CLI for more details.</p>
      </>
    );
  }

  if (!data?.ok && data?.message) {
    return (
      <>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900">Internal Error</h1>
        <p className="mt-2 text-lg">{data.message}</p>
        <p className="mt-2 text-lg">Check the logs of your Frontastic CLI for more details.</p>
      </>
    );
  }

  return <FrontasticRenderer data={data} tastics={tastics} wrapperClassName={styles.gridWrapper} />;
}

export const getServerSideProps: GetServerSideProps | Redirect = async ({ params, locale, query, req, res }) => {
  const frontastic = createClient(process.env.NEXT_PUBLIC_FRONTASTIC_HOST, process.env.NEXT_PUBLIC_FRONTASTIC_API_KEY);
  const data = await frontastic.getRouteData(params, locale, query, req, res);

  if (data) {
    if (data instanceof ResponseError && data.getStatus() == 404) {
      return {
        notFound: true,
      };
    } else if (typeof data === 'object' && 'target' in data) {
      return {
        redirect: {
          destination: data.target,
          statusCode: data.statusCode,
        } as Redirect,
      };
    }
  }

  if (data instanceof Error) {
    // @TODO: Render nicer error page in debug mode, which shows the error to
    // the developer and also outlines how to debug this (take a look at
    // frontastic-CLI).
    Log.error('Error retrieving data: ', data);
    return {
      notFound: true,
    };
  }

  if (typeof data === 'string') {
    return {
      props: {
        data: { error: data },
        error: data,
      },
    };
  }

  return {
    props: {
      data: data || null,
      ...(await serverSideTranslations(locale, [
        'common',
        'cart',
        'product',
        'checkout',
        'account',
        'error',
        'success',
        'wishlist',
        'newsletter',
      ])),
    },
  };
};
