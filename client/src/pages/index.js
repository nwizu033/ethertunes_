import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/logo.jpeg';
import chainideco from '../../public/chainideco.jpeg';
import bunzz from '../../public/bunzz.jpeg';
import web3Afrika from '../../public/web3afrika.jpeg';
import singer from '../../public/singer.jpeg';

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


        <div className='flex justify-between px-20'>
            <div>

                    <div className='blocks flex'>
                      <div className='border-2 bg-purple-500 h-10 w-10 mr-5 mt-5'></div>
                        <div>
                          <span className='block text-2xl'>DIVERSE MUSIC</span>
                          <span className='block text-2xl mb-3'>SELECTION</span>

                          <p className='tracking-wider'>Wide range of genre</p>
                          <span className='tracking-wider'>for every taste</span>
                        </div>
              
                    </div>

            <div className='blocks flex'>
                  <div className='border-2 bg-purple-500 h-10 w-10 mr-5 mt-5'></div>
                    <div>
                      <span className='block text-2xl'>DIVERSE MUSIC</span>
                      <span className='block text-2xl mb-3'>SELECTION</span>

                      <p className='tracking-wider'>Wide range of genre</p>
                      <span className='tracking-wider'>for every taste</span>
                    </div>
                  
            </div>

            <div className='blocks flex'>
                  <div className='border-2 bg-purple-500 h-10 w-10 mr-5 mt-5'></div>
                    <div>
                      <span className='block text-2xl'>DIVERSE MUSIC</span>
                      <span className='block text-2xl mb-3'>SELECTION</span>

                      <p className='tracking-wider'>Wide range of genre</p>
                      <span className='tracking-wider'>for every taste</span>
                    </div>
                  
            </div>
            </div>

    

          <div className='flex items-center'>
                <div>
                    <Image src={logo} width={300} height={300}/>
                </div>
          </div>
          
          <div>
            <div>
              <div className='blocks flex'>
              <div className='border-2 bg-purple-500 h-10 w-10 mr-5 mt-5'></div>
                <div>
                  <span className='block text-2xl'>DIVERSE MUSIC</span>
                  <span className='block text-2xl mb-3'>SELECTION</span>

                  <p className='tracking-wider'>Wide range of genre</p>
                  <span className='tracking-wider'>for every taste</span>
                </div>
              
              
              </div>

              <div className='blocks flex'>
              <div className='border-2 bg-purple-500 h-10 w-10 mr-5 mt-5'></div>
                <div>
                  <span className='block text-2xl'>DIVERSE MUSIC</span>
                  <span className='block text-2xl mb-3'>SELECTION</span>

                  <p className='tracking-wider'>Wide range of genre</p>
                  <span className='tracking-wider'>for every taste</span>
                </div>
      
              </div>

              <div className='blocks flex'>
              <div className='border-2 bg-purple-500 h-10 w-10 mr-5 mt-5'></div>
                <div>
                  <span className='block text-2xl'>DIVERSE MUSIC</span>
                  <span className='block text-2xl mb-3'>SELECTION</span>

                  <p className='tracking-wider'>Wide range of genre</p>
                  <span className='tracking-wider'>for every taste</span>
                </div>
            </div>
          </div>
        </div>
        </div>

        <div className='flex px-10'>
          <div>
            <Image src={singer}/>
          </div>
          <div>
            <h2>ARE YOU AN ARTIST?</h2>
            <span>UPLOAD YOUR</span>
            <span>SONGS</span>

            
          </div>
        </div>
        <div>List Events</div>
        <div>Upcoming Events</div>
        <div>Top songs</div>
        <div>Top songs</div>

    </main>
  )
}
