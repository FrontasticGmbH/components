// Doc Examples
import SimpleButton from './doc-examples/simple-button';
import HelloWorldTastic from './doc-examples/hello-world';
import StarWarsOpeningCrawl from './doc-examples/star-wars/movies';
import StarWarsCharacters from './doc-examples/star-wars/character';
import StarWarsCharacterSearch from './doc-examples/star-wars/character-search';

import NotFound from './not-found';
import Footer from './footer';
import Header from './header';
import Cart from './cart';
import Checkout from './checkout';
import CheckoutSuccess from './checkout-success';
import Markdown from './content/markdown';
import Tile from './content/tile';
import Spacer from './content/spacer';
import Showcase from './showcase';
import Newsletter from './newsletter';
import ProductDetails from './products/details';
import ProductList from './products/product-list';
import ProductSlider from './products/slider';
import AccountTest from './account/test';
import SpacerTastic from './content/spacer';
import WishlistTastic from './wishlist';
import ShowcaseTastic from './showcase';
import AccountOrdersHistory from './account/orders';
import AccountDetails from './account/details';
import AccountLogin from './account/login';
import AccountRegister from './account/register';
import ResetPassword from './account/reset-password';

export const tastics = {
  'frontastic/ui/checkout': Checkout,
  'frontastic/ui/checkout-success': CheckoutSuccess,
  'frontastic/ui/cart': Cart,
  'frontastic/ui/footer': Footer,
  'frontastic/ui/header': Header,
  'frontastic/ui/content/tile': Tile,
  'frontastic/ui/content/spacer': Spacer,
  'frontastic/ui/content/showcase': Showcase,
  'frontastic/ui/content/markdown': Markdown,
  'frontastic/ui/content/newsletter': Newsletter,
  'frontastic/ui/products/details': ProductDetails,
  'frontastic/ui/products/product-list': ProductList,
  'frontastic/ui/products/slider': ProductSlider,
  'frontastic/ui/wishlist': WishlistTastic,
  'frontastic/ui/account/test': AccountTest,
  'frontastic/ui/account/details': AccountDetails,
  'frontastic/ui/account/login': AccountLogin,
  'frontastic/ui/account/register': AccountRegister,
  'frontastic/ui/account/orders': AccountOrdersHistory,
  'frontastic/ui/account/reset-password': ResetPassword,
  'frontastic/examples/simple-button': SimpleButton,
  'frontastic/ui/examples/star-wars/character-search': StarWarsCharacterSearch,
  'example/hello-world': HelloWorldTastic,
  'example/star-wars/character-search': StarWarsCharacterSearch,
  'example/star-wars-opening-crawl': StarWarsOpeningCrawl,
  'example/star-wars-characters': StarWarsCharacters,
  'frontastic/ui/examples/simple-button': SimpleButton,
  default: NotFound,
};
