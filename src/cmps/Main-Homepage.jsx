import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSession } from '../hooks/useSession'

function Main() {
    const { setNickname } = useSession()
    const { isLogged } = useSession()
    const { nickname } = useSession()
    const [inputs, setInputs] = useState({
        nickname: '',
    })
    let navigate = useNavigate()

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs((values) => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setNickname(inputs.nickname)
        navigate('/lobby')
    }

    return (
        <main className="my-auto min-h-full mt-2">
            <div className="mx-auto flex flex-col align-middle text-center">
                <h1 className="font-poppins font-black text-red-500 text-xl mb-0.5">
                    Can you save the patient or is he kapoot ?
                </h1>
                <span className="font-poppins text-md">
                    Answer all the questions right and be the doctor the world
                    needs!
                </span>
                <img
                    className="mx-auto mt-1 w-40"
                    src="src\assets\gifs\patient-home-page.gif"
                />
            </div>
            {isLogged ? (
                <div className="mx-auto my-2 w-min h-min flex flex-col align-middle text-center">
                    <span className="mb-2">
                        <span className="font-poppins font-bold text-lg">
                            {nickname}
                        </span>
                    </span>
                    <Link to={'/lobby'}>
                        <button className="relative inline-flex items-center justify-center w-full p-0.5 overflow-hidden text-md font-medium text-gray-900 rounded-full border border-gray-800 transform hover:scale-110">
                            <span className="font-poppins font-bold relative w-full p-2 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
                                Start
                            </span>
                        </button>
                    </Link>
                </div>
            ) : (
                <div className="mx-auto mt-8 w-64 h-min flex flex-col rounded-md border border-gray-500 align-middle text-center">
                    <form className="flex flex-col py-5 px-4">
                        <input
                            className="p-2 w-full border solid border-1 border-gray-300 focus:outline-none focus:ring-1 focus:ring-slate-800 text-gray-800 rounded-md mb-2 text-center"
                            placeholder="Enter Nickname here"
                            type="text"
                            name="nickname"
                            value={inputs.nickname || ''}
                            onChange={handleChange}
                            required
                        />
                        <Link to={'/lobby'}>
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="relative inline-flex items-center justify-center w-full p-0.5 overflow-hidden text-md font-medium text-gray-900 rounded-full border border-gray-800 transform hover:scale-110"
                            >
                                <span className="font-poppins font-bold relative w-full py-2 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
                                    Start
                                </span>
                            </button>
                        </Link>
                    </form>
                </div>
            )}
        </main>
    )
}

export default Main
