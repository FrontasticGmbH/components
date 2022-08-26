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
          }-black-700 mt-8 rounded py-2 px-12 text-base tracking-wider`}
        >
          {label}
        </ReferenceLink>
      )}
    </>
  );
}
