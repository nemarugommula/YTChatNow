import React from 'react'
import { useStore } from '../hooks/store'
function Chat() {
  const { chats } = useStore()
  return (
    <div class="flex-1 w-full h-full">
      <ul class=" overflow-y-scroll smooth-scroll w-full h-full" >
        {
          chats.map((chat, index)=> 
            <li key={index}>
              <p class="bg-red-100 inline-block overflow-wrap p-2 rounded-xl rounded-bl-none my-1">{chat}</p>
          </li>)
        }
        {(chats.length==0) && <li class="text-center text-gray-500 text-opacity-70">No chats yet</li>}
      </ul>
    </div>
  )
}
export default Chat
