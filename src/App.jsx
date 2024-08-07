import React, { useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import ResumeInput from './components/ResumeInput';
import MyResumeProvider from './Context';
import { useReactToPrint } from 'react-to-print';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  const resumeRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
  });

  return (
    <MyResumeProvider>
      <Navbar />
      <Home />
      <div className='text-center w-full bg-customColor pt-4'>
        <h1 className='text-3xl text-gray-800'>Resume Builder Dashboard</h1>
      </div>
      <div className="w-full px-10   bg-customColor flex justify-end ">
        <button
          className="bg-purple-600 my-4 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-700"
          onClick={handlePrint}
        >
          Download Resume
        </button>
      </div>
      <div className="md:flex bg-customColor p-4">
        <div className="md:w-1/2">
          <ResumeInput />
        </div>
        <div className="md:w-1/2">
          <div ref={resumeRef}>
            <Resume />
          </div>
        </div>
      </div>
      <Footer/>
    </MyResumeProvider>
  );
}

export default App;
