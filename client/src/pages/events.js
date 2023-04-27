import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import abi from '../utils/abi.json';
import { useSigner } from "wagmi";

function events() {
  const [eventList, setEventList] = useState([]);
  const contractAddress = "0xAF349aCa502721695616722647eA2384Eb05c7eD";
  const { data: signer, isError, isLoading } = useSigner();
  const [showModal, setShowModdal] = useState(false);

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
  
      if (signer) {
        seeEvents();
        setShowModdal(false);
      }
    }, [signer]);


  return (
    <div>
           <div className='mt-20'>
            <div className='flex justify-center text-5xl mb-16'>ALL EVENTS</div>
            <div className='grid md:grid-cols-3 gap-10 '>
              {
                eventList?.map((res) =>(
                  <div className='border-4 border-white rounded-2xl py-4 px-4 shadow-md relative' key={res.eventId}>
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
                  <div className='flex-col absolute justify-center items-center text-black'>
                  <div className='bg-slate-400 opacity-70 w-80 rounded-md z-50'>
                    <div className='flex justify-end'>
                    <span onClick={()=> setShowModdal(false)} className='mr-5 mt-2 cursor-pointer'>X</span>
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

export default events