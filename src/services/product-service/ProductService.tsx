export function getProductList() {
    return fetch('http://localhost:8080/api/v1/product/getAll')
      .then(data => data.json())
  }