import Image from "next/image";
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { MicrophoneIcon, XIcon, ViewGridIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/outline'
import Avatar from '../components/Avatar'
import HeaderOptions from '../components/HeaderOptions'
import Tooltip from '@material-ui/core/Tooltip'

function SearchHeader() {
    const router = useRouter();
    const searchInputRef = useRef(null);
    const search = e => {
        e.preventDefault();
        const searchTerm = searchInputRef.current.value;
        if(!searchTerm) { return; } 
        router.push(`/search?searchterm=${searchTerm}&start=0`);    
      };

    return (
        <header className="sticky top-0 bg-white">
        <div className="flex w-full p-6 items-center">
            <Image 
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                height={40}
                width={120}
                className="cursor-pointer"
                onClick={() => router.push("/")}
            />
            <form className="flex flex-grow  px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full 
                            shadow-lg max-w-3xl items-center">
                <SearchIcon className="h-5 mr-3 text-gray-500"/>                
                <input ref={searchInputRef} type="text" className="flex-grow w-full focus:outline-none" defaultValue={router.query.searchterm}/>
                <XIcon className="h-6 sm:mr-3 text-gray-500 cursor-pointer transition 
                                duration-100 transform hover:scale-125"
                                onClick={() =>  searchInputRef.current.value = ""}/>              
                <Tooltip arrow title="Search by voice">                
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/1200px-Google_mic.svg.png"
                     className="h-5 mr-3 cursor-pointer hidden sm:inline-flex 
                                border-l-2 border-gray-300 pl-4"/>
                </Tooltip>                              
                {/* <MicrophoneIcon className="h-6 mr-3 cursor-pointer hidden sm:inline-flex 
                                        text-blue-500 border-l-2 pl-4 border-gray-300"/> */}   
                <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex cursor-pointer"/>
                <button hidden type="submit" onClick={search}>Search</button>
            </form>
            <div className="flex ml-auto space-x-3">
            <Tooltip arrow title="Google apps">
             <div>
                <ViewGridIcon className="h-10 w-10 p-2 hidden hover:bg-gray-100 rounded-full cursor-pointer sm:inline-flex"/>
             </div>
           </Tooltip>
           <Tooltip title={`Sai Sharan Beepeta (saisharan2565@gmail.com)`}>
             <div>
                <Avatar url="https://media-exp1.licdn.com/dms/image/C4E03AQFbqbW-MOsjIA/profile-displayphoto-shrink_100_100/0/1596051692917?e=1627516800&v=beta&t=yzLzvgcSndpiqQab00tdDQHvQrCvcSGYYKtLetxahAQ"/>
             </div>
           </Tooltip>
            </div>
            
        </div>
        {/* HeaderOptions */}
        <HeaderOptions />
        </header>
    )
}

export default SearchHeader
