import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { PopoverButton } from '@headlessui/react';
import Link from 'components/commercetools-ui/atoms/link';
import Typography from 'components/commercetools-ui/atoms/typography';
import { AccountContext } from 'context/account';
import { useFormat } from 'helpers/hooks/useFormat';

const LoggedIn = () => {
  const router = useRouter();
  const { formatMessage: formatAccountMessage } = useFormat({ name: 'account' });
  const { logout } = useContext(AccountContext);

  const handleLogout = () => {
    logout().then(() => router.push('/login'));
  };

  return (
    <div className="w-235 p-14">
      <PopoverButton className="w-full" tabIndex={-1}>
        <Link link="/account#" className="mt-10 block w-fit">
          <Typography className="text-primary hover:underline">
            {formatAccountMessage({ id: 'my.account', defaultMessage: 'My Account' })}
          </Typography>
        </Link>
      </PopoverButton>

      <PopoverButton className="w-full" tabIndex={-1}>
        <Link link="/account/?hash=support" className="mt-32 block w-fit">
          <Typography className="text-primary hover:underline">
            {formatAccountMessage({ id: 'customer.support', defaultMessage: 'Customer support' })}
          </Typography>
        </Link>
      </PopoverButton>

      <PopoverButton className="mt-32 block w-full pb-10" tabIndex={-1}>
        <button onClick={handleLogout} className="w-full text-left">
          <Typography className="text-16 text-primary hover:underline">
            {formatAccountMessage({ id: 'sign.out', defaultMessage: 'Sign out' })}
          </Typography>
        </button>
      </PopoverButton>
    </div>
  );
};

export default LoggedIn;
