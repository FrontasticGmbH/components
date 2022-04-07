import React, { useState } from 'react';
import Link from 'next/link';
import Image, { NextFrontasticImage } from 'frontastic/lib/image';
import { Reference, ReferenceLink } from 'helpers/Reference';
import { useAccount } from 'frontastic';
import Redirect from 'helpers/Redirect';
import { useFormat } from 'helpers/hooks/useFormat';
import { ArrowLeftIcon } from '@heroicons/react/solid';

export interface LoginProps {
  logo?: NextFrontasticImage;
  registerLink?: Reference;
  resetPasswordLink?: Reference;
}

const Login: React.FC<LoginProps> = ({ logo, registerLink, resetPasswordLink }) => {
  //i18n messages
  const { formatMessage: formatErrorMessage } = useFormat({ name: 'error' });
  const { formatMessage: formatAccountMessage } = useFormat({ name: 'account' });
  const { formatMessage } = useFormat({ name: 'common' });

  //account actions
  const { login, loggedIn, resendVerificationEmail } = useAccount();

  //login data
  const [data, setData] = useState({ email: '', password: '', rememberMe: false });

  //error
  const [error, setError] = useState('');

  //sucess
  const [success, setSuccess] = useState('');

  //processing...
  const [loading, setLoading] = useState(false);

  //attempting to resend verification email
  const [resendVerification, setResendVerification] = useState(false);

  //handle text input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  //handle checkbox input change
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.checked });
  };

  //login user
  const loginUser = async () => {
    try {
      const response = await login(data.email, data.password);
      if (!response.accountId)
        setError(formatErrorMessage({ id: 'auth.wrong', defaultMessage: 'Wrong email address or password' }));
    } catch (err) {
      setError(formatErrorMessage({ id: 'wentWrong', defaultMessage: 'Sorry. Something went wrong..' }));
    }
  };

  //resend verification email for user
  const resendVerificationEmailForUser = async () => {
    try {
      await resendVerificationEmail(data.email, data.password);
      setSuccess(
        formatAccountMessage({
          id: 'verification.resent',
          defaultMessage: `Verification email was resent to ${data.email}`,
        }),
      );
    } catch (err) {
      setError(formatErrorMessage({ id: 'wentWrong', defaultMessage: 'Sorry. Something went wrong..' }));
    }
  };

  //form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //processing starts
    setLoading(true);
    //if user is attempting to resend verification email
    //execute resend verification fn otherwise, login user
    resendVerification ? resendVerificationEmailForUser() : loginUser();
    //processing ends
    setLoading(false);
  };

  if (loggedIn) return <Redirect target="/" />;

  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="relative h-12">
            <Image {...logo} alt="Logo" layout="fill" objectFit="contain" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {formatAccountMessage({ id: 'account.sign.in', defaultMessage: 'Sign in to your account' })}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {formatAccountMessage({ id: 'account.doNotHave', defaultMessage: "Don't have an account?" })}{' '}
            <ReferenceLink target={registerLink} className="font-medium text-pink-400 underline hover:text-pink-200">
              {formatAccountMessage({ id: 'account.register.here', defaultMessage: 'Register here' })}
            </ReferenceLink>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {success && <p className="text-sm text-green-600">{success}</p>}
              {error && <p className="text-sm text-pink-400">{error}</p>}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  {formatMessage({ id: 'emailAddress', defaultMessage: 'Email Address' })}
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-pink-400 focus:outline-none focus:ring-pink-400 sm:text-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>

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
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-pink-400 focus:outline-none focus:ring-pink-400 sm:text-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {resendVerification ? (
                <div>
                  <ArrowLeftIcon
                    className="w-4 cursor-pointer text-pink-400 hover:text-pink-200"
                    onClick={() => setResendVerification(false)}
                  />
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="rememberMe"
                        type="checkbox"
                        className="texpink h-4 w-4 rounded border-gray-300 focus:ring-pink-400"
                        onChange={handleCheckboxChange}
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                        {formatMessage({ id: 'rememberMe', defaultMessage: 'Remember me' })}
                      </label>
                    </div>

                    <div className="text-sm">
                      <ReferenceLink
                        target={resetPasswordLink}
                        className="font-medium text-pink-400 hover:text-pink-200"
                      >
                        {formatAccountMessage({ id: 'password.forgot', defaultMessage: 'Forgot your password?' })}
                      </ReferenceLink>
                    </div>
                  </div>

                  <div className="flex items-center justify-end">
                    <div className="text-sm">
                      <span
                        className="cursor-pointer font-medium text-pink-400 hover:text-pink-200"
                        onClick={() => setResendVerification(true)}
                      >
                        {formatAccountMessage({
                          id: 'verification.resend',
                          defaultMessage: 'Bestätigungsmail erneut senden',
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <button
                  type="submit"
                  className="duration-250ms flex w-full justify-center rounded-md border border-transparent bg-pink-400 py-2 px-4 text-sm font-medium text-white shadow-sm transition-colors ease-out hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 disabled:bg-gray-200"
                  disabled={loading}
                >
                  {resendVerification
                    ? formatMessage({ id: 'submit', defaultMessage: 'Submit' })
                    : formatAccountMessage({ id: 'sign.in', defaultMessage: 'Sign in' })}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
