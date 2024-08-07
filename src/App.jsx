import './App.css'
import Navbar from './components/Navbar'
import Resume from './components/Resume'
import ResumeInput from './components/ResumeInput'
import MyResumeProvider from './Context'

function App() {
  return (
    <MyResumeProvider>
    <Navbar/>
      <div className='flex bg-customColor p-4'>

        <div className='w-1/2'>
          <ResumeInput />
        </div>

        <div className='w-1/2'>
          <Resume />
        </div>
      </div>

    </MyResumeProvider>
  )
}

export default App
