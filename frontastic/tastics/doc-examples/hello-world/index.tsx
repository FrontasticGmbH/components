import React from 'react';

type HelloWorldTasticProps = {
  data: {
    recipient: string;
  };
};

const HelloWorldTastic: React.FC<HelloWorldTasticProps> = ({ data }) => {
  return <h1>Hello {data.recipient}</h1>;
};

export default HelloWorldTastic;
