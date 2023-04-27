import { useState} from 'react';
import { useSigner } from 'wagmi';
import axios from 'axios';
import { ethers } from 'ethers';
import abi from '../utils/abi.json';
function list_event() {

const pinataApiKey = 'da794c3569d209b4ecba';
const pinataSecretApiKey = '95c09ea930ff4abe7e341565f499c6580633648ea589cf23eee5b43c10e2191c';

const [image, setImage] = useState();
const [eventName, setEventName] = useState();
const [eventDesc, setEventDesc] = useState();
const [newHash, setNewHash] = useState();
const { data: signer, isError, isLoading } = useSigner();

const [theme, setTheme] = useState();
const [endTime, setEndTime] = useState();
const [regfeeEth, setRegFeeEth] = useState();
const [regfeeETT, setRegFeeETT] = useState();
const [maxAttendees, setMaxAttendees] = useState();
const [tokenUri, setTokenUri] = useState();

const [eventList, setEventList] = useState([]);
const contractAddress = "0xAF349aCa502721695616722647eA2384Eb05c7eD";

// first upload functions
const metadatas = {
    name: eventName,
    description: eventDesc
  }
  
  async function pinFileToIPFS() {
  
      const url = 'https://api.pinata.cloud/pinning/pinFileToIPFS';
      const formData = new FormData();
      formData.append('file',image);
      formData.append('pinataMetadata', JSON.stringify(metadatas));
      
      const { data } = await axios.post(url, formData, {
          maxContentLength: 'Infinity',
          headers: {
              'Content-Type': 'multipart/form-data; boundary=${formData._boundary}',
              'pinata_api_key' : pinataApiKey,
              'pinata_secret_api_key' : pinataSecretApiKey
          }
      });
  
      return data;
  }
  
  async function uploadJson(e) {
  
        const metadata = {
          name: eventName,
          description: eventDesc,
          image: `ipfs://${e}`
        };
  
          var config = {
            method: 'post',
            url: 'https://api.pinata.cloud/pinning/pinJSONToIPFS',
            headers: { 
              'Content-Type': 'application/json', 
              'pinata_api_key' : pinataApiKey,
              'pinata_secret_api_key' : pinataSecretApiKey
            },
            data : metadata
          };
    
    
        const res = await axios(config);
        
        console.log(res.data.IpfsHash);
        setNewHash(res.data.IpfsHash);
    
  
        }
  
  async function upload() {
          try{
              const photo = await pinFileToIPFS();
              await uploadJson(photo.IpfsHash);
          }
          catch(error){
              console.error(error);
          }
      }

    const createEvents = async () => {
		if (signer) {
			const contract = new ethers.Contract(contractAddress, abi, signer);
			const listing = await contract.listEvent(
				theme,
				endTime,
				ethers.utils.parseUnits(regfeeEth, 18),
				ethers.utils.parseUnits(regfeeETT, 18),
				maxAttendees,
				tokenUri
			);
			await listing.wait();
			alert(`event listed:  ${listing.hash}`);
			// console.log(EventList);
		} else {
			alert("Please connect wallet");
		}
	};

  return (
    <div>
        <div className='flex-col justify-center mt-20'>
            <div className='text-center text-3xl'>UPLOAD IMAGE</div>
            <div className=' w-full px-44'>
                <input className=' w-full block mt-5 px-8 py-4 rounded-md text-black text-2xl' onChange={(e)=> {setEventName(e.target.value)}} type='text' placeholder='Name of event'/> 
                <input className=' w-full block mt-5 px-8 py-4 rounded-md text-black text-2xl' onChange={(e)=> setEventDesc(e.target.value)} type='text' placeholder='Description of event'/> 
                <input className=' w-full block mt-5' onChange={(e)=> setImage(e.target.files[0])} type='file'/> <br/> <br/>
                <button className='w-full block px-8 py-4 rounded-md border-2 text-2xl' onClick={upload}>Upload Image first</button>
                <h3 className='mt-4'>Token URI: {`ipfs://${newHash}`}</h3>
            </div>
        </div>

        <div className='flex-col justify-center mt-20'>
             <div className='text-center text-3xl'>LIST EVENT</div>
            <div className='w-full px-44'>
            <input className=' w-full block mt-5 px-8 py-4 rounded-md text-black text-2xl' onChange={(e)=> setTheme(e.target.value)} type='text' placeholder='theme of event'/> 
            <input className=' w-full block mt-5 px-8 py-4 rounded-md text-black text-2xl' onChange={(e)=> setEndTime(e.target.value)}  type='number' placeholder='end time in minutes'/> 
            <input className=' w-full block mt-5 px-8 py-4 rounded-md text-black text-2xl' onChange={(e)=> setRegFeeEth(e.target.value)} type='number' placeholder='reg fee in Ether'/> 
            <input className=' w-full block mt-5 px-8 py-4 rounded-md text-black text-2xl' onChange={(e)=> setRegFeeETT(e.target.value)} type='number' placeholder='reg fee in $ETT'/> 
            <input className=' w-full block mt-5 px-8 py-4 rounded-md text-black text-2xl' onChange={(e)=> setMaxAttendees(e.target.value)} type='number' placeholder='max attendees'/> 
            <input className=' w-full block mt-5 px-8 py-4 rounded-md text-black text-2xl' onChange={(e)=> setTokenUri(e.target.value)} type='text' placeholder='Token URI copied above'/> 
            <button className='w-full block px-8 py-4 rounded-md border-2 mt-16 text-2xl' onClick={createEvents}>List event</button>
            </div>
        </div>

        
    </div>
  )
}

export default list_event;