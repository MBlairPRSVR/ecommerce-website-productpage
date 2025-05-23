import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes module
import logo from "../assets/images/logo/logo.png";
import './navitems.css';  // Import the CSS file


// ErrorBoundary Component
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by ErrorBoundary:', error, errorInfo);
        // You can log the error to an error reporting service
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong. Please try again later.</h1>;
        }

        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired
};

const NavItems = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);

    // Handle the scroll event and fix header
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setHeaderFixed(true);
            } else {
                setHeaderFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <ErrorBoundary> {/* Wrap NavItems with ErrorBoundary */}
            <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
                {/* header top start */}
                <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
                    <div className='container'>
                        <div className='header-top-area'></div>
                        <Link to="/signup" className='lab-btn me-3'><span>Create Account</span></Link>
                        <Link to="/login" className='d-none d-md-'><span>Login</span></Link>
                    </div>
                </div>

                {/*header bottom*/}
                <div className='header-bottom'>
                    <div className='container'>
                        <div className='header-wrapper'>

                            {/* logo */}
                            <div className='logo-search-acte'>
                                <div className='logo'>
                                    <Link to={"/"}>
                                        <img src={logo} alt="Logo" />
                                    </Link>
                                </div>
                            </div>

                            {/* menu */}
                            <div className='menu-area'>
                                <div className='menu'>
                                    <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                        <li>
                                            <Link to={"/"}>Home</Link>
                                        </li>
                                        <li>
                                            <Link to={"/shop"}>Shop</Link>
                                        </li>
                                        <li>
                                            <Link to={"/blog"}>Blog</Link>
                                        </li>
                                        <li>
                                            <Link to={"/about"}>About</Link>
                                        </li>
                                        <li>
                                            <Link to={"/contact"}>Contact</Link>
                                        </li>
                                    </ul>
                                </div>

                                {/* sign in & login */}
                                <Link to="/signup" className='lab-btn me-3'><span>Create Account</span></Link>
                                <Link to="/login" className='d-none d-md-'><span>Login</span></Link>

                                {/* menu toggler */}
                                <div 
                                    onClick={() => setMenuToggle(!menuToggle)} 
                                    className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
                                >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>

                                {/* social toggler */}
                                <div 
                                    className="ellepsis-bar d-md-none"
                                    onClick={() => setSocialToggle(!socialToggle)}
                                >
                                    <i className="icofont-info-square"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </ErrorBoundary>
    );
}

export default NavItems;
