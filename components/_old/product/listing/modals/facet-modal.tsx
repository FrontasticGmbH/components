import React from 'react';
import Popup from 'reactjs-popup';
import { useTranslation } from 'next-i18next';

import RangeFacet from '../facets/range-facet';
import TermFacet from '../facets/term-facet';
import FacetService from '../facet-service';

import IconChevronLeft from 'components/icons/chevron-left';
import IconChevronRight from 'components/icons/chevron-right';

type Props = {
  facet: any;
  onChange?: (f: any) => void;
};

const FacetModal: React.FC<Props> = ({ facet, onChange }: Props) => {
  const { t } = useTranslation('filters');

  const locale = 'en-GB'; /*useSelector((globalState) => {
    return globalState.app && globalState.app.context && globalState.app.context.locale;
  });*/

  const facetsData = []; /*useSelector((globalState) => {
    return globalState.facet && globalState.facet.facets && globalState.facet.facets.data;
  });*/

  const getFacetName = () => {
    const c = facetsData.find((f) => {
      return f.attributeId === facet.key;
    });

    if (c && c.label) {
      return c.label[locale];
    }

    return FacetService.getFacetName(facet);
  };

  const onClearClicked = () => {
    FacetService.clearFacet(facet);
  };

  const onApplyClicked = (closeCallback) => {
    onChange(facet);

    closeCallback();
  };

  //Add `nested` property to Popup
  return (
    <Popup
      trigger={() => {
        return (
          <div className="py-3 flex items-center border-b border-gray-300">
            <span className="mr-auto text-base text-gray-900 capitalize leading-normal">{getFacetName()}</span>

            {facet.selected && (
              <span className="w-40 truncate text-sm text-gray-600 text-right leading-normal">
                {facet.type === 'range' && (
                  <>
                    {(facet.value.min / 100).toFixed(2)} € - {(facet.value.max / 100).toFixed(2)} €
                  </>
                )}

                {facet.type === 'term' && (
                  <>
                    {facet.terms
                      .filter((term) => {
                        return term.selected;
                      })
                      .map((term, i: number) => {
                        return (
                          <span key={i}>
                            {i > 0 ? ', ' : ''} {term.name}
                          </span>
                        );
                      })}
                  </>
                )}
              </span>
            )}

            <IconChevronRight className="ml-4 w-4 h-4 inline-block" />
          </div>
        );
      }}
      modal
      contentStyle={{
        padding: '0px',
        border: 'none',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#E5E5E5',
      }}
    >
      {(close) => {
        return (
          <>
            <div className="h-8 mb-1 px-4 py-3 flex items-center shadow bg-white box-content">
              <button
                aria-label={t('filters')}
                className="h-8 text-base text-gray-900 font-bold leading-tight"
                onClick={close}
              >
                <IconChevronLeft className="w-6 h-6 mr-1 inline-block" />

                {t('filters')}
              </button>

              {facet.selected && (
                <button
                  aria-label={t('clear')}
                  className="ml-auto px-6 h-full text-center text-base text-gray-900 leading-tight border border-gray-900 rounded"
                  onClick={onClearClicked}
                >
                  {t('clear')}
                </button>
              )}
            </div>

            <div className="px-4 pt-2 bg-white">
              {facet.type === 'term' && (
                <div className="overflow-y-scroll" style={{ height: 'calc(100vh - 105px)' }}>
                  <TermFacet facet={facet} />
                </div>
              )}

              {facet.type === 'range' && <RangeFacet facet={facet} />}
            </div>

            <div className="fixed bottom-0 w-full h-10 bg-gray-900">
              <button
                aria-label={t('apply')}
                className="w-full h-full text-base text-white font-bold leading-normal"
                onClick={() => {
                  onApplyClicked(close);
                }}
              >
                {t('apply')}
              </button>
            </div>
          </>
        );
      }}
    </Popup>
  );
};

export default FacetModal;
