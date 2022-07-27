import ProductSlider from 'components/default-ui/products/slider';

function SimilarProductsTastic({ data }) {
  if (!data?.data?.dataSource?.items) return <p>No products found.</p>;

  return (
    <ProductSlider
      products={data.data.dataSource.items}
      title={data.title}
      ctaLabel={data.ctaLabel}
      ctaLink={data.ctaLink}
    />
  );
}

export default SimilarProductsTastic;
