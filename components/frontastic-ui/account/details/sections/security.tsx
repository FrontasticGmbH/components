import { useAccount } from 'frontastic';
import React, { useState } from 'react';

const Security = () => {
  //account data
  const { changePassword } = useAccount();

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
      console.log(response);
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
          <h3 className="text-lg font-medium leading-6 text-gray-900">Password</h3>
          <p className="max-w-2xl text-sm text-gray-500">Be careful when using this setting.</p>
        </div>
      </div>
      <form className="mt-6" onSubmit={handleSubmit}>
        {success && <p className="text-sm text-green-600">{success}</p>}
        {error && <p className="text-sm text-pink-400">{error}</p>}
        <div className="mt-3 max-w-[400px]">
          <input
            id="old-password"
            name="oldPassword"
            type="password"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-400 focus:ring-pink-400 sm:text-sm"
            placeholder="Old Password"
            required
            onChange={handleChange}
            value={data.oldPassword}
          />
        </div>
        <div className="mt-3 max-w-[400px]">
          <input
            id="password"
            name="password"
            type="password"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-400 focus:ring-pink-400 sm:text-sm"
            placeholder="Password"
            required
            onChange={handleChange}
            value={data.password}
          />
        </div>
        <div className="mt-3 max-w-[400px]">
          <input
            id="confirm-password"
            name="confirmPassword"
            type="password"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-400 focus:ring-pink-400 sm:text-sm"
            placeholder="Confirm Password"
            required
            onChange={handleChange}
            value={data.confirmPassword}
          />
        </div>
        <button
          type="submit"
          className="duration-150ms mt-4 w-[80px] items-center rounded-md border border-transparent bg-pink-400 px-4 py-2 text-center text-sm font-medium text-white shadow-sm transition-colors ease-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-gray-300"
          disabled={submitDisabled || processing}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Security;
