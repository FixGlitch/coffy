// import { useEffect, useState } from 'react';
// import { getProducts } from '../../services/productService';

export default function ProductList() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const data = await getProducts();
//       setProducts(data);
//     };
//     fetchProducts();
//   }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {/* {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))} */}
      </ul>
    </div>
  );
}
