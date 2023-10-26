import React from 'react';

const Footer = () => {
    return (

        <footer className="bg-gray-900 shadow ">
            <div className="w-full bg-gray-900 mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Copyright © 2023  <a href="#home" className="md:hover:text-purple-500">Salah.dev</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#aboutme" className="mr-4 md:hover:text-purple-500">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 md:hover:text-purple-500">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 md:hover:text-purple-500">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 md:hover:text-purple-500">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>

    );
};

export default Footer;