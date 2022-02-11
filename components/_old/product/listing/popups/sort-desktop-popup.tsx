import React from 'react';
import Popup from 'reactjs-popup';
import classnames from 'classnames';
import { useTranslation } from 'next-i18next';

import sortValues from './sort-values';
import FacetService from '../facet-service';

import IconCheck from '../../../../components/icons/check';
import IconChevronUp from '../../../../components/icons/chevron-up';
import IconChevronDown from '../../../../components/icons/chevron-down';

type Props = {
  sortState: any;
  onChange?: (f: any) => void;
};

const SortDesktopPopup: React.FC<Props> = ({ sortState, onChange }: Props) => {
  const { t } = useTranslation('filters');

  const isSortEqual = (a, b) => {
    return FacetService.isSortEqual(a, b);
  };

  const isSortSelected = () => {
    return !FacetService.isSortEqual(sortState, {});
  };

  const getSortLabel = () => {
    let labelId = '';

    sortValues.forEach((sort) => {
      if (FacetService.isSortEqual(sortState, sort.value)) {
        labelId = sort.name;
      }
    });

    //return intl.formatMessage({ id: labelId })
    return labelId;
  };

  const onSortChange = (newSort, closeCallback) => {
    closeCallback();

    onChange(newSort);
  };

  return (
    <Popup
      trigger={(open) => {
        return (
          <div
            className={classnames({
              'mr-2 h-8 px-2 border rounded flex items-center justify-between cursor-pointer select-none': true,
              'bg-gray-300': open,
              'bg-white': !open,
              'text-gray-600 border-gray-300': !isSortSelected(),
              'text-gray-900 border-gray-700': isSortSelected(),
            })}
          >
            <span className="text-sm">
              {t('sort')}
              {isSortSelected() && <span className="ml-1 text-gray-600">({getSortLabel()})</span>}
            </span>
            {open ? <IconChevronUp className="ml-2 inline-block" /> : <IconChevronDown className="ml-2 inline-block" />}
          </div>
        );
      }}
      arrow={false}
      position="bottom left"
      contentStyle={{ padding: '12px', border: 'none', marginTop: '5px', width: '200px' }}
    >
      {(close) => {
        return (
          <div className="flex flex-col">
            {sortValues.map((sort, i) => {
              return (
                <div
                  key={i}
                  className={classnames({
                    'my-2 flex items-center text-sm text-gray-900 leading-normal cursor-pointer': true,
                    'ml-2': isSortEqual(sort.value, sortState),
                    'ml-8': !isSortEqual(sort.value, sortState),
                  })}
                  onClick={() => {
                    onSortChange(sort.value, close);
                  }}
                >
                  {isSortEqual(sort.value, sortState) && <IconCheck className="mr-2 inline-block fill-current" />}
                  {sort.name}
                </div>
              );
            })}
          </div>
        );
      }}
    </Popup>
  );
};

export default SortDesktopPopup;
