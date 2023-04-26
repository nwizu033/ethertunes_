import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/logo.jpeg';

export default function Home() {
  return (
    <main>
         <div className='flex justify-between px-10 mt-32'>
          <div>
            <h1 className='text-8xl'>EtherTunes</h1>
            <span className='block text-2xl py-4 tracking-wider'>Audio/Video Streaming, Music NFT</span>
            <span className=' block text-2xl tracking-wider'>Marketplace, SocialFi.</span>
            <button className='border-2 border-white-200 bg-gradient-to-r from-blue-500 to-purple-500'>Discover</button>
          </div>
          <div className='w-full flex justify-center items-center'>
            <Image src={logo}/>
          </div>
        </div>
        <div>partnersfs</div>
        <div>Why choose us</div>
        <div>Upload music</div>
        <div>List Events</div>
        <div>Upcoming Events</div>
        <div>Top songs</div>
        <div>Top songs</div>

    </main>
  )
}
