import React from 'react';

const ContactAD = () => {
    return (
        <section className="bg-[url('/img/contactadimg2.jpg')] flex-shrink-0 p-[8rem]">
           <div className="flex justify-evenly ">
            <h1 className="font-extrabold tracking-tight text-white lg:text-5xl whitespace-pre-line ">Do you have any questions?  
            Get in touch with me</h1>
            <a type="button" href="#contact" className="rounded-lg text-white bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:bg-gradient-to-br font-medium text-3xl px-6 py-3">
                Contact
            </a>
            </div>

        </section>
    );
};

export default ContactAD;