
import {NavLink} from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
const NavLinks =  () => {
    return (
        <div className='px-18'>
        <NavLink className='px-5' to='/'>Admin</NavLink>
        <NavLink className='px-5' to='/home'>Home</NavLink>
        <NavLink className='px-5' to='/login'>login</NavLink>
        <NavLink className='px-5' to='/signup'>Sign up</NavLink>
        <NavLink className='px-5' to='/logout'>Log out</NavLink>
        </div>
    )   
}

export default function Nav () {
    const [isOpen, setIsOpen] = useState(false)

    const toggleNavBar = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <>
        <nav className=''>
            <div className='hidden w-full md:flex justify-end'>
                <NavLinks/>
            </div>
                <div className='md:hidden'>
                    <button onClick={toggleNavBar}>{isOpen ? <X/> : <Menu/>}</button>
                </div>
        </nav>
        {isOpen && (
            <div className='flex flex-col items-center '>
            <NavLinks/>
            </div>
        )}
        </>
    )
}