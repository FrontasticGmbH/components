import * as React from 'react';
import classnames from 'classnames';
import { TasticWrapperProps } from './types';
import { injectDataSources } from './utils/inject-data-sources';
import ErrorBoundary from './error-boundary';

export function highlightClassNames(highlight: boolean) {
  return highlight ? 'outline outline-dashed outline-2 outline-accent-400' : '';
}

export function TasticWrapper(props: TasticWrapperProps) {
  const { tastics, data, dataSources, highlight = false } = props;
  const TasticToRender: React.ElementType = tastics[data.tasticType] || tastics['default'];

  // inject all datasources into the proper nodes
  // dataSources null check satisfies TS
  let updatedBlock = dataSources ? injectDataSources(data.configuration, dataSources) : data.configuration;

  if (dataSources && dataSources['__master']) {
    updatedBlock = {
      ...updatedBlock,
      ...dataSources['__master'],
    };
  }

  return (
    <div
      className={classnames(
        `w-full ${highlightClassNames(highlight)} ${data.configuration.mobile ? 'block' : 'hidden'} ${
          data.configuration.tablet ? 'md:block' : 'md:hidden'
        } ${data.configuration.desktop ? 'lg:block' : 'lg:hidden'}`,
      )}
    >
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <ErrorBoundary>
        {/* @ts-ignore */}
        <TasticToRender type={data?.tasticType} id={data?.tasticId} data={updatedBlock} pageFolder={props.pageFolder} />
      </ErrorBoundary>
    </div>
  );
}
