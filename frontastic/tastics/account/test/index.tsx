import { useAccount } from '../../../lib/provider';

function AccountTestTastic() {
  const { loggedIn, account, login, logout, register, confirm, changePassword, requestPasswordReset, resetPassword } =
    useAccount();

  return (
    <div>
      <p>logged in: {loggedIn ? 'true' : 'false'}</p>
      {account && <pre>{JSON.stringify(account, null, 4)}</pre>}
      {loggedIn && (
        <>
          <button
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={logout}
          >
            Logout
          </button>
          <button
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={() => {
              changePassword('3e7e422b-93d1-4ed8-8dca-161dd1867ca6', '3e7e422b-93d1-4ed8-8dca-161dd1867ca6');
            }}
          >
            Change Password
          </button>
        </>
      )}
      {loggedIn || (
        <>
          <button
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={() => {
              login('0fccf729-4a81-43f6-a475-939540761786@r9e.de', '3e7e422b-93d1-4ed8-8dca-161dd1867ca6');
            }}
          >
            Login
          </button>
          <button
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={async () => {
              const account = await register({
                email: crypto.randomUUID() + '@r9e.de',
                password: '3e7e422b-93d1-4ed8-8dca-161dd1867ca6',
              });
              console.log('created account: ', account);
            }}
          >
            Register
          </button>
          <button
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={async () => {
              const account = await confirm(crypto.randomUUID());
              console.log('confirmed account: ', account);
            }}
          >
            Confirm
          </button>
          <button
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={async () => {
              const token = await requestPasswordReset('0fccf729-4a81-43f6-a475-939540761786@r9e.de');
              console.log('requested reset: ', token);
            }}
          >
            Request Password Reset
          </button>
          <button
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={async () => {
              const account = await resetPassword(
                'I_kiMJBbR6mZ0FpLLHq_kWi0eBp9yXQy9q-cx_4J',
                '3e7e422b-93d1-4ed8-8dca-161dd1867ca6',
              );
              console.log('password reset: ', account);
            }}
          >
            Reset Password
          </button>
        </>
      )}
    </div>
  );
}

export default AccountTestTastic;
