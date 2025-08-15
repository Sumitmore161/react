import React from 'react'
import { useParams } from 'react-router'
function User() {
    const {userid} = useParams();
  return (
    <div className='text-center bg-emerald-700 text-4xl sm:p-12 p-4 text-amber-400'>User : {userid}</div>
  )
}

export default User