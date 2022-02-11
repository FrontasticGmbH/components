import * as React from 'react';
import { TasticWrapper } from './types';
import { injectDataSources } from './utils/inject-data-sources';

export function TasticWrapper(props: TasticWrapper) {
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
    <div className={`w-full ${highlight && 'ring-8 ring-pink-500'} `}>
      <TasticToRender type={data?.tasticType} id={data?.tasticId} data={updatedBlock} />
    </div>
  );
}
