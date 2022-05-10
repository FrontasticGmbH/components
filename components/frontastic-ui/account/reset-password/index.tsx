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

  //register data
  const [data, setData] = useState({ email: '', password: '', confirmPassword: '' });

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
        setError(
          formatErrorMessage({ id: 'account.create.fail', defaultMessage: "Sorry. We couldn't create your account.." }),
        );
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
    <>
      <div className="flex flex-col justify-center py-12 min-h-full sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="relative h-12">
            <Image {...logo} alt="Logo" layout="fill" objectFit="contain" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
            {formatAccountMessage({ id: 'password.reset.headline', defaultMessage: 'Reset your password' })}
          </h2>
          <p className="mt-2 text-sm text-center text-gray-600">
            {formatAccountMessage({
              id: 'password.reset.desc',
              defaultMessage: 'Fill the fields below to complete your password reset',
            })}
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="py-8 px-4 bg-white shadow sm:px-10 sm:rounded-lg">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {error && <p className="text-sm text-accent-400">{error}</p>}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  {formatAccountMessage({ id: 'password', defaultMessage: 'Password' })}
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block py-2 px-3 w-full placeholder:text-gray-400 rounded-md border border-gray-300 focus:border-accent-400 focus:outline-none focus:ring-accent-400 shadow-sm appearance-none sm:text-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                  {formatAccountMessage({ id: 'password.confirm', defaultMessage: 'Confirm Password' })}
                </label>
                <div className="mt-1">
                  <input
                    id="confirm-password"
                    name="confirmPassword"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block py-2 px-3 w-full placeholder:text-gray-400 rounded-md border border-gray-300 focus:border-accent-400 focus:outline-none focus:ring-accent-400 shadow-sm appearance-none sm:text-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex justify-center py-2 px-4 w-full text-sm font-medium text-white bg-accent-400 hover:bg-accent-500 disabled:bg-gray-200 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 shadow-sm transition-colors ease-out duration-250ms"
                  disabled={loading}
                >
                  {formatAccountMessage({ id: 'submit', defaultMessage: 'Submit' })}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
