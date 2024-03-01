import React from 'react'
import { useStore } from '../hooks/store'
import { FiYoutube } from "react-icons/fi";
function Header() {
  const { title, error } = useStore()
  if (error) {
    return (<div class="flex pt-2 justify-center justify-items-center">
      <h2 class="bg-red-300 w-11/12 text-white text-center px-4 py-1 rounded-full" >Error</h2>
    </div>)

  }
  return (
    <div class="flex  bg-transparent pt-2 justify-center justify-items-center">
      <div class="flex items-center  gap-2 bg-gray-950 w-11/12 text-white px-4 py-1 rounded-full" >
      <FiYoutube size={50} />
          {title}
      </div>
    </div>
  )
}

export default Header
