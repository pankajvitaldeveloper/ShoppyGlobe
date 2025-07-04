import { useDispatch } from 'react-redux';
import { addToCart, decreaseQuantity, removeFromCart } from '../redux/cartSlice';
import { toast } from 'react-toastify';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

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

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-white rounded-lg shadow p-4 gap-4">
      <div className="flex-1 w-full text-center sm:text-left">
        <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
        <p className="text-blue-600 font-bold">Price: ${item.price}</p>
        <p className="text-gray-600">Quantity: {item.quantity}</p>
      </div>
      <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-end">
        <button
          onClick={() => dispatch(decreaseQuantity(item.id))}
          className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-lg rounded"
        >-</button>
        <span className="px-2">{item.quantity}</span>
        <button
          onClick={() => dispatch(addToCart(item))}
          className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-lg rounded"
        >+</button>
        <button
          onClick={handleRemove}
          className="ml-2 sm:ml-4 px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded"
        >Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
