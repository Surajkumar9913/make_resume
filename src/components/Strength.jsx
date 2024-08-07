import React,{useContext,useState} from 'react'
import { ResumeContext } from '../Context'

const Strength = () => {
    const {  handleAddStrengths } = useContext(ResumeContext)
    const[strength,setStrength] = useState('')
    
    const handleStrength = () =>{
        handleAddStrengths(strength)
        setStrength('')
    }
    return (
        <div className="m-4 p-4 rounded-2xl bg-white shadow-lg">
            <h1 className="text-purple-600 text-2xl font-bold mb-6">Strength</h1>
            <div className='mt-2'>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Add Your Strength
                </label>
                <input
                    type="text"
                    name="strength"
                    value={strength}
                    onChange={(e) => setStrength(e.target.value)}
                    placeholder="Enter Your Strength"
                    className='mt-1 font-normal w-1/2 px-3 py-2 bg-customColor border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-600 focus:border-purple-600 sm:text-sm'
                />
                <button
                    type="button"
                    className="bg-purple-600 text-white px-4 py-2 ml-3 rounded-md shadow-md hover:bg-purple-700"
                    onClick={handleStrength}
                >
                    Add
                </button>
            </div>

        </div>
    )
}

export default Strength
