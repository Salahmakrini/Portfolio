import React from 'react';

const Footer = () => {
    return (

        <footer className="bg-[#1c1e21]">
            <section className="w-full bg-[#1c1e21] mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Copyright © 2023  <a href="#home" className="md:hover:text-[#f6c90e]">Salah.dev</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#aboutme" className="mr-4 md:hover:text-[#f6c90e]">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 md:hover:text-[#f6c90e]">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 md:hover:text-[#f6c90e]">Licensing</a>
                    </li>
                    <li>
                        <a href="#contact" className="mr-4 md:hover:text-[#f6c90e]">Contact</a>
                    </li>
                </ul>
            </section>
        </footer>

    );
};

export default Footer;