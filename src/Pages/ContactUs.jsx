import React from "react";
//max-w-[800px] mt-[-96px] w-full h-screen mx-auto 
export const ContactUs = () => {
  return (
        <div className="mt-[50px] flex flex-row mx-auto gap-6 justify-center">
          <div className="w-[500px] ">
            <h1 className="text-[#00df9a] font-bold">
              CONTACT US
            </h1>
            <p className="my-4 text-white">
              We’re here to assist you! Any queries you may have will be eagerly addressed by our specialists. Please get in touch with any of our global offices, and we’ll get back to you shortly.
            </p>
          </div>
          <div className="w-[500px]">
            <form className="flex flex-col gap-3">
              <input type="text" placeholder="Name" className="p-3 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#00df9a] focus:border-transparent"></input>
              <input type="text" placeholder="Email" className="p-3 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#00df9a] focus:border-transparent"></input>
              <textarea type="text" placeholder="Message" className="p-3 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#00df9a] focus:border-transparent"></textarea>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black uppercase hover:opacity-85'>
                Send message
              </button>
            </form>
          </div>
        </div>
  );
};

export default ContactUs;
