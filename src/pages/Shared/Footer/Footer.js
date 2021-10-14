import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="text-center bg-dark text-white pt-4 pb-2">
            <h3>Follow Us</h3>
            <Link className="footer-link" to="/home">Facebook</Link>
            <Link className="footer-link" to="/home">WhatsApp</Link>
            <Link className="footer-link" to="/home">Twitter</Link>
            <p className="mb-0 mt-3">copyright <span className="text-danger">RED</span>WILD @2021</p>
        </div>
    );
};

export default Footer;