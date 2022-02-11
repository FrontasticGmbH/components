import React from 'react';

import FacetService from '../facet-service';
import IconCheck from 'components/icons/check';

type Props = {
  facet: any;
  onChange?: (f: any) => void;
};

const TermFacet: React.FC<Props> = ({ facet, onChange }: Props) => {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState(undefined), []);

  const onTermClicked = (term) => {
    term.selected = !term.selected;

    facet.selected = facet.terms.some((term) => {
      return term.selected === true;
    });

    if (onChange) {
      onChange(facet);
    }

    forceUpdate();
  };

  return (
    <div className="flex flex-col">
      {facet.terms.map((term, i: number) => {
        return (
          <div
            key={i}
            onClick={() => {
              onTermClicked(term);
            }}
            className="w-full h-10 mb-2 px-3 py-2 flex items-center cursor-pointer border border-gray-300 rounded box-border select-none"
          >
            {FacetService.isColorFacet(facet) && (
              <span
                style={FacetService.getColorStyle(term.value)}
                className="w-4 h-4 mr-2 rounded-full border border-gray-300"
              />
            )}

            <span className="text-sm text-gray-900 leading-normal">{term.name}</span>

            {term.selected && <IconCheck className="ml-auto inline-block text-indigo-500 fill-current" />}
          </div>
        );
      })}
    </div>
  );
};

export default TermFacet;
