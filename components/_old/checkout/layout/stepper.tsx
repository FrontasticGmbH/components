import React, { Fragment, forwardRef } from 'react';
import classnames from 'classnames';

import Step from './step';
//import { StepProps } from './types';

type Props = {
  steps: any;
  current: number;
  setCurrent: (i: number) => void;
};

const Stepper = forwardRef<any, Props>(({ steps, current, setCurrent }: Props, ts: any) => {
  const Divider = () => {
    return <span className="border-2 border-neutral-300 h-0 my-2 z-0" />;
  };

  return (
    <div className="max-w-960px mx-auto md:mt-4">
      <div className="md:mx-4 md:shadow-md md:rounded bg-white">
        <div className="grid grid-rows-2 py-5 mx-auto h-20" style={{ maxWidth: '75%' }}>
          <div className="grid grid-cols-1.25rem-1fr-1.25rem-1fr-1.25rem w-full m-auto px-4">
            {steps.map(({}, i: number) => {
              return (
                <Fragment key={i}>
                  <Step
                    completed={i < current}
                    current={i === current}
                    onSelect={() => {
                      if (current > i) {
                        ts.current.slickGoTo(i);
                        setCurrent(i);
                      }
                    }}
                  />
                  {i < steps.length - 1 && <Divider />}
                </Fragment>
              );
            })}
          </div>
          <div className="flex justify-between">
            {steps.map(({ name }, i: number) => {
              return (
                <div
                  key={i}
                  className={classnames('mt-2 text-xs capitalize', {
                    'text-neutral-600': i !== current,
                    'font-bold text-neutral-900': i === current,
                  })}
                >
                  {name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
});

Stepper.displayName = 'Stepper';

export default Stepper;
