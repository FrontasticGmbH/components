import React from 'react';
import ResetPassword, { ResetPasswordProps } from 'components/frontastic-ui/account/reset-password';

export interface Props {
  data: ResetPasswordProps;
}

const ResetPasswordTastic: React.FC<Props> = ({ data }) => {
  return <ResetPassword {...data} />;
};

export default ResetPasswordTastic;
