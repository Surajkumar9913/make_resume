import React from 'react'


const Home = () => {
    return (
        <div className=' justify-center items-center md:flex'>
            <div className='md:w-2/5 p-4'>
                <p className='text-purple-700 font-semibold text-3xl md:text-4xl md:text-justify'>Craft Your Dream Resume with MakeResume</p>
                <p className='text-justify text-gray-600 text-xl mt-4'> MakeResume empowers you to create, customize, and print
                    professional resumes effortlessly. With our user-friendly
                    templates, you can craft a standout resume in minutes. Build,
                    print, and download your resume for free, and take the next step
                    toward your dream job.
                </p>
                {/* <a href="#resumemaker" className='mt-4 bg-purple-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-700'>Bulid Resume</a> */}
            </div>
            <div className='md:w-2/5'>
                <img src="/img/resume.png" alt="png" />
            </div>

        </div>
    )
}

export default Home
