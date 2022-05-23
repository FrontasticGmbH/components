import { EmptyState } from 'components/frontastic-ui/empty-state';
import { useFormat } from 'helpers/hooks/useFormat';
import { Reference } from 'helpers/reference';

interface Props {
  pageTitle?: string;
  image?: { media: any } | any;
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaLink?: Reference;
}

const EmptyWishlist = ({ pageTitle, image, title, subtitle, ctaLabel, ctaLink }: Props) => {
  //i18n messages
  const { formatMessage } = useFormat({ name: 'wishlist' });

  return (
    <EmptyState
      pageTitle={formatMessage({ id: 'wishlist', defaultMessage: pageTitle })}
      title={formatMessage({ id: 'wishlist.oops', defaultMessage: title })}
      subtitle={formatMessage({ id: 'wishlist.empty', defaultMessage: subtitle })}
      callToAction={formatMessage({ id: 'wishlist.add.items', defaultMessage: ctaLabel })}
      callToActionLink={ctaLink}
      image={image}
    />
  );
};

export default EmptyWishlist;
