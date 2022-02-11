import React from 'react';
import { GetStaticProps } from 'next';
import { createClient } from 'frontastic';
import { FrontasticRenderer } from 'frontastic/lib/renderer-old';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { tailwindComponents as components } from 'frontastic/components';

import styles from './../slug.module.css';

type SlugProps = {
  data: any;
};

export default function Slug({ data }: SlugProps) {
  if (!data) {
    return null;
  }

  return <FrontasticRenderer data={data} components={components} wrapperClassName={styles.gridWrapper} />;
}

export const getServerSideProps: GetStaticProps = async ({ params, locale }) => {
  const frontastic = createClient('https://english-demo.frontastic.io', 'API_KEY_GOES_HERE');
  const { data } = await frontastic.getRouteDataOld(params);

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, ['common', 'cart', 'product', 'checkout'])),
    },
  };
};
