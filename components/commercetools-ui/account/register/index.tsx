import React, { useState } from 'react';
import { useFormat } from 'helpers/hooks/useFormat';
import Redirect from 'helpers/redirect';
import { Reference, ReferenceLink } from 'helpers/reference';
import { useAccount } from 'frontastic';
import Image, { NextFrontasticImage } from 'frontastic/lib/image';

export interface RegisterProps {
  logo?: NextFrontasticImage;
  loginLink?: Reference;
}

const Register: React.FC<RegisterProps> = ({ logo, loginLink }) => {
  //i18n messages
  const { formatMessage: formatErrorMessage } = useFormat({ name: 'error' });
  const { formatMessage: formatAccountMessage } = useFormat({ name: 'account' });
  const { formatMessage: formatSuccessMessage } = useFormat({ name: 'success' });
  const { formatMessage } = useFormat({ name: 'common' });

  //account actions
  const { register, loggedIn } = useAccount();

  //register data
  const [data, setData] = useState({ email: '', password: '', confirmPassword: '' });

  //error
  const [error, setError] = useState('');

  //success
  const [success, setSuccess] = useState('');

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
      const response = await register({ email: data.email, password: data.password });
      if (!response.accountId) {
        setError(
          formatErrorMessage({ id: 'account.create.fail', defaultMessage: "Sorry. We couldn't create your account.." }),
        );
        setSuccess('');
      } else {
        setError('');
        setSuccess(
          formatSuccessMessage({
            id: 'account.created',
            defaultMessage: 'A verification email was sent to {email} ✓',
            values: { email: data.email },
          }),
        );
      }
    } catch (err) {
      setError(formatErrorMessage({ id: 'wentWrong', defaultMessage: 'Sorry. Something went wrong..' }));
      setSuccess('');
    }
    //processing ends
    setLoading(false);
  };

  if (loggedIn) return <Redirect target="/" />;

  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8">
        <div className="mx-auto w-full max-w-[500px] rounded-sm bg-white px-6 pb-32 pt-16 shadow-2xl dark:bg-primary-200 lg:px-12">
          <form className="space-y-7" onSubmit={handleSubmit}>
            <div className="py-6 text-center">
              <h2 className="text-3xl font-extrabold text-neutral-700">
                {formatAccountMessage({ id: 'becomeMember', defaultMessage: 'Become a member' })}
              </h2>
              <h3 className="text-md mt-6 text-neutral-600">
                {formatAccountMessage({
                  id: 'offers.doNotMiss',
                  defaultMessage: 'Don’t miss out on deals, offers, discounts and bonus vouchers.',
                })}
              </h3>
            </div>
            {success && <p className="text-sm text-green-600">{success}</p>}
            {error && <p className="text-sm text-accent-400">{error}</p>}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
                {formatMessage({ id: 'email', defaultMessage: 'Email' })}
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder={formatAccountMessage({ id: 'email.enter', defaultMessage: 'Enter your email' })}
                  required
                  className="block w-full appearance-none rounded-sm border border-gray-300 px-3 py-2 shadow-sm placeholder:text-gray-400 focus:border-accent-400 focus:outline-none focus:ring-accent-400 sm:text-sm"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-neutral-700">
                {formatAccountMessage({ id: 'password', defaultMessage: 'Password' })}
              </label>
              <div className="relative mt-1">
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
              <div className="relative mt-1">
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
                {formatAccountMessage({ id: 'register', defaultMessage: 'Register' })}
              </button>
              <p className="mt-4 text-center text-sm text-neutral-600">
                {formatAccountMessage({ id: 'account.doNotHave', defaultMessage: "Don't have an account?" })}{' '}
                <ReferenceLink
                  target={loginLink}
                  className="font-medium text-accent-400 underline hover:text-accent-500"
                >
                  {formatAccountMessage({ id: 'account.login.here', defaultMessage: 'Login here' })}
                </ReferenceLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
