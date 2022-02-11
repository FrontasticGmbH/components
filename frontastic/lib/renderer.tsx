import * as React from 'react';
// import * as CSS from "csstype";
import { TasticWrapper } from './component';
import { Grid } from './grid';
import { Cell as LayoutElement } from './cell';
import { Cell as LayoutElementType, Tastic, TasticRegistry, PageDataResponse } from './types';

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
  console.log('data', data);
  const { head, main, footer } = data.page.sections;

  return (
    <div>
      <Grid gridClassName={gridClassName} wrapperClassName={wrapperClassName}>
        {head.layoutElements.map((layoutElement: LayoutElementType) => (
          <LayoutElement size={layoutElement.configuration.size} key={layoutElement.layoutElementId}>
            {layoutElement.tastics.map((t) => (
              <TasticWrapper
                tastics={tastics}
                key={t.tasticId}
                data={t}
                dataSources={data.data.dataSources}
              ></TasticWrapper>
            ))}
          </LayoutElement>
        ))}
      </Grid>
      <Grid gridClassName={gridClassName} wrapperClassName={wrapperClassName}>
        {main.layoutElements.map((layoutElement: LayoutElementType) => (
          <LayoutElement size={layoutElement.configuration.size} key={layoutElement.layoutElementId}>
            {layoutElement.tastics.map((t: Tastic) => (
              <TasticWrapper
                tastics={tastics}
                key={t.tasticId}
                data={t}
                dataSources={data.data.dataSources}
              ></TasticWrapper>
            ))}
          </LayoutElement>
        ))}
      </Grid>
      <Grid gridClassName={gridClassName} wrapperClassName={wrapperClassName}>
        {footer.layoutElements.map((layoutElement: LayoutElementType) => (
          <LayoutElement size={layoutElement.configuration.size} key={layoutElement.layoutElementId}>
            {layoutElement.tastics.map((t: Tastic) => (
              <TasticWrapper
                tastics={tastics}
                key={t.tasticId}
                data={t}
                dataSources={data.data.dataSources}
              ></TasticWrapper>
            ))}
          </LayoutElement>
        ))}
      </Grid>
    </div>
  );
}
