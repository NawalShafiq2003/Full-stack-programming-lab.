import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col pt-4 px-2">
            <div className="max-w-6xl w-full mx-auto bg-white shadow-xl flex-grow">
                <Header />
                <main className="p-6 min-h-[50vh]">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
