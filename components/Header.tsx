import {BellIcon, SearchIcon} from "@heroicons/react/solid"
import Link from "next/link"
import {useState,useEffect} from "react"

const Header = () => {
    const [isScrolled, setisScrolled] = useState(false);

    useEffect(() => {
        const handleScrolled = () => {
            if(window.scrollY > 0){
                setisScrolled(true);
            }else{
                setisScrolled(false)
            }
        }

        window.addEventListener("scroll",handleScrolled);
        
        return () =>{
            window.removeEventListener('scroll',handleScrolled)
        }
    }, [])
    

  return (
    <header className={`${isScrolled && 'bg-[#141414]' }`}>
        <div className="flex items-center space-x-2 md:space-x-10 ">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        <ul className="hidden md:flex space-x-4">
            <li className="HeaderLink">Home</li>
            <li className="HeaderLink">TV Shows</li>
            <li className="HeaderLink">Movies</li>
            <li className="HeaderLink">New & Popular</li>
            <li className="HeaderLink">My List</li>
        </ul>
        </div>
        <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden h-6 w-6 sm:inline cursor-pointer"/>
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6 cursor-pointer"/>
        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
        </div>
    </header>
  )
}

export default Header