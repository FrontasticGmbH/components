import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Disclosure, RadioGroup, Tab } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon, HeartIcon } from '@heroicons/react/outline';
import { Money } from '@Types/product/Money';
import { Variant } from '@Types/product/Variant';
import { useFormat } from 'helpers/hooks/useFormat';
import Price from '../../price';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export interface Props {
  product: UIProduct;
  onAddToCart: (variant: Variant, quantity: number) => Promise<void>;
  onAddToWishlist: () => void;
  variant: Variant;
  onChangeVariantIdx: (idx: number) => void;
  quickBuyEnabled?: boolean;
}

export type UIProduct = {
  productId: string;
  name: string;
  variants: Variant[];
  price?: Money;
  images?: UIImage[];
  colors?: UIColor[];
  sizes?: UISize[];
  description: string;
  details?: UIDetail[];
  isOnWishlist?: boolean;
  _url: string;
};
interface UIImage {
  id?: string;
  src?: string;
  alt?: string;
}
export interface UIColor {
  name?: string;
  key?: string;
  bgColor?: string;
  selectedColor?: string;
}
export interface UISize {
  label: string;
  key: string;
}
interface UIDetail {
  name: string;
  items: string[];
}

export default function ProductDetail({
  product,
  onAddToCart,
  onAddToWishlist,
  variant,
  onChangeVariantIdx,
  quickBuyEnabled,
}: Props) {
  //next/router
  const router = useRouter();

  //i18n messages
  const { formatMessage: formatProductMessage } = useFormat({ name: 'product' });

  //Variant attributes
  const selectedColor = useMemo<UIColor | undefined>(
    () => product?.colors?.find((c) => c.key === variant?.attributes?.color?.key) ?? product?.colors?.[0],
    [product, variant],
  );

  const selectedSize = useMemo<UISize>(
    () => product?.sizes?.find((s) => s.key === variant?.attributes?.commonSize?.key) ?? product?.sizes?.[0],
    [product, variant],
  );

  //Component states
  const [loading, setLoading] = useState<boolean>(false);
  const [added, setAdded] = useState<boolean>(false);

  const selectSize = (size: UISize) => {
    onChangeVariantIdx(
      product?.variants?.findIndex(
        (variant) =>
          variant?.attributes?.color?.key === selectedColor.key && variant?.attributes?.commonSize?.key === size.key,
      ) ?? 0,
    );
  };

  const selectColor = (color: UIColor) => {
    onChangeVariantIdx(
      product?.variants?.findIndex(
        (variant) =>
          variant?.attributes?.color?.key === color.key && variant?.attributes?.commonSize?.key === selectedSize.key,
      ) ?? 0,
    );
  };

  const variantExistsFor = useCallback(
    (color: UIColor, size: UISize) => {
      return !!product?.variants?.find(
        (v) => v.attributes?.color?.key === color?.key && v.attributes?.commonSize?.key === size?.key,
      );
    },
    [product],
  );

  const handleAddToCart = async () => {
    if (!variant.isOnStock) return;
    setLoading(true);
    await onAddToCart(variant, 1);
    setLoading(false);
    setAdded(true);
  };

  const handleQuickBuy = async () => {
    await onAddToCart(variant, 1);
    router.push('/checkout');
  };

  useEffect(() => {
    if (added) {
      setTimeout(() => {
        setAdded(false);
      }, 1000);
    }
  }, [added]);

  return (
    <div>
      <div className=" mx-auto max-w-2xl md:py-4 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <Tab.Group>
            <div className="flex flex-col-reverse">
              {/* Image selector */}
              <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6">
                  {product?.images?.map((image) => (
                    <Tab
                      key={image.id}
                      className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-white/50 focus:ring-offset-4"
                    >
                      {({ selected }) => (
                        <>
                          <span className="sr-only">{image.alt}</span>
                          <span className="absolute inset-0 overflow-hidden">
                            <Image
                              loader={({ src }) => src}
                              layout="fill"
                              objectFit="contain"
                              src={image.src}
                              alt=""
                              className="h-full w-full object-center"
                            />
                          </span>
                          <span
                            className={classNames(
                              selected ? 'ring-primary-400' : 'ring-transparent',
                              'pointer-events-none absolute inset-0 ring-2 ring-offset-2',
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
                {product?.images?.map((image) => (
                  <Tab.Panel key={image.id}>
                    <Image
                      loader={({ src }) => src}
                      layout="fill"
                      objectFit="contain"
                      src={image.src}
                      alt={image.alt}
                      className="w-full object-center sm:rounded-lg"
                    />
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </div>
          </Tab.Group>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <div className="flex justify-between gap-4">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product?.name}</h1>
              <HeartIcon
                className={`mt-1 h-7 w-7 shrink-0 cursor-pointer ${
                  product.isOnWishlist ? 'fill-black-500' : 'fill-white'
                } transition duration-150 ease-out hover:fill-black-500`}
                onClick={onAddToWishlist}
                aria-hidden="true"
              />
            </div>
            <div className="mt-3">
              <h2 className="sr-only">
                {formatProductMessage({ id: 'product?.info', defaultMessage: 'Product information' })}
              </h2>
              <div className="flex pb-6">
                <Price
                  price={product?.price}
                  className={`${variant.discountedPrice ? 'line-through' : ''} text-2xl text-gray-900 md:text-3xl`}
                />
                {variant.discountedPrice && (
                  <Price price={variant?.discountedPrice} className="pl-6 text-2xl text-accent-400 md:text-3xl" />
                )}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">
                {formatProductMessage({ id: 'product?.desc', defaultMessage: 'Description' })}
              </h3>

              <div
                className="space-y-6 text-base text-gray-700"
                dangerouslySetInnerHTML={{ __html: product?.description }}
              />
            </div>

            <form className="mt-6">
              {/* Colors */}
              <div>
                <h3 className="text-sm text-gray-900">
                  {formatProductMessage({ id: 'color.select', defaultMessage: 'Select color' })}
                </h3>

                <RadioGroup value={selectedColor} onChange={(e) => selectColor(e)} className="mt-4">
                  <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                  <div className="flex items-center space-x-3">
                    {product?.colors?.map((color) => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({ active, checked }) =>
                          classNames(
                            (active && checked) || selectedColor?.key === color.key
                              ? `ring-2 ring-offset-2 ${color.selectedColor}`
                              : '',
                            'relative flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none',
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
                            'border-black h-6 w-6 rounded-full border border-opacity-10',
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
              {product.sizes?.length && product.sizes.length > 1 && (
                <div className="mt-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm text-gray-900">
                      {formatProductMessage({ id: 'size.select', defaultMessage: 'Select size' })}
                    </h2>
                  </div>

                  <RadioGroup value={selectedSize} onChange={(e) => selectSize(e)} className="mt-4 hidden lg:block">
                    <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                    <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                      {product.sizes
                        .filter((size) => variantExistsFor(selectedColor, size))
                        .map((size) => (
                          <RadioGroup.Option
                            key={size.key}
                            value={size}
                            className={({ active, checked }) =>
                              classNames(
                                active || selectedSize?.key === size.key || checked ? 'ring-1 ring-primary-400' : '',
                                'cursor-pointer rounded-sm bg-neutral-200 py-2 px-4 text-center font-light text-gray-900 transition duration-150 ease-out hover:bg-neutral-300',
                              )
                            }
                          >
                            <RadioGroup.Label className="cursor-pointer">
                              <p>{size.label}</p>
                            </RadioGroup.Label>
                          </RadioGroup.Option>
                        ))}
                    </div>
                  </RadioGroup>

                  <select
                    onChange={(e) => selectSize(product.sizes.find((size) => size.key === e.target.value))}
                    className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-accent-400 focus:outline-none focus:ring-accent-400 sm:text-sm lg:hidden"
                    defaultValue="Canada"
                    value={selectedSize.key}
                  >
                    {product.sizes.map((size) => (
                      <option key={size.key} value={size.key}>
                        {size.label}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="align-stretch mt-10 flex flex-col gap-4">
                {quickBuyEnabled && (
                  <button
                    type="button"
                    onClick={handleQuickBuy}
                    className={classNames(
                      'flex w-full flex-1 items-center justify-center rounded-md border border-transparent bg-accent-400 py-3 px-8  text-base font-medium text-white transition duration-150 ease-out hover:bg-accent-500 focus:bg-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 focus:ring-offset-gray-50 disabled:bg-gray-400',
                    )}
                    disabled={!variant.isOnStock}
                  >
                    Buy Now
                  </button>
                )}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className={classNames(
                    'flex w-full flex-1 items-center justify-center rounded-md border py-3 px-8 text-base font-medium  transition duration-150 ease-out focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 focus:ring-offset-gray-50 disabled:bg-gray-400',
                    !quickBuyEnabled
                      ? 'border-transparent bg-accent-400 fill-white text-white hover:bg-accent-500 focus:bg-accent-500'
                      : 'border-accent-400 bg-white fill-accent-400 text-accent-400 hover:bg-accent-400 hover:fill-white hover:text-white',
                  )}
                  disabled={!variant.isOnStock}
                >
                  {!loading && !added && (
                    <>
                      {variant.isOnStock
                        ? formatProductMessage({ id: 'bag.add', defaultMessage: 'Add to bag' })
                        : formatProductMessage({ id: 'outOfStock', defaultMessage: 'Out of stock' })}
                    </>
                  )}

                  {loading && (
                    <svg className="h-6 w-6 animate-spin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                      <path d="M8,8.5A3.5,3.5,0,1,1,4.5,5,3.5,3.5,0,0,1,8,8.5ZM4.5,14A3.5,3.5,0,1,0,8,17.5,3.5,3.5,0,0,0,4.5,14Zm16-2A3.5,3.5,0,1,0,17,8.5,3.5,3.5,0,0,0,20.5,12Zm0,2A3.5,3.5,0,1,0,24,17.5,3.5,3.5,0,0,0,20.5,14Zm-8,4A3.5,3.5,0,1,0,16,21.5,3.5,3.5,0,0,0,12.5,18Zm0-18A3.5,3.5,0,1,0,16,3.5,3.5,3.5,0,0,0,12.5,0Z" />
                    </svg>
                  )}
                  {!loading && added && (
                    <svg className="h-6 w-6" viewBox="0 0 80.588 61.158">
                      <path
                        d="M29.658,61.157c-1.238,0-2.427-0.491-3.305-1.369L1.37,34.808c-1.826-1.825-1.826-4.785,0-6.611
                     c1.825-1.826,4.786-1.827,6.611,0l21.485,21.481L72.426,1.561c1.719-1.924,4.674-2.094,6.601-0.374
                     c1.926,1.72,2.094,4.675,0.374,6.601L33.145,59.595c-0.856,0.959-2.07,1.523-3.355,1.56C29.746,61.156,29.702,61.157,29.658,61.157z
                     "
                      />
                    </svg>
                  )}
                </button>
              </div>
            </form>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                {formatProductMessage({ id: 'details.additional', defaultMessage: 'Additional details' })}
              </h2>

              {product.details?.length && product.details.length > 0 && (
                <div>
                  {product.details.map((detail) => (
                    <div className="border-t" key={detail.name}>
                      <Disclosure key={detail.name}>
                        {({ open }) => (
                          <>
                            <h3>
                              <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                                <span className="font-medium text-gray-900">{detail.name}</span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <ChevronUpIcon
                                      className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <ChevronDownIcon
                                      className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel>
                              <div className="prose prose-sm py-6">
                                <ul role="list">
                                  {detail.items?.map((item, index) => (
                                    <li key={index}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
