import React from 'react';
import { CurrencyHelpers } from 'helpers/CurrencyHelpers';
import { ReferenceLink, Reference } from 'helpers/Reference';
import { Product } from '../../../../../types/product/Product';

interface Props {
  products: Product[];
  title: string;
  ctaLabel: string;
  ctaLink: Reference;
}

export default function ProductSlider({ products, title, ctaLabel, ctaLink }: Props) {
  return (
    <div className="bg-white">
      <div className="py-16 sm:py-24 lg:max-w-7xl lg:mx-auto lg:px-8">
        <div className="px-4 flex items-center justify-between sm:px-6 lg:px-0">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">{title}</h2>
          {ctaLabel && ctaLink && (
            <ReferenceLink
              target={ctaLink}
              className="hidden sm:block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
            >
              {ctaLabel}
              <span aria-hidden="true"> &rarr;</span>
            </ReferenceLink>
          )}
        </div>

        <div className="mt-8 relative">
          <div className="relative w-full pb-6 -mb-6 overflow-x-auto">
            <ul
              role="list"
              className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:space-x-0 lg:grid lg:grid-cols-4 lg:gap-x-8"
            >
              {products.slice(0, 4).map((product) => (
                <li key={product.productId} className="w-64 inline-flex flex-col text-center lg:w-auto">
                  <div className="group relative">
                    <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                      <img
                        src={product.variants[0].images[0]}
                        alt={product.name}
                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                      />
                    </div>
                    <div className="mt-6">
                      <h3 className="mt-1 font-semibold text-gray-900">
                        <a href={product._url}>
                          <span className="absolute inset-0" />
                          {product.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-gray-900">
                        {CurrencyHelpers.formatForCurrency(product.variants[0].price)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {ctaLabel && ctaLink && (
          <div className="mt-12 flex px-4 sm:hidden">
            <ReferenceLink target={ctaLink} className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              {ctaLabel}
              <span aria-hidden="true"> &rarr;</span>
            </ReferenceLink>
          </div>
        )}
      </div>
    </div>
  );
}
