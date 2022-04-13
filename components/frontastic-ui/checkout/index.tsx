import GuestCheckoutForm from './checkoutForm/guest';
import CheckoutForm from './checkoutForm';
import MobileOrderSummary from './OrderSummary/OrderSummaryMobile';
import DesktopOrderSummary from './OrderSummary/OrderSummaryDesktop';
import { CurrencyHelpers } from 'helpers/CurrencyHelpers';
import { useState } from 'react';
import EmptyCart from '../cart/emptyCart';
import { useRouter } from 'next/router';
import { useAccount, useCart } from 'frontastic';
import { Address } from '../../../../types/account/Address';
import { useFormat } from 'helpers/hooks/useFormat';
import { Reference } from 'helpers/Reference';
import * as yup from 'yup';
import { ObjectShape } from 'yup/lib/object';

interface Props {
  loginLink?: Reference;
}

const Checkout = ({ loginLink }: Props) => {
  //i18n messages
  const { formatMessage: formatCartMessage } = useFormat({ name: 'cart' });
  const { formatMessage: formatCheckoutMessage } = useFormat({ name: 'checkout' });
  const { formatMessage } = useFormat({ name: 'common' });

  //account data
  const { loggedIn } = useAccount();

  //cart data
  const { data, removeItem, shippingMethods, setShippingMethod, updateCart, orderCart } = useCart();

  //account data
  const { account } = useAccount();

  //next/router
  const router = useRouter();

  //checkout data
  const [checkoutData, setCheckoutData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    nameOnCard: '',
    cardNumber: '',
    expirationDate: '',
    cvc: '',
    streetName: '',
    streetNumber: '',
    city: '',
    postalCode: '',
    country: '',
    shippingStreetName: '',
    shippingStreetNumber: '',
    shippingCity: '',
    shippingPostalCode: '',
    shippingCountry: '',
    billingAddress: account?.addresses.find((address) => address.isDefaultBillingAddress)?.addressId ?? '',
    shippingAddress: account?.addresses.find((address) => address.isDefaultShippingAddress)?.addressId ?? '',
    invoiceId: '',
    pay: 'cc',
  });

  const updateFormInput = (propName: string, newValue: string) => {
    setCheckoutData({ ...checkoutData, [propName]: newValue });
  };

  const editLineItem = () => router.push('/cart');

  const goToProductPage = (_url: string) => router.push(_url);

  const removeLineItem = (lineItemId: string) => removeItem(lineItemId);

  const isValid = () => {
    //credit card scheme
    const ccScheme = yup.object().shape({
      nameOnCard: yup.string().required(),
      cardNumber: yup.string().required(),
      expirationDate: yup
        .date()
        .transform((value, originalValue, ctx) => {
          if (typeof originalValue !== 'string' && ctx.isType(value)) return value;
          const [month, year] = originalValue.split('/');
          return new Date(+`20${year}`, +month - 1);
        })
        .min(new Date(Date.now()))
        .required(),
      cvc: yup
        .string()
        .required()
        .matches(/^[0-9]+$/)
        .min(3)
        .max(3),
    });

    //invoice scheme
    const invoiceScheme = yup.object().shape({
      invoiceId: yup.string().required(),
    });

    //scheme for logged in users
    const loggedInScheme = yup.object().shape({
      billingAddress: yup.string().required(),
      shippingAddress: yup.string().optional(),
    });

    //scheme for guest users
    const guestScheme = yup.object().shape({
      streetName: yup.string().required(),
      streetNumber: yup.string().required(),
      city: yup.string().required(),
      postalCode: yup.string().required(),
      country: yup.string().required(),
      shippingStreetName: yup.string().optional(),
      shippingStreetNumber: yup.string().optional(),
      shippingCity: yup.string().optional(),
      shippingPostalCode: yup.string().optional(),
      shippingCountry: yup.string().optional(),
    });

    //merged scheme
    const scheme = yup
      .object()
      .shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        emailAddress: yup.string().email(),
      })
      .concat((loggedIn ? loggedInScheme : guestScheme) as yup.ObjectSchema<ObjectShape>)
      .concat(checkoutData.pay === 'cc' ? ccScheme : (invoiceScheme as yup.ObjectSchema<ObjectShape>));

    return scheme.isValidSync(checkoutData);
  };

  const submitForm = async () => {
    //validation for shipping address for guests
    const isValidShippingAddress =
      !!checkoutData.shippingCity &&
      !!checkoutData.shippingCountry &&
      !!checkoutData.shippingPostalCode &&
      !!checkoutData.shippingStreetName &&
      !!checkoutData.shippingStreetNumber;

    const shippingAddress = loggedIn
      ? account.addresses.find((address) => address.addressId === checkoutData.shippingAddress)
      : ((isValidShippingAddress
          ? {
              streetName: checkoutData.shippingStreetName,
              streetNumber: checkoutData.shippingStreetNumber,
              city: checkoutData.shippingCity,
              country: checkoutData.shippingCountry,
              postalCode: checkoutData.shippingPostalCode,
            }
          : null) as Address);

    const billingAddress: Address = loggedIn
      ? account.addresses.find((address) => address.addressId === checkoutData.billingAddress)
      : ({
          streetName: checkoutData.streetName,
          streetNumber: checkoutData.streetNumber,
          city: checkoutData.city,
          country: checkoutData.country,
          postalCode: checkoutData.postalCode,
        } as Address);

    await updateCart({
      account: {
        email: checkoutData.emailAddress,
      },
      billing: billingAddress,
      shipping: shippingAddress || billingAddress,
    });
    await setShippingMethod(shippingMethods.data?.[0].shippingMethodId);
    await orderCart();
    //TODO: figure out logic here
    router.push('/checkout-success');
  };

  if (!data?.lineItems || data.lineItems.length < 1) {
    return <EmptyCart />;
  }

  return (
    <main className="py-10 lg:flex lg:min-h-full lg:flex-row-reverse lg:overflow-hidden">
      {/* <div className="px-4 py-6 sm:px-6 lg:hidden">
        <div className="mx-auto flex max-w-lg">
          <a href="#">
            <span className="sr-only">{formatMessage({ id: 'workflow', defaultMessage: 'Workflow' })}</span>
            <img
              src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
              alt=""
              className="h-8 w-auto"
            />
          </a>
        </div>
      </div> */}

      <h1 className="sr-only">{formatCartMessage({ id: 'checkout', defaultMessage: 'Checkout' })}</h1>

      <MobileOrderSummary
        cart={data}
        editCartItem={editLineItem}
        goToProductPage={goToProductPage}
        removeCartItem={removeLineItem}
        selectedShipping={shippingMethods.data?.[0]}
      />
      <DesktopOrderSummary
        cart={data}
        editCartItem={editLineItem}
        goToProductPage={goToProductPage}
        removeCartItem={removeLineItem}
        selectedShipping={shippingMethods.data?.[0]}
      />

      {/* Checkout form */}
      <section
        aria-labelledby="payment-heading"
        className="flex-auto overflow-y-auto px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:px-8 lg:pt-0 lg:pb-24"
      >
        <div className="mx-auto max-w-lg">
          {/* <div className="hidden pt-10 pb-16 lg:flex">
            <a href="#">
              <span className="sr-only">{formatMessage({ id: 'workflow', defaultMessage: 'Workflow' })}</span>
              <img
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                alt=""
                className="h-8 w-auto"
              />
            </a>
          </div> */}
          {/*<button
                    type="button"
                    className="w-full flex items-center justify-center bg-black border border-transparent text-white rounded-md py-2 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                >
                    <span className="sr-only">Pay with Apple Pay</span>
                    <svg className="h-5 w-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 20">
                        <path d="M9.536 2.579c-.571.675-1.485 1.208-2.4 1.132-.113-.914.334-1.884.858-2.484C8.565.533 9.564.038 10.374 0c.095.951-.276 1.884-.838 2.579zm.829 1.313c-1.324-.077-2.457.751-3.085.751-.638 0-1.6-.713-2.647-.694-1.362.019-2.628.79-3.323 2.017-1.429 2.455-.372 6.09 1.009 8.087.676.99 1.485 2.075 2.552 2.036 1.009-.038 1.409-.656 2.628-.656 1.228 0 1.58.656 2.647.637 1.104-.019 1.8-.99 2.475-1.979.771-1.122 1.086-2.217 1.105-2.274-.02-.019-2.133-.828-2.152-3.263-.02-2.036 1.666-3.007 1.742-3.064-.952-1.408-2.437-1.56-2.951-1.598zm7.645-2.76v14.834h2.305v-5.072h3.19c2.913 0 4.96-1.998 4.96-4.89 0-2.893-2.01-4.872-4.885-4.872h-5.57zm2.305 1.941h2.656c2 0 3.142 1.066 3.142 2.94 0 1.875-1.142 2.95-3.151 2.95h-2.647v-5.89zM32.673 16.08c1.448 0 2.79-.733 3.4-1.893h.047v1.779h2.133V8.582c0-2.14-1.714-3.52-4.351-3.52-2.447 0-4.256 1.399-4.323 3.32h2.076c.171-.913 1.018-1.512 2.18-1.512 1.41 0 2.2.656 2.2 1.865v.818l-2.876.171c-2.675.162-4.123 1.256-4.123 3.159 0 1.922 1.495 3.197 3.637 3.197zm.62-1.76c-1.229 0-2.01-.59-2.01-1.494 0-.933.752-1.475 2.19-1.56l2.562-.162v.837c0 1.39-1.181 2.379-2.743 2.379zM41.1 20c2.247 0 3.304-.856 4.227-3.454l4.047-11.341h-2.342l-2.714 8.763h-.047l-2.714-8.763h-2.409l3.904 10.799-.21.656c-.352 1.114-.923 1.542-1.942 1.542-.18 0-.533-.02-.676-.038v1.779c.133.038.705.057.876.057z" />
                    </svg>
                </button>

                <div className="relative mt-8">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-200" />
                    </div>
                    <div className="relative flex justify-center">
                        <span className="px-4 bg-white text-sm font-medium text-gray-500">or</span>
                    </div>
                </div>*/}

          {loggedIn ? (
            <CheckoutForm
              submitText={`${formatCheckoutMessage({
                id: 'pay',
                defaultMessage: 'Pay',
              })} ${CurrencyHelpers.formatForCurrency(
                CurrencyHelpers.addCurrency(data.sum, shippingMethods.data?.[0]?.rates?.[0].price || {}),
              )}`}
              updateFormInput={updateFormInput}
              submitForm={submitForm}
              data={checkoutData}
              isFormValid={isValid()}
              account={account}
              loggedIn={loggedIn}
            />
          ) : (
            <GuestCheckoutForm
              submitText={`${formatCheckoutMessage({
                id: 'pay',
                defaultMessage: 'Pay',
              })} ${CurrencyHelpers.formatForCurrency(
                CurrencyHelpers.addCurrency(data.sum, shippingMethods.data?.[0]?.rates?.[0].price || {}),
              )}`}
              updateFormInput={updateFormInput}
              submitForm={submitForm}
              data={checkoutData}
              isFormValid={isValid()}
            />
          )}
        </div>
      </section>
    </main>
  );
};

export default Checkout;
