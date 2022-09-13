import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSessionStore } from "../store";


function Game() {
    const sessionStore = useSessionStore();
    let navigate = useNavigate();

    const handleEasyDifficultyLevel = (event) => {
        event.preventDefault();
        navigate('/questionnaire/8')
    }
    const handleHardDifficultyLevel = (event) => {
        event.preventDefault();
        navigate('/questionnaire/8')
    }
    const handleExtremeDifficultyLevel = (event) => {
        event.preventDefault();
        navigate('/questionnaire/8')
    }




    return (
        <section className='px-8 py-3 min-h-screen'>
            <span className='font-bold font-rubik left-0 top-0'>{sessionStorage.getItem('userNickname')}</span>
            <div className='flex flex-col h-full items-center mt-28'>
                <h1 className='font-poppins font-bold mb-5'>One moment... What <span className='font-rubik font-bold text-purple-400 text-lg mr-0.5'>kind</span>of a doctor are you?</h1>
                <div className='mx-auto flex mt-28'>
                    <button className='ml-8 font-poppins font-bold text-xl rounded-md bg-purple-300 p-2 hover:bg-purple-400' onClick={handleEasyDifficultyLevel}>Medical Student</button>
                    <button className='ml-8 font-poppins font-bold text-xl rounded-md bg-purple-300 p-2 hover:bg-purple-400' onClick={handleHardDifficultyLevel}>Chief Resident</button>
                    <button className='ml-8 font-poppins font-bold text-xl rounded-md bg-purple-300 p-2 hover:bg-purple-400' onClick={handleExtremeDifficultyLevel}>Attending Physician</button>
                </div>
            </div>
        </section>
    )
}

export default Game;
