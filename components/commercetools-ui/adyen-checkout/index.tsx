import { useEffect, useRef, useState } from 'react';
import { ShippingMethod } from '@Types/cart/ShippingMethod';
import toast from 'react-hot-toast';
import Address from 'components/commercetools-ui/adyen-checkout/panels/address';
import Checkout from 'components/commercetools-ui/adyen-checkout/panels/checkout';
import Overview from 'components/commercetools-ui/adyen-checkout/panels/overview';
import OrderSummary from 'components/commercetools-ui/cart/orderSummary';
import { useFormat } from 'helpers/hooks/useFormat';
import { countryBasedShippingRateIndex } from 'helpers/utils/flattenShippingMethod';
import { useCart } from 'frontastic';
import { mapToCartStructure, mapToFormStructure } from './mapFormData';
import { requiredDataIsValid } from './requiredDataIsValid';

export type FormData = {
  firstName: string;
  lastName: string;
  phone?: string;
  email: string;
  shippingStreetName: string;
  shippingCity: string;
  shippingPostalCode: string;
  shippingCountry: string;
  billingStreetName: string;
  billingCity: string;
  billingPostalCode: string;
  billingCountry: string;
};

const AdyenCheckout = () => {
  const { data: cartList, updateCart, setShippingMethod } = useCart();
  const { formatMessage } = useFormat({ name: 'cart' });
  const { formatMessage: formatCheckoutMessage } = useFormat({ name: 'checkout' });
  const containerRef = useRef();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [disableSubmitButton, setDisableSubmitButton] = useState<Boolean>(true);
  const [billingIsSameAsShipping, setBillingIsSameAsShipping] = useState<boolean>(true);
  const [chosenShippingMethod, setChosenShippingMethod] = useState<ShippingMethod>();
  const [dataIsValid, setDataIsValid] = useState<boolean>(false);
  const [data, setData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    shippingStreetName: '',
    shippingCity: '',
    shippingPostalCode: '',
    shippingCountry: '',
    billingStreetName: '',
    billingCity: '',
    billingPostalCode: '',
    billingCountry: '',
  });

  const changeStep = (stepIndex: number) => {
    if (currentStepIndex > stepIndex) {
      setCurrentStepIndex(stepIndex);
    }
  };

  const toggleBillingAddressOption = () => {
    setBillingIsSameAsShipping(!billingIsSameAsShipping);
  };

  const generateStepTag = (index: number) => (
    <div
      className={`mx-auto flex h-10 w-10 items-center rounded-full text-lg  text-white ${
        index == currentStepIndex ? `bg-green-500` : 'border-2 border-gray-200 bg-white'
      }`}
    >
      <span className={`w-full text-center ${index == currentStepIndex ? `text-white` : 'text-gray-600'}`}>
        {index + 1}
      </span>
    </div>
  );

  const goToTopOfPage = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const gotToNextStep = () => {
    if (currentStepIndex == 0) {
      updateCartData();
    }

    setCurrentStepIndex(currentStepIndex + 1);
    goToTopOfPage();
  };

  const updateData = (data: FormData) => {
    setData(data);
  };

  const updateCartData = () => {
    if (countryBasedShippingRateIndex[data.shippingCountry] == undefined) {
      toast.error(
        formatCheckoutMessage({
          id: 'taxesNotSupported',
          defaultMessage: 'Taxes are not defined for this country in commercetools',
        }),
      );
      updateData({ ...data, shippingCountry: '' });
      return;
    }

    if (dataIsValid) {
      const updatedData = mapToCartStructure(data, billingIsSameAsShipping);
      updateCart(updatedData);
    }
  };

  const updateChosenShippingMethod = (shippingMethod: ShippingMethod) => {
    setChosenShippingMethod(shippingMethod);
    setShippingMethod(shippingMethod.shippingMethodId);
  };

  const submitButtonLabel = [
    formatMessage({ id: 'goToOverview', defaultMessage: 'Go to overview' }),
    formatMessage({ id: 'ContinueAndPay', defaultMessage: 'Continue and pay' }),
  ];

  const steps = [
    {
      name: formatMessage({ id: 'address', defaultMessage: 'Address' }),
      component: (
        <Address
          data={data}
          updateData={updateData}
          billingIsSameAsShipping={billingIsSameAsShipping}
          toggleBillingAddressOption={toggleBillingAddressOption}
        />
      ),
    },
    {
      name: formatMessage({ id: 'overview', defaultMessage: 'Overview' }),

      component: (
        <Overview
          shippingMethods={cartList?.availableShippingMethods}
          chosenShippingMethod={chosenShippingMethod}
          updateChosenShippingMethod={updateChosenShippingMethod}
        />
      ),
    },
    { name: formatMessage({ id: 'payment', defaultMessage: 'Payment' }), component: <Checkout /> },
  ];

  useEffect(() => {
    setDataIsValid(requiredDataIsValid(data, billingIsSameAsShipping));
  }, [data, billingIsSameAsShipping]);

  useEffect(() => {
    setDisableSubmitButton(!dataIsValid);
  }, [dataIsValid]);

  useEffect(() => {
    if (data.shippingCountry !== '') {
      updateCartData();
    }
  }, [data.shippingCountry, dataIsValid]);

  useEffect(() => {
    const defaultData = mapToFormStructure(cartList);
    if (defaultData && requiredDataIsValid(defaultData, billingIsSameAsShipping)) {
      updateData(defaultData);
    }
  }, [cartList]);

  useEffect(() => {
    if (cartList?.shippingInfo) {
      const currentShippingMethod = cartList.availableShippingMethods.find(
        ({ shippingMethodId }) => shippingMethodId == cartList.shippingInfo.shippingMethodId,
      );
      setChosenShippingMethod(currentShippingMethod);
    } else {
      setChosenShippingMethod(cartList?.availableShippingMethods[0]);
    }
  }, [cartList?.shippingInfo]);

  useEffect(() => {
    if (cartList?.shippingInfo && !chosenShippingMethod) {
      const chosenMethod = cartList.availableShippingMethods.find(
        ({ shippingMethodId }) => shippingMethodId === cartList.shippingInfo.shippingMethodId,
      );
      setChosenShippingMethod(chosenMethod);
    } else {
      setChosenShippingMethod(cartList?.availableShippingMethods?.[0]);
    }
  }, []);

  return (
    <div className="mx-auto max-w-4xl md:mt-4">
      <div>
        <div className="container mx-auto py-6">
          <div className="relative flex justify-between py-6 px-12 shadow-md" id="ProgressStepper">
            <div className="absolute top-0 left-0 flex h-full w-full items-center justify-between py-6 px-12">
              <div className="top-2/4 h-2 w-full bg-green-100"></div>
            </div>
            {steps.map(({ name }, index) => (
              <button key={index} className="relative rounded bg-white p-2" onClick={() => changeStep(index)}>
                {generateStepTag(index)}
                <div className="text-center text-xs 2xl:text-base">{name}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16" ref={containerRef}>
        {steps[currentStepIndex].component}
        <OrderSummary
          cart={cartList}
          shippingMethod={chosenShippingMethod}
          submitButtonLabel={submitButtonLabel[currentStepIndex]}
          disableSubmitButton={disableSubmitButton}
          hideSubmitButton={currentStepIndex == 2}
          onSubmit={gotToNextStep}
        />
      </div>
    </div>
  );
};

export default AdyenCheckout;
