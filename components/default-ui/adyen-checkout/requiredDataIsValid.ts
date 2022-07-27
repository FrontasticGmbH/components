import { FormData } from '.';

export const requiredDataIsValid = (data: FormData, billingIsSameAsShipping: boolean) => {
  const requiredInput = [
    'firstName',
    'lastName',
    'email',
    'shippingStreetName',
    'shippingCity',
    'shippingPostalCode',
    'shippingCountry',
  ];
  if (!billingIsSameAsShipping) {
    requiredInput.push('billingStreetName', 'billingCity', 'billingPostalCode', 'billingCountry');
  }

  const mailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,5}$/;

  const emptyInput = requiredInput.find((input) => !data[input] || data[input] === '');

  if (emptyInput || !data.email.match(mailFormat)) {
    return false;
  }

  return true;
};
