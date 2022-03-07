import ProductSlider from 'components/frontastic-ui/products/slider';

function ProductSliderTastic({ data }) {
  if (!data?.data?.dataSource?.items) return <p>No products found.</p>;

  return <ProductSlider products={data.data.dataSource.items} title={data.title} ctaLabel={data.ctaLabel} ctaLink={data.ctaLink} />;
}

export default ProductSliderTastic;
