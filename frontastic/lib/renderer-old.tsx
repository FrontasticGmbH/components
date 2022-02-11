import * as React from 'react';
// import * as CSS from "csstype";
import { FrontasticComponent } from './component';
import { Grid } from './grid';
import { Cell } from './cell';
import { Cell as CellType, Tastic, FrontasticRoute, ComponentRegistry } from './types';

export function FrontasticRenderer({
  data,
  components = {},
  gridClassName,
  wrapperClassName,
}: {
  data: FrontasticRoute;
  components: ComponentRegistry;
  gridClassName?: string;
  wrapperClassName?: string;
}) {
  const { head, main, footer } = data.page.regions;
  return (
    <div>
      <Grid gridClassName={gridClassName} wrapperClassName={wrapperClassName}>
        {head.elements.map((cell: CellType) => (
          <Cell size={cell.configuration.size} key={cell.cellId}>
            {cell.tastics.map((t) => (
              <FrontasticComponent
                components={components}
                key={t.tasticId}
                block={t}
                streams={data.data.stream}
              ></FrontasticComponent>
            ))}
          </Cell>
        ))}
      </Grid>
      <Grid gridClassName={gridClassName} wrapperClassName={wrapperClassName}>
        {main.elements.map((cell: CellType) => (
          <Cell size={cell.configuration.size} key={cell.cellId}>
            {cell.tastics.map((t: Tastic) => (
              <FrontasticComponent
                components={components}
                key={t.tasticId}
                block={t}
                streams={data.data.stream}
              ></FrontasticComponent>
            ))}
          </Cell>
        ))}
      </Grid>
      <Grid gridClassName={gridClassName} wrapperClassName={wrapperClassName}>
        {footer.elements.map((cell: CellType) => (
          <Cell size={cell.configuration.size} key={cell.cellId}>
            {cell.tastics.map((t: Tastic) => (
              <FrontasticComponent
                components={components}
                key={t.tasticId}
                block={t}
                streams={data.data.stream}
              ></FrontasticComponent>
            ))}
          </Cell>
        ))}
      </Grid>
    </div>
  );
}
