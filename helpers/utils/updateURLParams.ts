export type URLParam = {
  key: string;
  value: string;
};

type updateURLParamsProps = (params: URLParam[]) => string;

export const updateURLParams: updateURLParamsProps = (params) => {
  const url = new URL(window.location.href);
  var nextURLParams = new URLSearchParams();

  params.map(({ key, value }) => {
    nextURLParams.set(key, value);
  });

  const updatedURL = `${url.pathname}?${nextURLParams.toString()}`;

  return updatedURL;
};
