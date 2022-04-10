import NotFound from './not-found';
import Footer from './footer';
import Header from './header';
import Cart from './cart';
import Checkout from './checkout';
import CheckoutSuccess from './checkout-success';
import Markdown from './content/markdown';
import Tile from './content/tile';
import Newsletter from './newsletter';
import ProductDetails from './products/details';
import ProductList from './products/product-list';
import ProductSlider from './products/slider';
import AccountTest from './account/test';
import AccountOrdersHistoryTastic from './account/orders';
// Doc Examples
import SimpleButton from './doc-examples/simple-button';
import StarWarsCharacterSearch from './doc-examples/star-wars/character-search';
import AccountDetailsTastic from './account/details';
import AccountLoginTastic from './account/login';
import AccountRegisterTastic from './account/register';
import SpacerTastic from './content/spacer';
import WishlistTastic from './wishlist';
import ResetPasswordTastic from './account/reset-password';

export const tastics = {
  'frontastic/ui/checkout': Checkout,
  'frontastic/ui/checkout-success': CheckoutSuccess,
  'frontastic/ui/cart': Cart,
  'frontastic/ui/footer': Footer,
  'frontastic/ui/header': Header,
  'frontastic/ui/content/markdown': Markdown,
  'frontastic/ui/content/tile': Tile,
  'frontastic/ui/content/newsletter': Newsletter,
  'frontastic/ui/products/details': ProductDetails,
  'frontastic/ui/products/product-list': ProductList,
  'frontastic/ui/products/slider': ProductSlider,
  'frontastic/ui/account/test': AccountTest,
  'frontastic/ui/examples/simple-button': SimpleButton,
  'frontastic/ui/examples/star-wars/character-search': StarWarsCharacterSearch,
  'frontastic/ui/account/details': AccountDetailsTastic,
  'frontastic/ui/account/login': AccountLoginTastic,
  'frontastic/ui/account/register': AccountRegisterTastic,
  'frontastic/ui/account/orders': AccountOrdersHistoryTastic,
  'frontastic/ui/content/spacer': SpacerTastic,
  'frontastic/ui/wishlist': WishlistTastic,
  'frontastic/ui/account/reset-password': ResetPasswordTastic,
  default: NotFound,
};
