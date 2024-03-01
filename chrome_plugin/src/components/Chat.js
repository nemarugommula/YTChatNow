import React from 'react';
import { useStore } from '../hooks/store';
import classNames from 'classnames';

function Chat() {
  const { chats } = useStore();

  const chatDropStyle = classNames({
    "bg-red-100 inline-block overflow-wrap p-2 shadow-md rounded-xl rounded-bl-none my-1": false,
    "bg-red-300 inline-block overflow-wrap p-2 shadow-md rounded-xl rounded-tr-none my-1": true
  });

  const alignmentStyle = classNames({
    "text-right": true,
    "text-left": false
  });

  return (
    <div className="flex-1 bg-stone-50 w-full h-full">
      {chats.length > 0 && <ul className="overflow-y-scroll  px-1 smooth-scroll w-full h-full">
        {chats.map((chat, index) => (
          <li className={alignmentStyle} key={index}>
            <p className={chatDropStyle}>{chat}</p>
          </li>
        ))}
      </ul>}
      {chats.length === 0 && <div className="flex justify-center items-center w-full h-full" ><h2 className="text-gray-500 text-opacity-70">No chats yet :-</h2></div>}
    </div>
  );
}

export default Chat;
