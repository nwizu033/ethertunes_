import Image from 'next/image'
import { ethers } from 'ethers';
import abi from '../utils/abi.json';
import Link from 'next/link'
import logo from '../../public/logo.jpeg';
import chainideco from '../../public/chainideco.jpeg';
import bunzz from '../../public/bunzz.jpeg';
import web3Afrika from '../../public/web3afrika.jpeg';
import singer from '../../public/singer.jpeg';
import stage from '../../public/stage.jpg';
import { useEffect, useState } from 'react';
import { useSigner } from "wagmi";

export default function Home() {
  const [eventList, setEventList] = useState([]);
	const [musicList, setMusicList] = useState([]);
	const contractAddress = "0xAF349aCa502721695616722647eA2384Eb05c7eD";
  const { data: signer, isError, isLoading } = useSigner();
  const [showModal, setShowModdal] = useState(false);
  const [showMusicModal, setShowMusicModdal] = useState(false);
  const date = (timeStamp) => {
    let dateFormat = new Date(timeStamp);
    return (dateFormat.getDate()+
    '/' + (dateFormat.getMonth()+1)+
    '/' + dateFormat.getFullYear()+
    ' ' + dateFormat.getHours()+
    ':' + dateFormat.getMinutes()+
    ':' + dateFormat.getSeconds()
    );

}
  useEffect(() => {
		const seeEvents = async () => {
			if (signer) {
				const contract = new ethers.Contract(contractAddress, abi, signer);
				const eventResult = await contract.seeEvents();
				setEventList(eventResult);
				console.log(eventResult);
			} else {
				alert("Please connect wallet");
			}
		};

		const seeMusic = async () => {
			if (signer) {
				const contract = new ethers.Contract(contractAddress, abi, signer);
				const musicResult = await contract.seeMusics();
				setMusicList(musicResult);
				console.log(musicResult);
			} else {
				alert("Please connect wallet");
			}
		};

		if (signer) {
			seeEvents();
			seeMusic();
      setShowModdal(false);
      setShowMusicModdal(false);
		}
	}, [signer]);



  return (
    <main>
         <div className='flex justify-between xl:max-w-7xl mt-20'>
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

        <div className='text-center text-7xl mt-24 mb-16 tracking-wider'>WHY CHOOSE US</div>
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

            <Link href='/list_music'> <span className='block border-2 px-5 text-2xl mt-12 w-fit text-center rounded-md'>Sign Up As An Artist</span></Link>
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

                <Link href='/list_event'> <span className=' block border-2 px-5 text-2xl mt-12 w-40 text-center rounded-md'>List Event</span></Link>
            </div>
            <div>
                <div>
                   <Image src={stage} height={650} width={650}/>
                </div>
            </div>
        </div>
        <div className='mt-20'>
            <div className='flex justify-center text-5xl mb-16'>UPCOMING EVENTS</div>
            <div className='grid md:grid-cols-3 gap-10 '>
              {
                eventList?.map((res) =>(
                  <div className='border-4 border-white rounded-2xl py-4 px-4 shadow-md' key={res.eventId}>
                  <span className='block text-3xl text-center my-4 uppercase'>{res.theme}</span>
                  <span className='block text-2xl'>Event ID: {(res.eventId).toString()}</span>
                  <span className='block mt-2 text-2xl'>Reg fee(ETH): {((res.registrationFeeEther)/1e18).toString()} ETH</span>
                  <span className='block mt-2 text-2xl'>Reg fee(ETT): {((res.registrationFeeToken)/1e18).toString()} $ETT</span>
                  <span className='block mt-2 text-2xl'>Max Attendees: {(res.maxAttendees).toString()}</span>
                  <span className='block mt-2 text-2xl'>Current Registrants: {(res.currentRegistrants).toString()}</span>
                  <span className='block mt-2 text-1xl'>End Time: {(date(res.endTime * 1000))}</span>
                  <span className='block border-2 w-36 text-center text-2xl mt-8 rounded-md cursor-pointer mb-10' onClick={(e)=>setShowModdal(true)}>Buy Ticket</span>
                </div>
                ))
              }

          {showModal? (
                  <div className='fixed inset-0 bg-slate-300 bg-opacity-25 backdrop-blur-sm flex justify-center items-center text-black'>
                  <div className='bg-white lg:w-[600px] rounded-md z-10'>
                    <div className='flex justify-end'>
                    <span onClick={()=> setShowModdal(false)} className='block mr-5 cursor-pointer mb-6'>X</span>
                    </div>
                    <div className='text-2xl flex justify-center font-semibold'>BUY TICKET</div>
                      <div className='flex justify-center'>
                        <input className='rounded-md text-center border-black border-2 w-full mx-[8%] py-2' type='number' placeholder='Event ID' />
                      </div>
              
                      <div className='mt-4 flex w-full px-6 mb-8 justify-around'>
                         <span className='border-2 rounded-md cursor-pointer px-5 py-4 bg-blue-500'>Buy with Ether</span>
                         <span className='border-2 rounded-md cursor-pointer px-5 py-4 bg-purple-500'>Buy with Token</span>
                      </div>

                            
                  </div>
                  </div>
              ) : null}
 
            </div>
        </div>

        <div className='mt-24'>
            <div className='flex justify-center text-5xl mb-10'>TOP SONGS</div>
            <div className=' grid grid-cols-3 gap-10 relative'>
            {
                musicList?.map((res) =>(
                  <div className='border-4 border-white rounded-2xl py-4 px-4 shadow-md' key={res.musicId}>
                  <span className='block text-3xl text-center my-4 uppercase'>{res.title}</span>
                  <span className='block text-3xl text-center mt-4 uppercase mb-6'>({res.artist})</span>
                  <span className='block text-2xl'>Music ID: {(res.musicId).toString()}</span>
                  <span className='block mt-2 text-2xl'>Price(ETH): {((res.etherPrice)/1e18).toString()} ETH</span>
                  <span className='block mt-2 text-2xl'>Price(ETT): {((res.tokenPrice)/1e18).toString()} $ETT</span>
                  <span className='block mt-2 text-2xl'>Downloads: {(res.buyers).toString()}</span>
                  <span className='block border-2 w-36 text-center text-2xl mt-8 rounded-md cursor-pointer mb-10' onClick={(e)=>setShowMusicModdal(true)}>Buy Music</span>
                </div>
                ))
              }


            {showMusicModal? (
                  <div className='flex absolute justify-center items-center text-black'>
                  <div className='bg-red-400 opacity-70 w-80 rounded-md z-50'>
                    <div className='flex justify-end'>
                    <span onClick={()=> setShowMusicModdal(false)} className='mr-5 mt-2 cursor-pointer'>X</span>
                    </div>
                      <div className='flex justify-center'>
                        <input className='rounded-md text-center' type='number' placeholder='Event ID' />
                      </div>
              
                      <div className='mt-4 flex-col gap-10 w-full px-6 mb-8'>
                         <span className='border-2 rounded-md cursor-pointer'>Buy with Ether</span>
                         <span className='border-2 rounded-md cursor-pointer'>Buy with Token</span>
                      </div>

                            
                  </div>
                  </div>
              ) : null}
            </div>
        </div>

    </main>
  )
}
