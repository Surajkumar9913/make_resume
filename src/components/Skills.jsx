import React, { useContext } from 'react'
import { ResumeContext } from '../Context'

const Skills = () => {
    const { skills } = useContext(ResumeContext)
    return (
        <div className="m-4 p-4 rounded-2xl bg-white shadow-lg">
            <h1 className="text-purple-600 text-2xl font-bold mb-6">Skills</h1>

            


        </div>
    )
}

export default Skills
