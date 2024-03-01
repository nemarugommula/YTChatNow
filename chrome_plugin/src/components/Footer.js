import React, { useState, useRef } from 'react';
import { BsFillSendFill } from "react-icons/bs";
function Footer() {
  const inputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const msg = inputRef.current.value; 
  }

  return (
    <div className="w-full p-1 bg-stone-50 shadow-xl"> 
      <form id="chat-form" className="flex gap-1 items-center w-full" onSubmit={onSubmit}>
        <textarea
          type="text"
          placeholder='Type your message here...'
          className="flex-1 shadow-lg rounded-full px-4 py-1 appearance-none focus:outline-none focus:border-red-700 transition duration-300 ease-in-out"
          ref={inputRef}
        ></textarea>
        <button type="submit" className="bg-red-400 hover:bg-red-500 focus:bg-red-600 rounded-full p-4 text-white" id="chat-send">
        <BsFillSendFill size={15}/>
        </button>
      </form>
    </div>
  );
  return <>test</>
}

export default Footer;
