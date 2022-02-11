import React from 'react';
import Popup from 'reactjs-popup';
import { useTranslation } from 'next-i18next';

import FacetModal from './facet-modal';
import FacetService from '../facet-service';

import IconX from '../../../../components/icons/icon-x';

type Props = {
  data: any;
  onChange?: (f: any) => void;
};

const FiltersWizard: React.FC<Props> = ({ data, onChange }: Props) => {
  const { t } = useTranslation('filters');

  const anySelectedFacets = () => {
    return FacetService.anySelectedFacets(data.stream.facets);
  };

  const numberOfSelectedFacets = () => {
    return FacetService.numberOfSelectedFacets(data.stream.facets);
  };

  const onClearAllClicked = () => {
    FacetService.clearFacets(data.stream.facets);

    onChange(data.stream.facets);
  };

  const onFacetChanged = () => {
    onChange(data.stream.facets);
  };

  //Add `nested` property to Popup
  return (
    <Popup
      trigger={() => {
        return (
          <div className="w-1/2 h-10 cursor-pointer select-none flex items-center justify-center">
            <span className="text-sm text-gray-900 leading-normal">
              {t('filter')}
              {anySelectedFacets() && (
                <span className="ml-1 text-gray-600 select-none">({numberOfSelectedFacets()})</span>
              )}
            </span>
          </div>
        );
      }}
      modal
      contentStyle={{
        padding: '0px',
        border: 'none',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#e2e8f0',
      }}
    >
      {(close) => {
        return (
          <>
            <div className="h-8 mb-1 px-4 py-3 flex items-center shadow bg-white box-content">
              <span className="text-base text-gray-900 font-bold leading-tight">{t('filter')}</span>

              {anySelectedFacets() && (
                <button
                  aria-label={t('clearAll')}
                  className="ml-auto px-6 h-full text-center text-base text-gray-900 leading-tight border border-gray-900 rounded"
                  onClick={onClearAllClicked}
                >
                  {t('clearAll')}
                </button>
              )}

              {!anySelectedFacets() && <IconX className="ml-auto w-8 h-8 inline-block" onClick={close} />}
            </div>

            <div className="px-4 pt-2 bg-white">
              {data.stream.facets.map((facet, i: number) => {
                if (!(facet.type === 'term' && facet.terms.length === 0)) {
                  return <FacetModal key={i} facet={facet} onChange={onFacetChanged} />;
                } else {
                  return false;
                }
              })}
            </div>

            <div className="fixed bottom-0 w-full h-10 bg-gray-900">
              <button
                aria-label={t('apply')}
                className="w-full h-full text-base text-white font-bold leading-normal"
                onClick={close}
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

export default FiltersWizard;
