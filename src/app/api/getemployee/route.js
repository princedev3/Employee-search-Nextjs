import prisma from "@/utils/connect"
import { NextResponse } from "next/server"

export const GET = async (req)=>{
    const {searchParams} = new URL(req.url)
    const page = searchParams.get("page")

  
   
    const POST_PER_PAGE = 4
    
    const query = {  
        take:POST_PER_PAGE,
        skip:POST_PER_PAGE*(page-1)
    }

    try {
        const [post,count] = await prisma.$transaction([
            prisma.user.findMany(query),
            prisma.user.count()
        ]
        )
        return new NextResponse(JSON.stringify({post,count}),{status:200})
    } catch (error) {
        return new NextResponse(JSON.stringify({message:"can not get all employees"}))
    }
}