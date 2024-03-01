import React from 'react'
import { useStore } from '../hooks/store'
function Header() {
  const { title } = useStore()
  return (
    <div class="flex  justify-center justify-items-center">
      <h2 class="bg-gray-950 text-white p-2 rounded-xl" >{title}</h2>
    </div>
  )
}

export default Header
