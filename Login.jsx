import React from 'react';

const Checkout = () => {
  return (
    <div className="checkout-container container mx-auto p-4 max-w-5xl">
      <h1 className="text-2xl font-bold mb-6">Secure Checkouts</h1>
      <div className="bg-gray-100 p-4 mb-6">
          <p className="font-semibold">Payment Information</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold text-red-600 mb-4">Step 1. Billing Address</h2>
          <form className="space-y-4">
            <div className="flex items-center">
              <label className="w-1/3 text-right pr-4 font-semibold text-sm">First Name *</label>
              <input type="text" className="w-2/3 border p-2 text-sm" />
            </div>
            <div className="flex items-center">
              <label className="w-1/3 text-right pr-4 font-semibold text-sm">Last Name *</label>
              <input type="text" className="w-2/3 border p-2 text-sm" />
            </div>
            <div className="flex items-center">
              <label className="w-1/3 text-right pr-4 font-semibold text-sm">Email *</label>
              <input type="email" className="w-2/3 border p-2 text-sm" />
            </div>
            {/* More fields */}
            <div className="flex items-center mt-4">
                <input type="checkbox" id="shipToDifferent" className="mr-2" />
                <label htmlFor="shipToDifferent" className="text-sm text-blue-600">Ship to a different address</label>
            </div>
          </form>
        </div>

        <div>
          <h2 className="text-xl font-bold text-red-600 mb-4">Step 2. Card Details</h2>
          <form className="space-y-4 mb-8">
            <div className="flex items-center">
              <label className="w-1/3 text-right pr-4 font-semibold text-sm">Card Type *</label>
              <input type="text" className="w-2/3 border p-2 text-sm" placeholder="Master Card" />
            </div>
            <div className="flex items-center">
              <label className="w-1/3 text-right pr-4 font-semibold text-sm">Card Number *</label>
              <input type="text" className="w-2/3 border p-2 text-sm" placeholder="1234 5678 9123 4567" />
            </div>
            <div className="mt-2 text-xs text-gray-500">
                <p>Note: Please ensure the billing address you enter matches your credit card billing address.</p>
                <div className="flex items-center mt-1">
                    <input type="checkbox" id="acceptTerms" className="mr-2" />
                    <label htmlFor="acceptTerms" className="text-blue-600">I Accept terms and Conditions</label>
                </div>
            </div>
          </form>

          <h2 className="text-xl font-bold text-red-600 mb-4">Step 3. Review Your Order</h2>
          <div className="bg-white border p-4 text-sm">
              <div className="flex justify-between border-b pb-2 mb-2 font-semibold">
                  <span>Item name</span>
                  <span>price</span>
                  <span>Quantity</span>
                  <span>Total</span>
              </div>
              <div className="flex justify-between mb-4">
                  <span>XS SCYVA X SERUES 119</span>
                  <span>$ 699</span>
                  <span>1000</span>
                  <span>$12000</span>
              </div>
              <div className="text-right font-bold mb-4">
                  Total with shipping: <span className="ml-4">$ 699.00</span>
              </div>
              <div className="flex justify-end">
                  <button className="bg-green-600 text-white px-6 py-2 rounded font-bold hover:bg-green-700 flex items-center">
                      <span className="mr-2">🔒</span> Place Your Order
                  </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
