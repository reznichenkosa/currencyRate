import React from 'react';
import '../../styles/style.scss';
import 'normalize.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Rate from '../../pages/rate/Rate';
import { Route, Routes } from 'react-router-dom';
import CurrensyInfo from '../../pages/currencyInfo/CurrencyInfo';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router';
import NotFound from '../../pages/notFound/NotFound';

const App = () => {
    const location = useLocation();
    return (
        <>   
            <Header />
            <main className="main">
                <AnimatePresence exitBeforeEnter>
                    <Routes location={location} key={location.pathname}>
                        <Route path='/' element={<Rate />}/>
                        <Route path='/:char' element={<CurrensyInfo />}/>
                        <Route path='*' element={<NotFound />}/>
                    </Routes>
                </AnimatePresence>    
            </main>
            <Footer />    
        </>
    );
};

export default App;