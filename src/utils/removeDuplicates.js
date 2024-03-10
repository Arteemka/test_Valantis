export const removeDuplicate = (data) => {
  return data.reduce((products, currentProduct) => {
    if (!products.find((item) => item.id === currentProduct.id)) {
      products.push(currentProduct);
    }
    return products;
  }, []);
};
