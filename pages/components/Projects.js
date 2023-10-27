import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="bg-[#545f67] p-[3rem]">
            <div className="flex justify-evenly ">

                <div className="md:grid lg:grid-cols-3 md:gap-[7rem] md:space-y-0 text-center">

                    <div>
                        <img className="w-[25rem] mx-auto shadow-2xl" src="/img/website1.png" alt="HTML icon" />
                    </div>

                    <div>
                        <img className="w-[25rem] mx-auto shadow-2xl" src="/img/website2.png" alt="HTML icon" />
                    </div>

                    <div>
                        <img className="w-[25rem] mx-auto shadow-2xl" src="/img/website3.png" alt="HTML icon" />
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Projects;