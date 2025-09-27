import React from 'react'
import { useParams } from 'react-router';
import '../../index.css'

function User() {
    const {userId} = useParams();
  return (
    <div className='flex items-center justify-center text-center text-2xl h-[60vh]'>User : {userId} </div>
  )
}

export default User