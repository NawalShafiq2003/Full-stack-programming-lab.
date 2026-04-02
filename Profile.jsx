import { Link } from 'react-router-dom';

const EditShippingAddress = () => {
    return (
        <div className="font-sans">
            <div className="text-xs text-blue-500 mb-6">
                <Link to="/">Home</Link> &gt; <Link to="/profile">User Account</Link> &gt; <span className="text-gray-500 text-sm">My Account</span>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">Edit Shipping Address</h2>

            <div className="bg-gray-100 p-8 rounded-sm mb-12">
                <p className="text-sm text-gray-600 mb-6">Please fill the form below to update your Profile details.</p>
                <div className="text-xs text-gray-500 mb-4">*Required Fields</div>

                <form className="max-w-lg">
                    {[
                        { label: 'First Name', type: 'text' },
                        { label: 'Last Name', type: 'text' },
                        { label: 'Email', type: 'email' },
                        { label: 'Phone', type: 'tel' },
                        { label: 'City', type: 'text' },
                        { label: 'State', type: 'text' },
                        { label: 'Zip Code', type: 'text' },
                        { label: 'Country', type: 'text' }
                    ].map((field, idx) => (
                        <div key={idx} className="flex items-center mb-4">
                            <label className="w-1/3 text-sm font-bold text-gray-700 text-right pr-4">{field.label} <span className="text-red-500">*</span></label>
                            <input type={field.type} className="w-2/3 border border-gray-300 p-2 outline-none rounded-sm bg-white" />
                        </div>
                    ))}

                    <div className="pl-[33%] mt-6">
                        <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-sm text-sm uppercase">
                            Update Address
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditShippingAddress;