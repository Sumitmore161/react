import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

function Github() {
  const data = useLoaderData();

  // const [data,setData] = useState([]);

  // useEffect(()=>{
  //     fetch(`https://api.github.com/users/hiteshchoudhary`).
  //     then((response)=> response.json()).
  //     then((data)=>{
  //       console.log(data);
  //       setData(data);
  //     },[])
  // },[])
  return (
    <div className='bg-purple-950 text-amber-400 p-4 text-3xl text-center flex flex-col items-center sm:p-12'>Github Followers : {data.followers}
    <img src={data.avatar_url} alt="Git Picture" width={300} className='object-center' />
    </div>
  )
}
export default Github

