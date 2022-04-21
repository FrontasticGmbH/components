import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { getReferenceTarget, Reference } from './Reference';

export interface RedirectProps {
  target?: string | Reference;
}

const Redirect: React.FC<RedirectProps> = ({ target }) => {
  //next/router
  const router = useRouter();

  useEffect(() => {
    if (!target) return;
    //resolve href
    const resolvedTarget = typeof target === 'string' ? target : getReferenceTarget(target);
    //redirect upon mounting
    router.push(resolvedTarget);
  }, [target]);

  return <></>;
};

export default Redirect;
