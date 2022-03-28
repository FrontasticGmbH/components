import { useRouter } from 'next/router';
import React, { useEffect, useMemo } from 'react';
import { getReferenceTarget, Reference } from './Reference';

export interface RedirectProps {
  target?: string | Reference;
}

const Redirect: React.FC<RedirectProps> = ({ target }) => {
  //next/router
  const router = useRouter();

  useEffect(() => {
    //resolve href
    const resolvedTarget = typeof target === 'string' ? target : getReferenceTarget(target);
    //redirect upon mounting
    router.push(resolvedTarget);
  }, []);

  return <></>;
};

export default Redirect;
