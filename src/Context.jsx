import { useState, createContext } from "react";

export const ResumeContext = createContext();

const MyResumeProvider = ({ children }) => {
  const [data, setData] = useState({
    full_name: 'Suraj',
    gmail: 'surajyuva200@gmail.com',
    number: '8433140785',
    address: 'Manakmau, Saharanpur, UP'
  });


  const [objective, setobjective] = useState(
    'To take up a challenging career and grows with honesty, loyalty, good relationship and best performance for the organization goals as well as myself.'
  );
  const [education, setEducation] = useState([{
    id: 1,
    degree: 'Master of Computer Application',
    college: 'Uttaranchal University',
    startYear: '2022',
    endYear: '2024',
    grade: '8.1',

  }])
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Projact Name',
      description: 'Write a Project Description'
    }
  ]);

  const [skills, setSkills] = useState([
    {
      id: 1,
      webTechnologies: [],
    },
    {
      id: 2,
      programmingLanguages: []
    },
    {
      id: 3,
      databases: []
    },
    {
      id: 4,
      tools: []
    },
  ]);

  const [certificates, setCertificates] = useState([]);
  const [strengths, setStrengths] = useState([]);

  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const handleEducationChange = (id, e) => {
    const newEducationList = education.map((edu) => {
      if (edu.id === id) {
        return { ...edu, [e.target.name]: e.target.value };
      }
      return edu;
    });

    setEducation(newEducationList);
  };


  const addEducation = () => {
    const newId = education.length > 0 ? education[education.length - 1].id + 1 : 1;
    setEducation([...education, { id: newId, degree: '', college: '', startYear: '', endYear: '', grade: '' }]);
  }

  const removeEducation = (id) => {
    const newEducationList = education.filter((edu) => edu.id !== id)
    setEducation(newEducationList);


  }

  const handleProjects = (id, e) => {

    const newProjectsList = projects.map((project) => {
      if (project.id === id) {
        return { ...project, [e.target.name]: e.target.value }
      }
      return project
    })
    setProjects(newProjectsList)
  }

  const addProjects = () => {
    const newId = projects.length > 0 ? projects[projects.length - 1].id + 1 : 1;
    setProjects([...projects, { id: newId, title: '', description: '' }])

  }

  const removeProjects = (id) => {
    const newProjectList = projects.filter((project) => project.id !== id)
    setProjects(newProjectList);
  }
  const addSkill = (categoryId, skillName, skillValue) => {

    const updatedSkills = skills.map(skill => {
      if (skill.id === categoryId) {
        return {
          ...skill,
          [skillName]: [...skill[skillName], skillValue]
        };
      }
      return skill;
    });
    setSkills(updatedSkills);
  };

  const handleAddCertificates = (title) => {
    if (title) {
      setCertificates(prevCertificates => [...prevCertificates, title]);
    }
  };
  const handleAddStrengths = (title) => {
    if (title) {
      setStrengths(prevCertificates => [...prevCertificates, title]);
    }
  };


  const value = {
    data,
    handleData,
    objective,
    setobjective,
    education,
    handleEducationChange,
    addEducation,
    removeEducation,
    projects,
    handleProjects,
    addProjects,
    removeProjects,
    skills,
    addSkill,
    certificates,
    handleAddCertificates,
    strengths,
    handleAddStrengths,

  }
  return (
    <ResumeContext.Provider value={value}>
      {children}
    </ResumeContext.Provider>
  )
}
export default MyResumeProvider

