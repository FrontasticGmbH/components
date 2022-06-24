import React, { useRef, useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Log } from 'helpers/errorLogger';
import { createClient, FrontasticRenderer, Notifier } from 'frontastic';
import { tastics } from 'frontastic/tastics';
import styles from '../slug.module.css';

type PreviewProps = {
  // This needs an overhaul. Can be too many things in my opinion (*Marcel)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  // data: RedirectResponse | PageDataResponse | ResponseError | { ok: string; message: string } | string;
};

export default function Preview({ data }: PreviewProps) {
  const [currentHighlight, setCurrentHighlight] = useState(null);
  const notifier = useRef(null);

  const handleRefresh = () => {
    // Do a proper refresh and no full reload
    window.location = window.location;
  };
  const handleEndHighlight = () => setCurrentHighlight(null);

  // in case of an error from API hub, we get a ResponseError as JSON back here
  if (data?.ok === false) {
    Log.error(data);
  }

  useEffect(() => {
    const handleHighlight = ({ item }) => {
      if (currentHighlight !== item) {
        setCurrentHighlight(item);
      }
    };
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
  }, [currentHighlight, data?.previewId, data?.previewContext?.customerName]);

  if (!data) {
    return null;
  }

  return (
    <FrontasticRenderer
      data={data}
      tastics={tastics}
      wrapperClassName={styles.gridWrapper}
      currentHighlight={currentHighlight}
    />
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params, locale, req, res }) => {
  const frontastic = createClient();
  const data = await frontastic.getPreview(params.previewId.toString(), locale, req, res);

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, ['common', 'cart', 'product', 'checkout'])),
    },
  };
};
