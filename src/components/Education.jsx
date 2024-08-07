import React, { useContext } from 'react';
import { ResumeContext } from '../Context';

const Education = () => {
    const { education, handleEducationChange, addEducation, removeEducation } = useContext(ResumeContext);
    return (
        <div className="m-4 p-4 rounded-2xl bg-white shadow-lg">
            <h1 className="text-purple-600 text-2xl font-bold mb-6">Education Details</h1>
            <div>
                {education.map((edu) => (
                    <div key={edu.id} className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Degree
                            <input
                                type="text"
                                name="degree"
                                placeholder="Degree"
                                onChange={(e) => handleEducationChange(edu.id, e)}
                                className='mt-1 block font-normal w-full px-3 py-2 bg-customColor border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-600 focus:border-purple-600 sm:text-sm'
                            />
                        </label>

                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            College/School Name
                            <input
                                type="text"
                                name="college"
                                placeholder="College Name"
                                onChange={(e) => handleEducationChange(edu.id, e)}
                                className='mt-1 block font-normal w-full px-3 py-2 bg-customColor border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-600 focus:border-purple-600 sm:text-sm'
                            />
                        </label>

                        <div className="flex justify-between">
                            <div className="w-1/3">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Start Year
                                    <input
                                        type="text"
                                        name="startYear"
                                        placeholder="Start Year"
                                        onChange={(e) => handleEducationChange(edu.id, e)}
                                        className='mt-1 block font-normal w-3/4 px-3 py-2 bg-customColor border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-600 focus:border-purple-600 sm:text-sm'
                                    />
                                </label>
                            </div>
                            <div className="w-1/3">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    End Year
                                    <input
                                        type="text"
                                        name="endYear"
                                        placeholder="End Year"
                                        onChange={(e) => handleEducationChange(edu.id, e)}
                                        className='mt-1 block font-normal w-3/4 px-3 py-2 bg-customColor border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-600 focus:border-purple-600 sm:text-sm'
                                    />
                                </label>
                            </div>
                            <div className="w-1/3">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Grade
                                    <input
                                        type="text"
                                        name="grade"
                                        placeholder="Grade"
                                        onChange={(e) => handleEducationChange(edu.id, e)}
                                        className='mt-1 block font-normal w-3/4 px-3 py-2 bg-customColor border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-600 focus:border-purple-600 sm:text-sm'
                                    />
                                </label>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={addEducation}
                            className="bg-purple-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-700 "
                        >
                            Add More
                        </button>
                        {education.length >1 && <button
                            type="button"
                            onClick={() => removeEducation(edu.id)}
                            className="ml-4 bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 "
                        >
                            Remove
                        </button>}
                    </div>

                ))}

            </div>
        </div>
    );
};

export default Education;
