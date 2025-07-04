import useFetchProducts from '../hooks/useFetchProducts';
import ProductItem from './ProductItem';
import { useState } from 'react';
import Welcome from './Welcome';

// Fetches products and handles search/filter logic for the product list page.
// Shows a skeleton loader while products are loading.
// Displays a responsive grid of ProductItem components.
// Includes a search input for filtering products by title.

const ProductList = () => {
  const { products, error } = useFetchProducts();
  const [search, setSearch] = useState("");

  // Filter products based on search input
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  // Skeleton loader for products (shows while loading)
  const ProductSkeleton = () => (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center animate-pulse">
      <div className="w-32 h-32 bg-gray-200 rounded-md mb-3" />
      <div className="h-5 w-24 bg-gray-200 rounded mb-2" />
      <div className="h-4 w-16 bg-gray-200 rounded mb-2" />
      <div className="h-8 w-full bg-gray-200 rounded" />
    </div>
  );

  return (
    <>
      {/* Welcome section at the top of the page */}
      <Welcome />
      <div className="container mx-auto px-4 py-8" id="input-sec">
        {/* Search input for filtering products */}
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
        {/* Error message if fetching products fails */}
        {error ? (
          <p className="text-center text-red-600 font-semibold">{error}</p>
        ) : products.length === 0 ? (
          // Show skeleton loaders while products are loading
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, idx) => (
              <ProductSkeleton key={idx} />
            ))}
          </div>
        ) : (
          // Show filtered products in a responsive grid
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductList;
