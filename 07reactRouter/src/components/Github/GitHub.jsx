import React, { useEffect, useState } from 'react'
import '../../index.css'
import { useLoaderData } from 'react-router'

function GitHub() {
    const data = useLoaderData();

  return (
    <div className='flex items-center justify-evenly gap-5 h-[60vh] text-2xl font-bold'>
    <img src={data.avatar_url} alt="Git Pitcure" width={400} />
    <div className='flex flex-col gap-5 font-bold text-2xl'>
    <div className=' '>GitHub login : {data.login}</div>
    <div className=' '>GitHub Followers : {data.followers}</div>
    </div>
    </div>
  )
}

export default GitHub;

export const githubInfo = async () => {
    const response = await fetch('https://api.github.com/users/InsaneMiracle')
    return response.json();
}