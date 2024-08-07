import React, { useContext } from 'react'
import { ResumeContext } from '../Context'

const Projects = () => {
    const { projects, handleProjects, addProjects, removeProjects } = useContext(ResumeContext);
    return (
        <div className="m-4 p-4 rounded-2xl bg-white shadow-lg">
            <h1 className="text-purple-600 text-2xl font-bold mb-6">Projects</h1>

            {
                projects.map((project) => (
                    <div className='' key={project.id}>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Title
                            <input
                                type="text"
                                name="title"
                                placeholder="Project Title"
                                onChange={(e) => handleProjects(project.id, e)}
                                className='mt-1 block font-normal w-1/2 px-3 py-2 bg-customColor border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-600 focus:border-purple-600 sm:text-sm'
                            />
                        </label>
                        <label className='block text-gray-700 text-sm font-bold mb-2'>
                            Description
                            <textarea
                                name="description"
                                placeholder='Project Description'
                                onChange={(e) => handleProjects(project.id, e)}
                                rows="4"
                                className='mt-1 block font-normal w-full px-3 py-2 bg-customColor border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-600 focus:border-purple-600 sm:text-sm'
                            />
                        </label>
                        {
                            projects.length < 5 ? <button
                                type="button"
                                onClick={addProjects}
                                className="bg-purple-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-700 "
                            >
                                Add More
                            </button> : ''

                        }

                        {
                            projects.length > 1 && <button
                                type="button"
                                onClick={() => removeProjects(project.id)}
                                className="ml-4 bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 "
                            >
                                Remove
                            </button>
                        }




                    </div>

                ))
            }


        </div>
    )
}

export default Projects
