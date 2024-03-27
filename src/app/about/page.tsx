import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Heroimg from '../../../Public/Images/4K & Vector Satellite Clipart in Chiaroscuro Art Style.jpeg'

export default function page() {
  return (
    <div>
          <section className="bg-white">
    <div className="grid max-w-screen-xl px-4 py-9 mx-auto lg:gap-8 xl:gap-0 lg:py-4 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black">2X Faster Internet</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Developing Innovative solution to provide low cost internet to everywhere in the world. The cost is very less than other gient brands and even we provide internet to most remote location</p>
            <Link href="/contact" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
         
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image src={Heroimg}
            alt="mockup"
            height={300}
            width={500}
          >
          </Image>

        </div>                
    </div>
</section>
    </div>
  )
}
