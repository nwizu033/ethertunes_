import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import abi from '../utils/abi.json';
import { useSigner } from "wagmi";

function musicnfts() {
	const [musicList, setMusicList] = useState([]);
  const contractAddress = "0xAF349aCa502721695616722647eA2384Eb05c7eD";
  const { data: signer, isError, isLoading } = useSigner();
  const [showMusicModal, setShowMusicModdal] = useState(false);

  useEffect(() => {

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
			seeMusic();
      setShowMusicModdal(false);
		}
	}, [signer]);
  return (
    <div>
        <div className='mt-20'>
            <div className='flex justify-center text-5xl mb-10'>ALL SONGS</div>
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
                  <div className='flex-col absolute justify-center items-center text-black'>
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
    </div>
  )
}

export default musicnfts