import React from 'react';
import classnames from 'classnames';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'next-i18next';

import { ErrorMessage } from 'components';
import { convertToCountryName, convertToStateName, getCountryStates } from './../countries';

type Props = {
  countries: any;
  defaultValues?: any;
  onSubmit: (v: any) => void;
};

const Billing: React.FC<Props> = ({ countries, defaultValues = {}, onSubmit }: Props) => {
  const { t } = useTranslation(['common', 'checkout']);

  const requiredError = t('fieldIsRequired');

  const {
    register,
    getValues,
    formState: { errors },
  } = useForm({ mode: 'onChange', defaultValues: defaultValues || {} });

  const onChange = () => {
    onSubmit(getValues());
  };

  const getStates = () => {
    return getCountryStates(getValues('country'));
  };

  return (
    <form onChange={onChange}>
      <div className="mb-4 text-xs text-neutral-600 font-bold leading-tight uppercase">
        {t('checkout:billingDetails')}
      </div>

      <div className="mb-4">
        <label className="text-sm text-neutral-700 leading-tight" htmlFor="firstName">
          {t('firstName')} *
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          className={classnames('form-input mt-2', {
            'border border-red-600': errors['firstName'],
          })}
          {...register('firstName', { required: requiredError })}
        />
        <ErrorMessage errors={errors} name="firstName" />
      </div>

      <div className="mb-4">
        <label className="text-sm text-neutral-700 leading-tight" htmlFor="lastName">
          {t('lastName')} *
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          className={classnames('form-input mt-2', {
            'border border-red-600': errors['lastName'],
          })}
          {...register('lastName', { required: requiredError })}
        />
        <ErrorMessage errors={errors} name="lastName" />
      </div>

      <div className="mb-4">
        <label className="text-sm text-neutral-700 leading-tight" htmlFor="phone">
          {t('phone')}
        </label>
        <input id="phone" name="phone" type="text" className="form-input mt-2" {...register('phone')} />
      </div>

      <div className="mb-4">
        <label className="text-sm text-neutral-700 leading-tight" htmlFor="streetName">
          {t('address')} *
        </label>
        <input
          id="streetName"
          name="streetName"
          type="text"
          className={classnames('form-input mt-2', {
            'border border-red-600': errors['streetName'],
          })}
          {...register('streetName', { required: requiredError })}
        />
        <ErrorMessage errors={errors} name="streetName" />
      </div>

      <div className="mb-4">
        <label className="text-sm text-neutral-700 leading-tight" htmlFor="city">
          {t('city')} *
        </label>
        <input
          id="city"
          name="city"
          type="text"
          className={classnames('form-input mt-2', {
            'border border-red-600': errors['city'],
          })}
          {...register('city', { required: requiredError })}
        />
        <ErrorMessage errors={errors} name="city" />
      </div>

      <div className="mb-4">
        <label className="text-sm text-neutral-700 leading-tight" htmlFor="postalCode">
          {t('zipCode')} *
        </label>
        <input
          id="postalCode"
          name="postalCode"
          type="text"
          className={classnames('form-input mt-2', {
            'border border-red-600': errors['postalCode'],
          })}
          {...register('postalCode', { required: requiredError })}
        />
        <ErrorMessage errors={errors} name="postalCode" />
      </div>

      <div>
        <label className="text-sm text-neutral-700 leading-tight" htmlFor="country">
          {t('country')} *
        </label>
        <select
          id="country"
          name="country"
          className={classnames('form-input mt-2 bg-background-primary', {
            'border border-red-600': errors['country'],
          })}
          {...register('country', { required: requiredError })}
        >
          <option value="" />
          {countries.map((country, key) => {
            return (
              <option key={key} value={country}>
                {convertToCountryName(country)}
              </option>
            );
          })}
        </select>
        <ErrorMessage errors={errors} name="country" />
      </div>

      {getStates() && (
        <div className="mt-4">
          <label className="text-sm text-neutral-700 leading-tight" htmlFor="state">
            {t('stateOrProvince')} *
          </label>
          <select
            id="state"
            name="state"
            className={classnames('form-input mt-2 bg-background-primary', {
              'border border-red-600': errors['state'],
            })}
            {...register('state', { required: requiredError })}
          >
            <option value="" />
            {getStates().map((state, key) => {
              return (
                <option key={key} value={state}>
                  {convertToStateName(getValues('country'), state)}
                </option>
              );
            })}
          </select>
          <ErrorMessage errors={errors} name="state" />
        </div>
      )}
    </form>
  );
};

export default Billing;
