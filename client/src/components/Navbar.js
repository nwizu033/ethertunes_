import Link from "next/link"
import Image from "next/image"
import logo from '../../public/logo.jpeg'
import { Web3Button } from "@web3modal/react";
import { FiMenu } from 'react-icons/fi';
import { useState } from "react";


function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className=" py-5">
      <div className='flex justify-between items-center xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full'>
            <div>
              <Image src={logo} width={100} height={55}/>
            </div>
          
            <FiMenu onClick={() => setOpen(!open)} className="h-8 w-8 lg:hidden items-center cursor-pointer"/>
            
            <nav className={`${open? "block" :"hidden"} lg:flex lg:items-center lg:w-auto w-full`}>
            
            <ul className='text-2xl lg:flex lg:justify-between items-center'>
              <li><Link href='/' className="lg:px-5 font-semibold hover:text-purple-600">Home</Link></li>
              <li><Link href='/events' className="lg:px-5 font-semibold  hover:text-purple-600">Events</Link></li>
              <li><Link href='/musicnfts' className="lg:px-5 font-semibold  hover:text-purple-600">Music NFTs</Link></li>
              <li><Link href='https://app.gitbook.com/o/J7nKfvAEzUPYMvNtA9SZ/s/brRSxa7KCLGS9NIyw8lx/start-here/what-is-ethertunes' className="lg:px-5 font-semibold  hover:text-purple-600">Whitepaper</Link></li>
             <li className="lg:ml-10"><Web3Button/></li>
            </ul>
            </nav>
    
              
      </div>
   </div>
  )
}

export default Navbar