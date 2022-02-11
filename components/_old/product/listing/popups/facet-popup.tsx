import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import classnames from 'classnames';
import { useTranslation } from 'next-i18next';

import RangeFacet from '../facets/range-facet';
import TermFacet from '../facets/term-facet';
import FacetService from '../facet-service';

import IconChevronUp from 'components/icons/chevron-up';
import IconChevronDown from 'components/icons/chevron-down';

type Props = {
  initialFacet: any;
  onChange?: (f: any) => void;
};

const FacetPopup: React.FC<Props> = ({ initialFacet, onChange }: Props) => {
  const { t } = useTranslation('filters');

  const [facet, setFacet] = useState({ ...initialFacet });

  const locale = 'en-GB'; /*useSelector((globalState) => {
    return globalState.app && globalState.app.context && globalState.app.context.locale;
  });*/

  const facetsData = []; /*useSelector((globalState) => {
    return globalState.facet && globalState.facet.facets && globalState.facet.facets.data;
  });*/

  const onOpenPopup = () => {
    setFacet({ ...initialFacet });
  };

  const getFacetName = () => {
    const c = facetsData.find((f) => {
      return f.attributeId === initialFacet.key;
    });

    if (c && c.label) {
      return c.label[locale];
    }

    return FacetService.getFacetName(initialFacet);
  };

  const getFacetLabel = () => {
    return FacetService.getFacetLabelValue(initialFacet);
  };

  const onApplyClick = (closeCallback) => {
    closeCallback();

    if (onChange) {
      onChange({ ...facet });
    }
  };

  const onClearClick = (closeCallback) => {
    FacetService.clearFacet(facet);

    closeCallback();

    if (onChange) {
      onChange({ ...facet });
    }
  };

  return (
    <Popup
      trigger={(open) => {
        return (
          <div
            className={classnames({
              'mr-2 w-32 h-8 px-2 border rounded flex items-center justify-between cursor-pointer select-none': true,
              'bg-gray-300': open,
              'bg-white': !open,
              'text-gray-600 border-gray-300': !getFacetLabel(),
              'text-gray-900 border-gray-700': getFacetLabel(),
            })}
          >
            <span className="text-sm capitalize">
              {getFacetName()}
              {getFacetLabel() && <span className="ml-1 text-gray-600">({getFacetLabel()})</span>}
            </span>
            {open ? <IconChevronUp className="ml-2 inline-block" /> : <IconChevronDown className="ml-2 inline-block" />}
          </div>
        );
      }}
      arrow={false}
      position="bottom left"
      onOpen={onOpenPopup}
      contentStyle={{
        padding: '0px',
        border: 'none',
        width: '247px',
        marginTop: '5px',
        height: facet.type === 'term' ? '416px' : '238px',
        overflowY: 'hidden',
      }}
    >
      {(close) => {
        return (
          <div className="z-10 pt-4 flex flex-col relative shadow">
            {facet.type === 'term' && (
              <div className="px-4 overflow-y-scroll" style={{ height: '330px' }}>
                <TermFacet facet={facet} />
              </div>
            )}

            {facet.type === 'range' && (
              <div className="px-4" style={{ height: '153px' }}>
                <RangeFacet facet={facet} />
              </div>
            )}

            <div className="p-4 w-full flex justify-around bg-white shadow">
              <button
                aria-label={t('clear')}
                className="text-gray-900 font-normal"
                onClick={() => {
                  onClearClick(close);
                }}
              >
                {t('clear')}
              </button>

              <button
                aria-label={t('apply')}
                className="btn btn-primary"
                onClick={() => {
                  onApplyClick(close);
                }}
              >
                {t('apply')}
              </button>
            </div>
          </div>
        );
      }}
    </Popup>
  );
};

export default FacetPopup;
