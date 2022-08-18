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
        <section className='bg-purple-300 px-8 py-3 min-h-screen'>
            <div className='flex'>
                <div className='bg-white mx-auto w-64 h-86 flex flex-col rounded-md shadow-md my-36 align-middle text-center'>
                    <span className='ml-1 mt-1'>Have an invite?</span>
                    <form className="flex flex-col py-5 px-4">
                        <input className="p-2 w-full border solid border-1 border-gray-300 rounded mb-2 text-center" placeholder='Enter Invite Here' type="text" name='PIN' value={inputs.gamePIN || ""} onChange={handleChange} required />
                        <button className="font-rubik border-2 border-solid bg-gray-300 border-gray-200 rounded p-2 font-bold hover:border-gray-300 hover:bg-gray-800 hover:text-white" type='submit' onClick={handleSubmit}>Play</button>
                    </form>
                </div>
                <div className='mx-auto flex my-44 align-middle text-center font-bold font-rubik'>
                    <span>OR</span>
                </div>
                <div className="bg-white mx-auto w-64 h-86 flex flex-col rounded-md shadow-md my-36 align-middle text-center">
                    <span className='ml-1 mt-1'>Join with QR code?</span><span className="ml-1">Scan QR code here</span>
                </div>
            </div>
        </section>
    )
}

export default Lobby;
