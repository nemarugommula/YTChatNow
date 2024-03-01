import React from 'react'
import { useStore } from '../hooks/store'

function Error() {
  const { error } = useStore()
  return (
    <div className="bg-stone-50 w-60 h-80 flex justify-center items-center">
        <h1 class="text-red">{error}</h1>
    </div>
  )
}

export default Error
