import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(() => setError('Failed to load product'));
  }, [id]);

  if (error) return <p className="text-center text-red-600 font-semibold py-8">{error}</p>;
  if (!product) return <p className="text-center text-gray-500 py-8">Loading...</p>;

  return (
    <div className="container page-mt mx-auto px-4 py-10 flex flex-col md:flex-row items-center gap-10">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-64 h-64 object-cover rounded-lg shadow-md mb-6 md:mb-0"
      />
      <div className="flex-1 max-w-xl">
        <h2 className="text-3xl font-bold text-blue-700 mb-3">{product.title}</h2>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-2xl font-semibold text-blue-600 mb-6">${product.price}</p>
        {/* You can add Add to Cart button here if needed */}
      </div>
    </div>
  );
};

export default ProductDetail;
