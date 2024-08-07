import React, { useContext } from 'react'
import { ResumeContext } from '../Context'

const Resume = () => {
  const { data, objective, education, projects, skills, certificates, strengths } = useContext(ResumeContext)


  return (
    <div className='   bg-white'>
      <div className=' p-2  text-center'>
        <h1 className='text-4xl' >{data.full_name}</h1>
        <span>{data.number} </span>
        <span>| {data.gmail} </span><span>| {data.address} </span>
      </div>
      <hr className='border border-black' />

      <div className='mt-2'>
        <h1 className='text-2xl font-bold bg-orange-300 '>Objective</h1>
        <p className='p-2' >{objective}</p>

      </div>

      <div className=' mt-2'>
        <h1 className='text-2xl font-bold bg-orange-300 '>Education</h1>
        {education.map((edu, index) => (
          <div className=' p-2 ' key={index} >
            <p className='font-bold' >{edu.degree}</p>
            <p className='' > {edu.college}</p>
            <p className='' > {edu.startYear}-{edu.endYear} </p>
            <p className='' > {edu.grade} CGPA </p>
          </div>

        ))}

      </div>

      <div className='mt-2' >
        <h1 className='text-2xl font-bold bg-orange-300 '>Projects</h1>
        {
          projects.map((project) => (
            <div className=' p-2' >
              <p className='font-bold' key={project.id}>{project.title} </p>
              <li>{project.description}</li>
            </div>
          ))
        }

        <div className='mt-2' >
          <h1 className='text-2xl font-bold bg-orange-300 '>Skills</h1>
          <div className='p-2'>
            {skills.map(skill => (
              <p key={skill.id}>
                <span className='font-bold'>
                  {skill.id === 1 && "Web Technologies : "}
                  {skill.id === 2 && "Programming Languages : "}
                  {skill.id === 3 && "Databases : "}
                  {skill.id === 4 && "Tools : "}
                </span>
                {skill.id === 1 && skill.webTechnologies.join(', ')}
                {skill.id === 2 && skill.programmingLanguages.join(', ')}
                {skill.id === 3 && skill.databases.join(', ')}
                {skill.id === 4 && skill.tools.join(', ')}
              </p>
            ))}
          </div>
        </div>

        <div className='mt-2' >
          <h1 className='text-2xl font-bold bg-orange-300 '>Certificates</h1>
          <div className=' p-2'>
            {
              certificates.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))
            }
          </div>
        </div>

        <div className='mt-2' >
          <h1 className='text-2xl font-bold bg-orange-300 '>Strength</h1>
          <div className=' p-2'>
            {
              strengths.map((strenth, index) => (
                <li key={index} >{strenth}</li>
              ))
            }
          </div>
        </div>

      </div>

    </div>
  )
}

export default Resume
