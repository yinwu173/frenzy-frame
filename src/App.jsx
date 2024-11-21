import React, { useState } from "react";

import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";
import NavTabs from "./components/NavTabs";


function App() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <AboutPage />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Resume') {
            return <ResumePage />;
        }
        if (currentPage === 'Contact') {
            return <ContactPage />;
        }
        return null;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            <Header />
            <div>
                <main>{renderPage()}</main>
            </div>
            <Footer />
        </div>
    );
}

export default App;