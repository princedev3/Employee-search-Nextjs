
"use client"
import toast from 'react-hot-toast';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'
import Search from './Search'
import { useRouter } from 'next/navigation'

const EachProfile = ({data,page,count}) => {
    
   const [newdata,setNewData] = useState([])
  

   
   
   
   useEffect(()=>{
     setNewData(data)
    },[data,page])
    
    const router = useRouter()

   const handleDelete= async(id)=>{
   try {
    const res = await fetch(`http://localhost:3000/api/getemployee/${id}`,{
      method: "DELETE"
    })
     if(!res.ok){
       throw new Error("can not delete user")
     }

     toast.success("user deleted")
     router.refresh()
   } catch (error) {
    console.log(error)
   }
   }

  return (
    <div className='bg-blue-500/5 w-full rounded-lg p-7'>
      <div className='mb-3'>
        <Search getSearchResult={results=>setNewData(results)} page={page} />
      </div>
      <div>
      {
        <table className='w-full p-4'>
        <tbody >
            <tr className='capitalize'>
                <th className='p-3 text-left '>image</th>
                <th className='p-3 text-left '>name</th>
                <th className='p-3 text-left'>email</th>
                <th className='p-3 text-left'>department</th>
            </tr>
            {
              newdata?.map(item=>(
                <tr key={item.id} className=' ' >
                <td className='p-3  text-left '><Image src={"/logo.png"} className='rounded-[50%] relative' width={25} height={25}/> </td>
                <td className='p-3 text-left  '>{item.name} </td>

                <td className={`p-3 text-left hidden md:flex`}>{item.email} </td>
                <div className='group relative md:hidden'>
                <td className={`p-3 text-left group-hover:hidden`}>{item.email.slice(0,10)}... </td>
                <td className={`p-3 absolute left-0 bg-white text-left hidden group-hover:flex`}>{item.email}</td>
                </div>
                <td className='p-3 text-left '>{item.department} </td>
                <td className='p-3 text-left '>
                <svg onClick={()=>handleDelete(item.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                 </svg>
                   </td>

            </tr>
              ) )
            }
        </tbody>
    </table>    
      }
      <Pagination page={page} count={count} />
      </div>
    </div>
  )
}

export default EachProfile