import Editable from 'components/editable';
import { useAccount } from 'frontastic';
import { mapLocaleToMeaningfulFormat } from 'helpers/utils/i18n';
import { useRouter } from 'next/router';
import React from 'react';

const General = () => {
  //next/router
  const router = useRouter();

  //account data
  const { account, update } = useAccount();

  const sections = [
    {
      headline: 'Profile',
      subline: 'This information will be displayed publicly so be careful what you share.',
      fields: [
        {
          label: 'First Name',
          value: account?.firstName,
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
          label: 'Last Name',
          value: account?.lastName,
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
          label: 'Email',
          value: account?.email,
          type: 'email',
          options: [],
          defaultValue: '',
          required: true,
          onSubmit: (value: string) => {},
          editable: false,
        },
      ],
    },
    {
      headline: 'Account',
      subline: 'Manage how information is displayed on your account.',
      fields: [
        {
          label: 'language',
          value: mapLocaleToMeaningfulFormat(router.locale).name,
          type: 'select',
          options: router.locales.map((locale) => ({ name: mapLocaleToMeaningfulFormat(locale).name, value: locale })),
          defaultValue: router.locale,
          required: true,
          onSubmit: (value: string) => {
            router.replace(router.asPath, undefined, { locale: value });
          },
          editable: true,
        },
      ],
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
                // <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5" key={fieldIndex}>
                //   <dt className="text-sm font-medium text-gray-500">{field.label}</dt>
                //   <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                //     <span className="flex-grow">{field.value}</span>
                //     <span className="ml-4 flex-shrink-0">
                //       <button
                //         type="button"
                //         className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                //       >
                //         Update
                //       </button>
                //     </span>
                //   </dd>
                // </div>
              ))}
            </dl>
          </div>
        </div>
      ))}
    </div>
  );
};

export default General;
