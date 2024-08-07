import React from 'react'
// import { a } from 'react-router-dom'

const Navbar = () => {
    return (
        <div
            className=' flex justify-around items-center font-medium text-xl py-3  text-gray-800 bg-green-400 shadow-[0_4px_8px_rgba(0,255,0,0.2)]'
        >
            <div>
                <a href="/" ><i className="fa-regular fa-file-word mr-1 "></i>MakeResume</a >
            </div>
            <ul className='flex gap-5 text-slate-600'>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </div>
    )
}

export default Navbar
