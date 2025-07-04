import useFetchProducts from '../hooks/useFetchProducts';
import ProductItem from './ProductItem';
import { useState } from 'react';

const ProductList = () => {
  const { products, error } = useFetchProducts();
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container page-mt mx-auto px-4 py-8">
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />  
      </div>
      {error ? (
        <p className="text-center text-red-600 font-semibold">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
