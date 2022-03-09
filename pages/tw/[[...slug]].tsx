import React from 'react';
import { GetServerSideProps, Redirect } from 'next';
import { createClient } from 'frontastic';
import { FrontasticRenderer } from 'frontastic/lib/renderer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { tastics } from 'frontastic/tastics';

import styles from './../slug.module.css';

type SlugProps = {
  data: any;
};

export default function Slug({ data }: SlugProps) {
  if (!data) {
    return null;
  }

  return <FrontasticRenderer data={data} tastics={tastics} wrapperClassName={styles.gridWrapper} />;
}

export const getServerSideProps: GetServerSideProps | Redirect = async ({ params, locale, query, req, res }) => {
  const frontastic = createClient('https://english-demo.frontastic.io', process.env.NEXT_PUBLIC_FRONTASTIC_API_KEY);
  const data = await frontastic.getRouteData(params, locale, query, req, res);

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, ['common', 'cart', 'product', 'checkout'])),
    },
  };
};
