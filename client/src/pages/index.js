import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/logo.jpeg';
import chainideco from '../../public/chainideco.jpeg';
import bunzz from '../../public/bunzz.jpeg';
import web3Afrika from '../../public/web3afrika.jpeg';
import singer from '../../public/singer.jpeg';
import stage from '../../public/stage.jpg';

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

        <div className='flex px-10 mt-36 items-center gap-24'>
          <div>
            <Image src={singer} height={650} width={650}/>
          </div>
          <div>
            <h2 className='text-2xl'>ARE YOU AN ARTIST?</h2>
            <span className='text-7xl'>UPLOAD YOUR</span>
            <span className='block text-7xl'>SONGS</span>
            <span className='block text-2xl mt-8'>We provide a level playing field, allowing emerging</span>
            <span className='block text-2xl mt-2'>artists to compete with established musicians</span>

            <button className='mt-8'>Sign Up As An Artist</button>
          </div>
        </div>

        <div className='flex px-10 mt-36 items-center gap-24'>
            <div>
                <h2 className='text-2xl'>YOU'VE GOT AN EVENT</h2>
                <span className='text-7xl'>LIST YOUR</span>
                <span className='block text-7xl'>EVENTS</span>

                <span className='block text-2xl mt-8'>We provide a platform for event organizers to promote</span>
                <span className='block text-2xl mt-2'>their events to a wider audience within the web3</span>
                <span className='block text-2xl mt-2' >ecosystem.</span>

                <button className='mt-8'>List Event</button>
            </div>
            <div>
                <div>
                   <Image src={stage} height={650} width={650}/>
                </div>
            </div>
        </div>
        <div className='mt-20'>
            <div className='flex justify-center text-5xl'>UPCOMING EVENTS</div>
            <div className='border-2 border-white'>
              <div>
                <span className='block'>Theme</span>
                <span className='block'>Event ID</span>
                <span className='block'>Reg fee(ETH)</span>
                <span className='block'>Reg fee(ETT)</span>
                <span className='block'>Max Attendees</span>
                <span className='block'>End Time</span>

              </div>
            </div>
        </div>

        <div className='mt-20'>
            <div className='flex justify-center text-5xl'>TOP SONGS</div>
            <div className='border-2 border-white'>
              <div>
                <span className='block'>Theme</span>
                <span className='block'>Event ID</span>
                <span className='block'>Reg fee(ETH)</span>
                <span className='block'>Reg fee(ETT)</span>
                <span className='block'>Max Attendees</span>
                <span className='block'>End Time</span>

              </div>
            </div>
        </div>

    </main>
  )
}
