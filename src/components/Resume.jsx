import React, { useContext } from 'react'
import { ResumeContext } from '../Context'

const Resume = () => {
  const { data, objective, education, projects } = useContext(ResumeContext)
  const printResume = () => {
    window.print();
  };
  return (
    <div className='shadow-custom  m-4 bg-white'>
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
            <div className=' p-2' key={project.id}>
              <p className='font-bold' >{project.title} </p>
              <li>{project.description}</li>
            </div>
          ))
        }


        <div className='mt-2' >
          <h1 className='text-2xl font-bold bg-orange-300 '>Skills</h1>
          <div className=' p-2 '>
            <p><span className='font-bold'>Web Technologies : </span>HTML</p>
            <p><span className='font-bold'>Programming Languages : </span>HTML</p>
            <p><span className='font-bold'>Databases : </span>HTML</p>
            <p><span className='font-bold'>Tools  : </span>HTML</p>
          </div>
        </div>

        <div className='mt-2' >
          <h1 className='text-2xl font-bold bg-orange-300 '>Certificates</h1>
          <div className=' p-2  '>
            <li>Certificate 1</li>
            <li>Certificate 1</li>
            <li>Certificate 1</li>
            <li>Certificate 1</li>
          </div>
        </div>

        <div className='mt-2' >
          <h1 className='text-2xl font-bold bg-orange-300 '>Strength</h1>
          <div className=' p-2'>
            <li>Strength 1</li>
            <li>Strength 1</li>
            <li>Strength 1</li>
            <li>Strength 1</li>
          </div>
        </div>

      </div>

      <button
          type="button"
          onClick={printResume}
          className='bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700'
        >
          Print Resume
        </button>

    </div>
  )
}

export default Resume
