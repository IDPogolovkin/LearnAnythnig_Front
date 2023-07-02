import React from 'react';
import About from '../About/About';
import BrowserSupport from '../BrowserSupport/BrowserSupport';
import Footer from '../Footer/Footer';
import HappyClient from '../HappyClient/HappyClient';
import Header from '../Header/Header';
import Pricing from '../Pricing/Pricing';
import Course from '../Course/Course'

const Home = () => {
    return (
        <main>
            <Header />
            <Course />
            <About />
            <Pricing/>
            <HappyClient />
            <Footer />
        </main>
    );
};

export default Home;