import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useSession } from '../hooks/useSession'

function Game() {
    const { nickname } = useSession()
    const navigate = useNavigate()

    const handleEasyDifficultyLevel = (event) => {
        event.preventDefault()
        navigate('/questionnaire/10')
    }
    const handleHardDifficultyLevel = (event) => {
        event.preventDefault()
        navigate('/questionnaire/11')
    }
    const handleExtremeDifficultyLevel = (event) => {
        event.preventDefault()
        navigate('/questionnaire/12')
    }

    return (
        <section className="font-poppins text-slate-700 px-8 py-3">
            <div className="flex flex-col h-full items-center mt-24">
                <h1 className="font-bold text-xl">
                    One moment... What kind of a doctor are you?
                </h1>
                <div className="mx-auto flex mt-20">
                    <button
                        onClick={handleEasyDifficultyLevel}
                        className="bg-gray-800 uppercase font-extrabold mr-2 rounded-full text-white w-52 h-10 items-center justify-center p-0.5 overflow-hidden text-md transform hover:scale-110 "
                    >
                        Medical Student
                    </button>
                    <button
                        onClick={handleHardDifficultyLevel}
                        className="bg-gray-800 uppercase font-extrabold mr-2 ml-2 rounded-full text-white w-52 h-10 items-center justify-center p-0.5 overflow-hidden text-md transform hover:scale-110 "
                    >
                        Chief Resident
                    </button>
                    <button
                        onClick={handleExtremeDifficultyLevel}
                        className="bg-gray-800 uppercase font-extrabold ml-2 rounded-full text-white w-52 h-10 items-center justify-center p-0.5 overflow-hidden text-md transform hover:scale-110 "
                    >
                        Attending Physician
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Game
