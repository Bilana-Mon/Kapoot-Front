import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSession } from '../hooks/useSession';

function Signup() {
    const { isLogged } = useSession();
    const [inputs, setInputs] = useState({});
    let navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        fetch('http://localhost:4000/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs),
        })
            .then(response => {
                navigate('/login');
            })
            .catch((error) => {
                console.log('error', error);
            })
    };

    useEffect(() => {
        if (isLogged) return navigate('/')
    }, [isLogged])
    return (
        <section className="bg-[#F5F2EA] flex flex-col px-8 py-56 h-screen text-gray-800 m-auto">
            <div className="bg-white mx-auto w-96 h-80 flex flex-col rounded-2xl shadow-md mt-5 align-middle">
                <div className="text-center text-md font-bold mt-3">Sign up with your email</div>
                <div className='mt-3'>
                    <form className="flex flex-col py-5 px-4">
                        <input className="p-2 w-full border solid border-1 border-gray-300 focus:outline-none focus:ring-1 focus:ring-slate-800 rounded-md mb-2" placeholder='Enter Nickname' autoComplete="nickname" type="text" name='nickname' value={inputs.nickname || ""} onChange={handleChange} required />
                        <input className="p-2 w-full border solid border-1 border-gray-300 focus:outline-none focus:ring-1 focus:ring-slate-800 rounded-md mb-2" placeholder='Enter Email' autoComplete="email" type="email" name='email' value={inputs.email || ""} onChange={handleChange} required />
                        <input className="p-2 w-full border solid border-1 border-gray-300 focus:outline-none focus:ring-1 focus:ring-slate-800 rounded-md mb-2" placeholder='Enter Password' autoComplete="new-password" type="password" name='password' value={inputs.password || ""} onChange={handleChange} required />
                        <button className="text-gray-800 bg-[#FDC886] hover:bg-[#F9B76C] rounded-md p-2 font-bold" type='submit' onClick={handleSubmit}>Sign up</button>
                    </form>
                </div>
                <div className="px-4"><span>Already have an account?</span><span className="ml-1 text-blue-600 hover:underline"><Link to="/login">Sign in</Link></span></div>
            </div>
        </section>
    )
}

export default Signup;