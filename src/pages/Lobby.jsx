import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Lobby() {

    let navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/game')
    }



    return (
        <section className='bg-white text-slate-700 px-8 py-3 min-h-screen flex flex-col'>
            <div className='flex flex-col mt-10'>
                <h1 className='mx-auto font-bold text-lg mb-4'>What Are The Rules?</h1>
                <span className='mx-auto font-poppins font-bold text-sm'>You will get a questionnaire consisting of several medical questions.</span>
                <span className='mx-auto font-poppins font-bold text-sm'>If you answer right <span className='font-rubik font-bold text-base text-red-500'>70%</span> of the questions:</span>
            </div>
            <div className='flex mx-auto mt-14'>
                <div className='flex flex-col w-56 h-min rounded-md shadow-md text-center'>
                    <h1 className='mx-auto font-poppins font-bold text-lg mb-4'>Your Patient Is <span className='font-rubik font-bold text-red-500'>Saved</span>!</h1>
                    <img className='mx-auto w-30' src="src\assets\gifs\baymax-robo-medic.gif" />
                </div>
                <div className='flex text-left font-bold font-rubik text-base'>
                    <span className='mx-2.5'>If Not...</span>
                </div>
                <div className="flex flex-col w-56 h-min rounded-md shadow-md text-center">
                    <h1 className='mx-auto font-poppins font-bold text-lg mb-4'>Your Patient Is <span className='font-rubik font-bold text-red-500'>Kapoot</span>!</h1>
                    <img className='mx-auto w-30' src="src\assets\gifs\your-dead.gif" />
                </div>
            </div>
            <div className='flex mx-auto mt-10'>
                <button type='submit' onClick={handleSubmit} className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-md font-medium text-gray-800 rounded-md bg-[#FDC886] hover:bg-[#F9B76C]">
                    <span className="font-rubik font-bold relative px-2.5 py-0.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
                    GOT IT!
                    </span>
                </button>
            </div>
        </section>
    )
}

export default Lobby;
