import Head from 'next/head'
import Avatar from '../components/Avatar'
import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Footer from '../components/Footer'
import { useRef } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'


export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = e => {
    e.preventDefault();
    const searchTerm = searchInputRef.current.value;
    if(!searchTerm) { return; } 
    router.push(`/search?searchterm=${searchTerm}`);
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="https://pics.freeicons.io/uploads/icons/png/2659939281579738432-512.png" />
      </Head>
      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* Left */}
        <div className="flex space-x-4 items-center ">
          <Link href="https://about.google">
            <p className="link">About</p>
          </Link>
          <Link href="https://store.google.com">
            <p className="link">Store</p>
          </Link>
        </div>
         {/* Right */}
         <div className="flex space-x-4 items-center">
           <Link href="https://mail.google.com/">
             <p className="link">Gmail</p>
           </Link>
           <Link href="https://www.google.co.in/imghp">
            <p className="link">Images</p>
           </Link>
         
         <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover: bg-gray-100 cursor-pointer"/>
         <Avatar  url="https://media-exp1.licdn.com/dms/image/C4E03AQFbqbW-MOsjIA/profile-displayphoto-shrink_100_100/0/1596051692917?e=1627516800&v=beta&t=yzLzvgcSndpiqQab00tdDQHvQrCvcSGYYKtLetxahAQ"/>
        </div>
      </header>

      {/* Body */}
      <form className="flex flex-col items-center mt-40 flex-grow w-4/5">
        <Image 
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        width={300}
        height={100}
        />
        <div className="flex w-full mt-5 hover:shadow-lg 
        focus-within:shadow-lg max-w-md rounded-full px-5 py-3 
        items-center border border-gray-200 sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500"/>
          <input ref={searchInputRef} type="text" className="flex-grow focus:outline-none"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/1200px-Google_mic.svg.png"
               className="h-5 cursor-pointer"></img>
          {/* <MicrophoneIcon className="h-5 cursor-pointer"/> */}
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8
          sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="btn" onClick={search}>Google Search</button>
          <button className="btn" onClick={search}>I'm Feeling Lucky</button>
        </div>
      </form>
      
      <Footer />
    </div>
  )
}
