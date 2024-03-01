import React from 'react'

function Input() {
  return (
    <div class="w-full pt-1">
      <form id="chat-form" class="flex w-full">
        <textarea type="text" placeholder='Type your message here...'
          class="flex-1 pl-2 shadow-xl appearance-none border-b-2 border-red-500 focus:outline-none focus:border-red-700 transition duration-300 ease-in-out"
          id="chat-input">
          </textarea>
        <button type="submit" class="bg-red-600 rounded text-white p-2" id="chat-send">
          <span>Send</span>
        </button>
      </form>
    </div>

  )
}

export default Input
