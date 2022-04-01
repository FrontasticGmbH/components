import { EmptyState } from 'components/empty-state';

interface Props {}

const EmptyWishlist = ({}: Props) => {
  return <EmptyState icon={'😿😿😿'} title={'Nothing here yet'} />;
};

export default EmptyWishlist;
