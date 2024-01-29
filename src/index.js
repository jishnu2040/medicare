import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Footer from './components/Footer';
import Header from './components/Header';
import List from './list/List';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div className='app'>
     <Header />
    <div className='app-body'>  
        <List />
    </div>
    <div className='footer'>
    <Footer />
    </div>
    
 </div>
);

