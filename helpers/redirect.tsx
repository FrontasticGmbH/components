import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getReferenceTarget, Reference } from './reference';

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
