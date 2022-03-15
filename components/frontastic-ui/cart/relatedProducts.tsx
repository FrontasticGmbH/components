interface Props {}

const RelatedProducts = ({}: Props) => {
  return null; /*<section aria-labelledby="related-heading" className="mt-24">
    <h2 id="related-heading" className="text-lg font-medium text-gray-900">
        You may also like&hellip;
    </h2>

    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {relatedProducts.map((relatedProduct) => (
            <div key={relatedProduct.id} className="group relative">
                <div className="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                        src={relatedProduct.imageSrc}
                        alt={relatedProduct.imageAlt}
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <a href={relatedProduct.href}>
                                <span aria-hidden="true" className="absolute inset-0" />
                                {relatedProduct.name}
                            </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{relatedProduct.color}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{relatedProduct.price}</p>
                </div>
            </div>
        ))}
        </div>
</section>*/
};

export default RelatedProducts;
