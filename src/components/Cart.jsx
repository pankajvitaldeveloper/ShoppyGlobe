import { useSelector } from 'react-redux';
import CartItem from './CartItem';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Cart = () => {
  const items = useSelector((state) => state.cart.items);

  // Handler to show toast when item is removed
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

  return (
    <div className="container page-mt mx-auto px-4 py-8">
      {/* <ToastContainer /> */}
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Your Cart</h2>
      {items.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Cart is empty</p>
      ) : (
        <div className="space-y-4 max-w-2xl mx-auto">
          <AnimatePresence>
            {items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.25 }}
              >
                <CartItem item={item} onRemove={handleRemove} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
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
