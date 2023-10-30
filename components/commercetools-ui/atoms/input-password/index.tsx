import { FC, useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import Input, { InputProps } from '../input';

const PasswordInput: FC<InputProps> = (props) => {
  const [hidden, setHidden] = useState<boolean>(true);
  const [type, setType] = useState<'text' | 'password'>('password');

  const toggleHidden = () => {
    setHidden(!hidden);
    setType(type === 'password' ? 'text' : 'password');
  };

  const iconsClassName = 'w-15 h-15';

  return (
    <div className="relative">
      <Input type={type} hideCheckIcon {...props}>
        <span className="absolute right-12 top-20 z-10 translate-y-[-50%] hover:cursor-pointer" onClick={toggleHidden}>
          {hidden ? <EyeSlashIcon className={iconsClassName} /> : <EyeIcon className={iconsClassName} />}
        </span>
      </Input>
    </div>
  );
};

export default PasswordInput;
