import { useSelector } from 'react-redux';
import CartItem from './CartItem';

import { AnimatePresence, motion } from 'framer-motion';
// Import Link for navigation to checkout page
import { Link } from 'react-router-dom';

// Cart component displays all items in the user's cart and provides navigation to checkout
const Cart = () => {
  // Get cart items from Redux store
  const items = useSelector((state) => state.cart.items);

  // Handler to show toast when item is removed (not currently used, but can be passed to CartItem)
  const handleRemove = (title) => {
    toast.info(`${title} removed from cart.`, {
      position: "top-right",
      autoClose: 1800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  // Render cart UI
  return (
    <div className="container page-mt mx-auto px-4 py-8">
      {/* Page title for user context */}
      {/* <ToastContainer /> */}
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Your Cart</h2>
      {/* Show message if cart is empty, otherwise show cart items */}
      {items.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Cart is empty</p>
      ) : (
        <div className="space-y-4 max-w-2xl mx-auto">
          {/* AnimatePresence and motion.div provide smooth animations for cart item changes */}
          <AnimatePresence>
            {items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.25 }}
              >
                {/* Render each cart item with animation */}
                <CartItem item={item} onRemove={handleRemove} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
      {/* Show checkout button only if there are items in the cart */}
      {items.length > 0 && (
        <div className="flex justify-end mt-6">
          <Link
            to="/checkout"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition-colors duration-200"
          >
            Proceed to Checkout
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
