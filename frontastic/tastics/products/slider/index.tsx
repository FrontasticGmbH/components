import ProductSlider from 'components/products/slider';

function ProductSliderTastic({ data }) {
  const { items } = data.data.dataSource;

  if (!items) return <p>No products found.</p>;

  return <ProductSlider products={items} title={data.title} ctaLabel={data.ctaLabel} ctaLink={data.ctaLink} />;
}

export default ProductSliderTastic;
