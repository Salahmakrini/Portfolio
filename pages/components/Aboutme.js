import React from 'react';

const Aboutme = () => {
    return (
        <section id="aboutme" className="bg-gray-900">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold text-white leading-none md:text-5xl xl:text-6xl">Hello my name is <span className="text-purple-500">Salah Eddine!</span></h1>
                    <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl">Hello! I'm Salah Eddine El Makrini, a 20-year-old tech enthusiast and part-time security professional focused on ensuring safety in physical spaces like stores and public areas. By day, I'm into coding and software, crafting innovative solutions. When I'm not working, I unwind through gaming, diving into a world of strategy and creativity.</p>
                    <button type="" href="#projects" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br shadow-lg shadow-purple-500/50 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        My Projects
                    </button>
                    
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src="/img/aboutmeimg.jpg" alt="mockup"></img>
                </div>
            </div>
        </section>
    );
};

export default Aboutme;