"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

const Navbar = () => {
    const user = true
   

        const router = useRouter()

       
      
    //     useEffect(()=>{
    //             router.push(`?search=${values}`)
    //     },[values])
    // const handleSubmit= async (e)=>{
    //     e.preventDefault()
    
    //     const data = await fetch(`http://localhost:3000/api/getemployee?search=${values} `,{
    //         cache:"no-store"
    //     })
    // }
  return (
    <div className='h-[70px] bg-slate-50 w-full mx-auto  flex justify-around  items-center  relative'>
        <div className='flex justify-around  w-[100%] items-center'>
                <div className=''>
                    <h2 className={` tracking-widest font-semibold text-xl`} >
                        <Link href={"/"}>
                        FlourMill
                        </Link>
                    </h2>  
                </div>
                <div className='flex  items-center '>
                    {
                        user? (
                            <div className='group relative'>
                                <div className='flex items-center'>
                                    <h3>Admin</h3>
                                    <Image src={"/logo.png"} width={30} height={30} alt='' className='object-cover'/>
                                </div>
                                <Link href={"/createuser"} className='hidden group-hover:block absolute  font-semibold bg-slate-50 w-[150px] p-4  '>create user</Link>
                            </div>
                        ):<div>
                            <h1>not an admin</h1>
                        </div>
                    }
                    <div className='ml-2'>
                         
                        <div className={` absolute left-3  w-[400px] top-[15px] `}>
                           
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Navbar