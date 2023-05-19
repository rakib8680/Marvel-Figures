import React from 'react';
import logo from '../../assets/logo.jpg'


const Footer = () => {
    return (
        <footer className="footer py-10 md:py-32 bg-base-100 text-base-content md:flex justify-around px-10 md:px-0 ">
            <div className='flex md:gap-60 '>
                <div className=''>
                    <img className="mask mask-parallelogram md:w-32 md:h-32 w-20 h-20" src={logo} />
                    <p>MARVEL Studios Ltd.<br />Providing reliable Products since 1992</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
            </div>
            <div className='flex md:gap-72 gap-32'>
                <div className='flex flex-col gap-3'>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div className='flex flex-col gap-3'>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;  