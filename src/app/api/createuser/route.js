import prisma from "@/utils/connect"
import { NextResponse } from "next/server"


export const POST = async(req)=>{
    const postuser = await req.json()
    try {
        const post = await prisma.user.create({
                data:{...postuser}
        })
        return new NextResponse(JSON.stringify(post),{status:200})
    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify({message:"can not create post"}))
    }
}