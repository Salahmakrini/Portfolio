import React from 'react';

const Skills = () => {
    return (

        <div id="skills" name='skills' className='w-full bg-[#1c1e21] text-gray-300'>
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md lg:mb-20">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-[#f6c90e]">My Skills</h2>
                    <p className="text-white sm:text-xl">During my time in IT school, I started learning the basics of HTML, CSS, and JavaScript. I also explored more advanced areas like the MERN stack (MongoDB, Express.js, React, Node.js). Git and GitHub became my go-to for collaborating with others. Now, I'm a beginner, eager to apply these skills and grow in the IT field!</p>
                </div>

                <div className=" md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 text-center">
                    <div className="hover:scale-110 duration-500">
                        <img className="w-[10rem] mx-auto" src="/img/htmllogo.png" alt="HTML icon" />
                        <p className="my-4 font-bold">HTML</p>
                    </div>
                    <div className="hover:scale-110 duration-500">
                        <img className="w-[10rem] mx-auto" src="/img/csslogo.png" alt="HTML icon" />
                        <p className="my-4 font-bold">CSS</p>
                    </div>
                    <div className="hover:scale-110 duration-500">
                        <img className="w-[10rem] mx-auto" src="/img/javascriptlogo.png" alt="HTML icon" />
                        <p className="my-4 font-bold">Javascript</p>
                    </div>
                    <div className="hover:scale-110 duration-500">
                        <img className="w-[10rem] mx-auto" src="/img/mernlogo.png" alt="HTML icon" />
                        <p className="my-4 font-bold">MERN</p>
                    </div>
                    <div className="hover:scale-110 duration-500">
                        <img className="w-[10rem] mx-auto" src="/img/reactlogo.png" alt="HTML icon" />
                        <p className="my-4 font-bold">React</p>
                    </div>
                    <div className="hover:scale-110 duration-500">
                        <img className="w-[10rem] mx-auto" src="/img/nextjslogo.png" alt="HTML icon" />
                        <p className="my-4 font-bold">Next.js</p>
                    </div>
                    <div className="hover:scale-110 duration-500">
                        <img className="w-[10rem] mx-auto" src="/img/phplogo.png" alt="HTML icon" />
                        <p className="my-4 font-bold">Php</p>
                    </div>
                    <div className="hover:scale-110 duration-500">
                        <a href="github.com/Salahmakrini">
                        <img className=" w-[7rem] mx-auto" src="/img/githublogo.png" alt="HTML icon" />
                        </a>
                        <p className="my-4 font-bold">Github</p>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Skills;