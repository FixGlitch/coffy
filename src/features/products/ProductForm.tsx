import { useState } from 'react';
import { createProduct, updateProduct } from '../../services/productService';

interface ProductFormProps {
  productId?: string;
}

export default function ProductForm({ productId }: ProductFormProps) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (productId) {
      await updateProduct(productId, { name, price });
    } else {
      await createProduct({ name, price });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Product Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Price:
        <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} required />
      </label>
      <button type="submit">{productId ? 'Update' : 'Create'} Product</button>
    </form>
  );
}
