import Link from "next/link"
import Image from "next/image"
import logo from '../../public/logo.jpeg'
import { Web3Button } from "@web3modal/react";


function Navbar() {
  return (
    <nav className='flex justify-between py-10 px-8 items-center'>
          <div>
            <Image className='h-24 w-24' src={logo}/>
          </div>
          <div className='flex gap-20 ml-48 text-2xl'>
            <Link href='/'>Home</Link>
            <Link href='/events'>Events</Link>
            <Link href='/musicnfts'>Music NFTs</Link>
            <Link href='/'>Whitepaper</Link>
          </div>
             {/* <div className='mr-6'>Connect wallet</div> */}
            <Web3Button className='mr-6'/>
    </nav>

  )
}

export default Navbar