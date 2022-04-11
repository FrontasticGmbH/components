import { EmptyState } from 'components/frontastic-ui/empty-state';
import { useFormat } from 'helpers/hooks/useFormat';

interface Props {}

const EmptyWishlist = ({}: Props) => {
  //i18n messages
  const { formatMessage } = useFormat({ name: 'common' });

  return (
    <EmptyState icon={'😿😿😿'} title={formatMessage({ id: 'nothing.here', defaultMessage: 'Nothing here yet' })} />
  );
};

export default EmptyWishlist;
