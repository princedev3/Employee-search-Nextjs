import prisma from "@/utils/connect"
import { NextResponse } from "next/server"


export const DELETE = async (req,{params})=>{
   const {id} = await params
  
    try {
        const deleted = await prisma.user.delete({
            where: {
              id
            },
          })
          return new NextResponse(JSON.stringify("post deleted"))
    } catch (error) {
        console.log(error)
    }
}