import React, { useState } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/solid';
import { useFormat } from 'helpers/hooks/useFormat';
import Redirect from 'helpers/redirect';
import { Reference, ReferenceLink } from 'helpers/reference';
import { useAccount } from 'frontastic';
import Image, { NextFrontasticImage } from 'frontastic/lib/image';

export interface LoginProps {
  logo?: NextFrontasticImage;
  registerLink?: Reference;
  accountLink?: Reference;
}

const Login: React.FC<LoginProps> = ({ logo, registerLink, accountLink }) => {
  //i18n messages
  const { formatMessage: formatErrorMessage } = useFormat({ name: 'error' });
  const { formatMessage: formatAccountMessage } = useFormat({ name: 'account' });
  const { formatMessage } = useFormat({ name: 'common' });

  //account actions
  const { login, loggedIn, resendVerificationEmail, requestPasswordReset } = useAccount();

  //login data
  const [data, setData] = useState({ email: '', password: '', rememberMe: false });

  //error
  const [error, setError] = useState('');

  //success
  const [success, setSuccess] = useState('');

  //processing...
  const [loading, setLoading] = useState(false);

  //attempting to resend verification email
  const [resendVerification, setResendVerification] = useState(false);

  //attempting to request a password reset
  const [resendPasswordReset, setResendPasswordReset] = useState(false);

  //not on default login modal
  const subModal = resendVerification || resendPasswordReset;

  //get back to login modal
  const backToLogin = () => {
    setResendPasswordReset(false);
    setResendVerification(false);
  };

  //wants to resend verification
  const toResendVerification = () => {
    setResendVerification(true);
    setResendPasswordReset(false);
  };

  //requesting a password reset
  const toResendPassword = () => {
    setResendPasswordReset(true);
    setResendVerification(false);
  };

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
      const response = await login(data.email, data.password, data.rememberMe);
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
          defaultMessage: 'An email was sent to {email}',
          values: { email: data.email },
        }),
      );
    } catch (err) {
      setError(formatErrorMessage({ id: 'wentWrong', defaultMessage: 'Sorry. Something went wrong..' }));
    }
  };

  //request a password reset for user
  const resendPasswordResetForUser = async () => {
    try {
      await requestPasswordReset(data.email);
      setSuccess(
        formatAccountMessage({
          id: 'verification.resent',
          defaultMessage: 'An email was sent to {email}',
          values: { email: data.email },
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
    if (resendVerification) resendVerificationEmailForUser();
    //if user is attempting tor equest a password reset
    else if (resendPasswordReset) resendPasswordResetForUser();
    //if user wants to login
    else loginUser();
    //processing ends
    setLoading(false);
  };

  if (loggedIn) return <Redirect target={accountLink} />;

  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="relative h-12 dark:invert">
            <Image {...logo} alt="Logo" layout="fill" objectFit="contain" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-light-100">
            {formatAccountMessage({ id: 'account.sign.in', defaultMessage: 'Sign in to your account' })}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {formatAccountMessage({ id: 'account.doNotHave', defaultMessage: "Don't have an account?" })}{' '}
            <ReferenceLink
              target={registerLink}
              className="font-medium text-accent-400 underline hover:text-accent-500"
            >
              {formatAccountMessage({ id: 'account.register.here', defaultMessage: 'Register here' })}
            </ReferenceLink>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow dark:bg-primary-200 sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {success && <p className="text-sm text-green-600">{success}</p>}
              {error && <p className="text-sm text-accent-400">{error}</p>}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-light-100">
                  {formatMessage({ id: 'emailAddress', defaultMessage: 'Email Address' })}
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 py-2 px-3 shadow-sm placeholder:text-gray-400 focus:border-accent-400 focus:outline-none focus:ring-accent-400 sm:text-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {!resendPasswordReset && (
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-light-100">
                    {formatAccountMessage({ id: 'password', defaultMessage: 'Password' })}
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full appearance-none rounded-md border border-gray-300 py-2 px-3 shadow-sm placeholder:text-gray-400 focus:border-accent-400 focus:outline-none focus:ring-accent-400 sm:text-sm"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              )}

              {subModal ? (
                <div>
                  <ArrowLeftIcon
                    className="w-4 cursor-pointer text-accent-400 hover:text-accent-500"
                    onClick={backToLogin}
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
                        className="h-4 w-4 rounded border-gray-300 text-accent-400 focus:ring-accent-500"
                        onChange={handleCheckboxChange}
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-light-100">
                        {formatMessage({ id: 'rememberMe', defaultMessage: 'Remember me' })}
                      </label>
                    </div>

                    <div className="text-sm">
                      <span
                        className="cursor-pointer font-medium text-accent-400 hover:text-accent-500"
                        onClick={toResendPassword}
                      >
                        {formatAccountMessage({ id: 'password.forgot', defaultMessage: 'Forgot your password?' })}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-end">
                    <div className="text-sm">
                      <span
                        className="cursor-pointer font-medium text-accent-400 hover:text-accent-500"
                        onClick={toResendVerification}
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
                  className="flex w-full justify-center rounded-md border border-transparent bg-accent-400 py-2 px-4 text-sm font-medium text-white shadow-sm transition-colors duration-200 ease-out hover:bg-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 disabled:bg-gray-200"
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
