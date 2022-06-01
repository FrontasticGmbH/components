import React from 'react';
import Register, { RegisterProps } from 'components/commercetools-ui/account/register';

export interface Props {
  data: RegisterProps;
}

const AccountRegisterTastic: React.FC<Props> = ({ data }) => {
  return <Register {...data} />;
};

export default AccountRegisterTastic;
