import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const products = [
  { id: 1, name: 'XS SCYBAX SERIES 119', price: '$500.00' },
  { id: 2, name: 'XS SCYBAX SERIES 119', price: '$500.00' },
  { id: 3, name: 'XS SCYBAX SERIES 119', price: '$500.00' },
  { id: 4, name: 'XS SCYBAX SERIES 119', price: '$500.00' },
  { id: 5, name: 'XS SCYBAX SERIES 119', price: '$500.00' },
  { id: 6, name: 'XS SCYBAX SERIES 119', price: '$500.00' },
];

const Category = () => {
    const { addToCart } = useCart();

    return (
        <div className="font-sans flex gap-8">
             {/* Sidebar Sidebar Filters */}
            <div className="w-1/4">
                <div className="bg-gray-50 border border-gray-200 rounded-sm pb-4 mb-8">
                    <h3 className="text-lg font-bold text-gray-800 bg-gray-100 p-4 rounded-t-sm border-b border-gray-200">Shopping Options</h3>
                    
                    <div className="p-4 border-b border-gray-200">
                         <h4 className="text-sm font-bold text-gray-700 mb-2 uppercase">Seating Capacity</h4>
                         <ul className="text-xs text-gray-600 space-y-2">
                             <li><Link to="#" className="hover:text-red-500">2-4 People</Link></li>
                             <li><Link to="#" className="hover:text-red-500">5-7 People</Link></li>
                             <li><Link to="#" className="hover:text-red-500">8 People and More</Link></li>
                         </ul>
                    </div>

                     <div className="p-4 border-b border-gray-200">
                         <h4 className="text-sm font-bold text-gray-700 mb-2 uppercase">Choose Sizes</h4>
                         <ul className="text-xs text-gray-600 space-y-2">
                             <li><Link to="#" className="hover:text-red-500">5-6 Feet Long</Link></li>
                             <li><Link to="#" className="hover:text-red-500">6-7 Feet Long</Link></li>
                             <li><Link to="#" className="hover:text-red-500">7-8 Feet Long</Link></li>
                             <li><Link to="#" className="hover:text-red-500">8 Feet to Large Size</Link></li>
                         </ul>
                    </div>

                    <div className="p-4 border-b border-gray-200">
                         <h4 className="text-sm font-bold text-gray-700 mb-2 uppercase">Spas By Style</h4>
                         <ul className="text-xs text-gray-600 space-y-2">
                             <li><Link to="#" className="hover:text-red-500">Plug and Play 110 Volt</Link></li>
                             <li><Link to="#" className="hover:text-red-500">TV-Stereo Spas</Link></li>
                             <li><Link to="#" className="hover:text-red-500">Corner Spas</Link></li>
                             <li><Link to="#" className="hover:text-red-500">Portable Spas</Link></li>
                             <li><Link to="#" className="hover:text-red-500">Deeper Spas</Link></li>
                         </ul>
                    </div>

                    <div className="p-4">
                         <h4 className="text-sm font-bold text-gray-700 mb-2 uppercase">Price Ranges From</h4>
                         <ul className="text-xs text-gray-600 space-y-2">
                             <li><Link to="#" className="hover:text-red-500">Under $3,000</Link></li>
                             <li><Link to="#" className="hover:text-red-500">$3,000 to 4,000</Link></li>
                             <li><Link to="#" className="hover:text-red-500">$4,000 to 5,000</Link></li>
                             <li><Link to="#" className="hover:text-red-500">$5,000 to 6,000</Link></li>
                             <li><Link to="#" className="hover:text-red-500">$6,000 +</Link></li>
                         </ul>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="w-3/4">
                <div className="text-xs text-blue-500 mb-6">
                    <Link to="/">Home</Link> &gt; <span className="text-gray-500 text-sm">Category</span>
                </div>

                <div className="flex justify-between items-center mb-6 border-b-2 border-gray-200 pb-2">
                    <h2 className="text-2xl font-bold text-gray-800">Top Product Listing</h2>
                    <div className="text-sm text-gray-500 flex items-center gap-2">
                        6 Item(s)
                        <span className="ml-4">Show:</span>
                        <select className="border border-gray-300 rounded-sm p-1 outline-none">
                             <option>9</option>
                             <option>18</option>
                             <option>27</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-6 mb-8">
                    {products.map((product) => (
                        <div key={product.id} className="border border-gray-200 p-4 bg-white flex flex-col text-sm hover:shadow-lg transition-shadow">
                            <Link to={`/product/${product.id}`} className="block">
                                <div className="h-40 flex items-center justify-center bg-gray-50 mb-4">
                                     <img src={`https://via.placeholder.com/150x150/e2e8f0/000?text=Product+${product.id}`} alt={product.name} className="max-h-full object-contain" />
                                </div>
                                <h3 className="text-gray-800 font-bold mb-2 text-xs hover:text-red-500 transition-colors">XS SCYBAX SERIES 119</h3>
                            </Link>
                            <p className="text-gray-500 text-xs mb-4">The goods of our stores are very reliable and durable we care about the customer</p>
                            <div className="text-red-600 font-bold text-lg mb-2">{product.price}</div>
                            <button onClick={() => addToCart(product)} className="bg-[#cc0000] hover:bg-red-700 text-white font-bold py-1.5 px-4 rounded-md flex items-center gap-2 mb-2 w-max text-xs cursor-pointer border-2 border-black shadow-sm">
                                <ShoppingCart size={14} /> ADD TO CART
                            </button>
                            <div className="flex justify-between text-[10px] font-semibold text-gray-400 mt-2 border-t pt-2">
                                <button className="hover:text-red-500 uppercase">Add to Wish list</button>
                                <Link to={`/product/${product.id}`} className="hover:text-red-500 uppercase">More Details</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Category;