import React from 'react';

const ContactAD = () => {
    return (
        <div className="bg-blend-multiply bg-[url('/img/contactad.jpg')] flex-shrink-0 p-[8rem]">
           <div className="flex justify-evenly">
            <h1 className="font-extrabold tracking-tight text-white lg:text-5xl whitespace-pre-line">Do you have any questions?  
            Get in touch with me</h1>
            <button type="button" href="#" className="rounded-lg text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br font-medium text-sm text-3xl px-6 py-3">
                Contact
            </button>
            </div>

        </div>
    );
};

export default ContactAD;