import React from 'react';
import { GetServerSideProps, Redirect } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { createClient, ResponseError } from 'frontastic';
import { FrontasticRenderer } from 'frontastic/lib/renderer';
import { tastics } from 'frontastic/tastics';
import styles from './slug.module.css';

type SlugProps = {
  data: any;
};

export default function Slug({ data }: SlugProps) {
  if (!data) return <></>;
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
    } else if ('target' in data) {
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
    console.error('Error retrieving data: ', data);
    return {
      notFound: true,
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
