import React, { useRef, useEffect, useState } from 'react';
import { GetServerSideProps, GetStaticProps, Redirect } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { createClient, FrontasticRenderer, Notifier } from 'frontastic';
import { tastics } from 'frontastic/tastics';
import styles from '../slug.module.css';
import { Log } from 'helpers/errorLogger';

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

  // in case of an error from API hub, we get a ResponseError as JSON back here
  if (data?.ok === false) {
    Log.error(data);
  }

  useEffect(() => {
    if (data?.previewId && !notifier.current) {
      notifier.current = new Notifier(
        { previewId: data.previewId, customer: data?.previewContext?.customerName ?? 'demo' },
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

export const getServerSideProps: GetServerSideProps = async ({ params, locale, req, res }) => {
  const frontastic = createClient(process.env.NEXT_PUBLIC_FRONTASTIC_HOST, process.env.NEXT_PUBLIC_FRONTASTIC_API_KEY);
  const data = await frontastic.getPreview(params.previewId.toString(), locale, req, res);

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, ['common', 'cart', 'product', 'checkout'])),
    },
  };
};
