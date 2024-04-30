import { XMarkIcon } from '@heroicons/react/16/solid'
import React from 'react'
interface Props{
    nav:boolean;
    closeNav:() => void;
} 
const MobileNav = ({nav, closeNav}:Props) => {
    const navAnimation = nav?'translate-x-0':'translate-x-[-100%]'
    return (
        <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 bottom-0 right-0 z-[1000000] bg-[#09101a]`}>
            <div className='w-[100vw] h-[100vh] flex flex-col justify-center items-center'>
                <div className="nav-link-mobile">Home</div>
                <div className="nav-link-mobile">About</div>
                <div className="nav-link-mobile">Projects</div>
                <div className="nav-link-mobile">Contact</div>
            </div>
            <div onClick={closeNav} className='absolute z-[1000000] cursor-pointer top-[2rem] right-[2rem] w-[3rem] h-[3rem] text-yellow-400 rounded bg-black'>
                <XMarkIcon/>
            </div>
        </div>
    )
}

export default MobileNav
