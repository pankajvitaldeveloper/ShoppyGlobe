import { useDispatch } from 'react-redux';
// Import cart actions for modifying cart state
import { addToCart, decreaseQuantity, removeFromCart } from '../redux/cartSlice';
// Import toast for user notifications
import { toast } from 'react-toastify';

// CartItem component displays a single product in the cart and allows quantity adjustment or removal
const CartItem = ({ item }) => {
  // Get dispatch function to send actions to Redux store
  const dispatch = useDispatch();

  // Handle removal of item from cart
  // Dispatches removeFromCart action and shows a notification to the user
  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
    toast.info(`${item.title} removed from cart!`, {
      position: "top-right",
      autoClose: 1800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  // Render cart item UI with controls for quantity and removal
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-white rounded-lg shadow p-4 gap-4">
      {/* Product details section - shows title, price, and quantity */}
      <div className="flex-1 w-full text-center sm:text-left">
        <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
        <p className="text-blue-600 font-bold">Price: ${item.price}</p>
        <p className="text-gray-600">Quantity: {item.quantity}</p>
      </div>
      {/* Controls for adjusting quantity and removing item */}
      <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-end">
        {/* Decrease quantity button - dispatches decreaseQuantity action */}
        <button
          onClick={() => dispatch(decreaseQuantity(item.id))}
          className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-lg rounded"
        >-</button>
        <span className="px-2">{item.quantity}</span>
        {/* Increase quantity button - dispatches addToCart action */}
        <button
          onClick={() => dispatch(addToCart(item))}
          className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-lg rounded"
        >+</button>
        {/* Remove item button - calls handleRemove to remove item and show notification */}
        <button
          onClick={handleRemove}
          className="ml-2 sm:ml-4 px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded"
        >Remove</button>
      </div>
    </div>
  );
};

// Export CartItem for use in cart and checkout pages
export default CartItem;
