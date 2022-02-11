import React from 'react';

const SimpleButtonTastic = ({ data }) => {
  return <button className={`bg-${data.colorScheme}-500 px-4 py-2 text-white`}>{data.label}</button>;
};

export default SimpleButtonTastic;
