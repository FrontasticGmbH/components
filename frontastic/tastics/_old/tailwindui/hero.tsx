export default function Hero({ data }) {
  return (
    <div className="bg-white">
      <div className="relative bg-gray-900">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img src={data.bgImage.media.file} alt="" className="w-full h-full object-center object-cover" />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-40" />

        <div className="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0">
          <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">
            {data.headline['en_GB@EUR']}
          </h1>
          <p className="mt-4 text-xl text-white">{data.subhead['en_GB@EUR']}</p>
          <a
            href="#"
            className="mt-8 inline-block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100"
          >
            {data.ctaLabel['en_GB@EUR']}
          </a>
        </div>
      </div>
    </div>
  );
}
