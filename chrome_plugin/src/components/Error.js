import React from 'react'
import {useStore} from '../hooks/store'

function Error() {
    const {error} = useStore()
    return (
    <div>
        {error && <div className="text-red-500 text-sm">{error}</div>}
    </div>
  )
}

export default Error
