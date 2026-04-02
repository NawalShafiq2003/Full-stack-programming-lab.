import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { getCartCount } = useCart();
  const navigate = useNavigate();

  return (
    <header className="w-full font-sans">
      {/* Top small bar */}
      <div className="flex justify-between items-center px-4 py-1 text-xs text-gray-500 bg-white">
        <div>Call for Customer support: <span className="text-red-500 font-bold">020 38989565</span></div>
        <div className="flex gap-4">
          <Link to="/profile" className="hover:text-red-500">My Account</Link>
          <Link to="/wishlist" className="hover:text-red-500">Wishlist</Link>
          <Link to="/checkout" className="hover:text-red-500">To Checkout</Link>
        </div>
      </div>

      {/* Main header with Logo and Cart */}
      <div className="flex justify-between items-center px-8 py-4 bg-white">
        <Link to="/">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold tracking-tight text-blue-900 leading-none">HOTSPRING<sup className="text-xl">&reg;</sup></h1>
            <span className="text-sm tracking-widest text-gray-600 pl-1">Portable Spas</span>
          </div>
        </Link>

        {/* Categories/Nav */}
        <div className="flex space-x-6 text-sm font-semibold text-gray-700 mt-4">
            <NavLink to="/" end className={({isActive}) => isActive ? "text-red-500 hover:text-red-600" : "hover:text-red-500"}>HOME</NavLink>
            <NavLink to="/category" className={({isActive}) => isActive ? "text-red-500 hover:text-red-600" : "hover:text-red-500"}>PRODUCTS</NavLink>
            <NavLink to="/special-offers" className={({isActive}) => isActive ? "text-red-500 hover:text-red-600" : "hover:text-red-500"}>SPECIAL OFFERS</NavLink>
            <NavLink to="/customers" className={({isActive}) => isActive ? "text-red-500 hover:text-red-600" : "hover:text-red-500"}>CUSTOMERS</NavLink>
        </div>

        <div onClick={() => navigate('/cart')} className="flex items-center gap-2 border px-4 py-2 bg-gray-50 rounded-sm cursor-pointer hover:bg-gray-100 transition-colors">
          <ShoppingCart size={20} className="text-red-600" />
          <span className="text-sm font-semibold">My Cart: {getCartCount()} items (s)</span>
          <span className="text-gray-400 ml-2">▼</span>
        </div>
      </div>

      {/* Red Navigation Bar */}
      <div className="bg-red-600 px-8 py-2 flex justify-between items-center text-white text-sm font-bold">
        <div className="flex gap-6 divide-x divide-red-400">
          <Link to="/category" className="pr-6 hover:text-gray-200">CATEGORY</Link>
          <Link to="#" className="px-6 hover:text-gray-200">BRAND</Link>
          <Link to="/about" className="pl-6 hover:text-gray-200">INFO</Link>
        </div>
        <div className="flex">
          <input 
            type="text" 
            placeholder="Search" 
            className="px-4 py-1 w-64 text-gray-800 outline-none"
          />
          <button className="bg-gray-800 hover:bg-gray-700 px-6 py-1 text-white font-semibold">
            SEARCH
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
