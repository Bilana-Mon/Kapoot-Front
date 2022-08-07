import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSessionStore } from '../store';

function CreateGame() {
    const sessionStore = useSessionStore();
    const [inputs, setInputs] = useState({});
    let navigate = useNavigate();
    let questions = [];

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('created!');
        // fetch('http://localhost:4000/auth/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(inputs),
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         sessionStore.setAccessToken(data);
        //         console.log('here is the data', data);
        //     })
        //     .catch((error) => {
        //         console.log('error', error);
        //     })
        //     sessionStore.setUser(JSON.stringify(inputs.nickname))
        // sessionStore.setIsLogged(true);
        // console.log('youre logged!');
    };


    useEffect(() => {
        if (!sessionStore.isLogged) return navigate('/login')
    }, [sessionStore.isLogged])
    return (
        <section className="bg-purple-400 flex flex-col px-8 py-3 min-h-full">
            <div className="bg-white mx-auto w-96 h-screen flex flex-col rounded-md shadow-md mt-5 align-middle">
                <div className="text-center text-md font-bold mt-3">Create Game</div>
                <div>
                    <form className="flex flex-col py-5 px-4">
                        <label htmlFor="question" className="font-bold text-sm">Question</label>
                        <input className="p-2 w-full border solid border-1 border-gray-300 rounded mb-2" placeholder='Enter question' type="text" name='question' value={inputs.question || ""} onChange={handleChange} required />
                        <label htmlFor="answers" className="font-bold text-sm">Answers</label>
                        <input className="p-2 w-full border solid border-1 border-gray-300 rounded mb-5" placeholder='Enter answer #1' type="text" name='answer1' value={inputs.answer1 || ""} onChange={handleChange} required />
                        <input className="p-2 w-full border solid border-1 border-gray-300 rounded mb-5" placeholder='Enter answer #2' type="text" name='answer2' value={inputs.answer2 || ""} onChange={handleChange} required />
                        <input className="p-2 w-full border solid border-1 border-gray-300 rounded mb-5" placeholder='Enter answer #3' type="text" name='answer3' value={inputs.answer3 || ""} onChange={handleChange} required />
                        <input className="p-2 w-full border solid border-1 border-gray-300 rounded mb-5" placeholder='Enter answer #4' type="text" name='answer4' value={inputs.answer4 || ""} onChange={handleChange} required />
                        <button className="border-2 border-solid bg-gray-300 border-gray-200 rounded p-2 font-bold hover:border-gray-300 hover:bg-gray-800 hover:text-white" type='submit' onClick={handleSubmit}>Create Questionnaire</button>
                    </form>
                </div>
                <div className="px-4"><span>Have a game invitation?</span><span className="ml-1 text-blue-600 hover:underline"><Link to="/lobby">Join Game</Link></span></div>
            </div>
            <div className='py-5 px-5'>
                {/* {errorMessage()} */}
            </div>
        </section>
    )
}

export default CreateGame;