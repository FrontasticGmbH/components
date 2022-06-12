import { NextFrontasticImage } from 'frontastic/lib/image';
import { Account } from '../../types/account/Account';
import { Address } from '../../types/account/Address';
import { Group } from '../../types/account/Group';
import { Cart } from '../../types/cart/Cart';
import { Order } from '../../types/cart/Order';
import { ShippingMethod } from '../../types/cart/ShippingMethod';
import { Product } from '../../types/product/Product';
import { LineItem } from '../../types/wishlist/LineItem';
import { Wishlist } from '../../types/wishlist/Wishlist';
import { Link } from './commercetools-ui/footer/column';

export const accordionMockItems = [
  {
    title: 'First Title',
    content:
      ' We built Tailwind UI as an HTML-only, bring-your-own-JS product to make it as universal as possible, but many designs are inherently interactive and porting those interactive behaviors between JavaScript frameworks is unfortunately not always very easy.',
  },
  {
    title: 'Second Title',
    content:
      ' We built Tailwind UI as an HTML-only, bring-your-own-JS product to make it as universal as possible, but many designs are inherently interactive and porting those interactive behaviors between JavaScript frameworks is unfortunately not always very easy.',
  },
  {
    title: 'Third Title',
    content:
      ' We built Tailwind UI as an HTML-only, bring-your-own-JS product to make it as universal as possible, but many designs are inherently interactive and porting those interactive behaviors between JavaScript frameworks is unfortunately not always very easy.',
  },
];

const lineItems: LineItem[] = [
  {
    lineItemId: '0',
    _url: '/',
    addedAt: new Date(),
    count: 5,
    name: 'Some Article of clothing 1',
    type: 'Clothes',
    variant: {
      sku: 'SKU',
      images: ['https://tailwindui.com/img/ecommerce-images/checkout-page-03-product-04.jpg'],
    },
  },
  {
    lineItemId: '1',
    _url: '/',
    addedAt: new Date(),
    count: 5,
    name: 'Some Article of clothing 2',
    type: 'Clothes',
    variant: {
      sku: 'SKU',
      images: ['https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg'],
    },
  },
  {
    lineItemId: '2',
    _url: '/',
    addedAt: new Date(),
    count: 5,
    name: 'Some Article of clothing 3',
    type: 'Clothes',
    variant: {
      sku: 'SKU',
      images: ['https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg'],
    },
  },
];
export const wishlist: Wishlist = {
  wishlistId: '0',
  anonymousId: 'an',
  name: 'Wishlist Items',
  accountId: 'Acc-12-43',
  wishlistVersion: 'v 1.0',
  lineItems: lineItems,
};

export const addresses: Address[] = [
  {
    addressId: 'adrs-1',
    city: 'Munster',
    country: 'Germany',
    firstName: 'Peter',
    lastName: 'Parker',
    phone: '+4 1233455666',
    state: 'MUNSTER',
    postalCode: '12345',
    streetName: 'Baker Street',
    streetNumber: '21st',
  },
];
export const groups: Group[] = [
  {
    groupId: 'grp-1',
    groupNameAll: '__SYSTEM_ALL',
    name: 'Name',
  },
  {
    groupId: 'grp-2',
    groupNameAll: '__SYSTEM_ALL',
    name: 'Name 2',
  },
];
export const account: Account = {
  email: 'spiderman@friendlyNeighbourhood.com',
  accountId: 'usr-12345',
  firstName: 'Peter',
  lastName: 'Parker',
  password: '123456789',
  birthday: new Date('1995, 11, 17'),
  apiToken: 'token',
  confirmationToken: 'token',
  confirmed: true,
  salutation: 'Salutations',
  groups: groups,
  addresses: addresses,
};
export const shippingMethods: ShippingMethod[] = [
  {
    shippingMethodId: 'id-32244',
    description: 'Description',
    name: 'Shipping Name',
    rates: [
      {
        shippingRateId: 'ship-r-4422',
        name: 'Central Europe',
        price: { fractionDigits: 2, centAmount: 1500, currencyCode: 'EUR' },
        locations: [
          { country: 'SI' },
          { country: 'SK' },
          { country: 'CH' },
          { country: 'AT' },
          { country: 'PL' },
          { country: 'CZ' },
          { country: 'GB' },
          { country: 'HU' },
          { country: 'DE' },
        ],
      },
    ],
  },
  {
    shippingMethodId: 'id-32245',
    description: 'Description 2',
    name: 'Shipping Name 2',
    rates: [
      {
        shippingRateId: 'ship-r-4423',
        name: 'Central Europe',
        price: { fractionDigits: 2, centAmount: 1500, currencyCode: 'EUR' },
        locations: [
          { country: 'SI' },
          { country: 'SK' },
          { country: 'CH' },
          { country: 'AT' },
          { country: 'PL' },
          { country: 'CZ' },
          { country: 'GB' },
          { country: 'HU' },
          { country: 'DE' },
        ],
      },
    ],
  },
];
export const cart: Cart = {
  cartId: 'cf2200af-5891-41f1-aa04-099866ec348a',
  cartVersion: '28',
  payments: [],
  sum: { fractionDigits: 2, centAmount: 56160, currencyCode: 'EUR' },
  lineItems: [
    {
      lineItemId: 'f2200af-5891-41f1-aa04-099866ec348',
      name: 'product name 1',
      count: 3,
      isGift: false,
      type: 'variant',
      price: { fractionDigits: 2, centAmount: 20800, currencyCode: 'EUR' },
      totalPrice: { fractionDigits: 2, centAmount: 37440, currencyCode: 'EUR' },
      variant: {
        isOnStock: true,
        price: { fractionDigits: 2, centAmount: 20800, currencyCode: 'EUR' },
        sku: 'SKU',
        attributes: {
          articleNumberManufacturer: 'WOMEN RNRN 1501 L',
          articleNumberMax: '72261',
          baseId: '72261',
          color: { key: 'red', label: 'rot' },
          size: 'one size',
        },
        discountedPrice: { fractionDigits: 2, centAmount: 18720, currencyCode: 'EUR' },
        discounts: [],
        groupId: 'grp-1',
        id: 'id-1',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081072_1_medium.jpg'],
      },
    },
    {
      lineItemId: 'f2200af-5891-41f1-aa04-099866ec349',
      name: 'product name 2',
      count: 1,
      isGift: false,
      type: 'variant',
      price: { fractionDigits: 2, centAmount: 20800, currencyCode: 'EUR' },
      totalPrice: { fractionDigits: 2, centAmount: 37440, currencyCode: 'EUR' },
      variant: {
        isOnStock: true,
        price: { fractionDigits: 2, centAmount: 20800, currencyCode: 'EUR' },
        sku: 'SKU',
        groupId: '72261',
        attributes: {
          articleNumberManufacturer: 'WOMEN RNRN 1501 L 2',
          articleNumberMax: '72261',
          baseId: '72261',
          color: { key: 'red', label: 'rot' },
          size: 'one size',
        },
        discountedPrice: { fractionDigits: 2, centAmount: 18720, currencyCode: 'EUR' },
        discounts: [],
        id: 'id-2',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080123_1_large.jpg'],
      },
    },
  ],
};
export const orders: Order[] = [
  {
    orderId: 'ord-101',
    orderVersion: '25',
    orderState: 'ORDER STATE',
    createdAt: new Date(),
    ...cart,
  },
  {
    orderId: 'ord-102',
    orderVersion: '26',
    orderState: 'ORDER STATE',
    createdAt: new Date(),
    ...cart,
  },
];

export const frontasticImage: NextFrontasticImage = {
  media: {
    file: 'https://res.cloudinary.com/dlwdq84ig/image/upload/v1646648997/m1qzalyiebn9boow3tth.webp',
    height: 66,
    mediaId: 'm1qzalyiebn9boow3tth',
    name: 'Logo',
    width: 142,
  },
};
export const productItem = {
  productId: 'e35519db-1c34-4642-aff8-49ca072b5264',
  version: '1351',
  name: 'Jacke „Favola“ Peuterey schwarz',
  slug: 'peuterey-jacke-favola-BMATNER-schwarz',
  colors: [
    {
      name: 'Red',
      key: '0',
      bgColor: '#ff4d4d',
      selectedColor: '#4dc3ff',
    },
    {
      name: 'Blue',
      key: '1',
      bgColor: '#3333cc',
      selectedColor: '#4dc3ff',
    },
    {
      name: 'Green',
      key: '2',
      bgColor: '#00cc99',
      selectedColor: '#4dc3ff',
    },
  ],
  sizes: [
    {
      label: 'SM',
      key: '0',
    },
    {
      label: 'M',
      key: '1',
    },
    {
      label: 'LG',
      key: '2',
    },
    {
      label: 'XL',
      key: '3',
    },
    {
      label: 'XXL',
      key: '4',
    },
    {
      label: 'XXXL',
      key: '5',
    },
  ],
  categories: [
    {
      categoryId: '537e55cc-c6f8-4c22-8f09-64bbc2175bc3',
    },
    {
      categoryId: '9acc95ed-0053-417e-b342-96da452f7eab',
    },
  ],
  images: [
    { src: 'https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080123_1_large.jpg' },
    { src: 'https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081072_1_medium.jpg' },
  ],
  price: {
    centAmount: 16650,
  },
  details: [
    {
      name: 'A white Shirt',
      items: ['A white shirt and a black jacket'],
    },
  ],
  variants: [
    {
      id: '1',
      sku: 'M0E20000000E4QP',
      images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080123_1_large.jpg'],
      groupId: '80123',
      attributes: {
        articleNumberManufacturer: 'FAVOLA BMAT NER',
        articleNumberMax: '80123',
        matrixId: 'M0E20000000E4QP',
        baseId: '80123',
        designer: {
          key: 'peuterey',
          label: 'Peuterey',
        },
        madeInItaly: {
          key: 'no',
          label: 'no',
        },
        commonSize: {
          key: 'xxs',
          label: 'XXS',
        },
        size: '34',
        color: {
          key: 'black',
          label: 'schwarz',
        },
        colorFreeDefinition: 'schwarz',
        style: {
          key: 'sporty',
          label: 'sporty',
        },
        gender: {
          key: 'women',
          label: 'Damen',
        },
        season: 's15',
      },
      price: {
        centAmount: 16650,
      },
      discountedPrice: {
        centAmount: 14940,
      },
    },
    {
      id: '2',
      sku: 'M0E20000000E4QQ',
      images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080123_1_large.jpg'],
      groupId: '80123',
      attributes: {
        articleNumberManufacturer: 'FAVOLA BMAT NER',
        articleNumberMax: '80123',
        matrixId: 'M0E20000000E4QQ',
        baseId: '80123',
        designer: {
          key: 'peuterey',
          label: 'Peuterey',
        },
        madeInItaly: {
          key: 'no',
          label: 'no',
        },
        commonSize: {
          key: 'xxs',
          label: 'XXS',
        },
        size: '36',
        color: {
          key: 'black',
          label: 'schwarz',
        },
        colorFreeDefinition: 'schwarz',
        style: {
          key: 'sporty',
          label: 'sporty',
        },
        gender: {
          key: 'women',
          label: 'Damen',
        },
        season: 's15',
      },
      price: {
        centAmount: 16650,
      },
      discountedPrice: {
        centAmount: 14940,
      },
    },
    {
      id: '3',
      sku: 'M0E20000000E4QR',
      images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080123_1_large.jpg'],
      groupId: '80123',
      attributes: {
        articleNumberManufacturer: 'FAVOLA BMAT NER',
        articleNumberMax: '80123',
        matrixId: 'M0E20000000E4QR',
        baseId: '80123',
        designer: {
          key: 'peuterey',
          label: 'Peuterey',
        },
        madeInItaly: {
          key: 'no',
          label: 'no',
        },
        commonSize: {
          key: 'xxs',
          label: 'XXS',
        },
        size: '38',
        color: {
          key: 'black',
          label: 'schwarz',
        },
        colorFreeDefinition: 'schwarz',
        style: {
          key: 'sporty',
          label: 'sporty',
        },
        gender: {
          key: 'women',
          label: 'Damen',
        },
        season: 's15',
      },
      price: {
        centAmount: 16650,
      },
      discountedPrice: {
        centAmount: 14940,
      },
    },
    {
      id: '4',
      sku: 'M0E20000000E4QS',
      images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080123_1_large.jpg'],
      groupId: '80123',
      attributes: {
        articleNumberManufacturer: 'FAVOLA BMAT NER',
        articleNumberMax: '80123',
        matrixId: 'M0E20000000E4QS',
        baseId: '80123',
        designer: {
          key: 'peuterey',
          label: 'Peuterey',
        },
        madeInItaly: {
          key: 'no',
          label: 'no',
        },
        commonSize: {
          key: 'xs',
          label: 'XS',
        },
        size: '40',
        color: {
          key: 'black',
          label: 'schwarz',
        },
        colorFreeDefinition: 'schwarz',
        style: {
          key: 'sporty',
          label: 'sporty',
        },
        gender: {
          key: 'women',
          label: 'Damen',
        },
        season: 's15',
      },
      price: {
        centAmount: 16650,
      },
      discountedPrice: {
        centAmount: 14940,
      },
    },
    {
      id: '5',
      sku: 'M0E20000000E4QT',
      images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080123_1_large.jpg'],
      groupId: '80123',
      attributes: {
        articleNumberManufacturer: 'FAVOLA BMAT NER',
        articleNumberMax: '80123',
        matrixId: 'M0E20000000E4QT',
        baseId: '80123',
        designer: {
          key: 'peuterey',
          label: 'Peuterey',
        },
        madeInItaly: {
          key: 'no',
          label: 'no',
        },
        commonSize: {
          key: 's',
          label: 'S',
        },
        size: '42',
        color: {
          key: 'black',
          label: 'schwarz',
        },
        colorFreeDefinition: 'schwarz',
        style: {
          key: 'sporty',
          label: 'sporty',
        },
        gender: {
          key: 'women',
          label: 'Damen',
        },
        season: 's15',
        isOnStock: true,
      },
      price: {
        centAmount: 16650,
      },
      discountedPrice: {
        centAmount: 14940,
      },
    },
    {
      id: '6',
      sku: 'M0E20000000E4QU',
      images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080123_1_large.jpg'],
      groupId: '80123',
      attributes: {
        articleNumberManufacturer: 'FAVOLA BMAT NER',
        articleNumberMax: '80123',
        matrixId: 'M0E20000000E4QU',
        baseId: '80123',
        designer: {
          key: 'peuterey',
          label: 'Peuterey',
        },
        madeInItaly: {
          key: 'no',
          label: 'no',
        },
        commonSize: {
          key: 'm',
          label: 'M',
        },
        size: '44',
        color: {
          key: 'black',
          label: 'schwarz',
        },
        colorFreeDefinition: 'schwarz',
        style: {
          key: 'sporty',
          label: 'sporty',
        },
        gender: {
          key: 'women',
          label: 'Damen',
        },
        season: 's15',
      },
      price: {
        centAmount: 16650,
      },
      discountedPrice: {
        centAmount: 14940,
      },
    },
    {
      id: '7',
      sku: 'M0E20000000E4QV',
      images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080123_1_large.jpg'],
      groupId: '80123',
      attributes: {
        articleNumberManufacturer: 'FAVOLA BMAT NER',
        articleNumberMax: '80123',
        matrixId: 'M0E20000000E4QV',
        baseId: '80123',
        designer: {
          key: 'peuterey',
          label: 'Peuterey',
        },
        madeInItaly: {
          key: 'no',
          label: 'no',
        },
        commonSize: {
          key: 'l',
          label: 'L',
        },
        size: '46',
        color: {
          key: 'black',
          label: 'schwarz',
        },
        colorFreeDefinition: 'schwarz',
        style: {
          key: 'sporty',
          label: 'sporty',
        },
        gender: {
          key: 'women',
          label: 'Damen',
        },
        season: 's15',
        isOnStock: true,
      },
      price: {
        centAmount: 16650,
      },
      discountedPrice: {
        centAmount: 14940,
      },
    },
    {
      id: '8',
      sku: 'M0E20000000E4QW',
      images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080123_1_large.jpg'],
      groupId: '80123',
      attributes: {
        articleNumberManufacturer: 'FAVOLA BMAT NER',
        articleNumberMax: '80123',
        matrixId: 'M0E20000000E4QW',
        baseId: '80123',
        designer: {
          key: 'peuterey',
          label: 'Peuterey',
        },
        madeInItaly: {
          key: 'no',
          label: 'no',
        },
        commonSize: {
          key: 'xl',
          label: 'XL',
        },
        size: '48',
        color: {
          key: 'black',
          label: 'schwarz',
        },
        colorFreeDefinition: 'schwarz',
        style: {
          key: 'sporty',
          label: 'sporty',
        },
        gender: {
          key: 'women',
          label: 'Damen',
        },
        season: 's15',
      },
      price: {
        centAmount: 16650,
      },
      discountedPrice: {
        centAmount: 14940,
      },
    },
    {
      id: '9',
      sku: 'M0E20000000E4QX',
      images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080123_1_large.jpg'],
      groupId: '80123',
      attributes: {
        articleNumberManufacturer: 'FAVOLA BMAT NER',
        articleNumberMax: '80123',
        matrixId: 'M0E20000000E4QX',
        baseId: '80123',
        designer: {
          key: 'peuterey',
          label: 'Peuterey',
        },
        madeInItaly: {
          key: 'no',
          label: 'no',
        },
        commonSize: {
          key: 'xxl',
          label: 'XXL',
        },
        size: '50',
        color: {
          key: 'black',
          label: 'schwarz',
        },
        colorFreeDefinition: 'schwarz',
        style: {
          key: 'sporty',
          label: 'sporty',
        },
        gender: {
          key: 'women',
          label: 'Damen',
        },
        season: 's15',
      },
      price: {
        centAmount: 16650,
      },
      discountedPrice: {
        centAmount: 14940,
      },
    },
    {
      id: '10',
      sku: 'M0E20000000E4QY',
      images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080123_1_large.jpg'],
      groupId: '80123',
      attributes: {
        articleNumberManufacturer: 'FAVOLA BMAT NER',
        articleNumberMax: '80123',
        matrixId: 'M0E20000000E4QY',
        baseId: '80123',
        designer: {
          key: 'peuterey',
          label: 'Peuterey',
        },
        madeInItaly: {
          key: 'no',
          label: 'no',
        },
        commonSize: {
          key: 'xxxl',
          label: 'XXXL',
        },
        size: '52',
        color: {
          key: 'black',
          label: 'schwarz',
        },
        colorFreeDefinition: 'schwarz',
        style: {
          key: 'sporty',
          label: 'sporty',
        },
        gender: {
          key: 'women',
          label: 'Damen',
        },
        season: 's15',
      },
      price: {
        centAmount: 16650,
      },
      discountedPrice: {
        centAmount: 14940,
      },
    },
    {
      id: '11',
      sku: 'M0E20000000E4QZ',
      images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080123_1_large.jpg'],
      groupId: '80123',
      attributes: {
        articleNumberManufacturer: 'FAVOLA BMAT NER',
        articleNumberMax: '80123',
        matrixId: 'M0E20000000E4QZ',
        baseId: '80123',
        designer: {
          key: 'peuterey',
          label: 'Peuterey',
        },
        madeInItaly: {
          key: 'no',
          label: 'no',
        },
        commonSize: {
          key: 'xxxl',
          label: 'XXXL',
        },
        size: '54',
        color: {
          key: 'black',
          label: 'schwarz',
        },
        colorFreeDefinition: 'schwarz',
        style: {
          key: 'sporty',
          label: 'sporty',
        },
        gender: {
          key: 'women',
          label: 'Damen',
        },
        season: 's15',
      },
      price: {
        centAmount: 16650,
      },
      discountedPrice: {
        centAmount: 14940,
      },
    },
    {
      id: '12',
      sku: 'M0E20000000E4R0',
      images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080123_1_large.jpg'],
      groupId: '80123',
      attributes: {
        articleNumberManufacturer: 'FAVOLA BMAT NER',
        articleNumberMax: '80123',
        matrixId: 'M0E20000000E4R0',
        baseId: '80123',
        designer: {
          key: 'peuterey',
          label: 'Peuterey',
        },
        madeInItaly: {
          key: 'no',
          label: 'no',
        },
        commonSize: {
          key: 'xxxl',
          label: 'XXXL',
        },
        size: '56',
        color: {
          key: 'black',
          label: 'schwarz',
        },
        colorFreeDefinition: 'schwarz',
        style: {
          key: 'sporty',
          label: 'sporty',
        },
        gender: {
          key: 'women',
          label: 'Damen',
        },
        season: 's15',
      },
      price: {
        centAmount: 16650,
      },
      discountedPrice: {
        centAmount: 14940,
      },
    },
    {
      id: '13',
      sku: 'M0E20000000E4R1',
      images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080123_1_large.jpg'],
      groupId: '80123',
      attributes: {
        articleNumberManufacturer: 'FAVOLA BMAT NER',
        articleNumberMax: '80123',
        matrixId: 'M0E20000000E4R1',
        baseId: '80123',
        designer: {
          key: 'peuterey',
          label: 'Peuterey',
        },
        madeInItaly: {
          key: 'no',
          label: 'no',
        },
        commonSize: {
          key: 'xxxl',
          label: 'XXXL',
        },
        size: '58',
        color: {
          key: 'black',
          label: 'schwarz',
        },
        colorFreeDefinition: 'schwarz',
        style: {
          key: 'sporty',
          label: 'sporty',
        },
        gender: {
          key: 'women',
          label: 'Damen',
        },
        season: 's15',
      },
      price: {
        centAmount: 16650,
      },
      discountedPrice: {
        centAmount: 14940,
      },
    },
  ],
};
export const products: Product[] = [
  {
    productId: '05a9e149-0596-4a3d-aed2-c52949eac45b',
    version: '2635',
    name: 'Sneakers Serafini grau',
    slug: 'serafini-sneakers-LREP02-grau',
    categories: [
      {
        categoryId: '73c57b5f-9267-473a-93b3-73507cbb0d35',
      },
      {
        categoryId: '39d9fb1a-7f80-4283-acdb-af58c43f3a9a',
      },
    ],
    variants: [
      {
        id: '1',
        sku: 'M0E20000000E72G',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080367_1_medium.jpg'],
        groupId: '80367',
        attributes: {
          articleNumberManufacturer: 'LREP02 TAUPE',
          articleNumberMax: '80367',
          matrixId: 'M0E20000000E72G',
          baseId: '80367',
          designer: {
            key: 'serafini',
            label: 'Serafini',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '34',
            label: '34',
          },
          size: '34',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 18599,
        },
        discountedPrice: {
          centAmount: 16650,
        },
        isOnStock: false,
      },
      {
        id: '2',
        sku: 'M0E20000000E72H',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080367_1_medium.jpg'],
        groupId: '80367',
        attributes: {
          articleNumberManufacturer: 'LREP02 TAUPE',
          articleNumberMax: '80367',
          matrixId: 'M0E20000000E72H',
          baseId: '80367',
          designer: {
            key: 'serafini',
            label: 'Serafini',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '34.5',
            label: '34.5',
          },
          size: '34.5',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 18500,
        },
        discountedPrice: {
          centAmount: 16650,
        },
        isOnStock: false,
      },
      {
        id: '3',
        sku: 'M0E20000000E72I',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080367_1_medium.jpg'],
        groupId: '80367',
        attributes: {
          articleNumberManufacturer: 'LREP02 TAUPE',
          articleNumberMax: '80367',
          matrixId: 'M0E20000000E72I',
          baseId: '80367',
          designer: {
            key: 'serafini',
            label: 'Serafini',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '35',
            label: '35',
          },
          size: '35',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 18500,
        },
        discountedPrice: {
          centAmount: 16650,
        },
        isOnStock: false,
      },
      {
        id: '4',
        sku: 'M0E20000000E72J',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080367_1_medium.jpg'],
        groupId: '80367',
        attributes: {
          articleNumberManufacturer: 'LREP02 TAUPE',
          articleNumberMax: '80367',
          matrixId: 'M0E20000000E72J',
          baseId: '80367',
          designer: {
            key: 'serafini',
            label: 'Serafini',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '35.5',
            label: '35.5',
          },
          size: '35.5',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 18500,
        },
        discountedPrice: {
          centAmount: 16650,
        },
        isOnStock: false,
      },
      {
        id: '5',
        sku: 'M0E20000000E72K',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080367_1_medium.jpg'],
        groupId: '80367',
        attributes: {
          articleNumberManufacturer: 'LREP02 TAUPE',
          articleNumberMax: '80367',
          matrixId: 'M0E20000000E72K',
          baseId: '80367',
          designer: {
            key: 'serafini',
            label: 'Serafini',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '36',
            label: '36',
          },
          size: '36',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 18500,
        },
        discountedPrice: {
          centAmount: 16650,
        },
        isOnStock: false,
      },
      {
        id: '6',
        sku: 'M0E20000000E72L',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080367_1_medium.jpg'],
        groupId: '80367',
        attributes: {
          articleNumberManufacturer: 'LREP02 TAUPE',
          articleNumberMax: '80367',
          matrixId: 'M0E20000000E72L',
          baseId: '80367',
          designer: {
            key: 'serafini',
            label: 'Serafini',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '36.5',
            label: '36.5',
          },
          size: '36.5',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 18500,
        },
        discountedPrice: {
          centAmount: 16650,
        },
        isOnStock: true,
      },
      {
        id: '7',
        sku: 'M0E20000000E72M',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080367_1_medium.jpg'],
        groupId: '80367',
        attributes: {
          articleNumberManufacturer: 'LREP02 TAUPE',
          articleNumberMax: '80367',
          matrixId: 'M0E20000000E72M',
          baseId: '80367',
          designer: {
            key: 'serafini',
            label: 'Serafini',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '37',
            label: '37',
          },
          size: '37',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 18500,
        },
        discountedPrice: {
          centAmount: 16650,
        },
        isOnStock: true,
      },
      {
        id: '8',
        sku: 'M0E20000000E72N',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080367_1_medium.jpg'],
        groupId: '80367',
        attributes: {
          articleNumberManufacturer: 'LREP02 TAUPE',
          articleNumberMax: '80367',
          matrixId: 'M0E20000000E72N',
          baseId: '80367',
          designer: {
            key: 'serafini',
            label: 'Serafini',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '37.5',
            label: '37.5',
          },
          size: '37.5',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 18500,
        },
        discountedPrice: {
          centAmount: 16650,
        },
        isOnStock: true,
      },
      {
        id: '9',
        sku: 'M0E20000000E72O',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080367_1_medium.jpg'],
        groupId: '80367',
        attributes: {
          articleNumberManufacturer: 'LREP02 TAUPE',
          articleNumberMax: '80367',
          matrixId: 'M0E20000000E72O',
          baseId: '80367',
          designer: {
            key: 'serafini',
            label: 'Serafini',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '38',
            label: '38',
          },
          size: '38',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 18500,
        },
        discountedPrice: {
          centAmount: 16650,
        },
        isOnStock: true,
      },
      {
        id: '10',
        sku: 'M0E20000000E72P',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080367_1_medium.jpg'],
        groupId: '80367',
        attributes: {
          articleNumberManufacturer: 'LREP02 TAUPE',
          articleNumberMax: '80367',
          matrixId: 'M0E20000000E72P',
          baseId: '80367',
          designer: {
            key: 'serafini',
            label: 'Serafini',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '38.5',
            label: '38.5',
          },
          size: '38.5',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 18500,
        },
        discountedPrice: {
          centAmount: 16650,
        },
        isOnStock: true,
      },
      {
        id: '11',
        sku: 'M0E20000000E72Q',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080367_1_medium.jpg'],
        groupId: '80367',
        attributes: {
          articleNumberManufacturer: 'LREP02 TAUPE',
          articleNumberMax: '80367',
          matrixId: 'M0E20000000E72Q',
          baseId: '80367',
          designer: {
            key: 'serafini',
            label: 'Serafini',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '39',
            label: '39',
          },
          size: '39',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 18500,
        },
        discountedPrice: {
          centAmount: 16650,
        },
        isOnStock: true,
      },
      {
        id: '12',
        sku: 'M0E20000000E72R',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080367_1_medium.jpg'],
        groupId: '80367',
        attributes: {
          articleNumberManufacturer: 'LREP02 TAUPE',
          articleNumberMax: '80367',
          matrixId: 'M0E20000000E72R',
          baseId: '80367',
          designer: {
            key: 'serafini',
            label: 'Serafini',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '39.5',
            label: '39.5',
          },
          size: '39.5',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 18500,
        },
        discountedPrice: {
          centAmount: 16650,
        },
        isOnStock: true,
      },
      {
        id: '13',
        sku: 'M0E20000000E72S',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080367_1_medium.jpg'],
        groupId: '80367',
        attributes: {
          articleNumberManufacturer: 'LREP02 TAUPE',
          articleNumberMax: '80367',
          matrixId: 'M0E20000000E72S',
          baseId: '80367',
          designer: {
            key: 'serafini',
            label: 'Serafini',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '40',
            label: '40',
          },
          size: '40',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 18500,
        },
        discountedPrice: {
          centAmount: 16650,
        },
        isOnStock: true,
      },
      {
        id: '14',
        sku: 'M0E20000000E72T',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080367_1_medium.jpg'],
        groupId: '80367',
        attributes: {
          articleNumberManufacturer: 'LREP02 TAUPE',
          articleNumberMax: '80367',
          matrixId: 'M0E20000000E72T',
          baseId: '80367',
          designer: {
            key: 'serafini',
            label: 'Serafini',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '40.5',
            label: '40.5',
          },
          size: '40.5',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 18500,
        },
        discountedPrice: {
          centAmount: 16650,
        },
        isOnStock: true,
      },
      {
        id: '15',
        sku: 'M0E20000000E72U',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080367_1_medium.jpg'],
        groupId: '80367',
        attributes: {
          articleNumberManufacturer: 'LREP02 TAUPE',
          articleNumberMax: '80367',
          matrixId: 'M0E20000000E72U',
          baseId: '80367',
          designer: {
            key: 'serafini',
            label: 'Serafini',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '41',
            label: '41',
          },
          size: '41',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 18500,
        },
        discountedPrice: {
          centAmount: 16650,
        },
        isOnStock: true,
      },
      {
        id: '16',
        sku: 'M0E20000000E72V',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080367_1_medium.jpg'],
        groupId: '80367',
        attributes: {
          articleNumberManufacturer: 'LREP02 TAUPE',
          articleNumberMax: '80367',
          matrixId: 'M0E20000000E72V',
          baseId: '80367',
          designer: {
            key: 'serafini',
            label: 'Serafini',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '41.5',
            label: '41.5',
          },
          size: '41.5',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 18500,
        },
        discountedPrice: {
          centAmount: 16650,
        },
        isOnStock: true,
      },
      {
        id: '17',
        sku: 'M0E20000000E72W',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080367_1_medium.jpg'],
        groupId: '80367',
        attributes: {
          articleNumberManufacturer: 'LREP02 TAUPE',
          articleNumberMax: '80367',
          matrixId: 'M0E20000000E72W',
          baseId: '80367',
          designer: {
            key: 'serafini',
            label: 'Serafini',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '42',
            label: '42',
          },
          size: '42',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 18500,
        },
        discountedPrice: {
          centAmount: 16650,
        },
        isOnStock: true,
      },
      {
        id: '18',
        sku: 'M0E20000000E72X',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080367_1_medium.jpg'],
        groupId: '80367',
        attributes: {
          articleNumberManufacturer: 'LREP02 TAUPE',
          articleNumberMax: '80367',
          matrixId: 'M0E20000000E72X',
          baseId: '80367',
          designer: {
            key: 'serafini',
            label: 'Serafini',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '42.5',
            label: '42.5',
          },
          size: '42.5',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 18500,
        },
        discountedPrice: {
          centAmount: 16650,
        },
        isOnStock: true,
      },
      {
        id: '19',
        sku: 'M0E20000000E72Y',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080367_1_medium.jpg'],
        groupId: '80367',
        attributes: {
          articleNumberManufacturer: 'LREP02 TAUPE',
          articleNumberMax: '80367',
          matrixId: 'M0E20000000E72Y',
          baseId: '80367',
          designer: {
            key: 'serafini',
            label: 'Serafini',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '43',
            label: '43',
          },
          size: '43',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 18500,
        },
        discountedPrice: {
          centAmount: 16650,
        },
        isOnStock: true,
      },
      {
        id: '20',
        sku: 'M0E20000000E72Z',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080367_1_medium.jpg'],
        groupId: '80367',
        attributes: {
          articleNumberManufacturer: 'LREP02 TAUPE',
          articleNumberMax: '80367',
          matrixId: 'M0E20000000E72Z',
          baseId: '80367',
          designer: {
            key: 'serafini',
            label: 'Serafini',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '43.5',
            label: '43.5',
          },
          size: '43.5',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 18500,
        },
        discountedPrice: {
          centAmount: 16650,
        },
        isOnStock: true,
      },
      {
        id: '21',
        sku: 'M0E20000000E730',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080367_1_medium.jpg'],
        groupId: '80367',
        attributes: {
          articleNumberManufacturer: 'LREP02 TAUPE',
          articleNumberMax: '80367',
          matrixId: 'M0E20000000E730',
          baseId: '80367',
          designer: {
            key: 'serafini',
            label: 'Serafini',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '44',
            label: '44',
          },
          size: '44',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 18500,
        },
        discountedPrice: {
          centAmount: 16650,
        },
        isOnStock: true,
      },
      {
        id: '22',
        sku: 'M0E20000000E731',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080367_1_medium.jpg'],
        groupId: '80367',
        attributes: {
          articleNumberManufacturer: 'LREP02 TAUPE',
          articleNumberMax: '80367',
          matrixId: 'M0E20000000E731',
          baseId: '80367',
          designer: {
            key: 'serafini',
            label: 'Serafini',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '44.5',
            label: '44.5',
          },
          size: '44.5',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 18500,
        },
        discountedPrice: {
          centAmount: 16650,
        },
        isOnStock: true,
      },
      {
        id: '23',
        sku: 'M0E20000000E732',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080367_1_medium.jpg'],
        groupId: '80367',
        attributes: {
          articleNumberManufacturer: 'LREP02 TAUPE',
          articleNumberMax: '80367',
          matrixId: 'M0E20000000E732',
          baseId: '80367',
          designer: {
            key: 'serafini',
            label: 'Serafini',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '45',
            label: '45',
          },
          size: '45',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 18500,
        },
        discountedPrice: {
          centAmount: 16650,
        },
        isOnStock: true,
      },
      {
        id: '24',
        sku: 'M0E20000000E733',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080367_1_medium.jpg'],
        groupId: '80367',
        attributes: {
          articleNumberManufacturer: 'LREP02 TAUPE',
          articleNumberMax: '80367',
          matrixId: 'M0E20000000E733',
          baseId: '80367',
          designer: {
            key: 'serafini',
            label: 'Serafini',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '45.5',
            label: '45.5',
          },
          size: '45.5',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 18500,
        },
        discountedPrice: {
          centAmount: 16650,
        },
        isOnStock: true,
      },
      {
        id: '25',
        isOnStock: true,
        sku: 'M0E20000000E734',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080367_1_medium.jpg'],
        groupId: '80367',
        attributes: {
          articleNumberManufacturer: 'LREP02 TAUPE',
          articleNumberMax: '80367',
          matrixId: 'M0E20000000E734',
          baseId: '80367',
          designer: {
            key: 'serafini',
            label: 'Serafini',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '46',
            label: '46',
          },
          size: '46',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 18500,
        },
        discountedPrice: {
          centAmount: 16650,
        },
      },
    ],
    _url: '/',
  },
  {
    productId: 'a9eea3e9-4615-41f7-8d83-5238a923b6b0',
    version: '53',
    name: 'Schal Altea hellgrau',
    slug: 'altea-schal-1550732-hellgrau',
    categories: [
      {
        categoryId: '984ff8f3-034c-40e6-ae57-8dbe33f6009a',
      },
    ],
    variants: [
      {
        id: '1',
        sku: 'A0E20000000251J',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081072_1_medium.jpg'],
        groupId: '81072',
        attributes: {
          articleNumberManufacturer: '1550732 1',
          articleNumberMax: '81072',
          matrixId: 'A0E20000000251J',
          baseId: '81072',
          designer: {
            key: 'altea',
            label: 'Altea',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'oneSize',
            label: 'one Size',
          },
          size: 'one size',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'hellgrau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: false,
      },
    ],
    _url: '/',
  },
  {
    productId: 'fc4e2b50-6ec6-4018-806d-b34fb54556d7',
    version: '43',
    name: 'Tasche „Postina“ small Zanellato creme',
    slug: 'zanellato-tasche-postina-small-062389134-creme',
    categories: [
      {
        categoryId: 'ed378cd1-172f-43aa-b4ec-4954b9961b17',
      },
      {
        categoryId: '9c56920c-d158-4139-8b8b-8adb429033c9',
      },
      {
        categoryId: 'd856d1ca-d90b-4f5c-87ff-1c859763a174',
      },
    ],
    variants: [
      {
        id: '1',
        sku: 'A0E2000000021XO',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079413_1_medium.jpg'],
        groupId: '79413',
        attributes: {
          articleNumberManufacturer: 'ZA22PEL062389134',
          articleNumberMax: '79413',
          matrixId: 'A0E2000000021XO',
          baseId: '79413',
          designer: {
            key: 'zanellato',
            label: 'Zanellato',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'oneSize',
            label: 'one Size',
          },
          size: 'one size',
          color: {
            key: 'beige',
            label: 'beige',
          },
          colorFreeDefinition: 'creme',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
    ],
    _url: '/',
  },
  {
    productId: 'c05dee38-6054-4ca4-a91a-4a1d581fa179',
    version: '786',
    name: 'Hemd „James“ Robert Friedman blau',
    slug: 'robertfriedman-hemd-james-RS9000-blau',
    categories: [
      {
        categoryId: '74a89bd3-dc43-4496-a20c-fcb101dd00dd',
      },
      {
        categoryId: '30ac2a21-91a0-4c31-b908-b9a85b53e44b',
      },
    ],
    variants: [
      {
        id: '1',
        sku: 'M0E20000000E2CF',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079838_1_medium.jpg'],
        groupId: '79838',
        attributes: {
          articleNumberManufacturer: 'JAMES RS9000 0006',
          articleNumberMax: '79838',
          matrixId: 'M0E20000000E2CF',
          baseId: '79838',
          designer: {
            key: 'robertfriedman',
            label: 'Robert Friedman',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'xxs',
            label: 'XXS',
          },
          size: 'XXS',
          color: {
            key: 'blue',
            label: 'blau',
          },
          colorFreeDefinition: 'blau',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '2',
        sku: 'M0E20000000E2CG',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079838_1_medium.jpg'],
        groupId: '79838',
        attributes: {
          articleNumberManufacturer: 'JAMES RS9000 0006',
          articleNumberMax: '79838',
          matrixId: 'M0E20000000E2CG',
          baseId: '79838',
          designer: {
            key: 'robertfriedman',
            label: 'Robert Friedman',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'xs',
            label: 'XS',
          },
          size: 'XS',
          color: {
            key: 'blue',
            label: 'blau',
          },
          colorFreeDefinition: 'blau',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '3',
        sku: 'M0E20000000E2CH',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079838_1_medium.jpg'],
        groupId: '79838',
        attributes: {
          articleNumberManufacturer: 'JAMES RS9000 0006',
          articleNumberMax: '79838',
          matrixId: 'M0E20000000E2CH',
          baseId: '79838',
          designer: {
            key: 'robertfriedman',
            label: 'Robert Friedman',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 's',
            label: 'S',
          },
          size: 'S',
          color: {
            key: 'blue',
            label: 'blau',
          },
          colorFreeDefinition: 'blau',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '4',
        sku: 'M0E20000000E2CI',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079838_1_medium.jpg'],
        groupId: '79838',
        attributes: {
          articleNumberManufacturer: 'JAMES RS9000 0006',
          articleNumberMax: '79838',
          matrixId: 'M0E20000000E2CI',
          baseId: '79838',
          designer: {
            key: 'robertfriedman',
            label: 'Robert Friedman',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'm',
            label: 'M',
          },
          size: 'M',
          color: {
            key: 'blue',
            label: 'blau',
          },
          colorFreeDefinition: 'blau',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '5',
        sku: 'M0E20000000E2CJ',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079838_1_medium.jpg'],
        groupId: '79838',
        attributes: {
          articleNumberManufacturer: 'JAMES RS9000 0006',
          articleNumberMax: '79838',
          matrixId: 'M0E20000000E2CJ',
          baseId: '79838',
          designer: {
            key: 'robertfriedman',
            label: 'Robert Friedman',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'l',
            label: 'L',
          },
          size: 'L',
          color: {
            key: 'blue',
            label: 'blau',
          },
          colorFreeDefinition: 'blau',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '6',
        sku: 'M0E20000000E2CK',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079838_1_medium.jpg'],
        groupId: '79838',
        attributes: {
          articleNumberManufacturer: 'JAMES RS9000 0006',
          articleNumberMax: '79838',
          matrixId: 'M0E20000000E2CK',
          baseId: '79838',
          designer: {
            key: 'robertfriedman',
            label: 'Robert Friedman',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'xl',
            label: 'XL',
          },
          size: 'XL',
          color: {
            key: 'blue',
            label: 'blau',
          },
          colorFreeDefinition: 'blau',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '7',
        sku: 'M0E20000000E2CL',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079838_1_medium.jpg'],
        groupId: '79838',
        attributes: {
          articleNumberManufacturer: 'JAMES RS9000 0006',
          articleNumberMax: '79838',
          matrixId: 'M0E20000000E2CL',
          baseId: '79838',
          designer: {
            key: 'robertfriedman',
            label: 'Robert Friedman',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'xxl',
            label: 'XXL',
          },
          size: 'XXL',
          color: {
            key: 'blue',
            label: 'blau',
          },
          colorFreeDefinition: 'blau',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '8',
        sku: 'M0E20000000E2CM',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079838_1_medium.jpg'],
        groupId: '79838',
        attributes: {
          articleNumberManufacturer: 'JAMES RS9000 0006',
          articleNumberMax: '79838',
          matrixId: 'M0E20000000E2CM',
          baseId: '79838',
          designer: {
            key: 'robertfriedman',
            label: 'Robert Friedman',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'xxxl',
            label: 'XXXL',
          },
          size: 'XXXL',
          color: {
            key: 'blue',
            label: 'blau',
          },
          colorFreeDefinition: 'blau',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
    ],
    _url: '/',
  },
  {
    productId: 'e35519db-1c34-4642-aff8-49ca072b5264',
    version: '1351',
    name: 'Jacke „Favola“ Peuterey schwarz',
    slug: 'peuterey-jacke-favola-BMATNER-schwarz',
    categories: [
      {
        categoryId: '537e55cc-c6f8-4c22-8f09-64bbc2175bc3',
      },
      {
        categoryId: '9acc95ed-0053-417e-b342-96da452f7eab',
      },
    ],
    variants: [
      {
        id: '1',
        sku: 'M0E20000000E4QP',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080123_1_large.jpg'],
        groupId: '80123',
        attributes: {
          articleNumberManufacturer: 'FAVOLA BMAT NER',
          articleNumberMax: '80123',
          matrixId: 'M0E20000000E4QP',
          baseId: '80123',
          designer: {
            key: 'peuterey',
            label: 'Peuterey',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'xxs',
            label: 'XXS',
          },
          size: '34',
          color: {
            key: 'black',
            label: 'schwarz',
          },
          colorFreeDefinition: 'schwarz',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '2',
        sku: 'M0E20000000E4QQ',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080123_1_large.jpg'],
        groupId: '80123',
        attributes: {
          articleNumberManufacturer: 'FAVOLA BMAT NER',
          articleNumberMax: '80123',
          matrixId: 'M0E20000000E4QQ',
          baseId: '80123',
          designer: {
            key: 'peuterey',
            label: 'Peuterey',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'xxs',
            label: 'XXS',
          },
          size: '36',
          color: {
            key: 'black',
            label: 'schwarz',
          },
          colorFreeDefinition: 'schwarz',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '3',
        sku: 'M0E20000000E4QR',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080123_1_large.jpg'],
        groupId: '80123',
        attributes: {
          articleNumberManufacturer: 'FAVOLA BMAT NER',
          articleNumberMax: '80123',
          matrixId: 'M0E20000000E4QR',
          baseId: '80123',
          designer: {
            key: 'peuterey',
            label: 'Peuterey',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'xxs',
            label: 'XXS',
          },
          size: '38',
          color: {
            key: 'black',
            label: 'schwarz',
          },
          colorFreeDefinition: 'schwarz',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '4',
        sku: 'M0E20000000E4QS',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080123_1_large.jpg'],
        groupId: '80123',
        attributes: {
          articleNumberManufacturer: 'FAVOLA BMAT NER',
          articleNumberMax: '80123',
          matrixId: 'M0E20000000E4QS',
          baseId: '80123',
          designer: {
            key: 'peuterey',
            label: 'Peuterey',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'xs',
            label: 'XS',
          },
          size: '40',
          color: {
            key: 'black',
            label: 'schwarz',
          },
          colorFreeDefinition: 'schwarz',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '5',
        sku: 'M0E20000000E4QT',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080123_1_large.jpg'],
        groupId: '80123',
        attributes: {
          articleNumberManufacturer: 'FAVOLA BMAT NER',
          articleNumberMax: '80123',
          matrixId: 'M0E20000000E4QT',
          baseId: '80123',
          designer: {
            key: 'peuterey',
            label: 'Peuterey',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 's',
            label: 'S',
          },
          size: '42',
          color: {
            key: 'black',
            label: 'schwarz',
          },
          colorFreeDefinition: 'schwarz',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '6',
        sku: 'M0E20000000E4QU',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080123_1_large.jpg'],
        groupId: '80123',
        attributes: {
          articleNumberManufacturer: 'FAVOLA BMAT NER',
          articleNumberMax: '80123',
          matrixId: 'M0E20000000E4QU',
          baseId: '80123',
          designer: {
            key: 'peuterey',
            label: 'Peuterey',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'm',
            label: 'M',
          },
          size: '44',
          color: {
            key: 'black',
            label: 'schwarz',
          },
          colorFreeDefinition: 'schwarz',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '7',
        sku: 'M0E20000000E4QV',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080123_1_large.jpg'],
        groupId: '80123',
        attributes: {
          articleNumberManufacturer: 'FAVOLA BMAT NER',
          articleNumberMax: '80123',
          matrixId: 'M0E20000000E4QV',
          baseId: '80123',
          designer: {
            key: 'peuterey',
            label: 'Peuterey',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'l',
            label: 'L',
          },
          size: '46',
          color: {
            key: 'black',
            label: 'schwarz',
          },
          colorFreeDefinition: 'schwarz',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '8',
        sku: 'M0E20000000E4QW',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080123_1_large.jpg'],
        groupId: '80123',
        attributes: {
          articleNumberManufacturer: 'FAVOLA BMAT NER',
          articleNumberMax: '80123',
          matrixId: 'M0E20000000E4QW',
          baseId: '80123',
          designer: {
            key: 'peuterey',
            label: 'Peuterey',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'xl',
            label: 'XL',
          },
          size: '48',
          color: {
            key: 'black',
            label: 'schwarz',
          },
          colorFreeDefinition: 'schwarz',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '9',
        sku: 'M0E20000000E4QX',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080123_1_large.jpg'],
        groupId: '80123',
        attributes: {
          articleNumberManufacturer: 'FAVOLA BMAT NER',
          articleNumberMax: '80123',
          matrixId: 'M0E20000000E4QX',
          baseId: '80123',
          designer: {
            key: 'peuterey',
            label: 'Peuterey',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'xxl',
            label: 'XXL',
          },
          size: '50',
          color: {
            key: 'black',
            label: 'schwarz',
          },
          colorFreeDefinition: 'schwarz',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '10',
        sku: 'M0E20000000E4QY',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080123_1_large.jpg'],
        groupId: '80123',
        attributes: {
          articleNumberManufacturer: 'FAVOLA BMAT NER',
          articleNumberMax: '80123',
          matrixId: 'M0E20000000E4QY',
          baseId: '80123',
          designer: {
            key: 'peuterey',
            label: 'Peuterey',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'xxxl',
            label: 'XXXL',
          },
          size: '52',
          color: {
            key: 'black',
            label: 'schwarz',
          },
          colorFreeDefinition: 'schwarz',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '11',
        sku: 'M0E20000000E4QZ',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080123_1_large.jpg'],
        groupId: '80123',
        attributes: {
          articleNumberManufacturer: 'FAVOLA BMAT NER',
          articleNumberMax: '80123',
          matrixId: 'M0E20000000E4QZ',
          baseId: '80123',
          designer: {
            key: 'peuterey',
            label: 'Peuterey',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'xxxl',
            label: 'XXXL',
          },
          size: '54',
          color: {
            key: 'black',
            label: 'schwarz',
          },
          colorFreeDefinition: 'schwarz',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '12',
        sku: 'M0E20000000E4R0',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080123_1_large.jpg'],
        groupId: '80123',
        attributes: {
          articleNumberManufacturer: 'FAVOLA BMAT NER',
          articleNumberMax: '80123',
          matrixId: 'M0E20000000E4R0',
          baseId: '80123',
          designer: {
            key: 'peuterey',
            label: 'Peuterey',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'xxxl',
            label: 'XXXL',
          },
          size: '56',
          color: {
            key: 'black',
            label: 'schwarz',
          },
          colorFreeDefinition: 'schwarz',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '13',
        sku: 'M0E20000000E4R1',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080123_1_large.jpg'],
        groupId: '80123',
        attributes: {
          articleNumberManufacturer: 'FAVOLA BMAT NER',
          articleNumberMax: '80123',
          matrixId: 'M0E20000000E4R1',
          baseId: '80123',
          designer: {
            key: 'peuterey',
            label: 'Peuterey',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'xxxl',
            label: 'XXXL',
          },
          size: '58',
          color: {
            key: 'black',
            label: 'schwarz',
          },
          colorFreeDefinition: 'schwarz',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
    ],
    _url: '/',
  },
  {
    productId: '4984bfa2-d47d-483e-906a-1aa28fbb96d4',
    version: '2633',
    name: 'Sneakers Philippe Model silber',
    slug: 'philippemodel-sneakers-THLDET04-silber',
    categories: [
      {
        categoryId: '73c57b5f-9267-473a-93b3-73507cbb0d35',
      },
      {
        categoryId: '39d9fb1a-7f80-4283-acdb-af58c43f3a9a',
      },
    ],
    variants: [
      {
        id: '1',
        sku: 'M0E20000000DPRX',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073413_1_large.jpg'],
        groupId: '73413',
        attributes: {
          articleNumberManufacturer: 'THLD ET04 SILVER',
          articleNumberMax: '73413',
          matrixId: 'M0E20000000DPRX',
          baseId: '73413',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '34',
            label: '34',
          },
          size: '34',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '2',
        sku: 'M0E20000000DPRY',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073413_1_large.jpg'],
        groupId: '73413',
        attributes: {
          articleNumberManufacturer: 'THLD ET04 SILVER',
          articleNumberMax: '73413',
          matrixId: 'M0E20000000DPRY',
          baseId: '73413',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '34.5',
            label: '34.5',
          },
          size: '34.5',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '3',
        sku: 'M0E20000000DPRZ',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073413_1_large.jpg'],
        groupId: '73413',
        attributes: {
          articleNumberManufacturer: 'THLD ET04 SILVER',
          articleNumberMax: '73413',
          matrixId: 'M0E20000000DPRZ',
          baseId: '73413',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '35',
            label: '35',
          },
          size: '35',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '4',
        sku: 'M0E20000000DPS0',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073413_1_large.jpg'],
        groupId: '73413',
        attributes: {
          articleNumberManufacturer: 'THLD ET04 SILVER',
          articleNumberMax: '73413',
          matrixId: 'M0E20000000DPS0',
          baseId: '73413',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '35.5',
            label: '35.5',
          },
          size: '35.5',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '5',
        sku: 'M0E20000000DPS1',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073413_1_large.jpg'],
        groupId: '73413',
        attributes: {
          articleNumberManufacturer: 'THLD ET04 SILVER',
          articleNumberMax: '73413',
          matrixId: 'M0E20000000DPS1',
          baseId: '73413',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '36',
            label: '36',
          },
          size: '36',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '6',
        sku: 'M0E20000000DPS2',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073413_1_large.jpg'],
        groupId: '73413',
        attributes: {
          articleNumberManufacturer: 'THLD ET04 SILVER',
          articleNumberMax: '73413',
          matrixId: 'M0E20000000DPS2',
          baseId: '73413',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '36.5',
            label: '36.5',
          },
          size: '36.5',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '7',
        sku: 'M0E20000000DPS3',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073413_1_large.jpg'],
        groupId: '73413',
        attributes: {
          articleNumberManufacturer: 'THLD ET04 SILVER',
          articleNumberMax: '73413',
          matrixId: 'M0E20000000DPS3',
          baseId: '73413',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '37',
            label: '37',
          },
          size: '37',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '8',
        sku: 'M0E20000000DPS4',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073413_1_large.jpg'],
        groupId: '73413',
        attributes: {
          articleNumberManufacturer: 'THLD ET04 SILVER',
          articleNumberMax: '73413',
          matrixId: 'M0E20000000DPS4',
          baseId: '73413',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '37.5',
            label: '37.5',
          },
          size: '37.5',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '9',
        sku: 'M0E20000000DPS5',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073413_1_large.jpg'],
        groupId: '73413',
        attributes: {
          articleNumberManufacturer: 'THLD ET04 SILVER',
          articleNumberMax: '73413',
          matrixId: 'M0E20000000DPS5',
          baseId: '73413',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '38',
            label: '38',
          },
          size: '38',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '10',
        sku: 'M0E20000000DPS6',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073413_1_large.jpg'],
        groupId: '73413',
        attributes: {
          articleNumberManufacturer: 'THLD ET04 SILVER',
          articleNumberMax: '73413',
          matrixId: 'M0E20000000DPS6',
          baseId: '73413',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '38.5',
            label: '38.5',
          },
          size: '38.5',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '11',
        sku: 'M0E20000000DPS7',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073413_1_large.jpg'],
        groupId: '73413',
        attributes: {
          articleNumberManufacturer: 'THLD ET04 SILVER',
          articleNumberMax: '73413',
          matrixId: 'M0E20000000DPS7',
          baseId: '73413',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '39',
            label: '39',
          },
          size: '39',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '12',
        sku: 'M0E20000000DPS8',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073413_1_large.jpg'],
        groupId: '73413',
        attributes: {
          articleNumberManufacturer: 'THLD ET04 SILVER',
          articleNumberMax: '73413',
          matrixId: 'M0E20000000DPS8',
          baseId: '73413',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '39.5',
            label: '39.5',
          },
          size: '39.5',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '13',
        sku: 'M0E20000000DPS9',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073413_1_large.jpg'],
        groupId: '73413',
        attributes: {
          articleNumberManufacturer: 'THLD ET04 SILVER',
          articleNumberMax: '73413',
          matrixId: 'M0E20000000DPS9',
          baseId: '73413',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '40',
            label: '40',
          },
          size: '40',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '14',
        sku: 'M0E20000000DPSA',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073413_1_large.jpg'],
        groupId: '73413',
        attributes: {
          articleNumberManufacturer: 'THLD ET04 SILVER',
          articleNumberMax: '73413',
          matrixId: 'M0E20000000DPSA',
          baseId: '73413',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '40.5',
            label: '40.5',
          },
          size: '40.5',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '15',
        sku: 'M0E20000000DPSB',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073413_1_large.jpg'],
        groupId: '73413',
        attributes: {
          articleNumberManufacturer: 'THLD ET04 SILVER',
          articleNumberMax: '73413',
          matrixId: 'M0E20000000DPSB',
          baseId: '73413',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '41',
            label: '41',
          },
          size: '41',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '16',
        sku: 'M0E20000000DPSC',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073413_1_large.jpg'],
        groupId: '73413',
        attributes: {
          articleNumberManufacturer: 'THLD ET04 SILVER',
          articleNumberMax: '73413',
          matrixId: 'M0E20000000DPSC',
          baseId: '73413',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '41.5',
            label: '41.5',
          },
          size: '41.5',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '17',
        sku: 'M0E20000000DPSD',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073413_1_large.jpg'],
        groupId: '73413',
        attributes: {
          articleNumberManufacturer: 'THLD ET04 SILVER',
          articleNumberMax: '73413',
          matrixId: 'M0E20000000DPSD',
          baseId: '73413',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '42',
            label: '42',
          },
          size: '42',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '18',
        sku: 'M0E20000000DPSE',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073413_1_large.jpg'],
        groupId: '73413',
        attributes: {
          articleNumberManufacturer: 'THLD ET04 SILVER',
          articleNumberMax: '73413',
          matrixId: 'M0E20000000DPSE',
          baseId: '73413',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '42.5',
            label: '42.5',
          },
          size: '42.5',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '19',
        sku: 'M0E20000000DPSF',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073413_1_large.jpg'],
        groupId: '73413',
        attributes: {
          articleNumberManufacturer: 'THLD ET04 SILVER',
          articleNumberMax: '73413',
          matrixId: 'M0E20000000DPSF',
          baseId: '73413',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '43',
            label: '43',
          },
          size: '43',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '20',
        sku: 'M0E20000000DPSG',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073413_1_large.jpg'],
        groupId: '73413',
        attributes: {
          articleNumberManufacturer: 'THLD ET04 SILVER',
          articleNumberMax: '73413',
          matrixId: 'M0E20000000DPSG',
          baseId: '73413',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '43.5',
            label: '43.5',
          },
          size: '43.5',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '21',
        sku: 'M0E20000000DPSH',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073413_1_large.jpg'],
        groupId: '73413',
        attributes: {
          articleNumberManufacturer: 'THLD ET04 SILVER',
          articleNumberMax: '73413',
          matrixId: 'M0E20000000DPSH',
          baseId: '73413',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '44',
            label: '44',
          },
          size: '44',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '22',
        sku: 'M0E20000000DPSI',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073413_1_large.jpg'],
        groupId: '73413',
        attributes: {
          articleNumberManufacturer: 'THLD ET04 SILVER',
          articleNumberMax: '73413',
          matrixId: 'M0E20000000DPSI',
          baseId: '73413',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '44.5',
            label: '44.5',
          },
          size: '44.5',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '23',
        sku: 'M0E20000000DPSJ',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073413_1_large.jpg'],
        groupId: '73413',
        attributes: {
          articleNumberManufacturer: 'THLD ET04 SILVER',
          articleNumberMax: '73413',
          matrixId: 'M0E20000000DPSJ',
          baseId: '73413',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '45',
            label: '45',
          },
          size: '45',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '24',
        sku: 'M0E20000000DPSK',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073413_1_large.jpg'],
        groupId: '73413',
        attributes: {
          articleNumberManufacturer: 'THLD ET04 SILVER',
          articleNumberMax: '73413',
          matrixId: 'M0E20000000DPSK',
          baseId: '73413',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '45.5',
            label: '45.5',
          },
          size: '45.5',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '25',
        sku: 'M0E20000000DPSL',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073413_1_large.jpg'],
        groupId: '73413',
        attributes: {
          articleNumberManufacturer: 'THLD ET04 SILVER',
          articleNumberMax: '73413',
          matrixId: 'M0E20000000DPSL',
          baseId: '73413',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '46',
            label: '46',
          },
          size: '46',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
    ],
    _url: '/',
  },
  {
    productId: '79568202-7381-4c78-976b-379c25090cd9',
    version: '1355',
    name: 'Kleid Ki 6? Who are you? gold',
    slug: 'ki6-whoareyou-kleid-AB32129-gold',
    categories: [
      {
        categoryId: '537e55cc-c6f8-4c22-8f09-64bbc2175bc3',
      },
      {
        categoryId: 'c905031a-7254-4960-a10d-a45a62b6030a',
      },
    ],
    variants: [
      {
        id: '1',
        sku: 'M0E20000000E1PI',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079654_1_large.jpg'],
        groupId: '79654',
        attributes: {
          articleNumberManufacturer: 'AB32 129',
          articleNumberMax: '79654',
          matrixId: 'M0E20000000E1PI',
          baseId: '79654',
          designer: {
            key: 'whoareyou',
            label: 'Who are you?',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xxs',
            label: 'XXS',
          },
          size: '34',
          color: {
            key: 'gold',
            label: 'gold',
          },
          colorFreeDefinition: 'gold',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '2',
        sku: 'M0E20000000E1PJ',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079654_1_large.jpg'],
        groupId: '79654',
        attributes: {
          articleNumberManufacturer: 'AB32 129',
          articleNumberMax: '79654',
          matrixId: 'M0E20000000E1PJ',
          baseId: '79654',
          designer: {
            key: 'whoareyou',
            label: 'Who are you?',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xxs',
            label: 'XXS',
          },
          size: '36',
          color: {
            key: 'gold',
            label: 'gold',
          },
          colorFreeDefinition: 'gold',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '3',
        sku: 'M0E20000000E1PK',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079654_1_large.jpg'],
        groupId: '79654',
        attributes: {
          articleNumberManufacturer: 'AB32 129',
          articleNumberMax: '79654',
          matrixId: 'M0E20000000E1PK',
          baseId: '79654',
          designer: {
            key: 'whoareyou',
            label: 'Who are you?',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xxs',
            label: 'XXS',
          },
          size: '38',
          color: {
            key: 'gold',
            label: 'gold',
          },
          colorFreeDefinition: 'gold',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '4',
        sku: 'M0E20000000E1PL',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079654_1_large.jpg'],
        groupId: '79654',
        attributes: {
          articleNumberManufacturer: 'AB32 129',
          articleNumberMax: '79654',
          matrixId: 'M0E20000000E1PL',
          baseId: '79654',
          designer: {
            key: 'whoareyou',
            label: 'Who are you?',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xs',
            label: 'XS',
          },
          size: '40',
          color: {
            key: 'gold',
            label: 'gold',
          },
          colorFreeDefinition: 'gold',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '5',
        sku: 'M0E20000000E1PM',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079654_1_large.jpg'],
        groupId: '79654',
        attributes: {
          articleNumberManufacturer: 'AB32 129',
          articleNumberMax: '79654',
          matrixId: 'M0E20000000E1PM',
          baseId: '79654',
          designer: {
            key: 'whoareyou',
            label: 'Who are you?',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 's',
            label: 'S',
          },
          size: '42',
          color: {
            key: 'gold',
            label: 'gold',
          },
          colorFreeDefinition: 'gold',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '6',
        sku: 'M0E20000000E1PN',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079654_1_large.jpg'],
        groupId: '79654',
        attributes: {
          articleNumberManufacturer: 'AB32 129',
          articleNumberMax: '79654',
          matrixId: 'M0E20000000E1PN',
          baseId: '79654',
          designer: {
            key: 'whoareyou',
            label: 'Who are you?',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'm',
            label: 'M',
          },
          size: '44',
          color: {
            key: 'gold',
            label: 'gold',
          },
          colorFreeDefinition: 'gold',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '7',
        sku: 'M0E20000000E1PO',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079654_1_large.jpg'],
        groupId: '79654',
        attributes: {
          articleNumberManufacturer: 'AB32 129',
          articleNumberMax: '79654',
          matrixId: 'M0E20000000E1PO',
          baseId: '79654',
          designer: {
            key: 'whoareyou',
            label: 'Who are you?',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'l',
            label: 'L',
          },
          size: '46',
          color: {
            key: 'gold',
            label: 'gold',
          },
          colorFreeDefinition: 'gold',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '8',
        sku: 'M0E20000000E1PP',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079654_1_large.jpg'],
        groupId: '79654',
        attributes: {
          articleNumberManufacturer: 'AB32 129',
          articleNumberMax: '79654',
          matrixId: 'M0E20000000E1PP',
          baseId: '79654',
          designer: {
            key: 'whoareyou',
            label: 'Who are you?',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xl',
            label: 'XL',
          },
          size: '48',
          color: {
            key: 'gold',
            label: 'gold',
          },
          colorFreeDefinition: 'gold',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '9',
        sku: 'M0E20000000E1PQ',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079654_1_large.jpg'],
        groupId: '79654',
        attributes: {
          articleNumberManufacturer: 'AB32 129',
          articleNumberMax: '79654',
          matrixId: 'M0E20000000E1PQ',
          baseId: '79654',
          designer: {
            key: 'whoareyou',
            label: 'Who are you?',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xxl',
            label: 'XXL',
          },
          size: '50',
          color: {
            key: 'gold',
            label: 'gold',
          },
          colorFreeDefinition: 'gold',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '10',
        sku: 'M0E20000000E1PR',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079654_1_large.jpg'],
        groupId: '79654',
        attributes: {
          articleNumberManufacturer: 'AB32 129',
          articleNumberMax: '79654',
          matrixId: 'M0E20000000E1PR',
          baseId: '79654',
          designer: {
            key: 'whoareyou',
            label: 'Who are you?',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xxxl',
            label: 'XXXL',
          },
          size: '52',
          color: {
            key: 'gold',
            label: 'gold',
          },
          colorFreeDefinition: 'gold',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '11',
        sku: 'M0E20000000E1PS',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079654_1_large.jpg'],
        groupId: '79654',
        attributes: {
          articleNumberManufacturer: 'AB32 129',
          articleNumberMax: '79654',
          matrixId: 'M0E20000000E1PS',
          baseId: '79654',
          designer: {
            key: 'whoareyou',
            label: 'Who are you?',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xxxl',
            label: 'XXXL',
          },
          size: '54',
          color: {
            key: 'gold',
            label: 'gold',
          },
          colorFreeDefinition: 'gold',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '12',
        sku: 'M0E20000000E1PT',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079654_1_large.jpg'],
        groupId: '79654',
        attributes: {
          articleNumberManufacturer: 'AB32 129',
          articleNumberMax: '79654',
          matrixId: 'M0E20000000E1PT',
          baseId: '79654',
          designer: {
            key: 'whoareyou',
            label: 'Who are you?',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xxxl',
            label: 'XXXL',
          },
          size: '56',
          color: {
            key: 'gold',
            label: 'gold',
          },
          colorFreeDefinition: 'gold',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '13',
        sku: 'M0E20000000E1PU',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079654_1_large.jpg'],
        groupId: '79654',
        attributes: {
          articleNumberManufacturer: 'AB32 129',
          articleNumberMax: '79654',
          matrixId: 'M0E20000000E1PU',
          baseId: '79654',
          designer: {
            key: 'whoareyou',
            label: 'Who are you?',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xxxl',
            label: 'XXXL',
          },
          size: '58',
          color: {
            key: 'gold',
            label: 'gold',
          },
          colorFreeDefinition: 'gold',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
    ],
    _url: '/',
  },
  {
    productId: 'aae59a92-f94c-45b2-8e44-4441dc00cb84',
    version: '2643',
    name: 'Sneakers Philippe Model weiß',
    slug: 'philippemodel-sneakers-weiss-cielo',
    categories: [
      {
        categoryId: 'a451fe7c-e9c2-4633-99ab-07c9b297dd03',
      },
      {
        categoryId: 'c35cdb2a-7451-46bf-bfba-174af9146c1e',
      },
    ],
    variants: [
      {
        id: '1',
        sku: 'M0E20000000DPXM',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073421_1_large.jpg'],
        groupId: '73421',
        attributes: {
          articleNumberManufacturer: 'MDHU VS01 WHITE CIELO',
          articleNumberMax: '73421',
          matrixId: 'M0E20000000DPXM',
          baseId: '73421',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '34',
            label: '34',
          },
          size: '34',
          color: {
            key: 'white',
            label: 'weiss',
          },
          colorFreeDefinition: 'weiß',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '2',
        sku: 'M0E20000000DPXN',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073421_1_large.jpg'],
        groupId: '73421',
        attributes: {
          articleNumberManufacturer: 'MDHU VS01 WHITE CIELO',
          articleNumberMax: '73421',
          matrixId: 'M0E20000000DPXN',
          baseId: '73421',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '34.5',
            label: '34.5',
          },
          size: '34.5',
          color: {
            key: 'white',
            label: 'weiss',
          },
          colorFreeDefinition: 'weiß',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '3',
        sku: 'M0E20000000DPXO',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073421_1_large.jpg'],
        groupId: '73421',
        attributes: {
          articleNumberManufacturer: 'MDHU VS01 WHITE CIELO',
          articleNumberMax: '73421',
          matrixId: 'M0E20000000DPXO',
          baseId: '73421',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '35',
            label: '35',
          },
          size: '35',
          color: {
            key: 'white',
            label: 'weiss',
          },
          colorFreeDefinition: 'weiß',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '4',
        sku: 'M0E20000000DPXP',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073421_1_large.jpg'],
        groupId: '73421',
        attributes: {
          articleNumberManufacturer: 'MDHU VS01 WHITE CIELO',
          articleNumberMax: '73421',
          matrixId: 'M0E20000000DPXP',
          baseId: '73421',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '35.5',
            label: '35.5',
          },
          size: '35.5',
          color: {
            key: 'white',
            label: 'weiss',
          },
          colorFreeDefinition: 'weiß',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '5',
        sku: 'M0E20000000DPXQ',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073421_1_large.jpg'],
        groupId: '73421',
        attributes: {
          articleNumberManufacturer: 'MDHU VS01 WHITE CIELO',
          articleNumberMax: '73421',
          matrixId: 'M0E20000000DPXQ',
          baseId: '73421',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '36',
            label: '36',
          },
          size: '36',
          color: {
            key: 'white',
            label: 'weiss',
          },
          colorFreeDefinition: 'weiß',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '6',
        sku: 'M0E20000000DPXR',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073421_1_large.jpg'],
        groupId: '73421',
        attributes: {
          articleNumberManufacturer: 'MDHU VS01 WHITE CIELO',
          articleNumberMax: '73421',
          matrixId: 'M0E20000000DPXR',
          baseId: '73421',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '36.5',
            label: '36.5',
          },
          size: '36.5',
          color: {
            key: 'white',
            label: 'weiss',
          },
          colorFreeDefinition: 'weiß',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '7',
        sku: 'M0E20000000DPXS',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073421_1_large.jpg'],
        groupId: '73421',
        attributes: {
          articleNumberManufacturer: 'MDHU VS01 WHITE CIELO',
          articleNumberMax: '73421',
          matrixId: 'M0E20000000DPXS',
          baseId: '73421',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '37',
            label: '37',
          },
          size: '37',
          color: {
            key: 'white',
            label: 'weiss',
          },
          colorFreeDefinition: 'weiß',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '8',
        sku: 'M0E20000000DPXT',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073421_1_large.jpg'],
        groupId: '73421',
        attributes: {
          articleNumberManufacturer: 'MDHU VS01 WHITE CIELO',
          articleNumberMax: '73421',
          matrixId: 'M0E20000000DPXT',
          baseId: '73421',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '37.5',
            label: '37.5',
          },
          size: '37.5',
          color: {
            key: 'white',
            label: 'weiss',
          },
          colorFreeDefinition: 'weiß',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '9',
        sku: 'M0E20000000DPXU',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073421_1_large.jpg'],
        groupId: '73421',
        attributes: {
          articleNumberManufacturer: 'MDHU VS01 WHITE CIELO',
          articleNumberMax: '73421',
          matrixId: 'M0E20000000DPXU',
          baseId: '73421',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '38',
            label: '38',
          },
          size: '38',
          color: {
            key: 'white',
            label: 'weiss',
          },
          colorFreeDefinition: 'weiß',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '10',
        sku: 'M0E20000000DPXV',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073421_1_large.jpg'],
        groupId: '73421',
        attributes: {
          articleNumberManufacturer: 'MDHU VS01 WHITE CIELO',
          articleNumberMax: '73421',
          matrixId: 'M0E20000000DPXV',
          baseId: '73421',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '38.5',
            label: '38.5',
          },
          size: '38.5',
          color: {
            key: 'white',
            label: 'weiss',
          },
          colorFreeDefinition: 'weiß',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '11',
        sku: 'M0E20000000DPXW',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073421_1_large.jpg'],
        groupId: '73421',
        attributes: {
          articleNumberManufacturer: 'MDHU VS01 WHITE CIELO',
          articleNumberMax: '73421',
          matrixId: 'M0E20000000DPXW',
          baseId: '73421',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '39',
            label: '39',
          },
          size: '39',
          color: {
            key: 'white',
            label: 'weiss',
          },
          colorFreeDefinition: 'weiß',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '12',
        sku: 'M0E20000000DPXX',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073421_1_large.jpg'],
        groupId: '73421',
        attributes: {
          articleNumberManufacturer: 'MDHU VS01 WHITE CIELO',
          articleNumberMax: '73421',
          matrixId: 'M0E20000000DPXX',
          baseId: '73421',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '39.5',
            label: '39.5',
          },
          size: '39.5',
          color: {
            key: 'white',
            label: 'weiss',
          },
          colorFreeDefinition: 'weiß',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '13',
        sku: 'M0E20000000DPXY',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073421_1_large.jpg'],
        groupId: '73421',
        attributes: {
          articleNumberManufacturer: 'MDHU VS01 WHITE CIELO',
          articleNumberMax: '73421',
          matrixId: 'M0E20000000DPXY',
          baseId: '73421',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '40',
            label: '40',
          },
          size: '40',
          color: {
            key: 'white',
            label: 'weiss',
          },
          colorFreeDefinition: 'weiß',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '14',
        sku: 'M0E20000000DPXZ',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073421_1_large.jpg'],
        groupId: '73421',
        attributes: {
          articleNumberManufacturer: 'MDHU VS01 WHITE CIELO',
          articleNumberMax: '73421',
          matrixId: 'M0E20000000DPXZ',
          baseId: '73421',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '40.5',
            label: '40.5',
          },
          size: '40.5',
          color: {
            key: 'white',
            label: 'weiss',
          },
          colorFreeDefinition: 'weiß',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '15',
        sku: 'M0E20000000DPY0',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073421_1_large.jpg'],
        groupId: '73421',
        attributes: {
          articleNumberManufacturer: 'MDHU VS01 WHITE CIELO',
          articleNumberMax: '73421',
          matrixId: 'M0E20000000DPY0',
          baseId: '73421',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '41',
            label: '41',
          },
          size: '41',
          color: {
            key: 'white',
            label: 'weiss',
          },
          colorFreeDefinition: 'weiß',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '16',
        sku: 'M0E20000000DPY1',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073421_1_large.jpg'],
        groupId: '73421',
        attributes: {
          articleNumberManufacturer: 'MDHU VS01 WHITE CIELO',
          articleNumberMax: '73421',
          matrixId: 'M0E20000000DPY1',
          baseId: '73421',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '41.5',
            label: '41.5',
          },
          size: '41.5',
          color: {
            key: 'white',
            label: 'weiss',
          },
          colorFreeDefinition: 'weiß',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '17',
        sku: 'M0E20000000DPY2',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073421_1_large.jpg'],
        groupId: '73421',
        attributes: {
          articleNumberManufacturer: 'MDHU VS01 WHITE CIELO',
          articleNumberMax: '73421',
          matrixId: 'M0E20000000DPY2',
          baseId: '73421',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '42',
            label: '42',
          },
          size: '42',
          color: {
            key: 'white',
            label: 'weiss',
          },
          colorFreeDefinition: 'weiß',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '18',
        sku: 'M0E20000000DPY3',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073421_1_large.jpg'],
        groupId: '73421',
        attributes: {
          articleNumberManufacturer: 'MDHU VS01 WHITE CIELO',
          articleNumberMax: '73421',
          matrixId: 'M0E20000000DPY3',
          baseId: '73421',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '42.5',
            label: '42.5',
          },
          size: '42.5',
          color: {
            key: 'white',
            label: 'weiss',
          },
          colorFreeDefinition: 'weiß',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '19',
        sku: 'M0E20000000DPY4',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073421_1_large.jpg'],
        groupId: '73421',
        attributes: {
          articleNumberManufacturer: 'MDHU VS01 WHITE CIELO',
          articleNumberMax: '73421',
          matrixId: 'M0E20000000DPY4',
          baseId: '73421',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '43',
            label: '43',
          },
          size: '43',
          color: {
            key: 'white',
            label: 'weiss',
          },
          colorFreeDefinition: 'weiß',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '20',
        sku: 'M0E20000000DPY5',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073421_1_large.jpg'],
        groupId: '73421',
        attributes: {
          articleNumberManufacturer: 'MDHU VS01 WHITE CIELO',
          articleNumberMax: '73421',
          matrixId: 'M0E20000000DPY5',
          baseId: '73421',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '43.5',
            label: '43.5',
          },
          size: '43.5',
          color: {
            key: 'white',
            label: 'weiss',
          },
          colorFreeDefinition: 'weiß',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '21',
        sku: 'M0E20000000DPY6',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073421_1_large.jpg'],
        groupId: '73421',
        attributes: {
          articleNumberManufacturer: 'MDHU VS01 WHITE CIELO',
          articleNumberMax: '73421',
          matrixId: 'M0E20000000DPY6',
          baseId: '73421',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '44',
            label: '44',
          },
          size: '44',
          color: {
            key: 'white',
            label: 'weiss',
          },
          colorFreeDefinition: 'weiß',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '22',
        sku: 'M0E20000000DPY7',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073421_1_large.jpg'],
        groupId: '73421',
        attributes: {
          articleNumberManufacturer: 'MDHU VS01 WHITE CIELO',
          articleNumberMax: '73421',
          matrixId: 'M0E20000000DPY7',
          baseId: '73421',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '44.5',
            label: '44.5',
          },
          size: '44.5',
          color: {
            key: 'white',
            label: 'weiss',
          },
          colorFreeDefinition: 'weiß',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '23',
        sku: 'M0E20000000DPY8',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073421_1_large.jpg'],
        groupId: '73421',
        attributes: {
          articleNumberManufacturer: 'MDHU VS01 WHITE CIELO',
          articleNumberMax: '73421',
          matrixId: 'M0E20000000DPY8',
          baseId: '73421',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '45',
            label: '45',
          },
          size: '45',
          color: {
            key: 'white',
            label: 'weiss',
          },
          colorFreeDefinition: 'weiß',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '24',
        sku: 'M0E20000000DPY9',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073421_1_large.jpg'],
        groupId: '73421',
        attributes: {
          articleNumberManufacturer: 'MDHU VS01 WHITE CIELO',
          articleNumberMax: '73421',
          matrixId: 'M0E20000000DPY9',
          baseId: '73421',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '45.5',
            label: '45.5',
          },
          size: '45.5',
          color: {
            key: 'white',
            label: 'weiss',
          },
          colorFreeDefinition: 'weiß',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '25',
        sku: 'M0E20000000DPYA',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073421_1_large.jpg'],
        groupId: '73421',
        attributes: {
          articleNumberManufacturer: 'MDHU VS01 WHITE CIELO',
          articleNumberMax: '73421',
          matrixId: 'M0E20000000DPYA',
          baseId: '73421',
          designer: {
            key: 'philippemodel',
            label: 'Philippe Model',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '46',
            label: '46',
          },
          size: '46',
          color: {
            key: 'white',
            label: 'weiss',
          },
          colorFreeDefinition: 'weiß',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
    ],
    _url: '/',
  },
  {
    productId: '5c3718ac-88c3-43ac-9066-fe0f096a3c81',
    version: '40',
    name: 'Tasche „Greyson“ Guess',
    slug: 'guess-tasche-greyson-30230-hellrosa',
    categories: [
      {
        categoryId: 'd856d1ca-d90b-4f5c-87ff-1c859763a174',
      },
    ],
    variants: [
      {
        id: '1',
        sku: 'A0E200000001YVZ',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073207_1_large.jpg'],
        groupId: '73207',
        attributes: {
          articleNumberManufacturer: 'HWVG49 30230 LTR',
          articleNumberMax: '73207',
          matrixId: 'A0E200000001YVZ',
          baseId: '73207',
          designer: {
            key: 'guess',
            label: 'Guess',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'oneSize',
            label: 'one Size',
          },
          size: 'one size',
          color: {
            key: 'pink',
            label: 'rosa',
          },
          colorFreeDefinition: 'hellrosa',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
    ],
    _url: '/',
  },
  {
    productId: '4d1c5585-1be8-472f-b41b-219c656c9377',
    version: '46',
    name: 'Brieftasche Mia Bag nude',
    slug: 'miabag-brieftasche-15106-beige',
    categories: [
      {
        categoryId: '25e0bef5-6b8a-4a2b-b64f-bd35f4038b61',
      },
      {
        categoryId: '9c56920c-d158-4139-8b8b-8adb429033c9',
      },
    ],
    variants: [
      {
        id: '1',
        sku: 'A0E2000000026QZ',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082204_1_medium.jpg'],
        groupId: '82204',
        attributes: {
          articleNumberManufacturer: '15106 CIPRIA',
          articleNumberMax: '82204',
          matrixId: 'A0E2000000026QZ',
          baseId: '82204',
          designer: {
            key: 'miabag',
            label: 'Mia Bag',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'oneSize',
            label: 'one Size',
          },
          size: 'one size',
          color: {
            key: 'beige',
            label: 'beige',
          },
          colorFreeDefinition: 'nude',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
    ],
    _url: '/',
  },
  {
    productId: '3a7b081a-5fc6-4ea7-8d0c-440968cac05b',
    version: '804',
    name: 'T-Shirt Majestic Filatures grau',
    slug: 'majestic-filatures-tshirt-E151704-grau',
    categories: [
      {
        categoryId: '5c1e2de3-3cf1-4b37-9364-2fd7db47b4c5',
      },
      {
        categoryId: '537e55cc-c6f8-4c22-8f09-64bbc2175bc3',
      },
    ],
    variants: [
      {
        id: '1',
        sku: 'M0E20000000EEVX',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081410_1_large.jpg'],
        groupId: '81410',
        attributes: {
          articleNumberManufacturer: 'E15 17 04 250',
          articleNumberMax: '81410',
          matrixId: 'M0E20000000EEVX',
          baseId: '81410',
          designer: {
            key: 'majesticfilatures',
            label: 'Majestic Filatures',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'xs',
            label: 'XS',
          },
          size: '0',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '2',
        sku: 'M0E20000000EEVY',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081410_1_large.jpg'],
        groupId: '81410',
        attributes: {
          articleNumberManufacturer: 'E15 17 04 250',
          articleNumberMax: '81410',
          matrixId: 'M0E20000000EEVY',
          baseId: '81410',
          designer: {
            key: 'majesticfilatures',
            label: 'Majestic Filatures',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 's',
            label: 'S',
          },
          size: '1',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '3',
        sku: 'M0E20000000EEVZ',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081410_1_large.jpg'],
        groupId: '81410',
        attributes: {
          articleNumberManufacturer: 'E15 17 04 250',
          articleNumberMax: '81410',
          matrixId: 'M0E20000000EEVZ',
          baseId: '81410',
          designer: {
            key: 'majesticfilatures',
            label: 'Majestic Filatures',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'm',
            label: 'M',
          },
          size: '2',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '4',
        sku: 'M0E20000000EEW0',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081410_1_large.jpg'],
        groupId: '81410',
        attributes: {
          articleNumberManufacturer: 'E15 17 04 250',
          articleNumberMax: '81410',
          matrixId: 'M0E20000000EEW0',
          baseId: '81410',
          designer: {
            key: 'majesticfilatures',
            label: 'Majestic Filatures',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'l',
            label: 'L',
          },
          size: '3',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '5',
        sku: 'M0E20000000EEW1',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081410_1_large.jpg'],
        groupId: '81410',
        attributes: {
          articleNumberManufacturer: 'E15 17 04 250',
          articleNumberMax: '81410',
          matrixId: 'M0E20000000EEW1',
          baseId: '81410',
          designer: {
            key: 'majesticfilatures',
            label: 'Majestic Filatures',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'xl',
            label: 'XL',
          },
          size: '4',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '6',
        sku: 'M0E20000000EEW2',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081410_1_large.jpg'],
        groupId: '81410',
        attributes: {
          articleNumberManufacturer: 'E15 17 04 250',
          articleNumberMax: '81410',
          matrixId: 'M0E20000000EEW2',
          baseId: '81410',
          designer: {
            key: 'majesticfilatures',
            label: 'Majestic Filatures',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'xxl',
            label: 'XXL',
          },
          size: '5',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '7',
        sku: 'M0E20000000EEW3',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081410_1_large.jpg'],
        groupId: '81410',
        attributes: {
          articleNumberManufacturer: 'E15 17 04 250',
          articleNumberMax: '81410',
          matrixId: 'M0E20000000EEW3',
          baseId: '81410',
          designer: {
            key: 'majesticfilatures',
            label: 'Majestic Filatures',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'xxxl',
            label: 'XXXL',
          },
          size: '6',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '8',
        sku: 'M0E20000000EEW4',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081410_1_large.jpg'],
        groupId: '81410',
        attributes: {
          articleNumberManufacturer: 'E15 17 04 250',
          articleNumberMax: '81410',
          matrixId: 'M0E20000000EEW4',
          baseId: '81410',
          designer: {
            key: 'majesticfilatures',
            label: 'Majestic Filatures',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'xxxl',
            label: 'XXXL',
          },
          size: '7',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
    ],
    _url: '/',
  },
  {
    productId: 'a59eee16-8159-4540-9ca7-3df2d8418580',
    version: '1331',
    name: 'Blazer Pinko schwarz',
    slug: 'pinko-blazer-1B10ZP-schwarz',
    categories: [
      {
        categoryId: '537e55cc-c6f8-4c22-8f09-64bbc2175bc3',
      },
      {
        categoryId: '282ab8c2-16dd-4858-bf27-55caf1cd1327',
      },
    ],
    variants: [
      {
        id: '1',
        sku: 'M0E20000000DKMX',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/072663_1_large.jpg'],
        groupId: '72663',
        attributes: {
          articleNumberManufacturer: '1B10ZP 4385 Z99',
          articleNumberMax: '72663',
          matrixId: 'M0E20000000DKMX',
          baseId: '72663',
          designer: {
            key: 'pinko',
            label: 'Pinko',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xxs',
            label: 'XXS',
          },
          size: '34',
          color: {
            key: 'black',
            label: 'schwarz',
          },
          colorFreeDefinition: 'schwarz',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '2',
        sku: 'M0E20000000DKMY',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/072663_1_large.jpg'],
        groupId: '72663',
        attributes: {
          articleNumberManufacturer: '1B10ZP 4385 Z99',
          articleNumberMax: '72663',
          matrixId: 'M0E20000000DKMY',
          baseId: '72663',
          designer: {
            key: 'pinko',
            label: 'Pinko',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xxs',
            label: 'XXS',
          },
          size: '36',
          color: {
            key: 'black',
            label: 'schwarz',
          },
          colorFreeDefinition: 'schwarz',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '3',
        sku: 'M0E20000000DKMZ',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/072663_1_large.jpg'],
        groupId: '72663',
        attributes: {
          articleNumberManufacturer: '1B10ZP 4385 Z99',
          articleNumberMax: '72663',
          matrixId: 'M0E20000000DKMZ',
          baseId: '72663',
          designer: {
            key: 'pinko',
            label: 'Pinko',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xxs',
            label: 'XXS',
          },
          size: '38',
          color: {
            key: 'black',
            label: 'schwarz',
          },
          colorFreeDefinition: 'schwarz',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '4',
        sku: 'M0E20000000DKN0',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/072663_1_large.jpg'],
        groupId: '72663',
        attributes: {
          articleNumberManufacturer: '1B10ZP 4385 Z99',
          articleNumberMax: '72663',
          matrixId: 'M0E20000000DKN0',
          baseId: '72663',
          designer: {
            key: 'pinko',
            label: 'Pinko',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xs',
            label: 'XS',
          },
          size: '40',
          color: {
            key: 'black',
            label: 'schwarz',
          },
          colorFreeDefinition: 'schwarz',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '5',
        sku: 'M0E20000000DKN1',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/072663_1_large.jpg'],
        groupId: '72663',
        attributes: {
          articleNumberManufacturer: '1B10ZP 4385 Z99',
          articleNumberMax: '72663',
          matrixId: 'M0E20000000DKN1',
          baseId: '72663',
          designer: {
            key: 'pinko',
            label: 'Pinko',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 's',
            label: 'S',
          },
          size: '42',
          color: {
            key: 'black',
            label: 'schwarz',
          },
          colorFreeDefinition: 'schwarz',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '6',
        sku: 'M0E20000000DKN2',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/072663_1_large.jpg'],
        groupId: '72663',
        attributes: {
          articleNumberManufacturer: '1B10ZP 4385 Z99',
          articleNumberMax: '72663',
          matrixId: 'M0E20000000DKN2',
          baseId: '72663',
          designer: {
            key: 'pinko',
            label: 'Pinko',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'm',
            label: 'M',
          },
          size: '44',
          color: {
            key: 'black',
            label: 'schwarz',
          },
          colorFreeDefinition: 'schwarz',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '7',
        sku: 'M0E20000000DKN3',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/072663_1_large.jpg'],
        groupId: '72663',
        attributes: {
          articleNumberManufacturer: '1B10ZP 4385 Z99',
          articleNumberMax: '72663',
          matrixId: 'M0E20000000DKN3',
          baseId: '72663',
          designer: {
            key: 'pinko',
            label: 'Pinko',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'l',
            label: 'L',
          },
          size: '46',
          color: {
            key: 'black',
            label: 'schwarz',
          },
          colorFreeDefinition: 'schwarz',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '8',
        sku: 'M0E20000000DKN4',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/072663_1_large.jpg'],
        groupId: '72663',
        attributes: {
          articleNumberManufacturer: '1B10ZP 4385 Z99',
          articleNumberMax: '72663',
          matrixId: 'M0E20000000DKN4',
          baseId: '72663',
          designer: {
            key: 'pinko',
            label: 'Pinko',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xl',
            label: 'XL',
          },
          size: '48',
          color: {
            key: 'black',
            label: 'schwarz',
          },
          colorFreeDefinition: 'schwarz',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '9',
        sku: 'M0E20000000DKN5',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/072663_1_large.jpg'],
        groupId: '72663',
        attributes: {
          articleNumberManufacturer: '1B10ZP 4385 Z99',
          articleNumberMax: '72663',
          matrixId: 'M0E20000000DKN5',
          baseId: '72663',
          designer: {
            key: 'pinko',
            label: 'Pinko',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xxl',
            label: 'XXL',
          },
          size: '50',
          color: {
            key: 'black',
            label: 'schwarz',
          },
          colorFreeDefinition: 'schwarz',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '10',
        sku: 'M0E20000000DKN6',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/072663_1_large.jpg'],
        groupId: '72663',
        attributes: {
          articleNumberManufacturer: '1B10ZP 4385 Z99',
          articleNumberMax: '72663',
          matrixId: 'M0E20000000DKN6',
          baseId: '72663',
          designer: {
            key: 'pinko',
            label: 'Pinko',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xxxl',
            label: 'XXXL',
          },
          size: '52',
          color: {
            key: 'black',
            label: 'schwarz',
          },
          colorFreeDefinition: 'schwarz',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '11',
        sku: 'M0E20000000DKN7',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/072663_1_large.jpg'],
        groupId: '72663',
        attributes: {
          articleNumberManufacturer: '1B10ZP 4385 Z99',
          articleNumberMax: '72663',
          matrixId: 'M0E20000000DKN7',
          baseId: '72663',
          designer: {
            key: 'pinko',
            label: 'Pinko',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xxxl',
            label: 'XXXL',
          },
          size: '54',
          color: {
            key: 'black',
            label: 'schwarz',
          },
          colorFreeDefinition: 'schwarz',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '12',
        sku: 'M0E20000000DKN8',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/072663_1_large.jpg'],
        groupId: '72663',
        attributes: {
          articleNumberManufacturer: '1B10ZP 4385 Z99',
          articleNumberMax: '72663',
          matrixId: 'M0E20000000DKN8',
          baseId: '72663',
          designer: {
            key: 'pinko',
            label: 'Pinko',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xxxl',
            label: 'XXXL',
          },
          size: '56',
          color: {
            key: 'black',
            label: 'schwarz',
          },
          colorFreeDefinition: 'schwarz',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '13',
        sku: 'M0E20000000DKN9',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/072663_1_large.jpg'],
        groupId: '72663',
        attributes: {
          articleNumberManufacturer: '1B10ZP 4385 Z99',
          articleNumberMax: '72663',
          matrixId: 'M0E20000000DKN9',
          baseId: '72663',
          designer: {
            key: 'pinko',
            label: 'Pinko',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xxxl',
            label: 'XXXL',
          },
          size: '58',
          color: {
            key: 'black',
            label: 'schwarz',
          },
          colorFreeDefinition: 'schwarz',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
    ],
    _url: '/',
  },
  {
    productId: '76a5e010-4c5c-4ab2-b3d9-5791a0c77bbb',
    version: '807',
    name: 'Pullover Kaos blau',
    slug: 'kaos-pullover-KR0123003-blau',
    categories: [
      {
        categoryId: 'b4325c23-3c9f-4e2d-ab61-6bac036cbfe0',
      },
    ],
    variants: [
      {
        id: '1',
        sku: 'M0E20000000EFHV',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081500_1_medium.jpg'],
        groupId: '81500',
        attributes: {
          articleNumberManufacturer: 'KR012 3003 BLU',
          articleNumberMax: '81500',
          matrixId: 'M0E20000000EFHV',
          baseId: '81500',
          designer: {
            key: 'kaos',
            label: 'Kaos',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xxs',
            label: 'XXS',
          },
          size: 'XXS',
          color: {
            key: 'blue',
            label: 'blau',
          },
          colorFreeDefinition: 'blau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '2',
        sku: 'M0E20000000EFHW',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081500_1_medium.jpg'],
        groupId: '81500',
        attributes: {
          articleNumberManufacturer: 'KR012 3003 BLU',
          articleNumberMax: '81500',
          matrixId: 'M0E20000000EFHW',
          baseId: '81500',
          designer: {
            key: 'kaos',
            label: 'Kaos',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xs',
            label: 'XS',
          },
          size: 'XS',
          color: {
            key: 'blue',
            label: 'blau',
          },
          colorFreeDefinition: 'blau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '3',
        sku: 'M0E20000000EFHX',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081500_1_medium.jpg'],
        groupId: '81500',
        attributes: {
          articleNumberManufacturer: 'KR012 3003 BLU',
          articleNumberMax: '81500',
          matrixId: 'M0E20000000EFHX',
          baseId: '81500',
          designer: {
            key: 'kaos',
            label: 'Kaos',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 's',
            label: 'S',
          },
          size: 'S',
          color: {
            key: 'blue',
            label: 'blau',
          },
          colorFreeDefinition: 'blau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '4',
        sku: 'M0E20000000EFHY',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081500_1_medium.jpg'],
        groupId: '81500',
        attributes: {
          articleNumberManufacturer: 'KR012 3003 BLU',
          articleNumberMax: '81500',
          matrixId: 'M0E20000000EFHY',
          baseId: '81500',
          designer: {
            key: 'kaos',
            label: 'Kaos',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'm',
            label: 'M',
          },
          size: 'M',
          color: {
            key: 'blue',
            label: 'blau',
          },
          colorFreeDefinition: 'blau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '5',
        sku: 'M0E20000000EFHZ',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081500_1_medium.jpg'],
        groupId: '81500',
        attributes: {
          articleNumberManufacturer: 'KR012 3003 BLU',
          articleNumberMax: '81500',
          matrixId: 'M0E20000000EFHZ',
          baseId: '81500',
          designer: {
            key: 'kaos',
            label: 'Kaos',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'l',
            label: 'L',
          },
          size: 'L',
          color: {
            key: 'blue',
            label: 'blau',
          },
          colorFreeDefinition: 'blau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '6',
        sku: 'M0E20000000EFI0',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081500_1_medium.jpg'],
        groupId: '81500',
        attributes: {
          articleNumberManufacturer: 'KR012 3003 BLU',
          articleNumberMax: '81500',
          matrixId: 'M0E20000000EFI0',
          baseId: '81500',
          designer: {
            key: 'kaos',
            label: 'Kaos',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xl',
            label: 'XL',
          },
          size: 'XL',
          color: {
            key: 'blue',
            label: 'blau',
          },
          colorFreeDefinition: 'blau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '7',
        sku: 'M0E20000000EFI1',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081500_1_medium.jpg'],
        groupId: '81500',
        attributes: {
          articleNumberManufacturer: 'KR012 3003 BLU',
          articleNumberMax: '81500',
          matrixId: 'M0E20000000EFI1',
          baseId: '81500',
          designer: {
            key: 'kaos',
            label: 'Kaos',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xxl',
            label: 'XXL',
          },
          size: 'XXL',
          color: {
            key: 'blue',
            label: 'blau',
          },
          colorFreeDefinition: 'blau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '8',
        sku: 'M0E20000000EFI2',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081500_1_medium.jpg'],
        groupId: '81500',
        attributes: {
          articleNumberManufacturer: 'KR012 3003 BLU',
          articleNumberMax: '81500',
          matrixId: 'M0E20000000EFI2',
          baseId: '81500',
          designer: {
            key: 'kaos',
            label: 'Kaos',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xxxl',
            label: 'XXXL',
          },
          size: 'XXXL',
          color: {
            key: 'blue',
            label: 'blau',
          },
          colorFreeDefinition: 'blau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
    ],
    _url: '/',
  },
  {
    productId: '588ce3c6-71ee-4f95-9d45-6bdab7979e40',
    version: '2613',
    name: 'Flipflops „Slim Hardware” Havaianas grau',
    slug: 'havaianas-flipflops-slim-hardware-grau',
    categories: [
      {
        categoryId: '2914a5d6-2c62-45f7-aad6-f6b521cbe54c',
      },
    ],
    variants: [
      {
        id: '1',
        sku: 'M0E20000000EKQE',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082320_1_large.jpg'],
        groupId: '82320',
        attributes: {
          articleNumberManufacturer: '4123445 5178',
          articleNumberMax: '82320',
          matrixId: 'M0E20000000EKQE',
          baseId: '82320',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '34',
            label: '34',
          },
          size: '34',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '2',
        sku: 'M0E20000000EKQF',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082320_1_large.jpg'],
        groupId: '82320',
        attributes: {
          articleNumberManufacturer: '4123445 5178',
          articleNumberMax: '82320',
          matrixId: 'M0E20000000EKQF',
          baseId: '82320',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '34.5',
            label: '34.5',
          },
          size: '34.5',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '3',
        sku: 'M0E20000000EKQG',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082320_1_large.jpg'],
        groupId: '82320',
        attributes: {
          articleNumberManufacturer: '4123445 5178',
          articleNumberMax: '82320',
          matrixId: 'M0E20000000EKQG',
          baseId: '82320',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '35',
            label: '35',
          },
          size: '35',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '4',
        sku: 'M0E20000000EKQH',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082320_1_large.jpg'],
        groupId: '82320',
        attributes: {
          articleNumberManufacturer: '4123445 5178',
          articleNumberMax: '82320',
          matrixId: 'M0E20000000EKQH',
          baseId: '82320',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '35.5',
            label: '35.5',
          },
          size: '35.5',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '5',
        sku: 'M0E20000000EKQI',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082320_1_large.jpg'],
        groupId: '82320',
        attributes: {
          articleNumberManufacturer: '4123445 5178',
          articleNumberMax: '82320',
          matrixId: 'M0E20000000EKQI',
          baseId: '82320',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '36',
            label: '36',
          },
          size: '36',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '6',
        sku: 'M0E20000000EKQJ',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082320_1_large.jpg'],
        groupId: '82320',
        attributes: {
          articleNumberManufacturer: '4123445 5178',
          articleNumberMax: '82320',
          matrixId: 'M0E20000000EKQJ',
          baseId: '82320',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '36.5',
            label: '36.5',
          },
          size: '36.5',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '7',
        sku: 'M0E20000000EKQK',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082320_1_large.jpg'],
        groupId: '82320',
        attributes: {
          articleNumberManufacturer: '4123445 5178',
          articleNumberMax: '82320',
          matrixId: 'M0E20000000EKQK',
          baseId: '82320',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '37',
            label: '37',
          },
          size: '37',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '8',
        sku: 'M0E20000000EKQL',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082320_1_large.jpg'],
        groupId: '82320',
        attributes: {
          articleNumberManufacturer: '4123445 5178',
          articleNumberMax: '82320',
          matrixId: 'M0E20000000EKQL',
          baseId: '82320',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '37.5',
            label: '37.5',
          },
          size: '37.5',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '9',
        sku: 'M0E20000000EKQM',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082320_1_large.jpg'],
        groupId: '82320',
        attributes: {
          articleNumberManufacturer: '4123445 5178',
          articleNumberMax: '82320',
          matrixId: 'M0E20000000EKQM',
          baseId: '82320',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '38',
            label: '38',
          },
          size: '38',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '10',
        sku: 'M0E20000000EKQN',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082320_1_large.jpg'],
        groupId: '82320',
        attributes: {
          articleNumberManufacturer: '4123445 5178',
          articleNumberMax: '82320',
          matrixId: 'M0E20000000EKQN',
          baseId: '82320',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '38.5',
            label: '38.5',
          },
          size: '38.5',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '11',
        sku: 'M0E20000000EKQO',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082320_1_large.jpg'],
        groupId: '82320',
        attributes: {
          articleNumberManufacturer: '4123445 5178',
          articleNumberMax: '82320',
          matrixId: 'M0E20000000EKQO',
          baseId: '82320',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '39',
            label: '39',
          },
          size: '39',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '12',
        sku: 'M0E20000000EKQP',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082320_1_large.jpg'],
        groupId: '82320',
        attributes: {
          articleNumberManufacturer: '4123445 5178',
          articleNumberMax: '82320',
          matrixId: 'M0E20000000EKQP',
          baseId: '82320',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '39.5',
            label: '39.5',
          },
          size: '39.5',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '13',
        sku: 'M0E20000000EKQQ',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082320_1_large.jpg'],
        groupId: '82320',
        attributes: {
          articleNumberManufacturer: '4123445 5178',
          articleNumberMax: '82320',
          matrixId: 'M0E20000000EKQQ',
          baseId: '82320',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '40',
            label: '40',
          },
          size: '40',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '14',
        sku: 'M0E20000000EKQR',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082320_1_large.jpg'],
        groupId: '82320',
        attributes: {
          articleNumberManufacturer: '4123445 5178',
          articleNumberMax: '82320',
          matrixId: 'M0E20000000EKQR',
          baseId: '82320',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '40.5',
            label: '40.5',
          },
          size: '40.5',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '15',
        sku: 'M0E20000000EKQS',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082320_1_large.jpg'],
        groupId: '82320',
        attributes: {
          articleNumberManufacturer: '4123445 5178',
          articleNumberMax: '82320',
          matrixId: 'M0E20000000EKQS',
          baseId: '82320',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '41',
            label: '41',
          },
          size: '41',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '16',
        sku: 'M0E20000000EKQT',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082320_1_large.jpg'],
        groupId: '82320',
        attributes: {
          articleNumberManufacturer: '4123445 5178',
          articleNumberMax: '82320',
          matrixId: 'M0E20000000EKQT',
          baseId: '82320',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '41.5',
            label: '41.5',
          },
          size: '41.5',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '17',
        sku: 'M0E20000000EKQU',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082320_1_large.jpg'],
        groupId: '82320',
        attributes: {
          articleNumberManufacturer: '4123445 5178',
          articleNumberMax: '82320',
          matrixId: 'M0E20000000EKQU',
          baseId: '82320',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '42',
            label: '42',
          },
          size: '42',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '18',
        sku: 'M0E20000000EKQV',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082320_1_large.jpg'],
        groupId: '82320',
        attributes: {
          articleNumberManufacturer: '4123445 5178',
          articleNumberMax: '82320',
          matrixId: 'M0E20000000EKQV',
          baseId: '82320',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '42.5',
            label: '42.5',
          },
          size: '42.5',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '19',
        sku: 'M0E20000000EKQW',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082320_1_large.jpg'],
        groupId: '82320',
        attributes: {
          articleNumberManufacturer: '4123445 5178',
          articleNumberMax: '82320',
          matrixId: 'M0E20000000EKQW',
          baseId: '82320',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '43',
            label: '43',
          },
          size: '43',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '20',
        sku: 'M0E20000000EKQX',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082320_1_large.jpg'],
        groupId: '82320',
        attributes: {
          articleNumberManufacturer: '4123445 5178',
          articleNumberMax: '82320',
          matrixId: 'M0E20000000EKQX',
          baseId: '82320',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '43.5',
            label: '43.5',
          },
          size: '43.5',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '21',
        sku: 'M0E20000000EKQY',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082320_1_large.jpg'],
        groupId: '82320',
        attributes: {
          articleNumberManufacturer: '4123445 5178',
          articleNumberMax: '82320',
          matrixId: 'M0E20000000EKQY',
          baseId: '82320',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '44',
            label: '44',
          },
          size: '44',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '22',
        sku: 'M0E20000000EKQZ',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082320_1_large.jpg'],
        groupId: '82320',
        attributes: {
          articleNumberManufacturer: '4123445 5178',
          articleNumberMax: '82320',
          matrixId: 'M0E20000000EKQZ',
          baseId: '82320',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '44.5',
            label: '44.5',
          },
          size: '44.5',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '23',
        sku: 'M0E20000000EKR0',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082320_1_large.jpg'],
        groupId: '82320',
        attributes: {
          articleNumberManufacturer: '4123445 5178',
          articleNumberMax: '82320',
          matrixId: 'M0E20000000EKR0',
          baseId: '82320',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '45',
            label: '45',
          },
          size: '45',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '24',
        sku: 'M0E20000000EKR1',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082320_1_large.jpg'],
        groupId: '82320',
        attributes: {
          articleNumberManufacturer: '4123445 5178',
          articleNumberMax: '82320',
          matrixId: 'M0E20000000EKR1',
          baseId: '82320',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '45.5',
            label: '45.5',
          },
          size: '45.5',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '25',
        sku: 'M0E20000000EKR2',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082320_1_large.jpg'],
        groupId: '82320',
        attributes: {
          articleNumberManufacturer: '4123445 5178',
          articleNumberMax: '82320',
          matrixId: 'M0E20000000EKR2',
          baseId: '82320',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '46',
            label: '46',
          },
          size: '46',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'grau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
    ],
    _url: '/',
  },
  {
    productId: 'd93365a5-060e-4495-b1d7-81f8d5d40c61',
    version: '37',
    name: 'Brieftasche „Rimini“ Gabs hellrot',
    slug: 'gabs-brieftasche-gmoney17-1507-rot',
    categories: [
      {
        categoryId: '25e0bef5-6b8a-4a2b-b64f-bd35f4038b61',
      },
    ],
    variants: [
      {
        id: '1',
        sku: 'A0E200000001WPH',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/072366_1_large.jpg'],
        groupId: '72366',
        attributes: {
          articleNumberManufacturer: 'GMONEY17 RN 1507',
          articleNumberMax: '72366',
          matrixId: 'A0E200000001WPH',
          baseId: '72366',
          designer: {
            key: 'gabs',
            label: 'Gabs',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'oneSize',
            label: 'one Size',
          },
          size: 'one size',
          color: {
            key: 'red',
            label: 'rot',
          },
          colorFreeDefinition: 'hellrot',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
    ],
    _url: '/',
  },
  {
    productId: 'f807645f-e3d6-479a-a57a-4f62a7e6ec0c',
    version: '2633',
    name: 'Slip-On Schuhe Tods silber-weiß',
    slug: 'tods-slip-on-tv0j9808-silber',
    categories: [
      {
        categoryId: '73c57b5f-9267-473a-93b3-73507cbb0d35',
      },
      {
        categoryId: '241b6c53-f800-47dc-a22f-4be8c52fcc10',
      },
    ],
    variants: [
      {
        id: '1',
        sku: 'M0E20000000DWKF',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079077_1_large.jpg'],
        groupId: '79077',
        attributes: {
          articleNumberManufacturer: 'XXW0TV0J9808FF1556',
          articleNumberMax: '79077',
          matrixId: 'M0E20000000DWKF',
          baseId: '79077',
          designer: {
            key: 'tods',
            label: 'Tod´s',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '34',
            label: '34',
          },
          size: '34',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber-weiß',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '2',
        sku: 'M0E20000000DWKG',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079077_1_large.jpg'],
        groupId: '79077',
        attributes: {
          articleNumberManufacturer: 'XXW0TV0J9808FF1556',
          articleNumberMax: '79077',
          matrixId: 'M0E20000000DWKG',
          baseId: '79077',
          designer: {
            key: 'tods',
            label: 'Tod´s',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '34.5',
            label: '34.5',
          },
          size: '34.5',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber-weiß',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '3',
        sku: 'M0E20000000DWKH',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079077_1_large.jpg'],
        groupId: '79077',
        attributes: {
          articleNumberManufacturer: 'XXW0TV0J9808FF1556',
          articleNumberMax: '79077',
          matrixId: 'M0E20000000DWKH',
          baseId: '79077',
          designer: {
            key: 'tods',
            label: 'Tod´s',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '35',
            label: '35',
          },
          size: '35',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber-weiß',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '4',
        sku: 'M0E20000000DWKI',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079077_1_large.jpg'],
        groupId: '79077',
        attributes: {
          articleNumberManufacturer: 'XXW0TV0J9808FF1556',
          articleNumberMax: '79077',
          matrixId: 'M0E20000000DWKI',
          baseId: '79077',
          designer: {
            key: 'tods',
            label: 'Tod´s',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '35.5',
            label: '35.5',
          },
          size: '35.5',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber-weiß',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '5',
        sku: 'M0E20000000DWKJ',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079077_1_large.jpg'],
        groupId: '79077',
        attributes: {
          articleNumberManufacturer: 'XXW0TV0J9808FF1556',
          articleNumberMax: '79077',
          matrixId: 'M0E20000000DWKJ',
          baseId: '79077',
          designer: {
            key: 'tods',
            label: 'Tod´s',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '36',
            label: '36',
          },
          size: '36',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber-weiß',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '6',
        sku: 'M0E20000000DWKK',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079077_1_large.jpg'],
        groupId: '79077',
        attributes: {
          articleNumberManufacturer: 'XXW0TV0J9808FF1556',
          articleNumberMax: '79077',
          matrixId: 'M0E20000000DWKK',
          baseId: '79077',
          designer: {
            key: 'tods',
            label: 'Tod´s',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '36.5',
            label: '36.5',
          },
          size: '36.5',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber-weiß',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '7',
        sku: 'M0E20000000DWKL',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079077_1_large.jpg'],
        groupId: '79077',
        attributes: {
          articleNumberManufacturer: 'XXW0TV0J9808FF1556',
          articleNumberMax: '79077',
          matrixId: 'M0E20000000DWKL',
          baseId: '79077',
          designer: {
            key: 'tods',
            label: 'Tod´s',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '37',
            label: '37',
          },
          size: '37',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber-weiß',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '8',
        sku: 'M0E20000000DWKM',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079077_1_large.jpg'],
        groupId: '79077',
        attributes: {
          articleNumberManufacturer: 'XXW0TV0J9808FF1556',
          articleNumberMax: '79077',
          matrixId: 'M0E20000000DWKM',
          baseId: '79077',
          designer: {
            key: 'tods',
            label: 'Tod´s',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '37.5',
            label: '37.5',
          },
          size: '37.5',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber-weiß',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '9',
        sku: 'M0E20000000DWKN',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079077_1_large.jpg'],
        groupId: '79077',
        attributes: {
          articleNumberManufacturer: 'XXW0TV0J9808FF1556',
          articleNumberMax: '79077',
          matrixId: 'M0E20000000DWKN',
          baseId: '79077',
          designer: {
            key: 'tods',
            label: 'Tod´s',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '38',
            label: '38',
          },
          size: '38',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber-weiß',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '10',
        sku: 'M0E20000000DWKO',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079077_1_large.jpg'],
        groupId: '79077',
        attributes: {
          articleNumberManufacturer: 'XXW0TV0J9808FF1556',
          articleNumberMax: '79077',
          matrixId: 'M0E20000000DWKO',
          baseId: '79077',
          designer: {
            key: 'tods',
            label: 'Tod´s',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '38.5',
            label: '38.5',
          },
          size: '38.5',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber-weiß',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '11',
        sku: 'M0E20000000DWKP',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079077_1_large.jpg'],
        groupId: '79077',
        attributes: {
          articleNumberManufacturer: 'XXW0TV0J9808FF1556',
          articleNumberMax: '79077',
          matrixId: 'M0E20000000DWKP',
          baseId: '79077',
          designer: {
            key: 'tods',
            label: 'Tod´s',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '39',
            label: '39',
          },
          size: '39',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber-weiß',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '12',
        sku: 'M0E20000000DWKQ',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079077_1_large.jpg'],
        groupId: '79077',
        attributes: {
          articleNumberManufacturer: 'XXW0TV0J9808FF1556',
          articleNumberMax: '79077',
          matrixId: 'M0E20000000DWKQ',
          baseId: '79077',
          designer: {
            key: 'tods',
            label: 'Tod´s',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '39.5',
            label: '39.5',
          },
          size: '39.5',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber-weiß',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '13',
        sku: 'M0E20000000DWKR',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079077_1_large.jpg'],
        groupId: '79077',
        attributes: {
          articleNumberManufacturer: 'XXW0TV0J9808FF1556',
          articleNumberMax: '79077',
          matrixId: 'M0E20000000DWKR',
          baseId: '79077',
          designer: {
            key: 'tods',
            label: 'Tod´s',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '40',
            label: '40',
          },
          size: '40',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber-weiß',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '14',
        sku: 'M0E20000000DWKS',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079077_1_large.jpg'],
        groupId: '79077',
        attributes: {
          articleNumberManufacturer: 'XXW0TV0J9808FF1556',
          articleNumberMax: '79077',
          matrixId: 'M0E20000000DWKS',
          baseId: '79077',
          designer: {
            key: 'tods',
            label: 'Tod´s',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '40.5',
            label: '40.5',
          },
          size: '40.5',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber-weiß',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '15',
        sku: 'M0E20000000DWKT',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079077_1_large.jpg'],
        groupId: '79077',
        attributes: {
          articleNumberManufacturer: 'XXW0TV0J9808FF1556',
          articleNumberMax: '79077',
          matrixId: 'M0E20000000DWKT',
          baseId: '79077',
          designer: {
            key: 'tods',
            label: 'Tod´s',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '41',
            label: '41',
          },
          size: '41',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber-weiß',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '16',
        sku: 'M0E20000000DWKU',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079077_1_large.jpg'],
        groupId: '79077',
        attributes: {
          articleNumberManufacturer: 'XXW0TV0J9808FF1556',
          articleNumberMax: '79077',
          matrixId: 'M0E20000000DWKU',
          baseId: '79077',
          designer: {
            key: 'tods',
            label: 'Tod´s',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '41.5',
            label: '41.5',
          },
          size: '41.5',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber-weiß',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '17',
        sku: 'M0E20000000DWKV',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079077_1_large.jpg'],
        groupId: '79077',
        attributes: {
          articleNumberManufacturer: 'XXW0TV0J9808FF1556',
          articleNumberMax: '79077',
          matrixId: 'M0E20000000DWKV',
          baseId: '79077',
          designer: {
            key: 'tods',
            label: 'Tod´s',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '42',
            label: '42',
          },
          size: '42',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber-weiß',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '18',
        sku: 'M0E20000000DWKW',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079077_1_large.jpg'],
        groupId: '79077',
        attributes: {
          articleNumberManufacturer: 'XXW0TV0J9808FF1556',
          articleNumberMax: '79077',
          matrixId: 'M0E20000000DWKW',
          baseId: '79077',
          designer: {
            key: 'tods',
            label: 'Tod´s',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '42.5',
            label: '42.5',
          },
          size: '42.5',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber-weiß',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '19',
        sku: 'M0E20000000DWKX',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079077_1_large.jpg'],
        groupId: '79077',
        attributes: {
          articleNumberManufacturer: 'XXW0TV0J9808FF1556',
          articleNumberMax: '79077',
          matrixId: 'M0E20000000DWKX',
          baseId: '79077',
          designer: {
            key: 'tods',
            label: 'Tod´s',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '43',
            label: '43',
          },
          size: '43',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber-weiß',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '20',
        sku: 'M0E20000000DWKY',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079077_1_large.jpg'],
        groupId: '79077',
        attributes: {
          articleNumberManufacturer: 'XXW0TV0J9808FF1556',
          articleNumberMax: '79077',
          matrixId: 'M0E20000000DWKY',
          baseId: '79077',
          designer: {
            key: 'tods',
            label: 'Tod´s',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '43.5',
            label: '43.5',
          },
          size: '43.5',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber-weiß',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '21',
        sku: 'M0E20000000DWKZ',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079077_1_large.jpg'],
        groupId: '79077',
        attributes: {
          articleNumberManufacturer: 'XXW0TV0J9808FF1556',
          articleNumberMax: '79077',
          matrixId: 'M0E20000000DWKZ',
          baseId: '79077',
          designer: {
            key: 'tods',
            label: 'Tod´s',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '44',
            label: '44',
          },
          size: '44',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber-weiß',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '22',
        sku: 'M0E20000000DWL0',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079077_1_large.jpg'],
        groupId: '79077',
        attributes: {
          articleNumberManufacturer: 'XXW0TV0J9808FF1556',
          articleNumberMax: '79077',
          matrixId: 'M0E20000000DWL0',
          baseId: '79077',
          designer: {
            key: 'tods',
            label: 'Tod´s',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '44.5',
            label: '44.5',
          },
          size: '44.5',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber-weiß',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '23',
        sku: 'M0E20000000DWL1',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079077_1_large.jpg'],
        groupId: '79077',
        attributes: {
          articleNumberManufacturer: 'XXW0TV0J9808FF1556',
          articleNumberMax: '79077',
          matrixId: 'M0E20000000DWL1',
          baseId: '79077',
          designer: {
            key: 'tods',
            label: 'Tod´s',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '45',
            label: '45',
          },
          size: '45',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber-weiß',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '24',
        sku: 'M0E20000000DWL2',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079077_1_large.jpg'],
        groupId: '79077',
        attributes: {
          articleNumberManufacturer: 'XXW0TV0J9808FF1556',
          articleNumberMax: '79077',
          matrixId: 'M0E20000000DWL2',
          baseId: '79077',
          designer: {
            key: 'tods',
            label: 'Tod´s',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '45.5',
            label: '45.5',
          },
          size: '45.5',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber-weiß',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '25',
        sku: 'M0E20000000DWL3',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079077_1_large.jpg'],
        groupId: '79077',
        attributes: {
          articleNumberManufacturer: 'XXW0TV0J9808FF1556',
          articleNumberMax: '79077',
          matrixId: 'M0E20000000DWL3',
          baseId: '79077',
          designer: {
            key: 'tods',
            label: 'Tod´s',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: '46',
            label: '46',
          },
          size: '46',
          color: {
            key: 'silver',
            label: 'silber',
          },
          colorFreeDefinition: 'silber-weiß',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
    ],
    _url: '/',
  },
  {
    productId: 'aa197fc8-1b7f-4d0c-909b-496106bedce7',
    version: '1337',
    name: 'blazer Harris Wharf blau',
    slug: 'harris-wharf-blazer-CFY8G2-blau',
    categories: [
      {
        categoryId: 'e271b8ee-2d17-47d4-8eda-d21b924c686c',
      },
    ],
    variants: [
      {
        id: '1',
        sku: 'M0E20000000DSZK',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078765_1_medium.jpg'],
        groupId: '78765',
        attributes: {
          articleNumberManufacturer: 'CFY8G2 PFY4 BLU',
          articleNumberMax: '78765',
          matrixId: 'M0E20000000DSZK',
          baseId: '78765',
          designer: {
            key: 'harriswharf',
            label: 'Harris Wharf',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'xs',
            label: 'XS',
          },
          size: '34',
          color: {
            key: 'blue',
            label: 'blau',
          },
          colorFreeDefinition: 'blau',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '2',
        sku: 'M0E20000000DSZL',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078765_1_medium.jpg'],
        groupId: '78765',
        attributes: {
          articleNumberManufacturer: 'CFY8G2 PFY4 BLU',
          articleNumberMax: '78765',
          matrixId: 'M0E20000000DSZL',
          baseId: '78765',
          designer: {
            key: 'harriswharf',
            label: 'Harris Wharf',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'xs',
            label: 'XS',
          },
          size: '36',
          color: {
            key: 'blue',
            label: 'blau',
          },
          colorFreeDefinition: 'blau',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '3',
        sku: 'M0E20000000DSZM',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078765_1_medium.jpg'],
        groupId: '78765',
        attributes: {
          articleNumberManufacturer: 'CFY8G2 PFY4 BLU',
          articleNumberMax: '78765',
          matrixId: 'M0E20000000DSZM',
          baseId: '78765',
          designer: {
            key: 'harriswharf',
            label: 'Harris Wharf',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'xs',
            label: 'XS',
          },
          size: '38',
          color: {
            key: 'blue',
            label: 'blau',
          },
          colorFreeDefinition: 'blau',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '4',
        sku: 'M0E20000000DSZN',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078765_1_medium.jpg'],
        groupId: '78765',
        attributes: {
          articleNumberManufacturer: 'CFY8G2 PFY4 BLU',
          articleNumberMax: '78765',
          matrixId: 'M0E20000000DSZN',
          baseId: '78765',
          designer: {
            key: 'harriswharf',
            label: 'Harris Wharf',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'xs',
            label: 'XS',
          },
          size: '40',
          color: {
            key: 'blue',
            label: 'blau',
          },
          colorFreeDefinition: 'blau',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '5',
        sku: 'M0E20000000DSZO',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078765_1_medium.jpg'],
        groupId: '78765',
        attributes: {
          articleNumberManufacturer: 'CFY8G2 PFY4 BLU',
          articleNumberMax: '78765',
          matrixId: 'M0E20000000DSZO',
          baseId: '78765',
          designer: {
            key: 'harriswharf',
            label: 'Harris Wharf',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'xs',
            label: 'XS',
          },
          size: '42',
          color: {
            key: 'blue',
            label: 'blau',
          },
          colorFreeDefinition: 'blau',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '6',
        sku: 'M0E20000000DSZP',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078765_1_medium.jpg'],
        groupId: '78765',
        attributes: {
          articleNumberManufacturer: 'CFY8G2 PFY4 BLU',
          articleNumberMax: '78765',
          matrixId: 'M0E20000000DSZP',
          baseId: '78765',
          designer: {
            key: 'harriswharf',
            label: 'Harris Wharf',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'xs',
            label: 'XS',
          },
          size: '44',
          color: {
            key: 'blue',
            label: 'blau',
          },
          colorFreeDefinition: 'blau',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '7',
        sku: 'M0E20000000DSZQ',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078765_1_medium.jpg'],
        groupId: '78765',
        attributes: {
          articleNumberManufacturer: 'CFY8G2 PFY4 BLU',
          articleNumberMax: '78765',
          matrixId: 'M0E20000000DSZQ',
          baseId: '78765',
          designer: {
            key: 'harriswharf',
            label: 'Harris Wharf',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 's',
            label: 'S',
          },
          size: '46',
          color: {
            key: 'blue',
            label: 'blau',
          },
          colorFreeDefinition: 'blau',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '8',
        sku: 'M0E20000000DSZR',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078765_1_medium.jpg'],
        groupId: '78765',
        attributes: {
          articleNumberManufacturer: 'CFY8G2 PFY4 BLU',
          articleNumberMax: '78765',
          matrixId: 'M0E20000000DSZR',
          baseId: '78765',
          designer: {
            key: 'harriswharf',
            label: 'Harris Wharf',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'm',
            label: 'M',
          },
          size: '48',
          color: {
            key: 'blue',
            label: 'blau',
          },
          colorFreeDefinition: 'blau',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '9',
        sku: 'M0E20000000DSZS',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078765_1_medium.jpg'],
        groupId: '78765',
        attributes: {
          articleNumberManufacturer: 'CFY8G2 PFY4 BLU',
          articleNumberMax: '78765',
          matrixId: 'M0E20000000DSZS',
          baseId: '78765',
          designer: {
            key: 'harriswharf',
            label: 'Harris Wharf',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'l',
            label: 'L',
          },
          size: '50',
          color: {
            key: 'blue',
            label: 'blau',
          },
          colorFreeDefinition: 'blau',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '10',
        sku: 'M0E20000000DSZT',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078765_1_medium.jpg'],
        groupId: '78765',
        attributes: {
          articleNumberManufacturer: 'CFY8G2 PFY4 BLU',
          articleNumberMax: '78765',
          matrixId: 'M0E20000000DSZT',
          baseId: '78765',
          designer: {
            key: 'harriswharf',
            label: 'Harris Wharf',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'xl',
            label: 'XL',
          },
          size: '52',
          color: {
            key: 'blue',
            label: 'blau',
          },
          colorFreeDefinition: 'blau',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '11',
        sku: 'M0E20000000DSZU',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078765_1_medium.jpg'],
        groupId: '78765',
        attributes: {
          articleNumberManufacturer: 'CFY8G2 PFY4 BLU',
          articleNumberMax: '78765',
          matrixId: 'M0E20000000DSZU',
          baseId: '78765',
          designer: {
            key: 'harriswharf',
            label: 'Harris Wharf',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'xxl',
            label: 'XXL',
          },
          size: '54',
          color: {
            key: 'blue',
            label: 'blau',
          },
          colorFreeDefinition: 'blau',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '12',
        sku: 'M0E20000000DSZV',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078765_1_medium.jpg'],
        groupId: '78765',
        attributes: {
          articleNumberManufacturer: 'CFY8G2 PFY4 BLU',
          articleNumberMax: '78765',
          matrixId: 'M0E20000000DSZV',
          baseId: '78765',
          designer: {
            key: 'harriswharf',
            label: 'Harris Wharf',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'xxxl',
            label: 'XXXL',
          },
          size: '56',
          color: {
            key: 'blue',
            label: 'blau',
          },
          colorFreeDefinition: 'blau',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '13',
        sku: 'M0E20000000DSZW',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078765_1_medium.jpg'],
        groupId: '78765',
        attributes: {
          articleNumberManufacturer: 'CFY8G2 PFY4 BLU',
          articleNumberMax: '78765',
          matrixId: 'M0E20000000DSZW',
          baseId: '78765',
          designer: {
            key: 'harriswharf',
            label: 'Harris Wharf',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'xxxl',
            label: 'XXXL',
          },
          size: '58',
          color: {
            key: 'blue',
            label: 'blau',
          },
          colorFreeDefinition: 'blau',
          style: {
            key: 'business',
            label: 'business',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
    ],
    _url: '/',
  },
  {
    productId: '5239fe72-d6db-4e6d-8fb9-5e0dbbfc783a',
    version: '1323',
    name: 'Jacke „Rivka“ Luis Trenker creme',
    slug: 'luistrenker-jacke-K245511299-creme',
    categories: [
      {
        categoryId: '9c56920c-d158-4139-8b8b-8adb429033c9',
      },
      {
        categoryId: '9acc95ed-0053-417e-b342-96da452f7eab',
      },
    ],
    variants: [
      {
        id: '1',
        sku: 'M0E20000000E2ZJ',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079933_1_medium.jpg'],
        groupId: '79933',
        attributes: {
          articleNumberManufacturer: 'K24551 1299',
          articleNumberMax: '79933',
          matrixId: 'M0E20000000E2ZJ',
          baseId: '79933',
          designer: {
            key: 'luistrenker',
            label: 'Luis Trenker',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xxs',
            label: 'XXS',
          },
          size: '34',
          color: {
            key: 'beige',
            label: 'beige',
          },
          colorFreeDefinition: 'creme',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '2',
        sku: 'M0E20000000E2ZK',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079933_1_medium.jpg'],
        groupId: '79933',
        attributes: {
          articleNumberManufacturer: 'K24551 1299',
          articleNumberMax: '79933',
          matrixId: 'M0E20000000E2ZK',
          baseId: '79933',
          designer: {
            key: 'luistrenker',
            label: 'Luis Trenker',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xxs',
            label: 'XXS',
          },
          size: '36',
          color: {
            key: 'beige',
            label: 'beige',
          },
          colorFreeDefinition: 'creme',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '3',
        sku: 'M0E20000000E2ZL',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079933_1_medium.jpg'],
        groupId: '79933',
        attributes: {
          articleNumberManufacturer: 'K24551 1299',
          articleNumberMax: '79933',
          matrixId: 'M0E20000000E2ZL',
          baseId: '79933',
          designer: {
            key: 'luistrenker',
            label: 'Luis Trenker',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xxs',
            label: 'XXS',
          },
          size: '38',
          color: {
            key: 'beige',
            label: 'beige',
          },
          colorFreeDefinition: 'creme',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '4',
        sku: 'M0E20000000E2ZM',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079933_1_medium.jpg'],
        groupId: '79933',
        attributes: {
          articleNumberManufacturer: 'K24551 1299',
          articleNumberMax: '79933',
          matrixId: 'M0E20000000E2ZM',
          baseId: '79933',
          designer: {
            key: 'luistrenker',
            label: 'Luis Trenker',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xs',
            label: 'XS',
          },
          size: '40',
          color: {
            key: 'beige',
            label: 'beige',
          },
          colorFreeDefinition: 'creme',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '5',
        sku: 'M0E20000000E2ZN',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079933_1_medium.jpg'],
        groupId: '79933',
        attributes: {
          articleNumberManufacturer: 'K24551 1299',
          articleNumberMax: '79933',
          matrixId: 'M0E20000000E2ZN',
          baseId: '79933',
          designer: {
            key: 'luistrenker',
            label: 'Luis Trenker',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 's',
            label: 'S',
          },
          size: '42',
          color: {
            key: 'beige',
            label: 'beige',
          },
          colorFreeDefinition: 'creme',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '6',
        sku: 'M0E20000000E2ZO',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079933_1_medium.jpg'],
        groupId: '79933',
        attributes: {
          articleNumberManufacturer: 'K24551 1299',
          articleNumberMax: '79933',
          matrixId: 'M0E20000000E2ZO',
          baseId: '79933',
          designer: {
            key: 'luistrenker',
            label: 'Luis Trenker',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'm',
            label: 'M',
          },
          size: '44',
          color: {
            key: 'beige',
            label: 'beige',
          },
          colorFreeDefinition: 'creme',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '7',
        sku: 'M0E20000000E2ZP',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079933_1_medium.jpg'],
        groupId: '79933',
        attributes: {
          articleNumberManufacturer: 'K24551 1299',
          articleNumberMax: '79933',
          matrixId: 'M0E20000000E2ZP',
          baseId: '79933',
          designer: {
            key: 'luistrenker',
            label: 'Luis Trenker',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'l',
            label: 'L',
          },
          size: '46',
          color: {
            key: 'beige',
            label: 'beige',
          },
          colorFreeDefinition: 'creme',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '8',
        sku: 'M0E20000000E2ZQ',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079933_1_medium.jpg'],
        groupId: '79933',
        attributes: {
          articleNumberManufacturer: 'K24551 1299',
          articleNumberMax: '79933',
          matrixId: 'M0E20000000E2ZQ',
          baseId: '79933',
          designer: {
            key: 'luistrenker',
            label: 'Luis Trenker',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xl',
            label: 'XL',
          },
          size: '48',
          color: {
            key: 'beige',
            label: 'beige',
          },
          colorFreeDefinition: 'creme',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '9',
        sku: 'M0E20000000E2ZR',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079933_1_medium.jpg'],
        groupId: '79933',
        attributes: {
          articleNumberManufacturer: 'K24551 1299',
          articleNumberMax: '79933',
          matrixId: 'M0E20000000E2ZR',
          baseId: '79933',
          designer: {
            key: 'luistrenker',
            label: 'Luis Trenker',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xxl',
            label: 'XXL',
          },
          size: '50',
          color: {
            key: 'beige',
            label: 'beige',
          },
          colorFreeDefinition: 'creme',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '10',
        sku: 'M0E20000000E2ZS',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079933_1_medium.jpg'],
        groupId: '79933',
        attributes: {
          articleNumberManufacturer: 'K24551 1299',
          articleNumberMax: '79933',
          matrixId: 'M0E20000000E2ZS',
          baseId: '79933',
          designer: {
            key: 'luistrenker',
            label: 'Luis Trenker',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xxxl',
            label: 'XXXL',
          },
          size: '52',
          color: {
            key: 'beige',
            label: 'beige',
          },
          colorFreeDefinition: 'creme',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '11',
        sku: 'M0E20000000E2ZT',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079933_1_medium.jpg'],
        groupId: '79933',
        attributes: {
          articleNumberManufacturer: 'K24551 1299',
          articleNumberMax: '79933',
          matrixId: 'M0E20000000E2ZT',
          baseId: '79933',
          designer: {
            key: 'luistrenker',
            label: 'Luis Trenker',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xxxl',
            label: 'XXXL',
          },
          size: '54',
          color: {
            key: 'beige',
            label: 'beige',
          },
          colorFreeDefinition: 'creme',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '12',
        sku: 'M0E20000000E2ZU',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079933_1_medium.jpg'],
        groupId: '79933',
        attributes: {
          articleNumberManufacturer: 'K24551 1299',
          articleNumberMax: '79933',
          matrixId: 'M0E20000000E2ZU',
          baseId: '79933',
          designer: {
            key: 'luistrenker',
            label: 'Luis Trenker',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xxxl',
            label: 'XXXL',
          },
          size: '56',
          color: {
            key: 'beige',
            label: 'beige',
          },
          colorFreeDefinition: 'creme',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '13',
        sku: 'M0E20000000E2ZV',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079933_1_medium.jpg'],
        groupId: '79933',
        attributes: {
          articleNumberManufacturer: 'K24551 1299',
          articleNumberMax: '79933',
          matrixId: 'M0E20000000E2ZV',
          baseId: '79933',
          designer: {
            key: 'luistrenker',
            label: 'Luis Trenker',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xxxl',
            label: 'XXXL',
          },
          size: '58',
          color: {
            key: 'beige',
            label: 'beige',
          },
          colorFreeDefinition: 'creme',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
    ],
    _url: '/',
  },
  {
    productId: 'd06d47d9-ab00-4d2b-8461-e126192aa615',
    version: '2623',
    name: 'Flipflops „Brasil“ Havaianas braun',
    slug: 'havaianas-flipflops-brasil-braun',
    categories: [
      {
        categoryId: '0d5a9bac-193a-4713-90eb-6aa800fb9b5d',
      },
    ],
    variants: [
      {
        id: '1',
        sku: 'M0E20000000EL9U',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082373_1_large.jpg'],
        groupId: '82373',
        attributes: {
          articleNumberManufacturer: '4110850 2548',
          articleNumberMax: '82373',
          matrixId: 'M0E20000000EL9U',
          baseId: '82373',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '34',
            label: '34',
          },
          size: '34',
          color: {
            key: 'brown',
            label: 'braun',
          },
          colorFreeDefinition: 'braun',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '2',
        sku: 'M0E20000000EL9V',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082373_1_large.jpg'],
        groupId: '82373',
        attributes: {
          articleNumberManufacturer: '4110850 2548',
          articleNumberMax: '82373',
          matrixId: 'M0E20000000EL9V',
          baseId: '82373',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '34.5',
            label: '34.5',
          },
          size: '34.5',
          color: {
            key: 'brown',
            label: 'braun',
          },
          colorFreeDefinition: 'braun',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '3',
        sku: 'M0E20000000EL9W',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082373_1_large.jpg'],
        groupId: '82373',
        attributes: {
          articleNumberManufacturer: '4110850 2548',
          articleNumberMax: '82373',
          matrixId: 'M0E20000000EL9W',
          baseId: '82373',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '35',
            label: '35',
          },
          size: '35',
          color: {
            key: 'brown',
            label: 'braun',
          },
          colorFreeDefinition: 'braun',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '4',
        sku: 'M0E20000000EL9X',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082373_1_large.jpg'],
        groupId: '82373',
        attributes: {
          articleNumberManufacturer: '4110850 2548',
          articleNumberMax: '82373',
          matrixId: 'M0E20000000EL9X',
          baseId: '82373',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '35.5',
            label: '35.5',
          },
          size: '35.5',
          color: {
            key: 'brown',
            label: 'braun',
          },
          colorFreeDefinition: 'braun',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '5',
        sku: 'M0E20000000EL9Y',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082373_1_large.jpg'],
        groupId: '82373',
        attributes: {
          articleNumberManufacturer: '4110850 2548',
          articleNumberMax: '82373',
          matrixId: 'M0E20000000EL9Y',
          baseId: '82373',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '36',
            label: '36',
          },
          size: '36',
          color: {
            key: 'brown',
            label: 'braun',
          },
          colorFreeDefinition: 'braun',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '6',
        sku: 'M0E20000000EL9Z',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082373_1_large.jpg'],
        groupId: '82373',
        attributes: {
          articleNumberManufacturer: '4110850 2548',
          articleNumberMax: '82373',
          matrixId: 'M0E20000000EL9Z',
          baseId: '82373',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '36.5',
            label: '36.5',
          },
          size: '36.5',
          color: {
            key: 'brown',
            label: 'braun',
          },
          colorFreeDefinition: 'braun',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '7',
        sku: 'M0E20000000ELA0',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082373_1_large.jpg'],
        groupId: '82373',
        attributes: {
          articleNumberManufacturer: '4110850 2548',
          articleNumberMax: '82373',
          matrixId: 'M0E20000000ELA0',
          baseId: '82373',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '37',
            label: '37',
          },
          size: '37',
          color: {
            key: 'brown',
            label: 'braun',
          },
          colorFreeDefinition: 'braun',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '8',
        sku: 'M0E20000000ELA1',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082373_1_large.jpg'],
        groupId: '82373',
        attributes: {
          articleNumberManufacturer: '4110850 2548',
          articleNumberMax: '82373',
          matrixId: 'M0E20000000ELA1',
          baseId: '82373',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '37.5',
            label: '37.5',
          },
          size: '37.5',
          color: {
            key: 'brown',
            label: 'braun',
          },
          colorFreeDefinition: 'braun',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '9',
        sku: 'M0E20000000ELA2',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082373_1_large.jpg'],
        groupId: '82373',
        attributes: {
          articleNumberManufacturer: '4110850 2548',
          articleNumberMax: '82373',
          matrixId: 'M0E20000000ELA2',
          baseId: '82373',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '38',
            label: '38',
          },
          size: '38',
          color: {
            key: 'brown',
            label: 'braun',
          },
          colorFreeDefinition: 'braun',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '10',
        sku: 'M0E20000000ELA3',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082373_1_large.jpg'],
        groupId: '82373',
        attributes: {
          articleNumberManufacturer: '4110850 2548',
          articleNumberMax: '82373',
          matrixId: 'M0E20000000ELA3',
          baseId: '82373',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '38.5',
            label: '38.5',
          },
          size: '38.5',
          color: {
            key: 'brown',
            label: 'braun',
          },
          colorFreeDefinition: 'braun',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '11',
        sku: 'M0E20000000ELA4',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082373_1_large.jpg'],
        groupId: '82373',
        attributes: {
          articleNumberManufacturer: '4110850 2548',
          articleNumberMax: '82373',
          matrixId: 'M0E20000000ELA4',
          baseId: '82373',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '39',
            label: '39',
          },
          size: '39',
          color: {
            key: 'brown',
            label: 'braun',
          },
          colorFreeDefinition: 'braun',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '12',
        sku: 'M0E20000000ELA5',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082373_1_large.jpg'],
        groupId: '82373',
        attributes: {
          articleNumberManufacturer: '4110850 2548',
          articleNumberMax: '82373',
          matrixId: 'M0E20000000ELA5',
          baseId: '82373',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '39.5',
            label: '39.5',
          },
          size: '39.5',
          color: {
            key: 'brown',
            label: 'braun',
          },
          colorFreeDefinition: 'braun',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '13',
        sku: 'M0E20000000ELA6',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082373_1_large.jpg'],
        groupId: '82373',
        attributes: {
          articleNumberManufacturer: '4110850 2548',
          articleNumberMax: '82373',
          matrixId: 'M0E20000000ELA6',
          baseId: '82373',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '40',
            label: '40',
          },
          size: '40',
          color: {
            key: 'brown',
            label: 'braun',
          },
          colorFreeDefinition: 'braun',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '14',
        sku: 'M0E20000000ELA7',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082373_1_large.jpg'],
        groupId: '82373',
        attributes: {
          articleNumberManufacturer: '4110850 2548',
          articleNumberMax: '82373',
          matrixId: 'M0E20000000ELA7',
          baseId: '82373',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '40.5',
            label: '40.5',
          },
          size: '40.5',
          color: {
            key: 'brown',
            label: 'braun',
          },
          colorFreeDefinition: 'braun',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '15',
        sku: 'M0E20000000ELA8',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082373_1_large.jpg'],
        groupId: '82373',
        attributes: {
          articleNumberManufacturer: '4110850 2548',
          articleNumberMax: '82373',
          matrixId: 'M0E20000000ELA8',
          baseId: '82373',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '41',
            label: '41',
          },
          size: '41',
          color: {
            key: 'brown',
            label: 'braun',
          },
          colorFreeDefinition: 'braun',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '16',
        sku: 'M0E20000000ELA9',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082373_1_large.jpg'],
        groupId: '82373',
        attributes: {
          articleNumberManufacturer: '4110850 2548',
          articleNumberMax: '82373',
          matrixId: 'M0E20000000ELA9',
          baseId: '82373',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '41.5',
            label: '41.5',
          },
          size: '41.5',
          color: {
            key: 'brown',
            label: 'braun',
          },
          colorFreeDefinition: 'braun',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '17',
        sku: 'M0E20000000ELAA',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082373_1_large.jpg'],
        groupId: '82373',
        attributes: {
          articleNumberManufacturer: '4110850 2548',
          articleNumberMax: '82373',
          matrixId: 'M0E20000000ELAA',
          baseId: '82373',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '42',
            label: '42',
          },
          size: '42',
          color: {
            key: 'brown',
            label: 'braun',
          },
          colorFreeDefinition: 'braun',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '18',
        sku: 'M0E20000000ELAB',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082373_1_large.jpg'],
        groupId: '82373',
        attributes: {
          articleNumberManufacturer: '4110850 2548',
          articleNumberMax: '82373',
          matrixId: 'M0E20000000ELAB',
          baseId: '82373',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '42.5',
            label: '42.5',
          },
          size: '42.5',
          color: {
            key: 'brown',
            label: 'braun',
          },
          colorFreeDefinition: 'braun',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '19',
        sku: 'M0E20000000ELAC',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082373_1_large.jpg'],
        groupId: '82373',
        attributes: {
          articleNumberManufacturer: '4110850 2548',
          articleNumberMax: '82373',
          matrixId: 'M0E20000000ELAC',
          baseId: '82373',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '43',
            label: '43',
          },
          size: '43',
          color: {
            key: 'brown',
            label: 'braun',
          },
          colorFreeDefinition: 'braun',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '20',
        sku: 'M0E20000000ELAD',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082373_1_large.jpg'],
        groupId: '82373',
        attributes: {
          articleNumberManufacturer: '4110850 2548',
          articleNumberMax: '82373',
          matrixId: 'M0E20000000ELAD',
          baseId: '82373',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '43.5',
            label: '43.5',
          },
          size: '43.5',
          color: {
            key: 'brown',
            label: 'braun',
          },
          colorFreeDefinition: 'braun',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '21',
        sku: 'M0E20000000ELAE',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082373_1_large.jpg'],
        groupId: '82373',
        attributes: {
          articleNumberManufacturer: '4110850 2548',
          articleNumberMax: '82373',
          matrixId: 'M0E20000000ELAE',
          baseId: '82373',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '44',
            label: '44',
          },
          size: '44',
          color: {
            key: 'brown',
            label: 'braun',
          },
          colorFreeDefinition: 'braun',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '22',
        sku: 'M0E20000000ELAF',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082373_1_large.jpg'],
        groupId: '82373',
        attributes: {
          articleNumberManufacturer: '4110850 2548',
          articleNumberMax: '82373',
          matrixId: 'M0E20000000ELAF',
          baseId: '82373',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '44.5',
            label: '44.5',
          },
          size: '44.5',
          color: {
            key: 'brown',
            label: 'braun',
          },
          colorFreeDefinition: 'braun',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '23',
        sku: 'M0E20000000ELAG',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082373_1_large.jpg'],
        groupId: '82373',
        attributes: {
          articleNumberManufacturer: '4110850 2548',
          articleNumberMax: '82373',
          matrixId: 'M0E20000000ELAG',
          baseId: '82373',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '45',
            label: '45',
          },
          size: '45',
          color: {
            key: 'brown',
            label: 'braun',
          },
          colorFreeDefinition: 'braun',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '24',
        sku: 'M0E20000000ELAH',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082373_1_large.jpg'],
        groupId: '82373',
        attributes: {
          articleNumberManufacturer: '4110850 2548',
          articleNumberMax: '82373',
          matrixId: 'M0E20000000ELAH',
          baseId: '82373',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '45.5',
            label: '45.5',
          },
          size: '45.5',
          color: {
            key: 'brown',
            label: 'braun',
          },
          colorFreeDefinition: 'braun',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '25',
        sku: 'M0E20000000ELAI',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/082373_1_large.jpg'],
        groupId: '82373',
        attributes: {
          articleNumberManufacturer: '4110850 2548',
          articleNumberMax: '82373',
          matrixId: 'M0E20000000ELAI',
          baseId: '82373',
          designer: {
            key: 'havaianas',
            label: 'Havaianas',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: '46',
            label: '46',
          },
          size: '46',
          color: {
            key: 'brown',
            label: 'braun',
          },
          colorFreeDefinition: 'braun',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
    ],
    _url: '/',
  },
  {
    productId: 'f3d9c787-fb5f-458e-8776-9e20faedb94c',
    version: '811',
    name: 'Polo Ralph Lauren grün',
    slug: 'poloralphlauren-polo-C8312A3ZHJ-gruen',
    categories: [
      {
        categoryId: '9c0a1eb5-65a8-42ae-8b2e-591052b20c51',
      },
    ],
    variants: [
      {
        id: '1',
        sku: 'M0E20000000E2Q5',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079897_1_large.jpg'],
        groupId: '79897',
        attributes: {
          articleNumberManufacturer: 'A12KAA10 C8312 A3ZHJ',
          articleNumberMax: '79897',
          matrixId: 'M0E20000000E2Q5',
          baseId: '79897',
          designer: {
            key: 'poloralphlauren',
            label: 'Polo Ralph Lauren',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'xxs',
            label: 'XXS',
          },
          size: 'XXS',
          color: {
            key: 'green',
            label: 'grün',
          },
          colorFreeDefinition: 'grün',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '2',
        sku: 'M0E20000000E2Q6',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079897_1_large.jpg'],
        groupId: '79897',
        attributes: {
          articleNumberManufacturer: 'A12KAA10 C8312 A3ZHJ',
          articleNumberMax: '79897',
          matrixId: 'M0E20000000E2Q6',
          baseId: '79897',
          designer: {
            key: 'poloralphlauren',
            label: 'Polo Ralph Lauren',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'xs',
            label: 'XS',
          },
          size: 'XS',
          color: {
            key: 'green',
            label: 'grün',
          },
          colorFreeDefinition: 'grün',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '3',
        sku: 'M0E20000000E2Q7',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079897_1_large.jpg'],
        groupId: '79897',
        attributes: {
          articleNumberManufacturer: 'A12KAA10 C8312 A3ZHJ',
          articleNumberMax: '79897',
          matrixId: 'M0E20000000E2Q7',
          baseId: '79897',
          designer: {
            key: 'poloralphlauren',
            label: 'Polo Ralph Lauren',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 's',
            label: 'S',
          },
          size: 'S',
          color: {
            key: 'green',
            label: 'grün',
          },
          colorFreeDefinition: 'grün',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '4',
        sku: 'M0E20000000E2Q8',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079897_1_large.jpg'],
        groupId: '79897',
        attributes: {
          articleNumberManufacturer: 'A12KAA10 C8312 A3ZHJ',
          articleNumberMax: '79897',
          matrixId: 'M0E20000000E2Q8',
          baseId: '79897',
          designer: {
            key: 'poloralphlauren',
            label: 'Polo Ralph Lauren',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'm',
            label: 'M',
          },
          size: 'M',
          color: {
            key: 'green',
            label: 'grün',
          },
          colorFreeDefinition: 'grün',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '5',
        sku: 'M0E20000000E2Q9',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079897_1_large.jpg'],
        groupId: '79897',
        attributes: {
          articleNumberManufacturer: 'A12KAA10 C8312 A3ZHJ',
          articleNumberMax: '79897',
          matrixId: 'M0E20000000E2Q9',
          baseId: '79897',
          designer: {
            key: 'poloralphlauren',
            label: 'Polo Ralph Lauren',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'l',
            label: 'L',
          },
          size: 'L',
          color: {
            key: 'green',
            label: 'grün',
          },
          colorFreeDefinition: 'grün',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '6',
        sku: 'M0E20000000E2QA',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079897_1_large.jpg'],
        groupId: '79897',
        attributes: {
          articleNumberManufacturer: 'A12KAA10 C8312 A3ZHJ',
          articleNumberMax: '79897',
          matrixId: 'M0E20000000E2QA',
          baseId: '79897',
          designer: {
            key: 'poloralphlauren',
            label: 'Polo Ralph Lauren',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'xl',
            label: 'XL',
          },
          size: 'XL',
          color: {
            key: 'green',
            label: 'grün',
          },
          colorFreeDefinition: 'grün',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '7',
        sku: 'M0E20000000E2QB',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079897_1_large.jpg'],
        groupId: '79897',
        attributes: {
          articleNumberManufacturer: 'A12KAA10 C8312 A3ZHJ',
          articleNumberMax: '79897',
          matrixId: 'M0E20000000E2QB',
          baseId: '79897',
          designer: {
            key: 'poloralphlauren',
            label: 'Polo Ralph Lauren',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'xxl',
            label: 'XXL',
          },
          size: 'XXL',
          color: {
            key: 'green',
            label: 'grün',
          },
          colorFreeDefinition: 'grün',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '8',
        sku: 'M0E20000000E2QC',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/079897_1_large.jpg'],
        groupId: '79897',
        attributes: {
          articleNumberManufacturer: 'A12KAA10 C8312 A3ZHJ',
          articleNumberMax: '79897',
          matrixId: 'M0E20000000E2QC',
          baseId: '79897',
          designer: {
            key: 'poloralphlauren',
            label: 'Polo Ralph Lauren',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'xxxl',
            label: 'XXXL',
          },
          size: 'XXXL',
          color: {
            key: 'green',
            label: 'grün',
          },
          colorFreeDefinition: 'grün',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
    ],
    _url: '/',
  },
  {
    productId: 'e2a7871f-b8fb-4874-ba0b-62433ec28881',
    version: '799',
    name: 'Pullover Pinko weiß',
    slug: 'pinko-pullover-1G10XXY19KZ04-weiss',
    categories: [
      {
        categoryId: '537e55cc-c6f8-4c22-8f09-64bbc2175bc3',
      },
      {
        categoryId: '321c8666-8dde-4e44-876c-a3f28352b212',
      },
    ],
    variants: [
      {
        id: '1',
        sku: 'M0E20000000DJR9',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/072601_1_large.jpg'],
        groupId: '72601',
        attributes: {
          articleNumberManufacturer: '1G10XX Y19K Z04',
          articleNumberMax: '72601',
          matrixId: 'M0E20000000DJR9',
          baseId: '72601',
          designer: {
            key: 'pinko',
            label: 'Pinko',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'xxs',
            label: 'XXS',
          },
          size: 'XXS',
          color: {
            key: 'white',
            label: 'weiss',
          },
          colorFreeDefinition: 'weiß',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '2',
        sku: 'M0E20000000DJRA',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/072601_1_large.jpg'],
        groupId: '72601',
        attributes: {
          articleNumberManufacturer: '1G10XX Y19K Z04',
          articleNumberMax: '72601',
          matrixId: 'M0E20000000DJRA',
          baseId: '72601',
          designer: {
            key: 'pinko',
            label: 'Pinko',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'xs',
            label: 'XS',
          },
          size: 'XS',
          color: {
            key: 'white',
            label: 'weiss',
          },
          colorFreeDefinition: 'weiß',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '3',
        sku: 'M0E20000000DJRB',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/072601_1_large.jpg'],
        groupId: '72601',
        attributes: {
          articleNumberManufacturer: '1G10XX Y19K Z04',
          articleNumberMax: '72601',
          matrixId: 'M0E20000000DJRB',
          baseId: '72601',
          designer: {
            key: 'pinko',
            label: 'Pinko',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 's',
            label: 'S',
          },
          size: 'S',
          color: {
            key: 'white',
            label: 'weiss',
          },
          colorFreeDefinition: 'weiß',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '4',
        sku: 'M0E20000000DJRC',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/072601_1_large.jpg'],
        groupId: '72601',
        attributes: {
          articleNumberManufacturer: '1G10XX Y19K Z04',
          articleNumberMax: '72601',
          matrixId: 'M0E20000000DJRC',
          baseId: '72601',
          designer: {
            key: 'pinko',
            label: 'Pinko',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'm',
            label: 'M',
          },
          size: 'M',
          color: {
            key: 'white',
            label: 'weiss',
          },
          colorFreeDefinition: 'weiß',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '5',
        sku: 'M0E20000000DJRD',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/072601_1_large.jpg'],
        groupId: '72601',
        attributes: {
          articleNumberManufacturer: '1G10XX Y19K Z04',
          articleNumberMax: '72601',
          matrixId: 'M0E20000000DJRD',
          baseId: '72601',
          designer: {
            key: 'pinko',
            label: 'Pinko',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'l',
            label: 'L',
          },
          size: 'L',
          color: {
            key: 'white',
            label: 'weiss',
          },
          colorFreeDefinition: 'weiß',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '6',
        sku: 'M0E20000000DJRE',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/072601_1_large.jpg'],
        groupId: '72601',
        attributes: {
          articleNumberManufacturer: '1G10XX Y19K Z04',
          articleNumberMax: '72601',
          matrixId: 'M0E20000000DJRE',
          baseId: '72601',
          designer: {
            key: 'pinko',
            label: 'Pinko',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'xl',
            label: 'XL',
          },
          size: 'XL',
          color: {
            key: 'white',
            label: 'weiss',
          },
          colorFreeDefinition: 'weiß',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '7',
        sku: 'M0E20000000DJRF',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/072601_1_large.jpg'],
        groupId: '72601',
        attributes: {
          articleNumberManufacturer: '1G10XX Y19K Z04',
          articleNumberMax: '72601',
          matrixId: 'M0E20000000DJRF',
          baseId: '72601',
          designer: {
            key: 'pinko',
            label: 'Pinko',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'xxl',
            label: 'XXL',
          },
          size: 'XXL',
          color: {
            key: 'white',
            label: 'weiss',
          },
          colorFreeDefinition: 'weiß',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '8',
        sku: 'M0E20000000DJRG',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/072601_1_large.jpg'],
        groupId: '72601',
        attributes: {
          articleNumberManufacturer: '1G10XX Y19K Z04',
          articleNumberMax: '72601',
          matrixId: 'M0E20000000DJRG',
          baseId: '72601',
          designer: {
            key: 'pinko',
            label: 'Pinko',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'xxxl',
            label: 'XXXL',
          },
          size: 'XXXL',
          color: {
            key: 'white',
            label: 'weiss',
          },
          colorFreeDefinition: 'weiß',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
    ],
    _url: '/',
  },
  {
    productId: '2f0c0cc2-39c6-4c5b-ac6b-cd18c2304aa1',
    version: '804',
    name: 'Daniele Alessandrini – T-Shirt',
    slug: 'daniele-alessandrini-tshirt-M5618E6283506-schwarz',
    categories: [
      {
        categoryId: '9c0a1eb5-65a8-42ae-8b2e-591052b20c51',
      },
    ],
    variants: [
      {
        id: '1',
        sku: 'M0E20000000EV27',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/083810_1_large.jpg'],
        groupId: '83810',
        attributes: {
          articleNumberManufacturer: 'M5618E6283506 101',
          articleNumberMax: '83810',
          matrixId: 'M0E20000000EV27',
          baseId: '83810',
          designer: {
            key: 'danielealessandrini',
            label: 'Daniele Alessandrini',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xxs',
            label: 'XXS',
          },
          size: 'XXS',
          color: {
            key: 'black',
            label: 'schwarz',
          },
          colorFreeDefinition: 'schwarz',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 'A15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '2',
        sku: 'M0E20000000EV28',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/083810_1_large.jpg'],
        groupId: '83810',
        attributes: {
          articleNumberManufacturer: 'M5618E6283506 101',
          articleNumberMax: '83810',
          matrixId: 'M0E20000000EV28',
          baseId: '83810',
          designer: {
            key: 'danielealessandrini',
            label: 'Daniele Alessandrini',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xs',
            label: 'XS',
          },
          size: 'XS',
          color: {
            key: 'black',
            label: 'schwarz',
          },
          colorFreeDefinition: 'schwarz',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 'A15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '3',
        sku: 'M0E20000000EV29',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/083810_1_large.jpg'],
        groupId: '83810',
        attributes: {
          articleNumberManufacturer: 'M5618E6283506 101',
          articleNumberMax: '83810',
          matrixId: 'M0E20000000EV29',
          baseId: '83810',
          designer: {
            key: 'danielealessandrini',
            label: 'Daniele Alessandrini',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 's',
            label: 'S',
          },
          size: 'S',
          color: {
            key: 'black',
            label: 'schwarz',
          },
          colorFreeDefinition: 'schwarz',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 'A15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '4',
        sku: 'M0E20000000EV2A',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/083810_1_large.jpg'],
        groupId: '83810',
        attributes: {
          articleNumberManufacturer: 'M5618E6283506 101',
          articleNumberMax: '83810',
          matrixId: 'M0E20000000EV2A',
          baseId: '83810',
          designer: {
            key: 'danielealessandrini',
            label: 'Daniele Alessandrini',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'm',
            label: 'M',
          },
          size: 'M',
          color: {
            key: 'black',
            label: 'schwarz',
          },
          colorFreeDefinition: 'schwarz',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 'A15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '5',
        sku: 'M0E20000000EV2B',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/083810_1_large.jpg'],
        groupId: '83810',
        attributes: {
          articleNumberManufacturer: 'M5618E6283506 101',
          articleNumberMax: '83810',
          matrixId: 'M0E20000000EV2B',
          baseId: '83810',
          designer: {
            key: 'danielealessandrini',
            label: 'Daniele Alessandrini',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'l',
            label: 'L',
          },
          size: 'L',
          color: {
            key: 'black',
            label: 'schwarz',
          },
          colorFreeDefinition: 'schwarz',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 'A15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '6',
        sku: 'M0E20000000EV2C',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/083810_1_large.jpg'],
        groupId: '83810',
        attributes: {
          articleNumberManufacturer: 'M5618E6283506 101',
          articleNumberMax: '83810',
          matrixId: 'M0E20000000EV2C',
          baseId: '83810',
          designer: {
            key: 'danielealessandrini',
            label: 'Daniele Alessandrini',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xl',
            label: 'XL',
          },
          size: 'XL',
          color: {
            key: 'black',
            label: 'schwarz',
          },
          colorFreeDefinition: 'schwarz',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 'A15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '7',
        sku: 'M0E20000000EV2D',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/083810_1_large.jpg'],
        groupId: '83810',
        attributes: {
          articleNumberManufacturer: 'M5618E6283506 101',
          articleNumberMax: '83810',
          matrixId: 'M0E20000000EV2D',
          baseId: '83810',
          designer: {
            key: 'danielealessandrini',
            label: 'Daniele Alessandrini',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xxl',
            label: 'XXL',
          },
          size: 'XXL',
          color: {
            key: 'black',
            label: 'schwarz',
          },
          colorFreeDefinition: 'schwarz',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 'A15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '8',
        sku: 'M0E20000000EV2E',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/083810_1_large.jpg'],
        groupId: '83810',
        attributes: {
          articleNumberManufacturer: 'M5618E6283506 101',
          articleNumberMax: '83810',
          matrixId: 'M0E20000000EV2E',
          baseId: '83810',
          designer: {
            key: 'danielealessandrini',
            label: 'Daniele Alessandrini',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xxxl',
            label: 'XXXL',
          },
          size: 'XXXL',
          color: {
            key: 'black',
            label: 'schwarz',
          },
          colorFreeDefinition: 'schwarz',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 'A15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
    ],
    _url: '/',
  },
  {
    productId: 'af8f00e7-adc9-45ca-81d7-4b0b8801a10e',
    version: '807',
    name: 'Jogginghose Paolo Pecora hellgrau',
    slug: 'paolo-pecora-jogginghose-B071T403-hellgrau',
    categories: [
      {
        categoryId: '74a89bd3-dc43-4496-a20c-fcb101dd00dd',
      },
      {
        categoryId: '7765da1a-8ed4-4267-a011-816f94b6e57a',
      },
    ],
    variants: [
      {
        id: '1',
        sku: 'M0E20000000EAT6',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080831_1_medium.jpg'],
        groupId: '80831',
        attributes: {
          articleNumberManufacturer: 'B071 T403 8947',
          articleNumberMax: '80831',
          matrixId: 'M0E20000000EAT6',
          baseId: '80831',
          designer: {
            key: 'paolopecora',
            label: 'Paolo Pecora',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xxs',
            label: 'XXS',
          },
          size: 'XXS',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'hellgrau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 18500,
        },
        discountedPrice: {
          centAmount: 16650,
        },
        isOnStock: true,
      },
      {
        id: '2',
        sku: 'M0E20000000EAT7',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080831_1_medium.jpg'],
        groupId: '80831',
        attributes: {
          articleNumberManufacturer: 'B071 T403 8947',
          articleNumberMax: '80831',
          matrixId: 'M0E20000000EAT7',
          baseId: '80831',
          designer: {
            key: 'paolopecora',
            label: 'Paolo Pecora',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xs',
            label: 'XS',
          },
          size: 'XS',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'hellgrau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 18500,
        },
        discountedPrice: {
          centAmount: 16650,
        },
        isOnStock: true,
      },
      {
        id: '3',
        sku: 'M0E20000000EAT8',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080831_1_medium.jpg'],
        groupId: '80831',
        attributes: {
          articleNumberManufacturer: 'B071 T403 8947',
          articleNumberMax: '80831',
          matrixId: 'M0E20000000EAT8',
          baseId: '80831',
          designer: {
            key: 'paolopecora',
            label: 'Paolo Pecora',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 's',
            label: 'S',
          },
          size: 'S',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'hellgrau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 18500,
        },
        discountedPrice: {
          centAmount: 16650,
        },
        isOnStock: true,
      },
      {
        id: '4',
        sku: 'M0E20000000EAT9',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080831_1_medium.jpg'],
        groupId: '80831',
        attributes: {
          articleNumberManufacturer: 'B071 T403 8947',
          articleNumberMax: '80831',
          matrixId: 'M0E20000000EAT9',
          baseId: '80831',
          designer: {
            key: 'paolopecora',
            label: 'Paolo Pecora',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'm',
            label: 'M',
          },
          size: 'M',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'hellgrau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 18500,
        },
        discountedPrice: {
          centAmount: 16650,
        },
        isOnStock: true,
      },
      {
        id: '5',
        sku: 'M0E20000000EATA',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080831_1_medium.jpg'],
        groupId: '80831',
        attributes: {
          articleNumberManufacturer: 'B071 T403 8947',
          articleNumberMax: '80831',
          matrixId: 'M0E20000000EATA',
          baseId: '80831',
          designer: {
            key: 'paolopecora',
            label: 'Paolo Pecora',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'l',
            label: 'L',
          },
          size: 'L',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'hellgrau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 18500,
        },
        discountedPrice: {
          centAmount: 16650,
        },
        isOnStock: true,
      },
      {
        id: '6',
        sku: 'M0E20000000EATB',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080831_1_medium.jpg'],
        groupId: '80831',
        attributes: {
          articleNumberManufacturer: 'B071 T403 8947',
          articleNumberMax: '80831',
          matrixId: 'M0E20000000EATB',
          baseId: '80831',
          designer: {
            key: 'paolopecora',
            label: 'Paolo Pecora',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xl',
            label: 'XL',
          },
          size: 'XL',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'hellgrau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
          isOnStock: true,
        },
        price: {
          centAmount: 18500,
        },
        discountedPrice: {
          centAmount: 16650,
        },
        isOnStock: true,
      },
      {
        id: '7',
        sku: 'M0E20000000EATC',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080831_1_medium.jpg'],
        groupId: '80831',
        attributes: {
          articleNumberManufacturer: 'B071 T403 8947',
          articleNumberMax: '80831',
          matrixId: 'M0E20000000EATC',
          baseId: '80831',
          designer: {
            key: 'paolopecora',
            label: 'Paolo Pecora',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xxl',
            label: 'XXL',
          },
          size: 'XXL',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'hellgrau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 18500,
        },
        discountedPrice: {
          centAmount: 16650,
        },
        isOnStock: true,
      },
      {
        id: '8',
        sku: 'M0E20000000EATD',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/080831_1_medium.jpg'],
        groupId: '80831',
        attributes: {
          articleNumberManufacturer: 'B071 T403 8947',
          articleNumberMax: '80831',
          matrixId: 'M0E20000000EATD',
          baseId: '80831',
          designer: {
            key: 'paolopecora',
            label: 'Paolo Pecora',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xxxl',
            label: 'XXXL',
          },
          size: 'XXXL',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'hellgrau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 18500,
        },
        discountedPrice: {
          centAmount: 16650,
        },
        isOnStock: true,
      },
    ],
    _url: '/',
  },
  {
    productId: '5d4f7fbb-310e-47df-9c7e-6ef42a6e85be',
    version: '40',
    name: 'DKNY – Brieftasche',
    slug: 'dkny-brieftasche-R1522307-hellgrau',
    categories: [
      {
        categoryId: '25e0bef5-6b8a-4a2b-b64f-bd35f4038b61',
      },
    ],
    variants: [
      {
        id: '1',
        sku: 'A0E200000002E49',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/085498_1_medium.jpg'],
        groupId: '85498',
        attributes: {
          articleNumberManufacturer: 'R1522307 058',
          articleNumberMax: '85498',
          matrixId: 'A0E200000002E49',
          baseId: '85498',
          designer: {
            key: 'dkny',
            label: 'DKNY',
          },
          madeInItaly: {
            key: 'no',
            label: 'no',
          },
          commonSize: {
            key: 'oneSize',
            label: 'one Size',
          },
          size: 'one size',
          color: {
            key: 'grey',
            label: 'grau',
          },
          colorFreeDefinition: 'hellgrau',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'women',
            label: 'Damen',
          },
          season: 'A15',
          isOnStock: true,
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
    ],
    _url: '/',
  },
  {
    productId: '9db89af1-29c8-4c4f-a877-7d94b2be5f54',
    version: '1771',
    name: 'Hose Jacob Cohen grün',
    slug: 'jacob-cohen-hose-j622-697-gruen',
    categories: [
      {
        categoryId: 'f37dc50b-fd0e-4afe-81c6-35e9b7900873',
      },
      {
        categoryId: '7765da1a-8ed4-4267-a011-816f94b6e57a',
      },
    ],
    variants: [
      {
        id: '1',
        sku: 'M0E20000000DUIR',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078893_1_large.jpg'],
        groupId: '78893',
        attributes: {
          articleNumberManufacturer: 'J622 COM VIN 8605 697 697',
          articleNumberMax: '78893',
          matrixId: 'M0E20000000DUIR',
          baseId: '78893',
          designer: {
            key: 'jacobcohen',
            label: 'Jacob Cohen',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xs',
            label: 'XS',
          },
          size: '24',
          color: {
            key: 'green',
            label: 'grün',
          },
          colorFreeDefinition: 'grün',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '2',
        sku: 'M0E20000000DUIS',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078893_1_large.jpg'],
        groupId: '78893',
        attributes: {
          articleNumberManufacturer: 'J622 COM VIN 8605 697 697',
          articleNumberMax: '78893',
          matrixId: 'M0E20000000DUIS',
          baseId: '78893',
          designer: {
            key: 'jacobcohen',
            label: 'Jacob Cohen',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xs',
            label: 'XS',
          },
          size: '25',
          color: {
            key: 'green',
            label: 'grün',
          },
          colorFreeDefinition: 'grün',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '3',
        sku: 'M0E20000000DUIT',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078893_1_large.jpg'],
        groupId: '78893',
        attributes: {
          articleNumberManufacturer: 'J622 COM VIN 8605 697 697',
          articleNumberMax: '78893',
          matrixId: 'M0E20000000DUIT',
          baseId: '78893',
          designer: {
            key: 'jacobcohen',
            label: 'Jacob Cohen',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xs',
            label: 'XS',
          },
          size: '26',
          color: {
            key: 'green',
            label: 'grün',
          },
          colorFreeDefinition: 'grün',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '4',
        sku: 'M0E20000000DUIU',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078893_1_large.jpg'],
        groupId: '78893',
        attributes: {
          articleNumberManufacturer: 'J622 COM VIN 8605 697 697',
          articleNumberMax: '78893',
          matrixId: 'M0E20000000DUIU',
          baseId: '78893',
          designer: {
            key: 'jacobcohen',
            label: 'Jacob Cohen',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xs',
            label: 'XS',
          },
          size: '27',
          color: {
            key: 'green',
            label: 'grün',
          },
          colorFreeDefinition: 'grün',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '5',
        sku: 'M0E20000000DUIV',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078893_1_large.jpg'],
        groupId: '78893',
        attributes: {
          articleNumberManufacturer: 'J622 COM VIN 8605 697 697',
          articleNumberMax: '78893',
          matrixId: 'M0E20000000DUIV',
          baseId: '78893',
          designer: {
            key: 'jacobcohen',
            label: 'Jacob Cohen',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xs',
            label: 'XS',
          },
          size: '28',
          color: {
            key: 'green',
            label: 'grün',
          },
          colorFreeDefinition: 'grün',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '6',
        sku: 'M0E20000000DUIW',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078893_1_large.jpg'],
        groupId: '78893',
        attributes: {
          articleNumberManufacturer: 'J622 COM VIN 8605 697 697',
          articleNumberMax: '78893',
          matrixId: 'M0E20000000DUIW',
          baseId: '78893',
          designer: {
            key: 'jacobcohen',
            label: 'Jacob Cohen',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xs',
            label: 'XS',
          },
          size: '29',
          color: {
            key: 'green',
            label: 'grün',
          },
          colorFreeDefinition: 'grün',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '7',
        sku: 'M0E20000000DUIX',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078893_1_large.jpg'],
        groupId: '78893',
        attributes: {
          articleNumberManufacturer: 'J622 COM VIN 8605 697 697',
          articleNumberMax: '78893',
          matrixId: 'M0E20000000DUIX',
          baseId: '78893',
          designer: {
            key: 'jacobcohen',
            label: 'Jacob Cohen',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 's',
            label: 'S',
          },
          size: '30',
          color: {
            key: 'green',
            label: 'grün',
          },
          colorFreeDefinition: 'grün',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '8',
        sku: 'M0E20000000DUIY',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078893_1_large.jpg'],
        groupId: '78893',
        attributes: {
          articleNumberManufacturer: 'J622 COM VIN 8605 697 697',
          articleNumberMax: '78893',
          matrixId: 'M0E20000000DUIY',
          baseId: '78893',
          designer: {
            key: 'jacobcohen',
            label: 'Jacob Cohen',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 's',
            label: 'S',
          },
          size: '31',
          color: {
            key: 'green',
            label: 'grün',
          },
          colorFreeDefinition: 'grün',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '9',
        sku: 'M0E20000000DUIZ',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078893_1_large.jpg'],
        groupId: '78893',
        attributes: {
          articleNumberManufacturer: 'J622 COM VIN 8605 697 697',
          articleNumberMax: '78893',
          matrixId: 'M0E20000000DUIZ',
          baseId: '78893',
          designer: {
            key: 'jacobcohen',
            label: 'Jacob Cohen',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'm',
            label: 'M',
          },
          size: '32',
          color: {
            key: 'green',
            label: 'grün',
          },
          colorFreeDefinition: 'grün',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '10',
        sku: 'M0E20000000DUJ0',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078893_1_large.jpg'],
        groupId: '78893',
        attributes: {
          articleNumberManufacturer: 'J622 COM VIN 8605 697 697',
          articleNumberMax: '78893',
          matrixId: 'M0E20000000DUJ0',
          baseId: '78893',
          designer: {
            key: 'jacobcohen',
            label: 'Jacob Cohen',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'm',
            label: 'M',
          },
          size: '33',
          color: {
            key: 'green',
            label: 'grün',
          },
          colorFreeDefinition: 'grün',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '11',
        sku: 'M0E20000000DUJ1',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078893_1_large.jpg'],
        groupId: '78893',
        attributes: {
          articleNumberManufacturer: 'J622 COM VIN 8605 697 697',
          articleNumberMax: '78893',
          matrixId: 'M0E20000000DUJ1',
          baseId: '78893',
          designer: {
            key: 'jacobcohen',
            label: 'Jacob Cohen',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'l',
            label: 'L',
          },
          size: '34',
          color: {
            key: 'green',
            label: 'grün',
          },
          colorFreeDefinition: 'grün',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '12',
        sku: 'M0E20000000DUJ2',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078893_1_large.jpg'],
        groupId: '78893',
        attributes: {
          articleNumberManufacturer: 'J622 COM VIN 8605 697 697',
          articleNumberMax: '78893',
          matrixId: 'M0E20000000DUJ2',
          baseId: '78893',
          designer: {
            key: 'jacobcohen',
            label: 'Jacob Cohen',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'l',
            label: 'L',
          },
          size: '35',
          color: {
            key: 'green',
            label: 'grün',
          },
          colorFreeDefinition: 'grün',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '13',
        sku: 'M0E20000000DUJ3',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078893_1_large.jpg'],
        groupId: '78893',
        attributes: {
          articleNumberManufacturer: 'J622 COM VIN 8605 697 697',
          articleNumberMax: '78893',
          matrixId: 'M0E20000000DUJ3',
          baseId: '78893',
          designer: {
            key: 'jacobcohen',
            label: 'Jacob Cohen',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xl',
            label: 'XL',
          },
          size: '36',
          color: {
            key: 'green',
            label: 'grün',
          },
          colorFreeDefinition: 'grün',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '14',
        sku: 'M0E20000000DUJ4',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078893_1_large.jpg'],
        groupId: '78893',
        attributes: {
          articleNumberManufacturer: 'J622 COM VIN 8605 697 697',
          articleNumberMax: '78893',
          matrixId: 'M0E20000000DUJ4',
          baseId: '78893',
          designer: {
            key: 'jacobcohen',
            label: 'Jacob Cohen',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xl',
            label: 'XL',
          },
          size: '37',
          color: {
            key: 'green',
            label: 'grün',
          },
          colorFreeDefinition: 'grün',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '15',
        sku: 'M0E20000000DUJ5',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078893_1_large.jpg'],
        groupId: '78893',
        attributes: {
          articleNumberManufacturer: 'J622 COM VIN 8605 697 697',
          articleNumberMax: '78893',
          matrixId: 'M0E20000000DUJ5',
          baseId: '78893',
          designer: {
            key: 'jacobcohen',
            label: 'Jacob Cohen',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xxl',
            label: 'XXL',
          },
          size: '38',
          color: {
            key: 'green',
            label: 'grün',
          },
          colorFreeDefinition: 'grün',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '16',
        sku: 'M0E20000000DUJ6',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078893_1_large.jpg'],
        groupId: '78893',
        attributes: {
          articleNumberManufacturer: 'J622 COM VIN 8605 697 697',
          articleNumberMax: '78893',
          matrixId: 'M0E20000000DUJ6',
          baseId: '78893',
          designer: {
            key: 'jacobcohen',
            label: 'Jacob Cohen',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xxxl',
            label: 'XXXL',
          },
          size: '40',
          color: {
            key: 'green',
            label: 'grün',
          },
          colorFreeDefinition: 'grün',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
      {
        id: '17',
        sku: 'M0E20000000DUJ7',
        images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/078893_1_large.jpg'],
        groupId: '78893',
        attributes: {
          articleNumberManufacturer: 'J622 COM VIN 8605 697 697',
          articleNumberMax: '78893',
          matrixId: 'M0E20000000DUJ7',
          baseId: '78893',
          designer: {
            key: 'jacobcohen',
            label: 'Jacob Cohen',
          },
          madeInItaly: {
            key: 'yes',
            label: 'yes',
          },
          commonSize: {
            key: 'xxxl',
            label: 'XXXL',
          },
          size: '42',
          color: {
            key: 'green',
            label: 'grün',
          },
          colorFreeDefinition: 'grün',
          style: {
            key: 'sporty',
            label: 'sporty',
          },
          gender: {
            key: 'men',
            label: 'Herren',
          },
          season: 's15',
        },
        price: {
          centAmount: 16650,
        },
        discountedPrice: {
          centAmount: 14940,
        },
        isOnStock: true,
      },
    ],
    _url: '/',
  },
];

export const variants = products.map((product) => product.variants[0]);

export const getMockCart: (numberOfLineitems?: number) => Cart = (numberOfLineitems = 5) => {
  if (numberOfLineitems > 25) {
    console.info('Mock cart returned with only 16 lineitems, only 16 available');
  }
  let cart: Cart = {
    cartId: 'cf2200af-5891-41f1-aa04-099866ec348a',
    lineItems: products.slice(0, numberOfLineitems).map((product, n) => ({
      lineItemId: `${n.toString(16)}f2200af-5891-41f1-aa04-099866ec348${n.toString(16)}`,
      name: product.name,
      count: 1,
      price: product.variants[0].price,
      variant: product.variants[0],
      totalPrice: {
        centAmount: product.variants[0].price.centAmount,
      },
    })),
  };
  cart.sum.centAmount = cart.lineItems.reduce((prev, current) => prev + current.totalPrice.centAmount, 0);
  return cart;
};

export const headerNavigation = {
  categories: [
    /*{
      name: 'Women',
      featured: [
        { name: 'Sleep', href: '#' },
        { name: 'Swimwear', href: '#' },
        { name: 'Underwear', href: '#' },
      ],
      collection: [
        { name: 'Everything', href: '#' },
        { name: 'Core', href: '#' },
        { name: 'New Arrivals', href: '#' },
        { name: 'Sale', href: '#' },
      ],
      categories: [
        { name: 'Basic Tees', href: '#' },
        { name: 'Artwork Tees', href: '#' },
        { name: 'Bottoms', href: '#' },
        { name: 'Underwear', href: '#' },
        { name: 'Accessories', href: '#' },
      ],
      brands: [
        { name: 'Full Nelson', href: '#' },
        { name: 'My Way', href: '#' },
        { name: 'Re-Arranged', href: '#' },
        { name: 'Counterfeit', href: '#' },
        { name: 'Significant Other', href: '#' },
      ],
    },
    {
      name: 'Men',
      featured: [
        { name: 'Casual', href: '#' },
        { name: 'Boxers', href: '#' },
        { name: 'Outdoor', href: '#' },
      ],
      collection: [
        { name: 'Everything', href: '#' },
        { name: 'Core', href: '#' },
        { name: 'New Arrivals', href: '#' },
        { name: 'Sale', href: '#' },
      ],
      categories: [
        { name: 'Artwork Tees', href: '#' },
        { name: 'Pants', href: '#' },
        { name: 'Accessories', href: '#' },
        { name: 'Boxers', href: '#' },
        { name: 'Basic Tees', href: '#' },
      ],
      brands: [
        { name: 'Significant Other', href: '#' },
        { name: 'My Way', href: '#' },
        { name: 'Counterfeit', href: '#' },
        { name: 'Re-Arranged', href: '#' },
        { name: 'Full Nelson', href: '#' },
      ],
    },*/
  ],
};

export const headerLogo = { media: 'https://cpmr-islands.org/wp-content/uploads/sites/4/2019/07/test.png' };

export const headerButtonLink = {
  type: 'page-folder',
  pageFolder: {
    pageFolderId: '595b5c44de02a8957bc5821913e58fa2',
    name: 'Start',
    _urls: { de_CH: '/', fr_CH: '/', it_CH: '/', de_LI: '/' },
    _url: '/',
  },
  openInNewWindow: false,
};

export const headerAccountLink = {
  type: 'link',
  link: '/account',
  openInNewWindow: false,
};

export const headerLinks = [
  {
    name: 'Men',
    reference: {
      type: 'page-folder',
      pageFolder: {
        pageFolderId: 'b27378fbe05639798e9b23399a373bc0',
        name: 'Men',
        _urls: { de_CH: '/men', fr_CH: '/men', it_CH: '/men', de_LI: '/men' },
        _url: '/men',
      },
      openInNewWindow: false,
    },
  },
  {
    name: 'Women',
    reference: {
      type: 'page-folder',
      pageFolder: {
        pageFolderId: 'b27378fbe05639798e9b23399a373bc0',
        name: 'Men',
        _urls: { de_CH: '/men', fr_CH: '/men', it_CH: '/men', de_LI: '/men' },
        _url: '/men',
      },
      openInNewWindow: false,
    },
  },
];

export const footerColumns = [
  {
    header: 'Help & Information',
    icon: 'question',
    links: [
      {
        name: 'Order status',
        reference: {
          openInNewWindow: false,
          type: 'page-folder',
          pageFolder: {
            pageFolderId: '595b5c44de02a8957bc5821913e58fa2',
            name: 'Start',
            _url: '/',
            _urls: {
              de_CH: '/',
              de_LI: '/',
              fr_CH: '/',
              it_CH: '/',
            },
          },
        },
      },
      {
        name: 'Shipment',
        reference: {
          openInNewWindow: false,
          type: 'page-folder',
          pageFolder: {
            pageFolderId: '595b5c44de02a8957bc5821913e58fa2',
            name: 'Start',
            _url: '/',
            _urls: {
              de_CH: '/',
              de_LI: '/',
              fr_CH: '/',
              it_CH: '/',
            },
          },
        },
      },
      {
        name: 'Returns and exchanges',
        reference: {
          openInNewWindow: false,
          type: 'page-folder',
          pageFolder: {
            pageFolderId: '595b5c44de02a8957bc5821913e58fa2',
            name: 'Start',
            _url: '/',
            _urls: {
              de_CH: '/',
              de_LI: '/',
              fr_CH: '/',
              it_CH: '/',
            },
          },
        },
      },
      {
        name: 'Refunds',
        reference: {
          openInNewWindow: false,
          type: 'page-folder',
          pageFolder: {
            pageFolderId: '595b5c44de02a8957bc5821913e58fa2',
            name: 'Start',
            _url: '/',
            _urls: {
              de_CH: '/',
              de_LI: '/',
              fr_CH: '/',
              it_CH: '/',
            },
          },
        },
      },
    ],
  },
  {
    header: 'Contact us',
    icon: 'inbox',
    links: [
      {
        name: '02300 77 77 5',
        reference: {
          openInNewWindow: false,
          type: 'page-folder',
          pageFolder: {
            pageFolderId: '595b5c44de02a8957bc5821913e58fa2',
            name: 'Start',
            _url: '/',
            _urls: {
              de_CH: '/',
              de_LI: '/',
              fr_CH: '/',
              it_CH: '/',
            },
          },
        },
      },
      {
        name: 'hello@frontastic.cloud',
        reference: {
          openInNewWindow: false,
          type: 'page-folder',
          pageFolder: {
            pageFolderId: '595b5c44de02a8957bc5821913e58fa2',
            name: 'Start',
            _url: '/',
            _urls: {
              de_CH: '/',
              de_LI: '/',
              fr_CH: '/',
              it_CH: '/',
            },
          },
        },
      },
    ],
  },
  {
    header: 'About us',
    icon: 'speaker',
    links: [
      {
        name: 'About Us',
        reference: {
          openInNewWindow: false,
          type: 'page-folder',
          pageFolder: {
            pageFolderId: '595b5c44de02a8957bc5821913e58fa2',
            name: 'Start',
            _url: '/',
            _urls: {
              de_CH: '/',
              de_LI: '/',
              fr_CH: '/',
              it_CH: '/',
            },
          },
        },
      },
      {
        name: 'Careers',
        reference: {
          openInNewWindow: false,
          type: 'page-folder',
          pageFolder: {
            pageFolderId: '595b5c44de02a8957bc5821913e58fa2',
            name: 'Start',
            _url: '/',
            _urls: {
              de_CH: '/',
              de_LI: '/',
              fr_CH: '/',
              it_CH: '/',
            },
          },
        },
      },
      {
        name: 'Partnership',
        reference: {
          openInNewWindow: false,
          type: 'page-folder',
          pageFolder: {
            pageFolderId: '595b5c44de02a8957bc5821913e58fa2',
            name: 'Start',
            _url: '/',
            _urls: {
              de_CH: '/',
              de_LI: '/',
              fr_CH: '/',
              it_CH: '/',
            },
          },
        },
      },
      {
        name: 'Press',
        reference: {
          openInNewWindow: false,
          type: 'page-folder',
          pageFolder: {
            pageFolderId: '595b5c44de02a8957bc5821913e58fa2',
            name: 'Start',
            _url: '/',
            _urls: {
              de_CH: '/',
              de_LI: '/',
              fr_CH: '/',
              it_CH: '/',
            },
          },
        },
      },
    ],
  },
  {
    header: 'Products & Services',
    links: [
      {
        name: 'Limitless Customizability',
        reference: {
          openInNewWindow: false,
          type: 'page-folder',
          pageFolder: {
            pageFolderId: '595b5c44de02a8957bc5821913e58fa2',
            name: 'Start',
            _url: '/',
            _urls: {
              de_CH: '/',
              de_LI: '/',
              fr_CH: '/',
              it_CH: '/',
            },
          },
        },
      },
      {
        name: 'Amazing Performance',
        reference: {
          openInNewWindow: false,
          type: 'page-folder',
          pageFolder: {
            pageFolderId: '595b5c44de02a8957bc5821913e58fa2',
            name: 'Start',
            _url: '/',
            _urls: {
              de_CH: '/',
              de_LI: '/',
              fr_CH: '/',
              it_CH: '/',
            },
          },
        },
      },
      {
        name: 'Functional Usability',
        reference: {
          openInNewWindow: false,
          type: 'page-folder',
          pageFolder: {
            pageFolderId: '595b5c44de02a8957bc5821913e58fa2',
            name: 'Start',
            _url: '/',
            _urls: {
              de_CH: '/',
              de_LI: '/',
              fr_CH: '/',
              it_CH: '/',
            },
          },
        },
      },
    ],
  },
];

export const footerCopyrightLinks: Link[] = [
  {
    name: 'T&C',
    reference: {
      openInNewWindow: false,
      type: 'page-folder',
      pageFolder: {
        pageFolderId: '595b5c44de02a8957bc5821913e58fa2',
        name: 'Start',
        _url: '/',
        _urls: {
          de_CH: '/',
          de_LI: '/',
          fr_CH: '/',
          it_CH: '/',
        },
      },
    },
  },
  {
    name: 'Cookies',
    reference: {
      openInNewWindow: false,
      type: 'page-folder',
      pageFolder: {
        pageFolderId: '595b5c44de02a8957bc5821913e58fa2',
        name: 'Start',
        _url: '/',
        _urls: {
          de_CH: '/',
          de_LI: '/',
          fr_CH: '/',
          it_CH: '/',
        },
      },
    },
  },
  {
    name: 'Privacy policy',
    reference: {
      openInNewWindow: false,
      type: 'page-folder',
      pageFolder: {
        pageFolderId: '595b5c44de02a8957bc5821913e58fa2',
        name: 'Start',
        _url: '/',
        _urls: {
          de_CH: '/',
          de_LI: '/',
          fr_CH: '/',
          it_CH: '/',
        },
      },
    },
  },
];
