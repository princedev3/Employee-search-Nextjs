"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Pagination = ({page,count}) => {
    const router = useRouter()
    const POST_PER_PAGE = 4
    const hasPrev = POST_PER_PAGE * (page-1) >0
    const hasNext = POST_PER_PAGE * page >= count
  return (
    <div className='flex items-center justify-between'>
        <button className='bg-teal-700 p-2 rounded-md text-white font-semibold capitalize tracking-wide disabled:bg-teal-600 disabled:cursor-not-allowed' disabled={!hasPrev} onClick={()=>router.push(`?page=${page-1}`)}>previous</button>
        <button  className='bg-teal-700 p-2 rounded-md text-white font-semibold capitalize tracking-wide disabled:bg-teal-600 disabled:cursor-not-allowed' disabled={hasNext}  onClick={()=>router.push(`?page=${page+1}`)}>Next</button>
    </div>
  )
}

export default Pagination