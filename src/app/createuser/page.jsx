"use client"
import React, { useEffect, useState } from 'react'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from '@/utils/firebase';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const CreateUser = () => {
  const  router = useRouter()
  const storage = getStorage(app);
  const[file,setFile] = useState(null)
  const[name,setName]= useState("")
  const[email,setEmail]= useState("")
  const[media,setMedia]= useState("")
  const[department,setDepartment]=useState("")
  
  const[error,setError]= useState(false)
 
  
  // console.log(name)
  // console.log(email)
   // console.log(media)
  // console.log(department)

 

  useEffect(()=>{
    const upload = ()=>{

        const name = new Date().getTime + file.name
        const storageRef = ref(storage, name);

        const uploadTask = uploadBytesResumable(storageRef, file);


        uploadTask.on('state_changed', 
        (snapshot) => {
         
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        }, 
        (error) => {
        
        }, 
        () => {
          
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia( downloadURL);
          });
        }
        );
        
          }
          file && upload()
},[file])

const handleSubmit = async(e)=>{
  e.preventDefault()
  try {
    if(!name || !email || !department){
      setError(true)
      return
    }
    const res = await fetch("http://localhost:3000/api/createuser",{
      method:"POST",
      body:JSON.stringify({name,email,image:media,department})
    })
    if(!res.ok){
      throw new Error("can not creat post check process")
    }

    toast.success("employee created")
    setName("")
    setEmail("")
    setFile(null)
    router.refresh()
    return res.json()
  } catch (error) {
    throw new Error("can not create post")
  }
}
  return (
    <div className='flex items-center justify-center mt-9 p-2 flex-col'>
        <h3 className='mb-3 text-xl'>create new employee</h3>

        <form action="" onSubmit={handleSubmit} className='flex flex-col gap-3 p-4 w-[400px] '>
            <input onChange={(e)=>setName(e.target.value)}  type="text"  placeholder='name' className='p-3  focus:outline-1 focus:bg-black/5 focus:font-semibold focus:outline-slate-200 placeholder:tracking-wide rounded-md' />
            <input onChange={(e)=>setEmail(e.target.value)}  type="text" placeholder='email' className='p-3  focus:bg-black/5 focus:font-semibold  focus:outline-1 focus:outline-slate-200 placeholder:tracking-wide rounded-md' />
            <select onChange={(e)=>setDepartment(e.target.value)} name="" id="" className='p-3 focus:bg-black/5 focus:outline-1 focus:outline-slate-200'>
              <option  value="">select department</option>
              <option value="Administration">Administration</option>
              <option value="Engineering">Engineering</option>
              <option value="Production">Production</option>
            </select>
            <div>
              <input type="file" id='image' onChange={e=>setFile(e.target.files[0])} style={{display:"none"}}/>
              <label htmlFor="image" className='flex items-center gap-1'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
                <p>upload</p>
              </label>
            </div>
            <button  type='submit' className='bg-black/5 p-3 rounded-md font-semibold uppercase tracking-wide' >submit</button>
              {error && <p className='text-red-500'>fill form correclty</p>}
        </form>
    </div>
  )
}

export default CreateUser
