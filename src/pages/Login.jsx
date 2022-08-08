import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSessionStore } from '../store';


function Login() {

    const sessionStore = useSessionStore();
    const [inputs, setInputs] = useState({});
    let navigate = useNavigate();


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:4000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs),
        })
            .then(response => response.json())
            .then(data => {
                sessionStore.setAccessToken(data);
                console.log('here is the data', data);
            })
            .catch((error) => {
                console.log('error', error);
            })
        sessionStore.setUser(inputs);
        sessionStore.setIsLogged(true);
        console.log('youre logged!');
    };

    useEffect(() => {
        if (sessionStore.isLogged) return navigate('/')
    }, [sessionStore.isLogged])
    return (
        <section className="bg-gray-200 flex flex-col px-8 py-3 h-screen">

            <div className="bg-white mx-auto w-96 h-80 flex flex-col rounded-md shadow-md mt-5 align-middle">
                <div className="text-center text-md font-bold mt-3">Log in</div>
                <div>
                    <form className="flex flex-col py-5 px-4">
                        <label htmlFor="nickname" className="font-bold text-sm">Nickname</label>
                        <input className="p-2 w-full border solid border-1 border-gray-300 rounded mb-2" type="text" name='nickname' value={inputs.nickname || ""} onChange={handleChange} required />
                        <label htmlFor="password" className="font-bold text-sm">Password</label>
                        <input className="p-2 w-full border solid border-1 border-gray-300 rounded mb-5" type="password" name='password' value={inputs.password || ""} onChange={handleChange} required />
                        <button className="text-white bg-purple-400 border-2 border-solid border-gray-200 rounded p-2 font-bold hover:border-gray-300 hover:bg-purple-500" type='submit' onClick={handleSubmit}>Log in</button>
                    </form>
                </div>
                <div className="px-4"><span>Don't have an account?</span><span className="ml-1 text-blue-600 hover:underline"><Link to="/signup">Sign up</Link></span></div>
            </div>
            <div className='py-5 px-5'>
                {/* {errorMessage()} */}
            </div>
        </section>
    )
}

export default Login;