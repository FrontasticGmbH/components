import React, { forwardRef } from 'react';
import SlickSlider from 'react-slick';

//import { StepProps } from './types';

type Props = {
  steps: any;
  current: number;
  setCurrent: (i: number) => void;
  data: any;
  countries: any;
  policy: string;
  isLoading: boolean;
};

const Panels = forwardRef<any, Props>(
  ({ steps, current, setCurrent, data, countries, policy, isLoading = false }: Props, ts: any) => {
    const settings = {
      dots: true,
      infinite: false,
      arrows: false,
      draggable: false,
      swipe: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      useTransform: true,
    };

    const goToPanel = (panel: number) => {
      ts.current.slickGoTo(panel);
      setCurrent(panel);
    };

    return (
      <div className="checkout-panels-slider relative min-h-full">
        <SlickSlider
          ref={ts}
          afterChange={(panel: number) => {
            setCurrent(panel);
          }}
          {...settings}
        >
          {steps.map(({ component: PanelComponent, name }, i: number) => {
            return (
              <div key={i}>
                <PanelComponent
                  name={name}
                  data={data}
                  countries={countries}
                  policy={policy}
                  goToPanelIndex={(panel: number) => {
                    window.scrollTo(0, 0);
                    goToPanel(panel);
                  }}
                  goToNextPanel={() => {
                    window.scrollTo(0, 0);
                    goToPanel(current + 1);
                  }}
                  goToPreviousPanel={() => {
                    window.scrollTo(0, 0);
                    goToPanel(current - 1);
                  }}
                  isLoading={isLoading}
                />
              </div>
            );
          })}
        </SlickSlider>
      </div>
    );
  },
);

Panels.displayName = 'Panels';

export default Panels;
