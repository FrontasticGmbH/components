import { TermFacet } from '@Types/result/TermFacet';
import React, { useCallback, useEffect, useState } from 'react';

export type TermFilterParams = {
  index: number;
  value: string;
};

type TermFilterDisclosureProps = {
  facet: TermFacet;
  onChange: (values: Array<{ index: number; value: string }>) => void;
};

const TermFilter: React.FC<TermFilterDisclosureProps> = ({ facet, onChange }) => {
  const [params, setParams] = useState<Array<TermFilterParams>>([]);
  const [selected, setSelected] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setSelected(Object.fromEntries(facet?.terms?.map((term) => [term.key, term.selected])));
    setParams(
      facet?.terms
        ?.map((term, index) => ({
          index,
          value: term.key,
          selected: term.selected,
        }))
        .filter((term) => term.selected) || [],
    );
  }, [facet]);

  const handleChange = useCallback(
    (index: number, checked: boolean) => {
      if (!facet?.terms) return;

      let newParams = [...params];

      if (!checked) newParams = newParams.filter((param) => param.index !== index);
      else newParams = [...newParams, { index, value: facet.terms[index].key }];

      setSelected({ ...selected, [facet.terms[index].key]: checked });

      setParams(newParams);
      onChange(newParams);
    },
    [onChange, facet, params, selected],
  );

  return (
    <div className="flex flex-wrap gap-6 lg:flex-col">
      {facet.terms.map((term, index) => (
        <div className="relative flex w-[80px] items-start" key={term.identifier}>
          <div className="flex h-5 items-center">
            <input
              type="checkbox"
              className="h-6 w-6 rounded border-gray-300 text-white focus:ring-accent-400"
              onChange={(e) => handleChange(index, e.target.checked)}
              checked={selected[term.key]}
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="comments" className="font-medium text-gray-700 dark:text-light-100">
              {term.label}
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TermFilter;
