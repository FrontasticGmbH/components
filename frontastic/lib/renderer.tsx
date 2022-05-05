import * as React from 'react';
import { TasticWrapper } from './component';
import { Grid } from './grid';
import { Cell as LayoutElement } from './cell';
import { Cell as LayoutElementType, Tastic, TasticRegistry, PageDataResponse } from './types';
import { ActionContext } from '@frontastic/extension-types';
import { TastValue } from '@frontastic/extension-types';

const foo: TastValue = {};

export function FrontasticRenderer({
  data,
  tastics = {},
  gridClassName,
  wrapperClassName,
}: {
  data: PageDataResponse;
  tastics: TasticRegistry;
  gridClassName?: string;
  wrapperClassName?: string;
}) {
  return (
    <div className="flex min-h-screen flex-col items-stretch justify-start">
      <Grid gridClassName={gridClassName} wrapperClassName={`${wrapperClassName} w-full`}>
        {data?.page?.sections?.head?.layoutElements.map((layoutElement: LayoutElementType, i: number) => (
          <LayoutElement size={layoutElement.configuration.size} key={i}>
            {layoutElement.tastics.map((t) => (
              <TasticWrapper
                tastics={tastics}
                key={t.tasticId}
                data={t}
                dataSources={data.data.dataSources}
                pageFolder={data.pageFolder}
              />
            ))}
          </LayoutElement>
        ))}
      </Grid>
      <Grid gridClassName={gridClassName} wrapperClassName={`${wrapperClassName} w-full grow`}>
        {data?.page?.sections?.main?.layoutElements.map((layoutElement: LayoutElementType, i: number) => (
          <LayoutElement size={layoutElement.configuration.size} key={i}>
            {layoutElement.tastics.map((t: Tastic) => (
              <TasticWrapper
                tastics={tastics}
                key={t.tasticId}
                data={t}
                dataSources={data.data.dataSources}
                pageFolder={data.pageFolder}
              />
            ))}
          </LayoutElement>
        ))}
      </Grid>
      <Grid gridClassName={gridClassName} wrapperClassName={`${wrapperClassName} w-full`}>
        {data?.page?.sections?.footer?.layoutElements.map((layoutElement: LayoutElementType, i: number) => (
          <LayoutElement size={layoutElement.configuration.size} key={i}>
            {layoutElement.tastics.map((t: Tastic) => (
              <TasticWrapper
                tastics={tastics}
                key={t.tasticId}
                data={t}
                dataSources={data.data.dataSources}
                pageFolder={data.pageFolder}
              />
            ))}
          </LayoutElement>
        ))}
      </Grid>
    </div>
  );
}
