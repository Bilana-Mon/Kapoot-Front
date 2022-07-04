import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Signup() {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };


    return (
        <section className="flex flex-col px-8 py-3">
            <div className="text-center"><h1 className="text-lg font-bold">Create an account</h1></div>
            <div className="mx-auto w-96 h-screen flex flex-col rounded-md shadow-md mt-5 align-middle">
                <div className="text-center text-md font-bold">Sign up with your email</div>
                <div>
                    <form onSubmit={handleSubmit} className="flex flex-col py-5 px-4">
                        <label htmlFor="nickname" className="font-bold text-sm">Nickname</label>
                        <input className="p-2 w-full border solid border-1 border-gray-300 rounded mb-2" type="text" name='nickname' value={inputs.nickname || ""} onChange={handleChange} />
                        <label htmlFor="email" className="font-bold text-sm">Email</label>
                        <input className="p-2 w-full border solid border-1 border-gray-300 rounded mb-2" type="email" name='email' value={inputs.email || ""} onChange={handleChange} />
                        <label htmlFor="password" className="font-bold text-sm">Password</label>
                        <input className="p-2 w-full border solid border-1 border-gray-300 rounded mb-5" type="password" name='password' value={inputs.password || ""} onChange={handleChange} />
                        <button className="border-2 border-solid border-gray-200 rounded p-2 font-bold hover:border-gray-300" type='submit'>Sign up</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Signup;