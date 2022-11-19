import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSession } from '../hooks/useSession';
import Patient from '../assets/gifs/patient.gif';

function Main() {
    const { setNickname } = useSession();
    const { isLogged } = useSession();
    const { nickname } = useSession();
    const [inputs, setInputs] = useState({
        nickname: '',
    });
    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setNickname(inputs.nickname);
        navigate('/lobby');
    };

    return (
        <main className="my-auto min-h-full md:mt-20 mt-7">
            <div className="mx-auto flex flex-col align-middle text-center">
                <h1 className="font-poppins font-black text-red-500 md:text-xl text-2xl md:mb-0.5 mb-1.5">
                    Can you save the patient or is he kapoot ?
                </h1>
                <span className="font-poppins md:text-md text-xl">
                    Answer all the questions right and be the doctor the world
                    needs!
                </span>
                <img className="mx-auto w-40 py-2" src={Patient} alt="" />
            </div>
            {isLogged ? (
                <div className="mx-auto my-2 h-min flex flex-col align-middle text-center">
                    <span className="mb-2">
                        <span className="font-poppins font-bold md:text-lg text-xl">
                            {nickname}
                        </span>
                    </span>
                    <Link to={'/lobby'}>
                        <button
                            type="submit"
                            className="bg-gray-800 uppercase font-extrabold rounded-full text-white w-32 h-10 items-center justify-center p-0.5 overflow-hidden text-md transform hover:scale-110"
                        >
                            Start
                        </button>
                    </Link>
                </div>
            ) : (
                <div className="mx-auto mt-8 w-64 h-min flex flex-col rounded-md align-middle text-center">
                    <form
                        className="flex flex-col py-5 px-4"
                        onSubmit={handleSubmit}
                    >
                        <input
                            className="p-2 w-full border solid border-1 border-gray-300 focus:outline-none focus:ring-1 focus:ring-slate-800 text-gray-800 rounded-md mb-2 text-center"
                            placeholder="Enter Nickname here"
                            type="text"
                            name="nickname"
                            value={inputs.nickname}
                            onChange={handleChange}
                            required
                        />
                        <button
                            type="submit"
                            className="bg-gray-800 uppercase font-extrabold rounded-full text-white w-56 h-10 items-center justify-center p-0.5 overflow-hidden text-md transform hover:scale-110"
                        >
                            <Link to={'/lobby'}>Start</Link>
                        </button>
                    </form>
                </div>
            )}
        </main>
    );
}

export default Main;
