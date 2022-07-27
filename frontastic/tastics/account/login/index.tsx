import React from 'react';
import Login, { LoginProps } from 'components/commercetools-ui/account/login';

export interface Props {
  data: LoginProps;
}

const AccountLoginTastic: React.FC<Props> = ({ data }) => {
  return <Login {...data} />;
};

export default AccountLoginTastic;
