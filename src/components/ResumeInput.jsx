
import Certificates from './Certificates'
import Data from './Data'
import Education from './Education'
import Projects from './Projects'
import Skills from './Skills'
import Strength from './Strength'

const ResumeInput = () => {
  return (
    <div className=' w-full  ' id='resumemaker'>
      <Data/>
      <Education/>
      <Projects/>
      <Skills/>
      <Certificates/>
      <Strength/>
    </div>
  )
}

export default ResumeInput
