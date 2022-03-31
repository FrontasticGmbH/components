import Typography from 'components/typography';
import React from 'react';

const MegaMenuContent = ({ category, categoryIdx }) => {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-2 items-start gap-y-10 gap-x-8 pt-10 pb-12">
          <div className="grid grid-cols-2 gap-y-10 gap-x-8">
            <div>
              <p id={`desktop-featured-heading-${categoryIdx}`} className="font-medium text-gray-900">
                Featured
              </p>
              <ul
                role="list"
                aria-labelledby={`desktop-featured-heading-${categoryIdx}`}
                className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
              >
                {category.featured.map((item) => (
                  <li key={item.name} className="flex">
                    <a href={item.href} className="hover:text-gray-800">
                      <Typography>{item.name}</Typography>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p id="desktop-categories-heading" className="font-medium text-gray-900">
                Categories
              </p>
              <ul
                role="list"
                aria-labelledby="desktop-categories-heading"
                className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
              >
                {category.categories.map((item) => (
                  <li key={item.name} className="flex">
                    <a href={item.href} className="hover:text-gray-800">
                      <Typography>{item.name}</Typography>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-y-10 gap-x-8">
            <div>
              <p id="desktop-collection-heading" className="font-medium text-gray-900">
                Collection
              </p>
              <ul
                role="list"
                aria-labelledby="desktop-collection-heading"
                className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
              >
                {category.collection.map((item) => (
                  <li key={item.name} className="flex">
                    <a href={item.href} className="hover:text-gray-800">
                      <Typography>{item.name}</Typography>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p id="desktop-brand-heading" className="font-medium text-gray-900">
                Brands
              </p>
              <ul role="list" aria-labelledby="desktop-brand-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                {category.brands.map((item) => (
                  <li key={item.name} className="flex">
                    <a href={item.href} className="hover:text-gray-800">
                      <Typography>{item.name}</Typography>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenuContent;
