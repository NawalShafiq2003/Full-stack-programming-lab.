import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="font-sans">
            <div className="text-xs text-blue-500 mb-6">
                <Link to="/">Home</Link> &gt; <span className="text-gray-500 text-sm">My Account</span>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">Login Or Creat Account</h2>

            <div className="bg-gray-100 p-8 rounded-sm mb-12 flex gap-8">
                {/* Left Column: Login */}
                <div className="w-1/2 pr-8 border-r border-gray-300">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">User Login Details</h3>
                    <p className="text-sm text-gray-600 mb-6">Please sign in below with your login information.</p>
                    <div className="text-xs text-gray-500 mb-4">*Required Fields</div>

                    <form className="">
                        <div className="flex items-center mb-6">
                            <label className="w-1/4 text-sm font-bold text-gray-700 text-right pr-4">Email <span className="text-red-500">*</span></label>
                            <input type="email" className="w-3/4 border border-gray-300 p-2 outline-none rounded-sm bg-white" />
                        </div>

                         <div className="flex items-center mb-6">
                            <label className="w-1/4 text-sm font-bold text-gray-700 text-right pr-4">Password <span className="text-red-500">*</span></label>
                            <input type="password" className="w-3/4 border border-gray-300 p-2 outline-none rounded-sm bg-white" />
                        </div>

                        <div className="flex items-center mb-6 ml-1/4 pl-[25%] gap-2">
                            <input type="checkbox" id="remember" className="w-3 h-3" />
                            <label htmlFor="remember" className="text-xs text-gray-500">Remember me the next time I visit</label>
                        </div>

                        <div className="pl-[25%] flex items-center gap-4">
                            <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-sm text-sm">
                                SIGN IN
                            </button>
                            <Link to="/forgot-password" className="text-sm text-blue-500 hover:underline hover:text-blue-700">Forgot your password?</Link>
                        </div>
                    </form>
                </div>

                {/* Right Column: Register */}
                <div className="w-1/2">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">New Customer</h3>
                    <p className="text-sm text-gray-600 mb-4 font-semibold">As a registered Hot Spring customer you can:</p>
                    
                    <ul className="list-disc pl-5 text-sm text-gray-600 mb-6 space-y-1">
                        <li>Store billing & shipping information</li>
                        <li>Check your order status</li>
                        <li>Track your delivery Status</li>
                        <li>View your order history</li>
                    </ul>

                     <button type="button" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-sm text-sm mt-4">
                        CREATE NEW ACCOUNT
                    </button>
                </div>
            </div>

            {/* Customers Who Viewed This Item Also */}
            <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">Customers Who Viewed This Item Also</h3>
                <div className="flex justify-between items-center gap-4">
                    <button className="text-blue-500 text-xl font-bold">&lt;</button>
                    {[1,2,3,4,5].map(i => (
                        <div key={i} className="flex items-center gap-4 p-2 bg-white rounded-sm w-1/5">
                            <img src={`https://via.placeholder.com/60x60/e2e8f0/000?text=Fridge`} alt="Product" className="h-16 w-16" />
                            <div className="text-xs">
                                <div className="text-red-600 font-bold">$2,549.15</div>
                                <div className="text-gray-500">Bosch 22 Cu. Ft Stainless Refrigerator</div>
                                <div className="text-[10px] text-gray-400 mt-1 uppercase">B22CS30SNSS</div>
                            </div>
                        </div>
                    ))}
                    <button className="text-blue-500 text-xl font-bold">&gt;</button>
                </div>
            </div>
        </div>
    );
};

export default Login;