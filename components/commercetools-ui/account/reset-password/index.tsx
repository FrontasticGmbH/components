import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useFormat } from 'helpers/hooks/useFormat';
import { getReferenceTarget, Reference } from 'helpers/reference';
import { useAccount } from 'frontastic';
import Image, { NextFrontasticImage } from 'frontastic/lib/image';

export interface ResetPasswordProps {
  logo?: NextFrontasticImage;
  token?: string | string[];
  accountLink?: Reference;
}

const ResetPassword: React.FC<ResetPasswordProps> = ({ logo, token, accountLink }) => {
  //i18n messages
  const { formatMessage: formatErrorMessage } = useFormat({ name: 'error' });
  const { formatMessage: formatAccountMessage } = useFormat({ name: 'account' });

  //next/router
  const router = useRouter();

  //account actions
  const { resetPassword } = useAccount();

  //reset password data data
  const [data, setData] = useState({ password: '', confirmPassword: '' });

  //error
  const [error, setError] = useState('');

  //processing...
  const [loading, setLoading] = useState(false);

  //handle text input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  //data validation
  const validate = () => {
    //validation schema
    const passwordsMatch = data.password === data.confirmPassword;

    //UI error messages
    if (!passwordsMatch)
      setError(formatErrorMessage({ id: 'password.noMatch', defaultMessage: "Passwords don't match" }));

    //return a boolean representing the data validity
    return passwordsMatch;
  };

  //form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //validate data
    if (!validate()) return;
    //processing starts
    setLoading(true);
    //try registering the user with given credentials
    try {
      const response = await resetPassword(token as string, data.password);
      if (!response.accountId) {
        setError(formatErrorMessage({ id: 'wentWrong', defaultMessage: 'Sorry. Something went wrong..' }));
      } else {
        setError('');
        router?.push(getReferenceTarget(accountLink));
      }
    } catch (err) {
      setError(formatErrorMessage({ id: 'wentWrong', defaultMessage: 'Sorry. Something went wrong..' }));
    }
    //processing ends
    setLoading(false);
  };

  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8">
        <div className="mx-auto w-full max-w-[500px] rounded-sm bg-white px-6 pb-32 pt-16 shadow-2xl dark:bg-primary-200 lg:px-12">
          <form className="space-y-7" onSubmit={handleSubmit}>
            <div className="py-6 text-center">
              <h2 className="text-3xl font-extrabold text-neutral-700">
                {formatAccountMessage({ id: 'password.reset.headline', defaultMessage: 'Become a member' })}
              </h2>
              <h3 className="text-md mt-6 text-neutral-600">
                {formatAccountMessage({
                  id: 'password.reset.desc',
                  defaultMessage: 'Don’t miss out on deals, offers, discounts and bonus vouchers.',
                })}
              </h3>
            </div>
            {error && <p className="text-sm text-accent-400">{error}</p>}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-neutral-700">
                {formatAccountMessage({ id: 'password', defaultMessage: 'Password' })}
              </label>
              <div className="relative mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                  required
                  className="block w-full appearance-none rounded-sm border border-gray-300 py-2 px-3 shadow-sm placeholder:text-gray-400 focus:border-accent-400 focus:outline-none focus:ring-accent-400 sm:text-sm"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-neutral-700">
                {formatAccountMessage({ id: 'password.confirm', defaultMessage: 'Confirm Password' })}
              </label>
              <div className="relative mt-2">
                <input
                  id="confirm-password"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                  required
                  className="block w-full appearance-none rounded-sm border border-gray-300 py-2 px-3 shadow-sm placeholder:text-gray-400 focus:border-accent-400 focus:outline-none focus:ring-accent-400 sm:text-sm"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-sm border border-transparent bg-accent-400 py-2 px-4 text-sm font-medium text-white shadow-sm transition-colors duration-200 ease-out hover:bg-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 disabled:bg-gray-200"
                disabled={loading}
              >
                {formatAccountMessage({ id: 'password.reset', defaultMessage: 'Reset password' })}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
