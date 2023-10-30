import { FC } from 'react';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import Link from 'components/commercetools-ui/atoms/link';
import Typography from 'components/commercetools-ui/atoms/typography';
import { useFormat } from 'helpers/hooks/useFormat';

type EditCTAProps = {
  editHref: string;
};

const EditCTA: FC<EditCTAProps> = ({ editHref }) => {
  const { formatMessage } = useFormat({ name: 'common' });
  return (
    <Link link={editHref} className="h-fit">
      <Typography className="hidden border-b border-transparent text-14 font-medium text-primary-black hover:cursor-pointer hover:border-primary-black md:block">
        {formatMessage({ id: 'edit', defaultMessage: 'Edit' })}
      </Typography>
      <div className="relative grid h-40 w-40 items-center justify-items-center rounded-full bg-neutral-200 shadow-100 md:hidden">
        <PencilSquareIcon className="absolute h-20 w-20 text-secondary-black" />
      </div>
    </Link>
  );
};

export default EditCTA;
