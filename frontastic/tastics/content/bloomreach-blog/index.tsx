import React from 'react';
import axios from "axios";
// import { Context } from 'frontastic/extension-types';
import { BrPage } from "@bloomreach/react-sdk";
import {ContentPage} from "./contentPage";

const BloomreachBlogTastic = () => {
  // const deliveryApiUrl = frontasticContext.project?.configuration?.bloomreach.deliveryApiUrl;
  const deliveryApiUrl = 'https://sandbox-commercetools.bloomreach.io/delivery/site/v1/';

  return <BrPage configuration={{
    endpoint: `${deliveryApiUrl}/channels/commercetools/pages`,
    httpClient: axios
  }} mapping={{ ContentPage }}>
  </BrPage>
};

export default BloomreachBlogTastic;
