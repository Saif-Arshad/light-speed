import React from 'react';
import Headerimg from '../wifi-signal-svgrepo-com.svg'
import Image from 'next/image';
import Link from 'next/link';
export default function Nav() {
  return (
    <div>
      <header className="text-gray-700 bg-white body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href={"/"} className="flex title-font font-medium items-center text-black mb-4 md:mb-0">
    <Image
        src={Headerimg}
        alt='wifi'
        height={40}
        />
            <span className="ml-3 text-xl">LightSpeed</span>
        </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 cursor-pointer hover:text-black">Home</Link>
            <Link href={"/about"} className="mr-5 cursor-pointer hover:text-black">About</Link>
            <Link href={"/pricing"} className="mr-5 cursor-pointer hover:text-black">Pricing</Link>
            <Link href={"/working"} className="mr-5 cursor-pointer hover:text-black">How it work</Link>
            <Link href={"/contact"} className="mr-5 cursor-pointer hover:text-black">Contact</Link>
 
          </nav>
        </div>
      </header>
    </div>
  );
}
