"use client"
import React, { useState } from 'react'

const Search = ({getSearchResult}) => {

   const [values,setValues]=useState("")

     const handleSubmit= async (e)=>{
            e.preventDefault()
        
            const data = await fetch(`http://localhost:3000/api/getemployee/searchemployee?search=${values}`,{
                cache:"no-store"
            })
            const res = await data.json()
            getSearchResult(res)
        }
  return (
    <div>
          <form action=""  className='w-full  flex items-center bg-black/10   z-20  focus:outline-1 focus:outline-gray-200  rounded-l-2xl relative '>
                            <input onChange={e=>setValues(e.target.value)} type="text" className='w-full font-semibold b focus:outline-1 focus:outline-gray-200  rounded-l-2xl text-xl p-2 bg-transparent '/>
                            <svg onClick={handleSubmit}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 font-extrabold absolute right-2 text-white ">
                         <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                          </svg>

                          {/* <div class="group">

  <p class="text-overflow-ellipsis overflow-ellipsis group-hover:overflow-visible">
    Your long text goes here...
  </p>


  <p class="hidden group-hover:block absolute top-0 left-0 bg-white p-4">
    Your long text goes here...
  </p>
</div> */}
              </form>
    </div>
  )
}

export default Search