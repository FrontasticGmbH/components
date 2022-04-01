import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Disclosure, RadioGroup, Tab } from '@headlessui/react';
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline';

import { CurrencyHelpers } from 'helpers/CurrencyHelpers';
import { Variant } from '../../../../../types/product/Variant';
import { Money } from '../../../../../types/product/Money';
import WishlistAddButton from './wishlist_add_button';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

interface Props {
  product: UIProduct;
  onAddToCart: any;

  onAddToWishlist: any;
  variant: Variant;
  onChangeVariantIdx: any;
}

export type UIProduct = {
  name: string;
  variants: Variant[];
  price: Money;
  images: UIImage[];
  colors: UIColor[];
  sizes: UISize[];
  description: string;
  details: UIDetail[];
};
interface UIImage {
  id: string;
  src: string;
  alt: string;
}
export interface UIColor {
  name: string;
  key: string;
  bgColor: string;
  selectedColor: string;
}
export interface UISize {
  label: string;
  key: string;
}
interface UIDetail {
  name: string;
  items: string[];
}

export default function ProductDetail({ product, onAddToCart, onAddToWishlist, variant, onChangeVariantIdx }: Props) {
  const [selectedColor, setSelectedColor] = useState<UIColor>(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<UISize>(product.sizes[0]);

  // changes the selected variant whenever
  // one of the attributes changes and
  // notifies the wrapping tastic via
  // the onChangeVariantIdx handler
  useEffect(() => {
    const idx = product.variants.findIndex(
      (v: Variant) => v.attributes.color.key === selectedColor.key && v.attributes.commonSize.key === selectedSize.key,
    );
    onChangeVariantIdx(idx);
  }, [selectedColor, selectedSize, onChangeVariantIdx, product.variants]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl md:py-4 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <Tab.Group>
            <div className="flex flex-col-reverse">
              {/* Image selector */}
              <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6">
                  {product.images.map((image) => (
                    <Tab
                      key={image.id}
                      className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                    >
                      {({ selected }) => (
                        <>
                          <span className="sr-only">{image.alt}</span>
                          <span className="absolute inset-0 overflow-hidden rounded-md">
                            <Image
                              loader={({ src }) => src}
                              layout="fill"
                              src={image.src}
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </span>
                          <span
                            className={classNames(
                              selected ? 'ring-[#CE3E72]' : 'ring-transparent',
                              'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2',
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </Tab>
                  ))}
                </Tab.List>
              </div>

              <Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
                {product.images.map((image) => (
                  <Tab.Panel key={image.id}>
                    <Image
                      loader={({ src }) => src}
                      layout="fill"
                      src={image.src}
                      alt={image.alt}
                      className="w-full object-cover object-center sm:rounded-lg"
                    />
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </div>
          </Tab.Group>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product.name}</h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900 text-[#CE3E72]">
                {CurrencyHelpers.formatForCurrency(product.price)}
              </p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div
                className="space-y-6 text-base text-gray-700"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>

            <form className="mt-6">
              {/* Colors */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>

                <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-2">
                  <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                  <div className="flex items-center space-x-3">
                    {product.colors.map((color: { name: string; bgColor: string; selectedColor: string }) => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({ active, checked }) =>
                          classNames(
                            color.selectedColor,
                            active && checked ? 'ring ring-offset-1' : '',
                            !active && checked ? 'ring-2' : '',
                            'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none',
                          )
                        }
                      >
                        <RadioGroup.Label>
                          <p className="sr-only">{color.name}</p>
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.bgColor,
                            'h-8 w-8 rounded-full border border-black border-opacity-10',
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Size picker */}
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-medium text-gray-900">Size</h2>
                </div>

                <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-2">
                  <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                  <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                    {product.sizes.map((size: { label: string; key: string }) => (
                      <RadioGroup.Option
                        key={size.label}
                        value={size}
                        className={({ active, checked }) =>
                          classNames(
                            active ? 'ring-2 ring-indigo-500 ring-offset-2' : '',
                            checked
                              ? 'border-transparent bg-[#CE3E72] text-white hover:bg-[#B22C5D]'
                              : 'border-gray-200 bg-white text-gray-900 hover:bg-gray-50',
                            'flex cursor-pointer items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1',
                          )
                        }
                      >
                        <RadioGroup.Label>
                          <p>{size.label}</p>
                        </RadioGroup.Label>
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <div className="sm:flex-col1 mt-10 flex">
                <button
                  type="button"
                  onClick={() => onAddToCart(variant, 1)}
                  className="flex w-full flex-1 items-center justify-center rounded-md border border-transparent bg-[#CE3E72] py-3 px-8 text-base font-medium text-white hover:bg-[#B22C5D] focus:bg-[#B22C5D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Add to bag
                </button>

                <WishlistAddButton onAddToWishlist={onAddToWishlist} />
              </div>
            </form>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>

              <div className="divide-y divide-gray-200 border-t">
                {product.details.map((detail) => (
                  <Disclosure key={detail.name}>
                    <div>
                      {({ open }) => (
                        <>
                          <h3>
                            <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                              <span
                                className={classNames(
                                  open ? 'text-indigo-600' : 'text-gray-900',
                                  'text-sm font-medium',
                                )}
                              >
                                {detail.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusSmIcon
                                    className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusSmIcon
                                    className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel>
                            <div className="prose prose-sm pb-6">
                              <ul role="list">
                                {detail.items.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </div>
                  </Disclosure>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
