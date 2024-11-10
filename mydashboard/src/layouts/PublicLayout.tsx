// src/layouts/PublicLayout.js
import { Outlet } from 'react-router-dom';
import FooterSection from '../components/FooterSection';
import Header from '../components/Header/Header';

const PublicLayout = () => {
    return (
        <>
            <Header />
            <main>
                {/* React Router's Outlet will render the child routes here */}
                <Outlet />
            </main >
            <FooterSection />
        </>
    );
};

export default PublicLayout;
