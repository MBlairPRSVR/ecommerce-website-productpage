import { Outlet } from 'react-router-dom';
import React from 'react';
import NavItems from './components/navitems.jsx';
import Banner from './Home/Banner'
import Home from './Home/Home'
import Footer from './Home/Footer'
 // Adjust the import path if necessary

function App () {
    return (
        <div>
            <NavItems />
            <div className="min-vh-100">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default App;
