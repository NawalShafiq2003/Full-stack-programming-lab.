import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-8 font-sans">
      {/* Brands Banner */}
      <div className="flex justify-between items-center py-6 px-12 border-t border-b border-gray-200">
        <div className="flex flex-col items-center">
            <h3 className="text-3xl font-extrabold text-blue-500 uppercase italic">Save $1,000's</h3>
            <p className="text-xs bg-blue-500 text-white px-2 uppercase font-bold">On the top spa brands</p>
            <div className="flex gap-2 mt-1">
                <span className="bg-orange-400 text-white text-xs font-bold px-1 uppercase">Huge Discounts</span>
                <span className="bg-green-400 text-white text-xs font-bold px-1 uppercase leading-tight text-center">Shop early for<br/>the best selection</span>
            </div>
        </div>
        <img src="https://via.placeholder.com/150x50?text=OceanicSpa" alt="Oceanic Spa" className="h-12 opacity-80" />
        <img src="https://via.placeholder.com/150x50?text=CalderaSpas" alt="Caldera Spas" className="h-12 opacity-80" />
        <img src="https://via.placeholder.com/150x50?text=IslandSpas" alt="Island Spas" className="h-12 opacity-80" />
      </div>

      {/* Dark Section */}
      <div className="bg-[#0f2a40] text-gray-400 pt-10 pb-6 px-12 grid grid-cols-4 gap-8 rounded-b-lg">
        <div>
          <h4 className="text-gray-200 font-bold mb-4 uppercase text-sm">Contact Us</h4>
          <p className="text-sm mb-2">yoursitename.com</p>
          <p className="text-gray-200 font-bold mb-4">CALL 24/7: 888 - 201 - 8899</p>
          <div className="text-xs space-y-1 mb-4">
            <p>Your Address:</p>
            <p>Street</p>
            <p>State & Zip Code</p>
            <p>City & Country</p>
            <p>Email: servicemail@yoursitename.com</p>
          </div>
          <div className="flex gap-2 mt-4 text-white">
              <span className="bg-[#3b5998] p-1.5 rounded-full cursor-pointer">fb</span>
              <span className="bg-[#00aced] p-1.5 rounded-full cursor-pointer">tw</span>
              <span className="bg-[#007bb6] p-1.5 rounded-full cursor-pointer">in</span>
            <span className="bg-[#dd4b39] p-1.5 rounded-full cursor-pointer">G+</span>
            <span className="bg-[#cb2027] p-1.5 rounded-full cursor-pointer">P</span>
          </div>
        </div>

        <div>
          <h4 className="text-gray-200 font-bold mb-4 uppercase text-sm">Information</h4>
          <ul className="text-xs space-y-3">
            <li className="border-b border-gray-600 pb-2"><Link to="/about" className="hover:text-white">ABOUT US</Link></li>
            <li className="border-b border-gray-600 pb-2"><Link to="/contact" className="hover:text-white">CUSTOMER SERVICE</Link></li>
            <li className="border-b border-gray-600 pb-2"><Link to="#" className="hover:text-white">PRIVACY POLICY</Link></li>
            <li className="border-b border-gray-600 pb-2"><Link to="#" className="hover:text-white">SITE MAP</Link></li>
            <li className="border-b border-gray-600 pb-2"><Link to="#" className="hover:text-white">SEARCH TERMS</Link></li>
            <li className="border-b border-gray-600 pb-2"><Link to="/contact" className="hover:text-white">CONTACT US</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-200 font-bold mb-4 uppercase text-sm">My Account</h4>
          <ul className="text-xs space-y-3">
            <li className="border-b border-gray-600 pb-2"><Link to="/login" className="hover:text-white">SIGN IN</Link></li>
            <li className="border-b border-gray-600 pb-2"><Link to="#" className="hover:text-white">VIEW CART</Link></li>
            <li className="border-b border-gray-600 pb-2"><Link to="#" className="hover:text-white">MY WISHLIST</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-200 font-bold mb-4 uppercase text-sm">Signup For A Newsletter</h4>
          <p className="text-xs mb-2 uppercase">Sign up for our newsletter!</p>
          <div className="flex mt-2 mb-6">
            <input type="email" className="bg-white text-gray-800 px-3 py-1.5 w-full outline-none text-sm" />
            <button className="bg-red-600 text-white px-3 py-1.5 text-xs font-bold uppercase hover:bg-red-700">Go</button>
          </div>
          
          <h4 className="text-gray-200 font-bold mb-4 uppercase text-xs">Payment Solutions</h4>
          <div className="flex gap-1">
            <img src="https://via.placeholder.com/30x20/0f2a40/fff?text=Visa" alt="Visa" className="h-6 object-contain bg-white rounded-sm p-0.5" />
            <img src="https://via.placeholder.com/30x20/0f2a40/fff?text=MC" alt="MasterCard" className="h-6 object-contain bg-white rounded-sm p-0.5" />
            <img src="https://via.placeholder.com/30x20/0f2a40/fff?text=Amex" alt="Amex" className="h-6 object-contain bg-white rounded-sm p-0.5" />
            <img src="https://via.placeholder.com/30x20/0f2a40/fff?text=PayPal" alt="PayPal" className="h-6 object-contain bg-white rounded-sm p-0.5" />
          </div>
        </div>
      </div>

      <div className="bg-[#0a1e2d] text-center py-4 text-xs text-gray-500">
        &copy; 2014 Hottubspaservice.com. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
