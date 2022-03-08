import React, { useRef, useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import { createClient, FrontasticRenderer, Notifier } from 'frontastic';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { tastics } from 'frontastic/tastics';

import styles from '../slug.module.css';

type PreviewProps = {
  data: any;
};

export default function Preview({ data }: PreviewProps) {
  const [currentHighlight, setCurrentHighlight] = useState(null);
  const notifier = useRef(null);

  const handleRefresh = () => {
    // Do a proper refresh and no full reload
    window.location = window.location;
  };
  const handleHighlight = ({ item }) => {
    if (currentHighlight !== item) {
      setCurrentHighlight(item);
    }
  };
  const handleEndHighlight = () => setCurrentHighlight(null);

  useEffect(() => {
    if (data?.previewId && !notifier.current) {
      notifier.current = new Notifier(
        // @TODO: Read customer name from context
        { previewId: data.previewId, customer: 'demo' },
        {
          Refresh: handleRefresh,
          Highlight: handleHighlight,
          EndHighlight: handleEndHighlight,
        },
      );
      notifier.current.connect();
    }
  }, [data?.previewId]);

  if (!data) {
    return null;
  }

  return <FrontasticRenderer data={data} tastics={tastics} wrapperClassName={styles.gridWrapper} />;
}

export const getServerSideProps: GetStaticProps = async ({ params, locale, req, res }) => {
  const frontastic = createClient(process.env.NEXT_PUBLIC_FRONTASTIC_HOST, process.env.NEXT_PUBLIC_FRONTASTIC_API_KEY);
  const data = await frontastic.getPreview(params.previewId.toString(), locale, req, res);

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, ['common', 'cart', 'product', 'checkout'])),
    },
  };
};
