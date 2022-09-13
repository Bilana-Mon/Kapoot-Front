import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Lobby() {

    let navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/game')
    }



    return (
        <section className='px-8 py-3 min-h-screen flex flex-col'>
            <div className='flex flex-col mt-10'>
                <h1 className='mx-auto font-bold text-lg mb-4'>What Are The Rules?</h1>
                <span className='mx-auto font-poppins font-bold text-sm'>You will get a questionnaire consisting of several medical questions.</span>
                <span className='mx-auto font-poppins font-bold text-sm'>If you answer right <span className='font-rubik font-bold text-base text-purple-400'>75%</span> of the questions:</span>
            </div>
            <div className='flex mx-auto mt-14'>
                <div className='flex flex-col w-56 h-min rounded-md shadow-md text-center'>
                    <h1 className='mx-auto font-poppins font-bold text-lg mb-4'>Your Patient Is <span className='font-rubik font-bold text-purple-400'>Saved</span>!</h1>
                    <img className='mx-auto w-30' src="src\assets\gifs\baymax-robo-medic.gif" />
                </div>
                <div className='flex text-left font-bold font-rubik text-base'>
                    <span className='mx-2.5'>If Not...</span>
                </div>
                <div className="flex flex-col w-56 h-min rounded-md shadow-md text-center">
                    <h1 className='mx-auto font-poppins font-bold text-lg mb-4'>Your Patient Is <span className='font-rubik font-bold text-purple-400'>Kapoot</span>!</h1>
                    <img className='mx-auto w-30' src="src\assets\gifs\your-dead.gif" />
                </div>
            </div>
            <div className='flex mx-auto mt-10'>
                <button className="font-rubik font-bold p-2 border-2 border-solid bg-gray-300 border-gray-200 rounded hover:border-gray-300 hover:bg-gray-800 hover:text-white" type='submit' onClick={handleSubmit}>GOT IT!</button>
            </div>
        </section>
    )
}

export default Lobby;
