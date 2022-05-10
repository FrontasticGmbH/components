import * as React from 'react';
import * as CSS from 'csstype';
import classNames from 'classnames';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon, ExclamationIcon, } from '@heroicons/react/outline';

import { Log } from '../../helpers/errorLogger';

const getErrorMessage = (error) => {
  if (typeof error?.data[0] === 'string') {
    return error.data[0];
  }

  if (typeof error?.data[0]?.message === 'string') {
    return error.data[0].message;
  }

  try {
    return JSON.stringify(error?.data[0]);
  } catch (e) {
    return "Unprintable error, check console";
  }
}

export function Errors() {
  const [errors, setErrors] = React.useState(Log.getErrors());
  const [open, setOpen] = React.useState(!!Log.getErrors());

  // There is some complexity here:
  //
  // If we just append the incoming error to the state we try to update the
  // state while another componet is rendering, because the errors are appended
  // as a side effect.
  //
  // If we delay error recoding as done now using setTimeout() we will loose
  // errors happening exactly in parallel.
  //
  // If somebody has a better solution for this, please fix:
  Log.setErrorLogger((error) => {
    if (typeof window !== 'undefined') {
      window.setTimeout(() => {
        setErrors([error, ...errors].slice(0, 5));
        setOpen(true);
      }, 0);
    } else {
      setErrors([error, ...errors].slice(0, 5));
      setOpen(true);
    }
  });

  console.log("Current error state:", errors);
  const styles: CSS.Properties = {
    position: 'absolute',
    zIndex: '1024',
    border: '2px solid red',
    width: '100vw',
    gridColumn: 'span 12 / span 12',
    marginLeft: '50%',
    transform: 'translateX(-50%)',
  };

  if (!errors.length || !open) {
    return null;
  }

  return (<div className="relative z-10">
    <div className="fixed z-10 inset-0 overflow-y-auto bg-black/50 text-center">
      <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
        &#8203;
      </span>
      <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Errors communicating with the API hub
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Some errors occured when communicating with the API hub. Find
                  the error messages either in the browser console (F12) or the
                  last five below:
                </p>
              </div>
            </div>
          </div>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {errors.map((error) => (
              <Disclosure as="div" key={error.date.getTime()} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-gray-900">
                          <strong>{error.type}:</strong> {getErrorMessage(error)}
                        </span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500 whitespace-pre-wrap">
                        {JSON.stringify(error.data, null, 2)}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>);
}
