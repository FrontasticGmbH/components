import { EmptyState } from 'components/empty-state';

interface Props {}

const EmptyCart = ({}: Props) => {
  return <EmptyState icon={'😿😿😿'} title={'Nothing here yet'} />;
};

export default EmptyCart;
