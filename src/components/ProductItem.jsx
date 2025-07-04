import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success(`${product.title} added to cart!`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-lg transition-shadow duration-200">
      <Link to={`/product/${product.id}`} className="w-full flex flex-col items-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-32 h-32 object-cover rounded-md mb-3"
        />
        <h3 className="text-lg font-semibold text-gray-800 text-center mb-1">{product.title}</h3>
        <p className="text-blue-600 font-bold text-base mb-2">${product.price}</p>
      </Link>
      <button
        onClick={handleAddToCart}
        className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
