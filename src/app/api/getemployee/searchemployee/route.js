import prisma from "@/utils/connect"
import { NextResponse } from "next/server"

export const GET = async (req)=>{
    const {searchParams} = new URL(req.url)
    
    const search = searchParams.get("search")
    
    
    try {
        const post= await prisma.user.findMany()
        
          
        const fiter = post.filter(item=>(item.name.toLowerCase().includes(search.toLowerCase())))
         
        return new NextResponse(JSON.stringify(fiter),{status:200})
    } catch (error) {
        return new NextResponse(JSON.stringify({message:"can not get all employees"}))
    }
}