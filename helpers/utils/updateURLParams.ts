export const updateURLParams = (key: string, value: string) => {
  const url = new URL(window.location.href);
  var nextURLParams = new URLSearchParams(url.search);

  nextURLParams.set(key, value);
  const updatedURL = `${url.pathname}?${nextURLParams.toString()}`;

  return updatedURL;
};
