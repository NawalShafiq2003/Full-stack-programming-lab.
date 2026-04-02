import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    return (
        <div className="font-sans">
            <div className="text-xs text-blue-500 mb-6">
                <Link to="/">Home</Link> &gt; <span className="text-gray-500 text-sm">My Account</span>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">Forget Your Password</h2>

            <div className="bg-gray-100 p-8 rounded-sm mb-12">
                <h3 className="text-lg font-bold text-gray-800 mb-4">User Account Details</h3>
                <p className="text-sm text-gray-600 mb-6">Please enter your email address below to retrieve your password.</p>
                <div className="text-xs text-gray-500 mb-4">*Required Fields</div>

                <form className="max-w-md">
                    <div className="flex items-center mb-6">
                        <label className="w-1/4 text-sm font-bold text-gray-700 text-right pr-4">Email <span className="text-red-500">*</span></label>
                        <input type="email" className="w-3/4 border border-gray-300 p-2 outline-none rounded-sm bg-white" />
                    </div>

                    <div className="flex items-center mb-6 ml-1/4 pl-[25%] gap-2">
                        <input type="checkbox" id="remember" className="w-3 h-3" />
                        <label htmlFor="remember" className="text-xs text-gray-500">Remember me the next time I visit</label>
                    </div>

                    <div className="pl-[25%]">
                        <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-sm text-sm">
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;