import { Link } from 'react-router-dom';

const OrderDetails = () => {
    return (
        <div className="font-sans px-4 mx-auto max-w-7xl">
            <div className="text-xs text-blue-500 mb-6 mt-4">
                <Link to="/">Home</Link> &gt; <Link to="/profile">User Account</Link> &gt; <span className="text-gray-500 text-sm">Order details</span>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Details</h2>

            <div className="bg-gray-100 p-8 rounded-sm mb-12">
                <p className="text-sm text-gray-700 mb-8">
                    Order <span className="text-blue-500">#304</span> was placed on <span className="text-blue-500">December 21th, 2014</span> and currently is on <span className="text-blue-500">hold</span>.
                </p>

                <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">Your Order Details</h3>
                
                <table className="w-full text-sm mb-8 border-collapse">
                    <thead>
                        <tr className="border-b border-gray-200">
                            <th className="text-left py-2 font-bold text-gray-700">Product</th>
                            <th className="text-center py-2 font-bold text-gray-700">Quantity</th>
                            <th className="text-right py-2 font-bold text-gray-700">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-gray-200">
                            <td className="py-3 text-blue-500 hover:underline cursor-pointer">Five person hottube spa with green light inside</td>
                            <td className="text-center py-3">1</td>
                            <td className="text-right py-3">$ 699.00</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <td className="py-3 text-blue-500 hover:underline cursor-pointer">Five person hottube spa with green light inside</td>
                            <td className="text-center py-3">1</td>
                            <td className="text-right py-3">$ 699.00</td>
                        </tr>
                    </tbody>
                    <tfoot className="text-right">
                        <tr>
                            <td colSpan="2" className="pt-4 pb-1 pr-8 font-bold text-gray-700">Cart Subtotal:</td>
                            <td className="pt-4 pb-1">$ 1400.00</td>
                        </tr>
                        <tr>
                            <td colSpan="2" className="py-1 pr-8 font-bold text-gray-700">Shipping:</td>
                            <td className="py-1">Free Shipment</td>
                        </tr>
                        <tr>
                            <td colSpan="2" className="py-1 pr-8 font-bold text-gray-700">Payment method:</td>
                            <td className="py-1">Direct Bank Transfer</td>
                        </tr>
                        <tr>
                            <td colSpan="2" className="py-1 pr-8 font-bold text-gray-700">Total with shipping:</td>
                            <td className="py-1 font-bold">$ 1400.00</td>
                        </tr>
                    </tfoot>
                </table>

                <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">Your Bank details</h3>
                <div className="grid grid-cols-[100px_1fr] gap-2 text-sm mb-8">
                    <div className="font-bold text-gray-700">Bank :</div>
                    <div>Your Bank Name</div>
                    <div className="font-bold text-gray-700">Acc# :</div>
                    <div>December 21 2014</div>
                    <div className="font-bold text-gray-700">BIC :</div>
                    <div>$2500</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">Customer details</h3>
                        <div className="text-sm">
                            <div className="grid grid-cols-[120px_1fr] gap-1 mb-1">
                                <span className="text-gray-600">Customer Name</span>
                                <span>Farrukh Javaid</span>
                            </div>
                            <div className="grid grid-cols-[120px_1fr] gap-1 mb-1">
                                <span className="text-gray-600">Email</span>
                                <span>email@hottubdirect.com</span>
                            </div>
                            <div className="grid grid-cols-[120px_1fr] gap-1">
                                <span className="text-gray-600">Phone</span>
                                <span>0888 7578 787</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">Billing address</h3>
                        <div className="text-sm text-gray-800 leading-relaxed">
                            Farrukh Javaid<br />
                            Hottub Spas<br />
                            Plot 10 Tech Society<br />
                            California, CA 20112<br />
                            United State
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">Shipping address</h3>
                        <div className="text-sm text-gray-800 leading-relaxed">
                            Farrukh Javaid<br />
                            Hottub Spas<br />
                            Plot 10 Tech Society<br />
                            California, CA 20112<br />
                            United State
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;
