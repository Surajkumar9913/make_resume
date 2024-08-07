import React from 'react'

const Navbar = () => {
    return (
        <div
            className=' flex justify-around items-center font-medium text-xl py-3  text-gray-800 bg-Navcolor '
        >
            <div>
                <a href="/" className='text-purple-600 text-2xl font-pacifico' ><i className="fa-regular fa-file-word mr-1 "></i>MakeResume</a >
            </div>
            <ul className='md:flex items-center gap-5 text-gray-700 hidden '>
                <li><a href="#">Home</a></li>
                <li><a href="#">Template</a></li>
                <li><a href="#">About</a></li>
                <a href="#"
                    className="bg-purple-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-700"
                >
                    Contact
                </a>
            </ul>
        </div>
    )
}

export default Navbar
