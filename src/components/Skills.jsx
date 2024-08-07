import React, { useState, useContext } from 'react';
import { ResumeContext } from '../Context';

const Skills = () => {
    const { addSkill } = useContext(ResumeContext);

    const [inputValues, setInputValues] = useState({
        webTechnologies: '',
        programmingLanguages: '',
        databases: '',
        tools: ''
    });

    const handleInputChange = (e) => {
        // const { name, value } = e.target;
        setInputValues({ ...inputValues, [e.target.name]: e.target.value });
    };

    const handleAddSkill = (categoryId, skillName) => {
        addSkill(categoryId, skillName, inputValues[skillName]);
        setInputValues({ ...inputValues, [skillName]: '' }); 
    };

    return (
        <div className="m-4 p-4 rounded-2xl bg-white shadow-lg">
            <h1 className="text-purple-600 text-2xl font-bold mb-6">Skills</h1>

            <div>
                <div className='mt-2'>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Web Technologies
                    </label>
                    <input
                        type="text"
                        name="webTechnologies"
                        value={inputValues.webTechnologies}
                        onChange={handleInputChange}
                        placeholder="Add Web Technologies"
                        className='mt-1 font-normal w-1/2 px-3 py-2 bg-customColor border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-600 focus:border-purple-600 sm:text-sm'
                    />
                    <button
                        type="button"
                        className="bg-purple-600 text-white px-4 py-2 ml-3 rounded-md shadow-md hover:bg-purple-700"
                        onClick={() => handleAddSkill(1, 'webTechnologies')}
                    >
                        Add
                    </button>
                </div>

                <div className='mt-4'>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Programming Languages
                    </label>
                    <input
                        type="text"
                        name="programmingLanguages"
                        value={inputValues.programmingLanguages}
                        onChange={handleInputChange}
                        placeholder="Add Programming Languages"
                        className='mt-1 font-normal w-1/2 px-3 py-2 bg-customColor border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-600 focus:border-purple-600 sm:text-sm'
                    />
                    <button
                        type="button"
                        className="bg-purple-600 text-white px-4 py-2 ml-3 rounded-md shadow-md hover:bg-purple-700"
                        onClick={() => handleAddSkill(2, 'programmingLanguages')}
                    >
                        Add
                    </button>
                </div>

                <div className='mt-4'>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Databases 
                    </label>
                    <input
                        type="text"
                        name="databases"
                        value={inputValues.databases}
                        onChange={handleInputChange}
                        placeholder="Add Databases"
                        className='mt-1 font-normal w-1/2 px-3 py-2 bg-customColor border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-600 focus:border-purple-600 sm:text-sm'
                    />
                    <button
                        type="button"
                        className="bg-purple-600 text-white px-4 py-2 ml-3 rounded-md shadow-md hover:bg-purple-700"
                        onClick={() => handleAddSkill(3, 'databases')}
                    >
                        Add
                    </button>
                </div>

                <div className='mt-4'>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Tools 
                    </label>
                    <input
                        type="text"
                        name="tools"
                        value={inputValues.tools}
                        onChange={handleInputChange}
                        placeholder="Add Tools"
                        className='mt-1 font-normal w-1/2 px-3 py-2 bg-customColor border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-600 focus:border-purple-600 sm:text-sm'
                    />
                    <button
                        type="button"
                        className="bg-purple-600 text-white px-4 py-2 ml-3 rounded-md shadow-md hover:bg-purple-700"
                        onClick={() => handleAddSkill(4, 'tools')}
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Skills;
