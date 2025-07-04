import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

// ProductItem component displays individual product details and handles add-to-cart logic.
// - Shows product image, title, and price.
// - On "Add to Cart" button click, adds the product to cart if not already present.
// - Shows a toast notification if the product is already in the cart or added successfully.
// - Uses Tailwind CSS for responsive and interactive styling.

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Handles add to cart logic and toast notifications
  const handleAddToCart = () => {
    const alreadyInCart = cartItems.some(item => item.id === product.id);
    if (alreadyInCart) {
      toast.info('This product is already in your cart!');
    } else {
      dispatch(addToCart(product));
      toast.success(`${product.title} added to cart!`);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-lg transition-shadow duration-200">
      {/* Product details link with hover effects */}
      <Link
        to={`/product/${product.id}`}
        className="w-full flex flex-col items-center group transition"
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-32 h-32 object-cover rounded-md mb-3 group-hover:scale-105 group-hover:shadow-xl transition-transform duration-300"
        />
        <h3 className="text-lg font-semibold text-gray-800 text-center mb-1 group-hover:text-blue-700 transition-colors duration-200">
          {product.title}
        </h3>
        <p className="text-blue-600 font-bold text-base mb-2 group-hover:text-blue-800 transition-colors duration-200">
          ${product.price}
        </p>
      </Link>
      {/* Add to Cart button */}
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
