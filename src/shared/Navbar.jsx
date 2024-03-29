import React from 'react';
import logo from '../images/logo.svg';

const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-[#B8E1E2] backdrop-blur-lg bg-opacity-20">
            <div className="mx-auto max-w-[100rem] px-6 sm:px-6 lg:px-8">
                <div className="relative flex h-16 justify-between items-center">
                    <div className="flex items-center">
                        <a className="flex items-center" href="#">
                            <img className="block h-12 w-auto mr-2" src={logo} alt="Logo" />
                            <div className="text-3xl hidden md:block">
                                <span className="bg-gradient-to-t from-[#098F8A] font-extrabold font-lato to-white bg-clip-text text-transparent">Grahak Konnect</span>
                            </div>

                        </a>
                    </div>
                    <div className="flex-shrink-0 flex px-2 py-3 items-center space-x-8">
                        <a
                            className="text-white text-lg font-lato bg-[#098F8A] hover:bg-indigo-200 inline-flex items-center justify-center px-3 py-2 border border-transparent font-medium rounded-md shadow-sm"
                            href="#"
                        >
                            Get Early Access
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
