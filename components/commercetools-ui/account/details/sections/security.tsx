import React, { useState } from 'react';
import { useFormat } from 'helpers/hooks/useFormat';
import { useAccount } from 'frontastic';

const Security = () => {
  //account data
  const { changePassword } = useAccount();
  const { formatMessage: formatAccountMessage } = useFormat({ name: 'account' });

  //new passwords
  const initialData = { oldPassword: '', password: '', confirmPassword: '' };
  const [data, setData] = useState(initialData);

  //error
  const [error, setError] = useState('');

  //success
  const [success, setSuccess] = useState('');

  //loading..
  const [processing, setProcessing] = useState(false);

  //input change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  //submission handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //loading starts
    setProcessing(true);
    //try updating user's password
    try {
      const response = await changePassword(data.oldPassword, data.password);
      if (response.accountId) {
        setSuccess('Password successfully changed!');
        setError('');
      } else {
        setError("Sorry, we couldn't fulfill your request");
        setSuccess('');
      }
    } catch (err) {
      setError('Wrong password entered');
      setSuccess('');
    } finally {
      setProcessing(false);
      setData(initialData);
    }
  };

  //save button disabled
  const submitDisabled =
    !(data.password && data.confirmPassword && data.oldPassword) || data.password !== data.confirmPassword;

  return (
    <div>
      <div className="mt-10 divide-y divide-gray-200">
        <div className="space-y-1">
          <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-light-100">Password</h3>
          <p className="max-w-2xl text-sm text-gray-500">
            {formatAccountMessage({
              id: 'account.security.warning',
              defaultMessage: 'Be careful when using this setting',
            })}
          </p>
        </div>
      </div>
      <form className="mt-6" onSubmit={handleSubmit}>
        {success && <p className="text-sm text-green-600">{success}</p>}
        {error && <p className="text-sm text-accent-400">{error}</p>}
        <div className="mt-3 max-w-sm">
          <input
            id="old-password"
            name="oldPassword"
            type="password"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-accent-400 focus:ring-accent-400 sm:text-sm"
            placeholder={formatAccountMessage({
              id: 'password.old',
              defaultMessage: 'Old password',
            })}
            required
            onChange={handleChange}
            value={data.oldPassword}
          />
        </div>
        <div className="mt-3 max-w-sm">
          <input
            id="password"
            name="password"
            type="password"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-accent-400 focus:ring-accent-400 sm:text-sm"
            placeholder={formatAccountMessage({
              id: 'password',
              defaultMessage: 'Password',
            })}
            required
            onChange={handleChange}
            value={data.password}
          />
        </div>
        <div className="mt-3 max-w-sm">
          <input
            id="confirm-password"
            name="confirmPassword"
            type="password"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-accent-400 focus:ring-accent-400 sm:text-sm"
            placeholder={formatAccountMessage({
              id: 'password.confirm',
              defaultMessage: 'Confirm password',
            })}
            required
            onChange={handleChange}
            value={data.confirmPassword}
          />
        </div>
        <button
          type="submit"
          className="mt-4 w-20 items-center rounded-md border border-transparent bg-accent-400 py-2 px-4 text-center text-sm font-medium text-white shadow-sm transition-colors duration-150 ease-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-gray-300"
          disabled={submitDisabled || processing}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Security;
