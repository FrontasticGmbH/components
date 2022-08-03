import React from 'react';
import useMediaQuery from 'helpers/hooks/useMediaQuery';
import * as screenSizes from 'helpers/utils/screensizes';
import { Cell as LayoutElement } from './cell';
import { highlightClassNames, TasticWrapper } from './component';
import { Errors } from './errors';
import { Grid } from './grid';
import { Cell as LayoutElementType, Tastic, TasticRegistry, PageDataResponse, PagePreviewDataResponse } from './types';

export function FrontasticRenderer({
  data,
  tastics = {},
  gridClassName,
  wrapperClassName,
  currentHighlight,
}: {
  data: PageDataResponse & PagePreviewDataResponse;
  tastics: TasticRegistry;
  gridClassName?: string;
  wrapperClassName?: string;
  currentHighlight?: string;
}) {
  const [isBiggerThanMobile] = useMediaQuery(screenSizes.mobile);

  return (
    <div className="flex min-h-screen flex-col items-stretch justify-start">
      {process && process.env.NODE_ENV !== 'production' && <Errors />}
      <Grid
        gridClassName={gridClassName}
        wrapperClassName={`${wrapperClassName} w-full ${highlightClassNames(currentHighlight === 'head')}`}
      >
        {data?.page?.sections?.head?.layoutElements.map((layoutElement: LayoutElementType) => (
          <LayoutElement
            size={layoutElement.configuration.size}
            className={highlightClassNames(currentHighlight === layoutElement.layoutElementId)}
            key={layoutElement.layoutElementId}
          >
            {layoutElement.tastics.map((t) => (
              <TasticWrapper
                tastics={tastics}
                key={t.tasticId}
                data={t}
                dataSources={data.data.dataSources}
                pageFolder={data.pageFolder}
                highlight={currentHighlight === t.tasticId}
                previewId={data?.previewId}
              />
            ))}
          </LayoutElement>
        ))}
      </Grid>
      <Grid
        gridClassName={gridClassName}
        wrapperClassName={`${wrapperClassName} w-full grow ${highlightClassNames(currentHighlight === 'main')}`}
      >
        {data?.page?.sections?.main?.layoutElements.map((layoutElement: LayoutElementType) => (
          <LayoutElement
            size={isBiggerThanMobile ? layoutElement.configuration.size : 12}
            className={highlightClassNames(currentHighlight === layoutElement.layoutElementId)}
            key={layoutElement.layoutElementId}
          >
            {layoutElement.tastics.map((t: Tastic) => (
              <TasticWrapper
                tastics={tastics}
                key={t.tasticId}
                data={t}
                dataSources={data.data.dataSources}
                pageFolder={data.pageFolder}
                highlight={currentHighlight === t.tasticId}
                previewId={data?.previewId}
              />
            ))}
          </LayoutElement>
        ))}
      </Grid>
      <Grid
        gridClassName={gridClassName}
        wrapperClassName={`${wrapperClassName} w-full ${highlightClassNames(currentHighlight === 'footer')}`}
      >
        {data?.page?.sections?.footer?.layoutElements.map((layoutElement: LayoutElementType) => (
          <LayoutElement
            size={layoutElement.configuration.size}
            className={highlightClassNames(currentHighlight === layoutElement.layoutElementId)}
            key={layoutElement.layoutElementId}
          >
            {layoutElement.tastics.map((t: Tastic) => (
              <TasticWrapper
                tastics={tastics}
                key={t.tasticId}
                data={t}
                dataSources={data.data.dataSources}
                pageFolder={data.pageFolder}
                highlight={currentHighlight === t.tasticId}
                previewId={data?.previewId}
              />
            ))}
          </LayoutElement>
        ))}
      </Grid>
    </div>
  );
}
