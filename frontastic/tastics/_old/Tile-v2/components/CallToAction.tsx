import React from 'react';
import Link from 'next/link';
// import Reference from '@frontastic/catwalk/src/js/component/reference';

import { CtaColor } from '../';

interface Props {
  label: string;
  reference: any;
  color: CtaColor;
  isButton: boolean;
}

export default function Cta({ label, reference, color, isButton = false }: Props) {
  console.log('ref ', reference);
  return <p>{label}</p>;
  // return (
  //   <>
  //     {label && reference && (
  //       <Reference
  //         reference={reference}
  //         className={`text-white ${
  //           isButton ? 'bg' : 'text'
  //         }-${color}-600 text-base font-semibold py-3 px-4 mt-6 rounded`}
  //       >
  //         {label}
  //       </Reference>
  //     )}
  //   </>
  // );
}
