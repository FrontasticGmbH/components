import React from 'react';
import { ErrorMessage as Message } from '@hookform/error-message';

type Props = {
  errors: any;
  name: string;
  as?: React.ReactElement | React.ComponentType<any> | keyof JSX.IntrinsicElements;
};

export const ErrorMessage: React.FC<Props> = ({ errors, name, as = 'div' }: Props) => {
  const slideDown = 'slideDown 0.4s';

  return (
    <div style={{ animation: errors[name] ? slideDown : 'none' }}>
      {errors[name] && (
        <div style={{ animation: slideDown }}>
          <div className="arrow-up-system-error" />
          <Message className="error-message-text-system-error" errors={errors} name={name} as={as} />
        </div>
      )}
    </div>
  );
};
