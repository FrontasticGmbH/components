import React from 'react';

export interface Props {
  headline?: string;
  subline?: string;
  description?: string;
  buttonText?: string;
  link?: string;
  image?: { url: string };
}

const NewsCard: React.FC<Props> = ({ headline, subline, description, link, buttonText, image }) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
      <a href={link}>
        <img className="max-h-[600px] w-full rounded-t-lg object-cover px-5 py-2" src={image?.url} alt="step3" />
      </a>
      <div className="p-5">
        <a href={link}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{headline}</h5>
        </a>
        <div className="mt-1 mb-2 text-xs font-bold uppercase text-teal-700">{subline}</div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        {buttonText && (
          <a
            href={link}
            className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {buttonText}
            <svg
              className="ml-2 -mr-1 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
