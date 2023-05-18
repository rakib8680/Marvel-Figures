import React from 'react';
import logo from '../../assets/logo.jpg'


const Footer = () => {
    return (
        <footer className="footer py-20 bg-base-100 text-base-content  px-32">
            <div>
            <img className="mask mask-parallelogram md:w-32 md:h-32 w-12 h-12" src={logo} />
                <p>MARVEL Studios Ltd.<br />Providing reliable Products since 1992</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;  