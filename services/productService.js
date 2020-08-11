const getProducts = () => {
  return fetch(`${process.env.productsAPI}/api/products.json`)
    .then(response => response.json())
    .then(data => data)
}

const getProductById = async (productId) => {
  const products = await getProducts()
  return products.find(item => item.id === productId)
}

export {
  getProducts,
  getProductById
}
