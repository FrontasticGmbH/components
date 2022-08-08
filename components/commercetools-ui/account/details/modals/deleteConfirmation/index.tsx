import { Fragment, useCallback, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { IoWarning as WarningIcon } from 'react-icons/io5';
import { useFormat } from 'helpers/hooks/useFormat';
import { useDarkMode } from 'frontastic';

export interface Props {
  open?: boolean;
  onClose?: () => void;
  onConfirm?: () => Promise<unknown>;
}

const DeleteConfirmationModal: React.FC<Props> = ({ open, onClose, onConfirm }) => {
  const { formatMessage } = useFormat({ name: 'common' });
  const { formatMessage: formatAccountMessage } = useFormat({ name: 'account' });

  const { theme } = useDarkMode();

  const [processing, setProcessing] = useState(false);

  const handleConfirm = useCallback(async () => {
    setProcessing(true);

    await onConfirm?.();

    setProcessing(false);

    onClose?.();
  }, [onConfirm]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className={`${theme} fixed inset-0 z-10 overflow-y-auto`}>
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="absolute top-1/2 left-1/2 w-[90%] max-w-[400px] -translate-x-1/2 -translate-y-1/2 transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:p-6">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                    <WarningIcon className="h-6 w-6 text-yellow-600" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-neutral-600">
                      {formatAccountMessage({
                        id: 'address.delete.confirm',
                        defaultMessage: 'Are you sure you want to delete this address?',
                      })}
                    </Dialog.Title>
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between gap-3 sm:mt-6">
                  <button
                    disabled={processing}
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-accent-400 px-4 py-2 text-base font-medium text-white shadow-sm transition hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 disabled:bg-accent-100 sm:text-sm"
                    onClick={handleConfirm}
                    tabIndex={-1}
                  >
                    {formatMessage({ id: 'delete', defaultMessage: 'Delete' })}
                  </button>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-neutral-500 px-4 py-2 text-base font-medium text-white shadow-sm transition hover:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 sm:text-sm"
                    onClick={onClose}
                    tabIndex={-1}
                  >
                    {formatMessage({ id: 'cancel', defaultMessage: 'Cancel' })}
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default DeleteConfirmationModal;
