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
  'frontastic/checkout': Checkout,
  'frontastic/checkout-success': CheckoutSuccess,
  'frontastic/cart': Cart,
  'frontastic/footer': Footer,
  'frontastic/header': Header,
  'frontastic/content/markdown': Markdown,
  'frontastic/content/tile': Tile,
  'frontastic/products/details': ProductDetails,
  'frontastic/products/product-list': ProductList,
  'frontastic/products/slider': ProductSlider,
  'frontastic/examples/simple-button': SimpleButton,
  'frontastic/examples/star-wars/character-search': StarWarsCharacterSearch,
  default: NotFound,
};
