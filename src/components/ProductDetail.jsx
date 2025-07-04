import { Link, useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

// ProductDetail component:
// - Fetches and displays detailed information for a single product based on the URL parameter (id).
// - Handles loading and error states for better user experience.
// - Shows product image, title, description, and price in a responsive layout.
// - Includes a "Back" button to navigate to the previous page.

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Explicit loading state

  useEffect(() => {
    setLoading(true); // Start loading on id change
    setError(null); // Reset error on id change
    // Fetch product details from API using the product id from the URL
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data && data.id) {
          setProduct(data);
        } else {
          setError('Product not found');
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load product');
        setLoading(false);
      });
  }, [id]);

  // Show skeleton spinner while fetching data
  if (loading) return (
    <div className="container page-mt mx-auto px-4 py-10 flex flex-col md:flex-row items-center gap-10 animate-pulse">
      {/* Skeleton for product image */}
      <div className="w-64 h-64 bg-gray-200 rounded-lg shadow-md mb-6 md:mb-0" />
      <div className="flex-1 max-w-xl w-full">
        {/* Skeleton for title */}
        <div className="h-8 bg-gray-200 rounded w-2/3 mb-4" />
        {/* Skeleton for description */}
        <div className="h-4 bg-gray-200 rounded w-full mb-2" />
        <div className="h-4 bg-gray-200 rounded w-5/6 mb-2" />
        <div className="h-4 bg-gray-200 rounded w-4/6 mb-6" />
        {/* Skeleton for price */}
        <div className="h-6 bg-gray-200 rounded w-1/4 mb-6" />
        {/* Skeleton for button */}
        <div className="h-10 bg-gray-200 rounded w-32 mt-4" />
      </div>
    </div>
  );

  // Show error message if fetching fails
  if (error) return <p className="text-center text-red-600 font-semibold py-8">{error}</p>;

  return (
    <div className="container page-mt mx-auto px-4 py-10 flex flex-col md:flex-row items-center gap-10">
      {/* Product image */}
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-64 h-64 object-cover rounded-lg shadow-md mb-6 md:mb-0"
      />
      <div className="flex-1 max-w-xl">
        {/* Product title */}
        <h2 className="text-3xl font-bold text-blue-700 mb-3">{product.title}</h2>
        {/* Product description */}
        <p className="text-gray-700 mb-4">{product.description}</p>
        {/* Product price */}
        <p className="text-2xl font-semibold text-blue-600 mb-6">${product.price}</p>
        {/* Back button navigates to the previous page */}
        <button
          onClick={() => navigate(-1)}
          className="mt-4 cursor-pointer px-6 py-2 bg-gray-200 hover:bg-gray-300 text-blue-700 font-semibold rounded transition-colors duration-200"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
