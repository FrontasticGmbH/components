import React from 'react';
import Highlights from './highlights';
import Footer from 'components/frontastic-ui/footer';

const FooterTastic = ({ data }) => {
  const columns = [
    {
      header: data.headerCol1,
      links: data.linksCol1,
    },
    {
      header: data.headerCol2,
      links: data.linksCol2,
    },
    {
      header: data.headerCol3,
      links: data.linksCol3,
    },    
  ];

  return (
    <div className="fixed-screen-width lg:relative-width">
      <Highlights />
      <Footer columns={columns} copyright={data.copyright} />
    </div>
  );
};

export default FooterTastic;
