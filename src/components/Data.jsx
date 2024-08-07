import React, { useContext } from 'react'
import { ResumeContext } from '../Context'


function Data() {
    const { data, handleData, objective, setobjective  } = useContext(ResumeContext)
    return (
        <div className='mx-4 p-4 rounded-2xl bg-white shadow-md'>
            <h1 className=' text-purple-600 text-2xl font-bold mb-6'>Personal Information</h1>
            <div className='flex flex-wrap -mx-2'>
                <div className='w-full md:w-1/2 px-2 mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>
                        Full Name:
                        <input
                            type="text"
                            name="full_name"
                            placeholder='Full Name'
                            onChange={handleData}
                            className='mt-1 block font-normal w-full px-3 py-2 bg-customColor border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-600 focus:border-purple-600 sm:text-sm'
                        />
                    </label>
                </div>
                <div className='w-full md:w-1/2 px-2 mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>
                        Gmail:
                        <input
                            type="email"
                            name="gmail"
                            placeholder='Gmail'
                            onChange={handleData}
                            className='mt-1 block font-normal w-full px-3 py-2 bg-customColor border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-600 focus:border-purple-600 sm:text-sm'
                        />
                    </label>
                </div>
                <div className='w-full md:w-1/2 px-2 mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>
                        Number:
                        <input
                            type="tel"
                            name="number"
                            placeholder='Contact Number'
                            onChange={handleData}
                            className='mt-1 block font-normal w-full px-3 py-2 bg-customColor border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-600 focus:border-purple-600 sm:text-sm'
                        />
                    </label>
                </div>
                <div className='w-full md:w-1/2 px-2 mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>
                        Address:
                        <input
                            type="text"
                            name="address"
                            placeholder='Address'
                            onChange={handleData}
                            className='mt-1 block font-normal w-full px-3 py-2 bg-customColor border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-600 focus:border-purple-600 sm:text-sm'
                        />
                    </label>
                </div>
                <div className='w-full px-2 mb-4'>
                    <h1 className='text-purple-600 text-2xl font-bold mb-6'>Objective</h1>

                    <label className='block text-gray-700 text-sm font-bold mb-2'>
                        <textarea
                            name="objective"
                            placeholder='Objective'
                            onChange={(e) => setobjective(e.target.value)}
                            rows="4"
                            className='mt-1 block font-normal w-full px-3 py-2 bg-customColor border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-600 focus:border-purple-600 sm:text-sm'
                        />
                    </label>
                </div>

            </div>
        </div>

    )
}

export default Data
