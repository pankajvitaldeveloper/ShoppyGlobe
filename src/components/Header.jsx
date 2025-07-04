import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const Header = () => {
  const cartCount = useSelector((state) => state.cart.items.length);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-30">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Left: Title */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          ShoppyGlobe
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Right: Links */}
        <div className={`flex-col md:flex-row md:flex md:items-center gap-4 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-200 z-20 ${menuOpen ? 'flex' : 'hidden'}`}>
          <Link
            to="/"
            className="block px-4 py-2 text-gray-700 hover:text-blue-600 font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/cart"
            className="flex px-4 py-2 text-gray-700 hover:text-blue-600 font-medium  items-center gap-1"
            onClick={() => setMenuOpen(false)}
          >
            <FiShoppingCart className="w-5 h-5" />
            <span>({cartCount})</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
