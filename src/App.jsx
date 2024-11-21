import React, { useState } from "react";

import App from './App';

import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";


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
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            <div>
                <main>{renderPage()}</main>
            </div>
            <Footer />
        </div>
    );
}

export default App;