import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/logo.jpeg';
import chainideco from '../../public/chainideco.jpeg';
import bunzz from '../../public/bunzz.jpeg';
import web3Afrika from '../../public/web3afrika.jpeg';

export default function Home() {
  return (
    <main>
         <div className='flex justify-between  mt-40'>
          <div className='px-10'>
            <h1 className='text-8xl mt-32'>EtherTunes</h1>
            <span className='block text-2xl py-4 tracking-wider'>Audio/Video Streaming, Music NFT</span>
            <span className=' block text-2xl tracking-wider'>Marketplace, SocialFi.</span>
            <button className='border-2 border-white-200 bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded mt-4 text-2xl w-48'>Discover</button>
          </div>
          <div className='w-full flex justify-center items-start'>
            <div className='ml-32'>
               <Image src={logo} height={470}/>
            </div>
           
          </div>
        </div>


        <div className='mt-36'>
          <div className=' flex justify-center uppercase text-2xl'>Partners</div>
          <div className='flex my-8 items-center justify-around'>
            <div className='md:w-40 w-20'>
                <Image src={bunzz} height={200} width={200}/>
            </div>
            <div className='md:w-40 w-20'>
               <Image src={chainideco} height={200} width={200}/>
            </div>
            <div className='md:w-40 w-20'>
              <Image src={web3Afrika} height={200} width={200}/>
            </div>
          </div>
        </div>


        <div>
          <div>
            <div className='blocks'>
              <span>DIVERSE MUSIC</span>
              <span className='block'>SELECTION</span>

              <p>Wide range of genre</p>
              <span>for every taste</span>
            </div>

            <div className='blocks'>
              <span>HIGH-QUALITY</span>
                <span className='block'>AUDIO</span>

                <p>Superio sound quality</p>
                <span>for exceptional</span>
                <span>listening</span>
            </div>

            <div className='blocks'>
            <span>TRANSPARENT</span>
                <span className='block'>ROYALTIES</span>

                <p>Fair and transparent</p>
                <span>compensation for</span>
                <span>artists</span>
            </div>
          </div>
          <div>center</div>
          <div>right</div>
        </div>
        <div>Upload music</div>
        <div>List Events</div>
        <div>Upcoming Events</div>
        <div>Top songs</div>
        <div>Top songs</div>

    </main>
  )
}
