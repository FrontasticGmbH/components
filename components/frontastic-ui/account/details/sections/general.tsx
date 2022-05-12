import React from 'react';
import { useRouter } from 'next/router';
import { account as accountMock } from 'components/mockData';
import { useFormat } from 'helpers/hooks/useFormat';
import { mapLocaleToMeaningfulFormat } from 'helpers/utils/i18n';
import { useAccount } from 'frontastic';
import Editable from '../editable';

const General = () => {
  //i18n messages
  const { formatMessage } = useFormat({ name: 'common' });
  const { formatMessage: formatAccountMessage } = useFormat({ name: 'account' });

  //next/router
  const router = useRouter();

  //account data
  const { account, update } = useAccount();

  const sections = [
    {
      headline: formatAccountMessage({ id: 'profile', defaultMessage: 'Profile' }),
      subline: formatAccountMessage({
        id: 'profile.desc',
        defaultMessage: 'This information will be displayed publicly so be careful what you share.',
      }),
      fields: [
        {
          label: formatMessage({ id: 'firstName', defaultMessage: 'First Name' }),
          value: account ? account?.firstName : accountMock.firstName,
          type: 'text',
          options: [],
          defaultValue: '',
          required: true,
          onSubmit: (value: string) => {
            update({ firstName: value });
          },
          editable: true,
        },
        {
          label: formatMessage({ id: 'lastName', defaultMessage: 'Last Name' }),
          value: account ? account?.lastName : accountMock.lastName,
          type: 'text',
          options: [],
          defaultValue: '',
          required: true,
          onSubmit: (value: string) => {
            update({ lastName: value });
          },
          editable: true,
        },
        {
          label: formatMessage({ id: 'email', defaultMessage: 'Email' }),
          value: account ? account?.email : accountMock.email,
          type: 'email',
          options: [],
          defaultValue: '',
          required: true,
          onSubmit: (value: string) => {},
          editable: false,
        },
      ],
    },
    router != null
      ? {
          headline: formatAccountMessage({ id: 'account', defaultMessage: 'Account' }),
          subline: formatAccountMessage({
            id: 'account.desc',
            defaultMessage: 'Manage how information is displayed on your account.',
          }),
          fields: [
            {
              label: 'language',
              value: mapLocaleToMeaningfulFormat(router.locale).name,
              type: 'select',
              options: router.locales.map((locale) => ({
                name: mapLocaleToMeaningfulFormat(locale).name,
                value: locale,
              })),
              defaultValue: router.locale,
              required: true,
              onSubmit: (value: string) => {
                router.replace(router.asPath, undefined, { locale: value });
              },
              editable: true,
            },
          ],
        }
      : {
          headline: '',
          subline: '',
          fields: [],
        },
  ];

  return (
    <div>
      {sections.map((section, index) => (
        <div className="mt-10 divide-y divide-gray-200" key={index}>
          <div className="space-y-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">{section.headline}</h3>
            <p className="max-w-2xl text-sm text-gray-500">{section.subline}</p>
          </div>
          <div className="mt-6">
            <dl className="divide-y divide-gray-200">
              {section.fields.map((field, fieldIndex) => (
                <Editable
                  key={fieldIndex}
                  label={field.label}
                  text={field.value}
                  input={{
                    type: field.type,
                    options: field.options,
                    defaultValue: field.defaultValue,
                    required: field.required,
                  }}
                  onSubmit={field.onSubmit}
                  editable={field.editable}
                />
              ))}
            </dl>
          </div>
        </div>
      ))}
    </div>
  );
};

export default General;
