import { Link } from 'react-router-dom';

const EditProfileDetails = () => {
    return (
        <div className="font-sans px-4 mx-auto max-w-7xl">
            <div className="text-xs text-blue-500 mb-6 mt-4">
                <Link to="/">Home</Link> &gt; <Link to="/profile">User Account</Link> &gt; <span className="text-gray-500 text-sm">Edit profile details</span>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Edit Profile details</h2>

            <div className="bg-gray-100 p-8 rounded-sm mb-12">
                <p className="text-sm text-gray-600 mb-2">Please fill the form below to update your Profile details.</p>
                <div className="text-xs text-gray-500 mb-6">*Required Fields</div>

                <form className="max-w-lg">
                    {[
                        { label: 'First Name', type: 'text' },
                        { label: 'Last Name', type: 'text' },
                        { label: 'Email', type: 'email' },
                        { label: 'Current Password', type: 'password' },
                        { label: 'New Password', type: 'password' },
                        { label: 'Confirm Password', type: 'password' },
                    ].map((field, idx) => (
                        <div key={idx} className="flex items-center mb-4">
                            <label className="w-[140px] text-sm font-bold text-gray-700 text-right pr-4 shrink-0">
                                {field.label} <span className="text-red-500">*</span>
                            </label>
                            <input type={field.type} className="flex-1 border border-gray-300 p-2 outline-none rounded-sm bg-white" />
                        </div>
                    ))}

                    <div className="ml-[140px] mt-6">
                        <button type="submit" className="bg-[#8cc63f] hover:bg-[#7ab332] text-white font-bold py-2 px-6 rounded-sm text-sm uppercase">
                            UPDATE DETAILS
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfileDetails;
