import { useEffect, useState } from 'react';

// Custom hook to fetch product data from API and handle errors
const useFetchProducts = () => {
  // Store fetched products in state
  const [products, setProducts] = useState([]);
  // Store error message if fetch fails
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch product data only once on mount
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(err => setError('Failed to fetch products'));
  }, []);

  return { products, error };
};

export default useFetchProducts;
