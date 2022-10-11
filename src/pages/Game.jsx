import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSession } from '../hooks/useSession';


function Game() {
    const { nickname } = useSession();
    const navigate = useNavigate();

    const handleEasyDifficultyLevel = (event) => {
        event.preventDefault();
        navigate('/questionnaire/10')
    }
    const handleHardDifficultyLevel = (event) => {
        event.preventDefault();
        navigate('/questionnaire/11')
    }
    const handleExtremeDifficultyLevel = (event) => {
        event.preventDefault();
        navigate('/questionnaire/12')
    }

    return (
        <section className='bg-white dark:bg-slate-800 text-slate-700 dark:text-white px-8 py-3 min-h-screen'>
            <span className='font-bold font-rubik left-0 top-0'>{nickname}</span>
            <div className='flex flex-col h-full items-center mt-28'>
                <h1 className='font-poppins font-bold mb-5'>One moment... What <span className='font-rubik font-bold text-red-500 text-lg mr-0.5'>kind</span>of a doctor are you?</h1>
                <div className='mx-auto flex mt-28'>
                    <button onClick={handleEasyDifficultyLevel} className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-md font-medium text-gray-800 rounded group bg-gradient-to-br from-red-500 to-orange-400 group-hover:from-red-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-0 focus:outline-none focus:ring-red-200 dark:focus:ring-orange-400">
                        <span className="font-rubik font-bold relative px-2.5 py-0.5 transition-all ease-in duration-75 bg-white dark:bg-gray-800 rounded group-hover:bg-opacity-0">
                            Medical Student
                        </span>
                    </button>
                    <button onClick={handleHardDifficultyLevel} className="ml-5 relative inline-flex items-center justify-center p-0.5 overflow-hidden text-md font-medium text-gray-800 rounded group bg-gradient-to-br from-red-500 to-orange-400 group-hover:from-red-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-0 focus:outline-none focus:ring-red-200 dark:focus:ring-orange-400">
                        <span className="font-rubik font-bold relative px-2.5 py-0.5 transition-all ease-in duration-75 bg-white dark:bg-gray-800 rounded group-hover:bg-opacity-0">
                            Chief Resident
                        </span>
                    </button>
                    <button onClick={handleExtremeDifficultyLevel} className="ml-5 relative inline-flex items-center justify-center p-0.5 overflow-hidden text-md font-medium text-gray-800 rounded group bg-gradient-to-br from-red-500 to-orange-400 group-hover:from-red-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-0 focus:outline-none focus:ring-red-200 dark:focus:ring-orange-400">
                        <span className="font-rubik font-bold relative px-2.5 py-0.5 transition-all ease-in duration-75 bg-white dark:bg-gray-800 rounded group-hover:bg-opacity-0">
                            Attending Physician
                        </span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Game;
