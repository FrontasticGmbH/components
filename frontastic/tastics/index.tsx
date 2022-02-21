import NotFound from './not-found';
import Footer from './footer';
import Header from './header';
import Cart from './cart';
import Checkout from './checkout';
import CheckoutSuccess from './checkout-success';
import Markdown from './content/markdown';
import Tile from './content/tile';
import ProductDetails from './products/details';
import ProductList from './products/product-list';
import ProductSlider from './products/slider';
// import Markdown from './content/markdown';
// Doc Examples
import SimpleButton from './doc-examples/simple-button';
import StarWarsCharacterSearch from './doc-examples/star-wars/character-search';

export const tastics = {
  'frontastic/boostwind/checkout': Checkout,
  'frontastic/boostwind/checkout-success': CheckoutSuccess,
  'frontastic/boostwind/cart': Cart,
  'frontastic/boostwind/footer': Footer,
  'frontastic/boostwind/header': Header,
  'frontastic/boostwind/content/markdown': Markdown,
  'frontastic/boostwind/content/tile': Tile,
  'frontastic/boostwind/products/details': ProductDetails,
  'frontastic/boostwind/products/product-list': ProductList,
  'frontastic/boostwind/products/slider': ProductSlider,
  'frontastic/examples/simple-button': SimpleButton,
  'frontastic/examples/star-wars/character-search': StarWarsCharacterSearch,
  default: NotFound,
};
