import React from 'react';
import { ReferenceLink, type Reference } from 'helpers/reference';
import { CtaColor } from '../';

interface Props {
  label: string;
  reference: Reference;
  color: CtaColor;
  isButton: boolean;
}

export default function Cta({ label, reference, color, isButton = false }: Props) {
  return (
    <>
      {label && reference && (
        <ReferenceLink
          href="#"
          className={`text-white ${
            isButton ? 'bg' : 'text'
          }-${color}-600 mt-6 rounded py-3 px-4 text-base font-semibold`}
        >
          {label}
        </ReferenceLink>
      )}
    </>
  );
}
