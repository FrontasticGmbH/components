import React from 'react';
import AccountDetails, { AccountDetailsProps } from 'components/default-ui/account/details';

export interface Props {
  data: AccountDetailsProps;
}

const AccountDetailsTastic: React.FC<Props> = ({ data }) => {
  return <AccountDetails {...data} />;
};

export default AccountDetailsTastic;
