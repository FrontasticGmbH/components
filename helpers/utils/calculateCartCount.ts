export const calculateCartCount = (itemsList) => {
  return itemsList?.reduce((acc, item) => acc + item.count, 0);
};
