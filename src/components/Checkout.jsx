import React, { useState } from 'react'; 
import { useSelector, useDispatch } from 'react-redux'; 
import { useNavigate } from 'react-router-dom'; 
import { toast } from 'react-toastify'; 

// Import Redux action to remove items from cart
import { removeFromCart } from '../redux/cartSlice';

const Checkout = () => {
  // Get cart items from Redux store - needed to display order summary and calculate total
  const cartItems = useSelector((state) => state.cart.items);
  
  // Get dispatch function to trigger Redux actions
  const dispatch = useDispatch();
  
  // Local state for checkout form - stores user's shipping and payment information
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    payment: 'cod', // Default to Cash on Delivery for user convenience
  });
  
  // Track if order has been submitted - used to show success page after checkout
  const [submitted, setSubmitted] = useState(false);
  
  // Navigation function to redirect user after successful order
  const navigate = useNavigate();

  // Calculate total price of all items in cart - reduces array to single sum value
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Handle form input changes - updates form state when user types in any field
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validate form data before submission - ensures all required fields are filled correctly
  const validateForm = () => {
    if (!form.name.trim()) {
      toast.error("Please enter your name.");
      return false;
    }
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }
    if (!form.address.trim()) {
      toast.error("Please enter your address.");
      return false;
    }
    if (cartItems.length === 0) {
      toast.error("Your cart is empty.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!validateForm()) return; 
    
    setSubmitted(true);
    
    // Clear the cart after order is placed - simulates order processing
    cartItems.forEach(item => {
      dispatch(removeFromCart(item.id));
    });
    
    // Show success message to user
    toast.success("Order placed successfully!");
  };

  // Conditional rendering: Show success page after order submission
  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-12 flex flex-col items-center min-h-[60vh]">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full flex flex-col items-center">
          <svg className="w-16 h-16 text-green-500 mb-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
                    <h2 className="text-3xl font-bold text-blue-700 mb-2 text-center">Thank you for your order!</h2>
          <p className="text-lg text-gray-700 mb-2 text-center">
            Your order has been placed successfully.
          </p>
          
          <p className="text-gray-600 text-center">
            We will contact you soon at <span className="font-semibold">{form.email}</span>.
          </p>
          
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition-colors duration-200 mt-6"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  // Main checkout page layout - displays order summary and checkout form side by side
  return (
    <div className="container page-mt mx-auto px-4 py-10 flex flex-col lg:flex-row gap-10 justify-center min-h-[80vh]">
      
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md mx-auto lg:mx-0">
        <h3 className="text-xl font-bold text-blue-700 mb-6 text-center">Order Summary</h3>
        
        {/* Conditional rendering: Show empty cart message or item list */}
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        ) : (
          <ul className="mb-4 divide-y">
            {/* Map through cart items to display each product with quantity and price */}
            {cartItems.map(item => (
              <li key={item.id} className="flex justify-between py-2">
                <span className="font-medium text-gray-800">
                  {item.title} <span className="text-gray-500">x {item.quantity}</span>
                </span>
                <span className="font-semibold text-blue-700">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        )}
        
        {/* Display total amount - helps user understand final cost before checkout */}
        <div className="flex justify-between font-bold border-t pt-4 text-lg">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      
      {/* Checkout Form Section - collects shipping and payment information */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md mx-auto"
        autoComplete="off" // Disable browser autocomplete for security
      >
        <h3 className="text-xl font-bold text-blue-700 mb-6 text-center">Shipping Details</h3>
        
        <div className="mb-5">
          <label className="block mb-2 font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
          />
        </div>
        
        <div className="mb-5">
          <label className="block mb-2 font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@email.com"
          />
        </div>
        
        <div className="mb-5">
          <label className="block mb-2 font-medium text-gray-700">Address</label>
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Address"
            rows={3} // Multiple rows for complete address entry
          />
        </div>
        
        <div className="mb-8">
          <label className="block mb-2 font-medium text-gray-700">Payment Method</label>
          <select
            name="payment"
            value={form.payment}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="cod">Cash on Delivery</option>
            <option value="card">Credit/Debit Card</option>
            <option value="upi">UPI</option>
          </select>
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200 text-lg"
          disabled={cartItems.length === 0} 
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;