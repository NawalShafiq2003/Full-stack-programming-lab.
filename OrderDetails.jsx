const Customers = () => {
    return (
        <div className="font-sans min-h-[40vh] flex flex-col items-center justify-start bg-gray-50 rounded-sm p-8 text-center border border-gray-200">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-8 border-b-2 border-blue-900 pb-2 inline-block">OUR CUSTOMERS</h2>
            
            <div className="grid grid-cols-3 gap-8 w-full max-w-4xl mx-auto">
                <div className="bg-white p-6 shadow-sm border border-gray-100 rounded-sm">
                    <p className="text-gray-600 italic mb-4">"The XS SCYBAX SERIES 119 completely transformed my backyard! Highly recommend the HotSpring team for their amazing support."</p>
                    <p className="font-bold text-gray-800">- Jane D.</p>
                </div>
                <div className="bg-white p-6 shadow-sm border border-gray-100 rounded-sm">
                    <p className="text-gray-600 italic mb-4">"Fast delivery and an excellent TV theater spa. Now I watch the game from the best seat in the house."</p>
                    <p className="font-bold text-gray-800">- Mike T.</p>
                </div>
                <div className="bg-white p-6 shadow-sm border border-gray-100 rounded-sm">
                    <p className="text-gray-600 italic mb-4">"Very reliable and durable goods. The 110 Volt plug & play was so easy to set up."</p>
                    <p className="font-bold text-gray-800">- Sarah M.</p>
                </div>
            </div>
        </div>
    );
};

export default Customers;