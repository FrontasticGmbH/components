import React from 'react';
import ResetPassword, { ResetPasswordProps } from 'components/frontastic-ui/account/reset-password';
import { useRouter } from 'next/router';

export interface Props {
  data: ResetPasswordProps;
}

const ResetPasswordTastic: React.FC<Props> = ({ data }) => {
  //next/router
  const router = useRouter();

  //reset password token
  const { token } = router.query;
  return <ResetPassword router={router} token={token} {...data} />;
};

export default ResetPasswordTastic;
