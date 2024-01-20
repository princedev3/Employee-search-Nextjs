
import React from 'react'
import EachProfile from './EachProfile'


const getData = async(page)=>{
    const data = await fetch(`http://localhost:3000/api/getemployee?page=${page} `,{
        cache:"no-store"
    })
    return data.json()
}
const Profile = async({page}) => {
  
    const {post,count} = await getData(page)

   
       
  return (
    <div className='w-full'>
        <EachProfile data={post} page={page} count={count} />  
    </div>
  )
}

export default Profile