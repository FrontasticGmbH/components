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

const EmptyCart = ({ pageTitle, image, title, subtitle, ctaLabel, ctaLink }: Props) => {
  //i18n messages
  const { formatMessage } = useFormat({ name: 'cart' });

  return (
    <EmptyState
      pageTitle={formatMessage({ id: 'cart.shopping', defaultMessage: pageTitle })}
      title={title}
      subtitle={formatMessage({ id: 'cart.empty', defaultMessage: subtitle })}
      callToAction={formatMessage({ id: 'cart.start.shopping', defaultMessage: ctaLabel })}
      callToActionLink={ctaLink}
      image={image}
    />
  );
};

export default EmptyCart;
