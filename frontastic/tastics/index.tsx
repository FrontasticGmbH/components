// Doc Examples
import AccountDetails from './account/details';
import AccountLogin from './account/login';
import AccountOrdersHistory from './account/orders';
import AccountRegister from './account/register';
import ResetPassword from './account/reset-password';
import AccountTest from './account/test';
import Cart from './cart';
import Checkout from './checkout';
import ThankYou from './checkout/thank-you';
import BlogTastic from './content/amplience-blog';
import BlogListTastic from './content/amplience-blog-list';
import CategoryTeasers from './content/category-teasers';
import Markdown from './content/markdown';
import Spacer from './content/spacer';
import Tile from './content/tile';
import HelloWorld from './doc-examples/hello-world';
import SimpleButton from './doc-examples/simple-button';
import StarWarsCharacterFilter from './doc-examples/star-wars/character-filter';
import StarWarsCharacterSearch from './doc-examples/star-wars/character-search';
import StarWarsOpeningCrawl from './doc-examples/star-wars/movies';
//import ContentfulBlog from './doc-examples/contentful/blog';

import Footer from './footer';
import Header from './header';
import Hero from './hero';
import NewsCardTastic from './news-card';
import Newsletter from './newsletter';
import NotFound from './not-found';
import ProductDetails from './products/details';
import ProductList from './products/product-list';
import SimilarProducts from './products/similar-products';
import ProductSlider from './products/slider';
import Showcase from './showcase';
import Wishlist from './wishlist';
import ContentstackBlogTastic from './content/contentstack-blog';
import ContentstackBlogListTastic from './content/contentstack-blog-list';

export const tastics = {
  // Doc Examples
  'example/simple-button': SimpleButton,
  'example/hello-world': HelloWorld,
  'example/star-wars/movie': StarWarsOpeningCrawl,
  'example/star-wars/character-search': StarWarsCharacterSearch,
  'example/star-wars/character-filter': StarWarsCharacterFilter,
  //'contentful/blog': ContentfulBlog,

  'commercetools/ui/checkout': Checkout,
  'commercetools/ui/thank-you': ThankYou,
  'commercetools/ui/cart': Cart,
  'commercetools/ui/footer': Footer,
  'commercetools/ui/header': Header,
  'commercetools/ui/content/amplience-blog': BlogTastic,
  'commercetools/ui/content/amplience-blog-list': BlogListTastic,
  'commercetools/ui/content/blog': BlogTastic,
  'commercetools/ui/content/blog-list': BlogListTastic,
  'commercetools/ui/content/contentstack-blog': ContentstackBlogTastic,
  'commercetools/ui/content/contentstack-blog-list': ContentstackBlogListTastic,
  'commercetools/ui/content/tile': Tile,
  'commercetools/ui/content/spacer': Spacer,
  'commercetools/ui/content/showcase': Showcase,
  'commercetools/ui/content/markdown': Markdown,
  'commercetools/ui/content/newsletter': Newsletter,
  'commercetools/ui/products/details': ProductDetails,
  'commercetools/ui/products/product-list': ProductList,
  'commercetools/ui/products/slider': ProductSlider,
  'commercetools/ui/products/similar-products': SimilarProducts,
  'commercetools/ui/wishlist': Wishlist,
  'commercetools/ui/account/test': AccountTest,
  'commercetools/ui/account/details': AccountDetails,
  'commercetools/ui/account/login': AccountLogin,
  'commercetools/ui/account/register': AccountRegister,
  'commercetools/ui/account/orders': AccountOrdersHistory,
  'commercetools/ui/account/reset-password': ResetPassword,
  'commercetools/ui/content/category-teasers': CategoryTeasers,
  'commercetools/ui/content/news-card': NewsCardTastic,
  'commercetools/ui/hero': Hero,
  default: NotFound,
};
