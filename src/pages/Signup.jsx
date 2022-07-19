import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useLoggedInUser } from '../contexts/AuthContext';
import {useSessionStore} from '../store';

function Signup() {

    const sessionStore = useSessionStore();
    const [inputs, setInputs] = useState({});
    // const [error, setError] = useState(false);


    let navigate = useNavigate();
    const { isLogged, setIsLogged } = useLoggedInUser();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    };


    // will go to handleSubmit once signUp is working
    // if (inputs.nickname === "" || inputs.email === "" || inputs.password === "") {
    //     setError(true);
    // } else {
    //     setError(false);
    // }

    const handleSubmit = async (event) => {
        event.preventDefault();
        fetch('http://localhost:4000/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs),
        })
            .then(response => response.json())
            .then(data => {
                console.log('here is the data', data);
            })
            .catch((error) => {
                console.log('error', error);
            })
        sessionStore.setIsLogged(true);
    };


    // const errorMessage = () => {
    //     return (
    //         <div
    //             className="text-red-400 font-bold"
    //             style={{
    //                 display: error ? '' : 'none',
    //             }}>
    //             <h1>Please enter all the fields!</h1>
    //         </div>
    //     );
    // };

    useEffect(() => {
        if (sessionStore.setIsLogged) return navigate('/')
    }, [sessionStore.setIsLogged])
    return (
        <section className="bg-gray-200 flex flex-col px-8 py-3 h-screen">
            <div className="bg-white mx-auto w-96 h-96 flex flex-col rounded-md shadow-md mt-5 align-middle">
                <div className="text-center text-md font-bold mt-3">Sign up with your email</div>
                <div>
                    <form className="flex flex-col py-5 px-4">
                        <label htmlFor="nickname" className="font-bold text-sm">Nickname</label>
                        <input className="p-2 w-full border solid border-1 border-gray-300 rounded mb-2" type="text" name='nickname' value={inputs.nickname || ""} onChange={handleChange} required />
                        <label htmlFor="email" className="font-bold text-sm">Email</label>
                        <input className="p-2 w-full border solid border-1 border-gray-300 rounded mb-2" type="email" name='email' value={inputs.email || ""} onChange={handleChange} required />
                        <label htmlFor="password" className="font-bold text-sm">Password</label>
                        <input className="p-2 w-full border solid border-1 border-gray-300 rounded mb-5" type="password" name='password' value={inputs.password || ""} onChange={handleChange} required />
                        <button className="text-white bg-purple-400 border-2 border-solid border-gray-200 rounded p-2 font-bold hover:border-gray-300 hover:bg-purple-500" type='submit' onClick={handleSubmit}>Sign up</button>
                    </form>
                </div>
                <div className="px-4"><span>Already have an account?</span><span className="ml-1 text-blue-600 hover:underline"><Link to="/login">Log in</Link></span></div>
            </div>
            <div className='py-5 px-5'>
                {/* {errorMessage()} */}
            </div>
        </section>
    )
}

export default Signup;