import React from 'react';
import Footer from 'components/commercetools-ui/footer';
import Highlights from 'components/commercetools-ui/footer/highlights';

const FooterTastic = ({ data }) => {
  const columns = [
    {
      header: data.headerCol1,
      links: data.linksCol1,
      icon: data.iconCol1,
    },
    {
      header: data.headerCol2,
      links: data.linksCol2,
      icon: data.iconCol2,
    },
    {
      header: data.headerCol3,
      links: data.linksCol3,
      icon: data.iconCol3,
    },
  ];

  return (
    <div className="fixed-screen-width lg:relative-width">
      <Highlights />
      <Footer columns={columns} copyright={data.copyright} copyrightLinks={data.copyrightLinks} />
    </div>
  );
};

export default FooterTastic;
