import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
        <div className="font-sans">
            <div className="text-xs text-blue-500 mb-6">
                <Link to="/">Home</Link> &gt; <Link to="/contact">Customer Support</Link> &gt; <span className="text-gray-500 text-sm">Contact Us</span>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">Contact Us</h2>

            <div className="bg-gray-100 p-8 rounded-sm mb-12">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Contact Our Customer Support</h3>
                <p className="text-sm text-gray-600 mb-6">To create a new account, please fill in the required information below. Passwords are case sensitive and must be 6 to 20 characters long.</p>
                
                <h3 className="text-lg font-bold text-gray-800 mt-8 mb-2">Online Sales & Customer Support</h3>
                <p className="text-sm font-bold text-gray-800 mb-6">Call Us: <span className="text-red-500">020 78989565</span></p>

                <div className="flex gap-8 mb-12 pb-6 border-b border-gray-300">
                    <div className="w-1/2 border-r border-gray-300 pr-8">
                        <h4 className="text-md font-bold text-gray-800 mb-4">Retail Store Location</h4>
                        <div className="text-sm text-gray-600 leading-relaxed">
                            Hotspring Store Loc<br/>5000N. Ford avenue<br/>Newyork, NY 20145<br/>888.123.1234
                        </div>
                    </div>
                    <div className="w-1/2 pl-8">
                        <h4 className="text-md font-bold text-gray-800 mb-4">Services</h4>
                        <div className="text-sm text-gray-600 leading-relaxed">
                            Hotspring Store Loc<br/>5000N. Ford avenue<br/>Newyork, NY 20145<br/>888.123.1234
                        </div>
                    </div>
                </div>

                 <h3 className="text-lg font-bold text-gray-800 mb-4">Contact Us</h3>

                 <form className="max-w-xl">
                    <div className="flex items-center justify-between mb-4">
                        <label className="text-sm font-bold text-gray-700 w-1/4 text-right pr-4">First name <span className="text-red-500">*</span></label>
                         <input type="text" className="w-3/4 border border-gray-300 p-2 outline-none rounded-sm bg-white" />
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <label className="text-sm font-bold text-gray-700 w-1/4 text-right pr-4">Email <span className="text-red-500">*</span></label>
                         <input type="email" className="w-3/4 border border-gray-300 p-2 outline-none rounded-sm bg-white" />
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <label className="text-sm font-bold text-gray-700 w-1/4 text-right pr-4">Subject <span className="text-red-500">*</span></label>
                         <input type="text" className="w-3/4 border border-gray-300 p-2 outline-none rounded-sm bg-white" />
                    </div>
                    <div className="flex items-start justify-between mb-6">
                        <label className="text-sm font-bold text-gray-700 w-1/4 text-right pr-4 pt-2">Your Message <span className="text-red-500">*</span></label>
                         <textarea rows="5" className="w-3/4 border border-gray-300 p-2 outline-none rounded-sm bg-white" />
                    </div>

                    <div className="pl-[25%]">
                        <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-sm text-sm uppercase">
                            Submit
                        </button>
                    </div>
                 </form>
            </div>
        </div>
    );
};

export default ContactUs;