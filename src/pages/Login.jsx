import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSession } from '../hooks/useSession';


function Login() {

    const { login, isLogged } = useSession();
    const [inputs, setInputs] = useState({
        nickname: "",
        password: ""
    });
    const navigate = useNavigate();


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
                login(data.token, inputs.nickname);
            })
            .catch((error) => {
                console.log('error', error);
            })
        console.log('youre logged!');
    };

    useEffect(() => {
        isLogged && navigate('/')
    }, [isLogged])
    return (
        <section className="bg-[#F5F2EA] flex flex-col px-8 py-56 h-screen text-gray-800 m-auto">
            <div className="bg-white mx-auto w-96 h-80 flex flex-col rounded-2xl shadow-md mt-5 align-middle">
                <div className="text-center text-md font-bold mt-3">Log in</div>
                <div className='mt-3'>
                    <form className="flex flex-col py-5 px-4">
                        <input className="p-2 w-full border solid border-1 border-gray-300 rounded-md mb-2" type="text" name='nickname' placeholder='Enter Email' autoComplete="nickname" value={inputs.nickname} onChange={handleChange} required />
                        <input className="p-2 w-full border solid border-1 border-gray-300 rounded-md mb-5" type="password" name='password' placeholder='Enter Password' autoComplete="password" value={inputs.password} onChange={handleChange} required />
                        <button className="text-gray-800 bg-[#FDC886] hover:bg-[#F9B76C] rounded-md p-2 font-bold" type='submit' onClick={handleSubmit}>Log in</button>
                    </form>
                </div>
                <div className="px-4"><span>Don't have an account?</span><span className="ml-1 text-blue-600 hover:underline"><Link to="/signup">Sign up</Link></span></div>
            </div>
        </section>
    )
}

export default Login;