import React, { useCallback, useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useFormat } from 'helpers/hooks/useFormat';
import { account as accountMock } from 'helpers/mocks/mockData';
import { mapLocaleToMeaningfulFormat } from 'helpers/utils/i18n';
import { useAccount } from 'frontastic';
import Field from '../field';

const General = () => {
  //i18n messages
  const { formatMessage } = useFormat({ name: 'common' });
  const { formatMessage: formatAccountMessage } = useFormat({ name: 'account' });

  //next/router
  const router = useRouter();

  //account data
  const { account, update } = useAccount();

  //Form data
  const [data, setData] = useState({
    firstName: account?.firstName ?? '',
    lastName: account?.lastName ?? '',
    email: account?.email ?? '',
    locale: router.locale || router.defaultLocale,
  });

  //sections in edit mode
  const [inEdit, setInEdit] = useState<number[]>([]);

  const startEdit = useCallback(
    (index: number) => {
      setInEdit([...inEdit, index]);
    },
    [inEdit],
  );

  const stopEdit = useCallback(
    (index: number) => {
      setInEdit(inEdit.filter((i) => i !== index));
    },
    [inEdit],
  );

  const sections = useMemo(
    () => [
      {
        headline: formatAccountMessage({ id: 'profile', defaultMessage: 'Profile' }),
        subline: formatAccountMessage({
          id: 'profile.desc',
          defaultMessage: 'This information will be displayed publicly so be careful what you share.',
        }),
        fields: [
          {
            id: 'firstname',
            name: 'firstName',
            label: formatMessage({ id: 'firstName', defaultMessage: 'First Name' }),
            value: account?.firstName ?? '',
            type: 'text',
            options: [],
            defaultValue: '',
            required: true,
            editable: true,
          },
          {
            id: 'lastname',
            name: 'lastName',
            label: formatMessage({ id: 'lastName', defaultMessage: 'Last Name' }),
            value: account?.lastName ?? '',
            type: 'text',
            options: [],
            defaultValue: '',
            required: true,
            editable: true,
          },
          {
            id: 'email',
            name: 'email',
            label: formatMessage({ id: 'email', defaultMessage: 'Email' }),
            value: account?.email ?? '',
            type: 'email',
            options: [],
            defaultValue: '',
            required: true,
            editable: false,
          },
        ],
        onSubmit: async () => {
          await update({ firstName: data.firstName, lastName: data.lastName });
        },
      },
      {
        headline: formatAccountMessage({ id: 'account', defaultMessage: 'Account' }),
        subline: formatAccountMessage({
          id: 'account.desc',
          defaultMessage: 'Manage how information is displayed on your account.',
        }),
        fields: [
          {
            id: 'locale',
            name: 'locale',
            label: 'language',
            value: mapLocaleToMeaningfulFormat(router.locale).name,
            type: 'select',
            options:
              router.locales.map((locale) => ({
                name: mapLocaleToMeaningfulFormat(locale).name,
                value: locale,
              })) || [],
            defaultValue: router.locale,
            required: true,
            editable: true,
          },
        ],
        onSubmit: async () => {
          router.replace(router.asPath, undefined, { locale: data.locale });
        },
      },
    ],
    [formatAccountMessage, router, data, account],
  );

  //Put all sections in edit mode
  const startEditAll = useCallback(() => {
    setInEdit(sections.map((_, index) => index));
  }, [sections]);

  //Stop editting all sections
  const stopEditAll = useCallback(() => {
    setInEdit([]);
  }, []);

  //Input change
  const handleChange = useCallback(
    (name: string, value: string) => {
      setData({ ...data, [name]: value });
    },
    [data],
  );

  //Handle submission
  const handleSubmit = useCallback(
    async (index: number) => {
      sections[index].onSubmit();
      stopEdit(index);
    },
    [inEdit, stopEdit, sections],
  );

  //Submit all sections
  const handleSubmitAll = useCallback(async () => {
    stopEditAll();
    for (const section of sections) await section.onSubmit();
  }, [sections, stopEditAll]);

  return (
    <div className="flex w-full flex-col gap-0 lg:gap-12">
      {sections.map((section, index) => (
        <div className="rounded-sm border-gray-200 px-2 pt-10 lg:border lg:px-10 lg:pb-10" key={index}>
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium leading-6 text-gray-900 dark:text-light-100">{section.headline}</h2>
              <div className="hidden lg:block">
                {inEdit.includes(index) ? (
                  <div className="flex divide-x-2 divide-solid divide-gray-200 text-sm">
                    <span className="pr-4">
                      <button
                        type="submit"
                        className="rounded-md font-medium text-accent-400 transition hover:text-accent-600 focus:outline-none"
                        onClick={() => handleSubmit(index)}
                      >
                        {formatMessage({ id: 'save', defaultMessage: 'Save' })}
                      </button>
                    </span>
                    <span className="pl-4">
                      <button
                        type="button"
                        className="rounded-md font-medium text-accent-400 transition hover:text-accent-600 focus:outline-none"
                        onClick={() => stopEdit(index)}
                      >
                        {formatMessage({ id: 'cancel', defaultMessage: 'Cancel' })}
                      </button>
                    </span>
                  </div>
                ) : (
                  <span className="ml-4 shrink-0 text-sm">
                    <button
                      type="button"
                      className="rounded-md font-medium text-accent-400 transition hover:text-accent-600 focus:outline-none"
                      onClick={() => startEdit(index)}
                    >
                      {formatMessage({ id: 'edit', defaultMessage: 'Edit' })}
                    </button>
                  </span>
                )}
              </div>
            </div>
            <p className="max-w-2xl py-4 text-sm text-gray-500">{section.subline}</p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {section.fields.map((field, fieldIndex) => (
              <Field
                key={fieldIndex}
                id={field.id}
                label={field.label}
                value={field.value}
                type={field.type}
                options={field.options}
                defaultValue={field.defaultValue}
                required={field.required}
                disabled={!field.editable || !inEdit.includes(index)}
                onChange={(val) => handleChange(field.name, val)}
              />
            ))}
          </div>
        </div>
      ))}
      <div className="mt-10 block px-2 lg:hidden">
        {inEdit.length ? (
          <div className="flex gap-3">
            <button
              onClick={handleSubmitAll}
              className="grow rounded-sm bg-accent-400 p-3 font-medium text-white transition duration-150 ease-out hover:bg-accent-600"
            >
              {formatMessage({ id: 'save', defaultMessage: 'Save' })}
            </button>
            <button
              onClick={stopEditAll}
              className="grow rounded-sm bg-neutral-200 p-3 font-medium text-gray-500 transition duration-150 ease-out hover:bg-neutral-400"
            >
              {formatMessage({ id: 'cancel', defaultMessage: 'Cancel' })}
            </button>
          </div>
        ) : (
          <button
            onClick={startEditAll}
            className="w-full rounded-sm bg-accent-400 p-3 font-medium text-white transition duration-150 ease-out hover:bg-accent-600"
          >
            {formatAccountMessage({ id: 'settings.edit', defaultMessage: 'Edit settings' })}
          </button>
        )}
      </div>
    </div>
  );
};

export default General;
