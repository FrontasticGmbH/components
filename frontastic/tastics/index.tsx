// Doc Examples
import SimpleButton from './doc-examples/simple-button';
import HelloWorld from './doc-examples/hello-world';
import StarWarsOpeningCrawl from './doc-examples/star-wars/movies';
import StarWarsCharacterSearch from './doc-examples/star-wars/character-search';
import StarWarsCharacterFilter from './doc-examples/star-wars/character-filter';
//import ContentfulBlog from './doc-examples/contentful/blog';

import AccountDetails from './account/details';
import AccountLogin from './account/login';
import AccountOrdersHistory from './account/orders';
import AccountRegister from './account/register';
import ResetPassword from './account/reset-password';
import AccountTest from './account/test';
import Cart from './cart';
import Checkout from './checkout';
import ThankYou from './checkout/thank-you';
import Markdown from './content/markdown';
import Spacer from './content/spacer';
import Tile from './content/tile';
import Footer from './footer';
import Header from './header';
import Newsletter from './newsletter';
import NotFound from './not-found';
import ProductDetails from './products/details';
import ProductList from './products/product-list';
import ProductSlider from './products/slider';
import SimilarProducts from './products/similar-products';
import Showcase from './showcase';
import Wishlist from './wishlist';
import ContentfulBlogTastic from './contentful-blog';
import CategoryTeasers from './content/category-teasers';

export const tastics = {
  // Doc Examples
  'example/simple-button': SimpleButton,
  'example/hello-world': HelloWorld,
  'example/star-wars/movie': StarWarsOpeningCrawl,
  'example/star-wars/character-search': StarWarsCharacterSearch,
  'example/star-wars/character-filter': StarWarsCharacterFilter,
  //'contentful/blog': ContentfulBlog,

  'default-ui/checkout': Checkout,
  'default-ui/thank-you': ThankYou,
  'default-ui/cart': Cart,
  'default-ui/footer': Footer,
  'default-ui/header': Header,
  'default-ui/content/tile': Tile,
  'default-ui/content/spacer': Spacer,
  'default-ui/content/showcase': Showcase,
  'default-ui/content/markdown': Markdown,
  'default-ui/content/newsletter': Newsletter,
  'default-ui/products/details': ProductDetails,
  'default-ui/products/product-list': ProductList,
  'default-ui/products/slider': ProductSlider,
  'default-ui/products/similar-products': SimilarProducts,
  'default-ui/wishlist': Wishlist,
  'default-ui/account/test': AccountTest,
  'default-ui/account/details': AccountDetails,
  'default-ui/account/login': AccountLogin,
  'default-ui/account/register': AccountRegister,
  'default-ui/account/orders': AccountOrdersHistory,
  'default-ui/account/reset-password': ResetPassword,
  'default-ui/content/contentful/blog': ContentfulBlogTastic,
  'default-ui/content/category-teasers': CategoryTeasers,
  default: NotFound,
};
