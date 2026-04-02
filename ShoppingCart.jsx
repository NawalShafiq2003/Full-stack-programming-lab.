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
  { id: 7, name: 'XS SCYBAX SERIES 119', price: '$500.00' },
  { id: 8, name: 'XS SCYBAX SERIES 119', price: '$500.00' }
];

const Home = () => {
  const { addToCart } = useCart();

  return (
    <div className="font-sans">
      {/* Main Banner */}
      <div className="relative bg-blue-100 flex p-8 rounded-sm mb-2" style={{ backgroundImage: 'url(https://via.placeholder.com/1000x400/93c5fd/ffffff?text=Water+Background)', backgroundSize: 'cover' }}>
        <div className="relative z-10 w-1/2 p-4 pt-10">
          <h2 className="text-4xl font-bold text-red-600 leading-tight mb-4">Barrier Reef 158 Jet<br/>TV- Stereo - Home Theater<br/>Supter Spa</h2>
          <p className="text-gray-800 text-lg mb-8">Extra Large and Deep 8 Person<br/>158 Jet Supper Spa, TV-Home Theater Spa System,</p>
          <div className="text-3xl font-extrabold text-blue-900 mb-2">$4899.00</div>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-sm">More Details</button>
        </div>
        <div className="relative z-10 w-1/2 flex items-center justify-center">
            <img src="https://via.placeholder.com/500x300/e2e8f0/000000?text=Hot+Tub+Image" alt="Hot Tub" className="rounded-sm shadow-xl" />
        </div>
      </div>

      {/* Sub Banners */}
      <div className="flex gap-2 mb-8">
        <div className="bg-[#0a1e2d] w-1/3 flex flex-col text-white p-4">
            <h3 className="text-2xl font-bold mb-1">5-7 PERSON</h3>
            <h4 className="text-xl mb-4">SPA</h4>
            <p className="text-[10px] text-gray-400 mt-auto uppercase">This is a photoshop's version of lorem ipsum. Proin gravida nibh vel velit auctor</p>
        </div>
        <div className="bg-[#1c354e] w-1/3 text-white p-4 flex flex-col items-center text-center">
            <img src="https://via.placeholder.com/150x100?text=TV+SPA" alt="TV Spa" className="mb-4" />
            <h3 className="text-xl font-bold">TV THEATER SPA</h3>
            <p className="text-[10px] text-gray-400 mt-2 uppercase">This is a photoshop's version of lorem ipsum. Proin gravida nibh vel velit auctor</p>
        </div>
        <div className="bg-red-600 w-1/3 text-white p-8 flex flex-col items-center text-center justify-center">
            <h3 className="text-5xl font-extrabold">SAVE</h3>
            <h3 className="text-6xl font-extrabold mb-4">50%</h3>
            <p className="text-[10px] text-red-200 mt-auto uppercase">This is a photoshop's version of lorem ipsum. Proin gravida nibh vel velit auctor</p>
        </div>
      </div>

      {/* Products */}
      <div className="mb-8">
        <h2 className="text-xl font-bold border-b-2 border-gray-200 pb-2 mb-6">NEW PRODUCTS</h2>
        <div className="grid grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border border-gray-200 p-4 bg-white flex flex-col text-sm hover:shadow-lg transition-shadow">
              <Link to={`/product/${product.id}`} className="block block-block">
                <div className="h-40 flex items-center justify-center bg-gray-50 mb-4">
                   <img src={`https://via.placeholder.com/150x150/e2e8f0/000?text=Product+${product.id}`} alt={product.name} className="max-h-full object-contain" />
                </div>
                <h3 className="text-gray-800 font-bold mb-2 hover:text-red-600 transition-colors">XS SCYBAX SERIES 119</h3>
              </Link>
              <p className="text-gray-500 text-xs mb-4">The goods of our stores are very reliable and durable we care about the customer</p>
              <div className="text-red-600 font-bold text-lg mb-2">{product.price}</div>
              <button onClick={() => addToCart(product)} className="bg-[#cc0000] hover:bg-red-700 text-white font-bold py-1.5 px-4 rounded-md border-2 border-black flex items-center gap-2 mb-2 w-max cursor-pointer shadow-sm">
                <ShoppingCart size={16} /> ADD TO CART
              </button>
              <div className="flex justify-between text-xs font-semibold text-gray-400 mt-2 border-t pt-2">
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

export default Home;
