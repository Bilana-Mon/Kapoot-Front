import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Lobby() {

    const [inputs, setInputs] = useState({});
    let navigate = useNavigate();


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/game')
    }


    return (
        <section className='bg-purple-300 px-8 py-3 h-screen'>
            <div className='bg-white mx-auto w-64 h-86 flex flex-col rounded-md shadow-md mt-56 align-middle'>
                <form className="flex flex-col py-5 px-4">
                    <input className="p-2 w-full border solid border-1 border-gray-300 rounded mb-2 text-center" placeholder='Enter Game PIN' type="text" name='PIN' value={inputs.gamePIN || ""} onChange={handleChange} required />
                    <button className="border-2 border-solid bg-gray-300 border-gray-200 rounded p-2 font-bold hover:border-gray-300 hover:bg-gray-800 hover:text-white" type='submit' onClick={handleSubmit}>Enter</button>
                </form>
                <div className="px-4"><span>Enter with QR code?</span><span className="ml-1">Scan QR code here</span></div>
            </div>
        </section>
    )
}

export default Lobby;
