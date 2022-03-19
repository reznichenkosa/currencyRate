import React from 'react';
import '../../styles/style.scss';
import 'normalize.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Rate from '../../pages/rate/Rate';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CurrensyInfo from '../../pages/currencyInfo/CurrencyInfo';

const App = () => {
    return (
        <>   
            <BrowserRouter>  
                <Header />
                <main className="main">
                    
                        <Routes>
                            <Route path='/' element={<Rate />}/>
                            <Route path='/:char' element={<CurrensyInfo />}/>
                        </Routes>
                    
                </main>
                <Footer />    
            </BrowserRouter> 
        </>
    );
};

export default App;