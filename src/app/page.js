import Profile from '@/components/Profile'
import Image from 'next/image'

export default function Home({searchParams}) {
  const page = parseInt(searchParams.page) || 1
  

  return (
    <main className="sm:mx-auto w-full   mt-5">
          <Profile page={page}  />
    </main>
  )
}
