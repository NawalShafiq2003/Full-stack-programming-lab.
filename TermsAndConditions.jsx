const NotFound = () => {
    return (
        <div className="font-sans min-h-[50vh] flex flex-col items-center justify-center bg-gray-50 rounded-sm p-8 text-center border border-gray-200 mt-8">
            <h1 className="text-5xl font-extrabold text-red-600 mb-6 drop-shadow-sm">Error 404 Not Found</h1>
            <p className="text-2xl text-gray-700 max-w-2xl font-bold leading-relaxed">
                Brother, I have not made this page because the project is already too big.
            </p>
        </div>
    );
};

export default NotFound;