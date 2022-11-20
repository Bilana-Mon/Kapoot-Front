import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSession } from '../hooks/useSession';

function Signup() {
    const { isLogged } = useSession();
    const [inputs, setInputs] = useState({
        nickname: '',
        email: '',
        password: '',
    });
    const [msgError, setMsgError] = useState();
    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(
            `${import.meta.env.VITE_APP_API_URL}/auth/signup`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputs),
            }
        );

        const jsonResponse = await response.json();

        if (!response.ok) {
            setMsgError(jsonResponse.message);
            return;
        }

        navigate('/login');
    };

    const handleBackHome = () => {
        navigate('/');
    };

    useEffect(() => {
        if (isLogged) return navigate('/');
    }, [isLogged]);
    return (
        <section className="bg-gray-100 flex flex-col min-h-screen text-gray-800">
            <header className="pl-1.5">
                <div className="my-2 h-12" onClick={handleBackHome}>
                    <span className="font-bold font-rubik text-xl hover:cursor-pointer">
                        <span>Ka</span>
                        <span className="text-red-500">poot</span>
                    </span>
                </div>
            </header>
            <div className="bg-white mx-auto mt-5 mb-5 md:w-96 h-[470px] flex flex-col rounded-2xl shadow-md align-middle font-poppins">
                <div className="text-center text-2xl font-bold mt-3">
                    Sign up with your email
                </div>
                <div className="mt-3">
                    <form
                        className="flex flex-col py-5 px-4"
                        onSubmit={handleSubmit}
                    >
                        <input
                            className="p-2 w-full border solid border-1 border-gray-300 focus:outline-none focus:ring-1 focus:ring-slate-800 rounded-md mb-2"
                            placeholder="Enter Nickname"
                            type="text"
                            autoComplete="nickname"
                            name="nickname"
                            value={inputs.nickname || ''}
                            onChange={handleChange}
                            required
                        />
                        <input
                            className="p-2 w-full border solid border-1 border-gray-300 focus:outline-none focus:ring-1 focus:ring-slate-800 rounded-md mb-2"
                            placeholder="Enter Email"
                            pattern="[A-Za-z0-9._+-]+@[A-Za-z0-9]+\.[a-z]{2,}"
                            title="Please enter a valid email address"
                            type="email"
                            autoComplete="email"
                            name="email"
                            value={inputs.email || ''}
                            onChange={handleChange}
                            required
                        />
                        <input
                            className="p-2 w-full border solid border-1 border-gray-300 focus:outline-none focus:ring-1 focus:ring-slate-800 rounded-md mb-2"
                            placeholder="Enter Password"
                            type="password"
                            autoComplete="new-password"
                            name="password"
                            value={inputs.password || ''}
                            onChange={handleChange}
                            required
                        />
                        <span className="text-red-500 h-10 text-sm">
                            {msgError}
                        </span>
                        <button
                            className="text-gray-800 border border-gray-800 hover:bg-gray-800 hover:text-white rounded-full p-2 font-bold"
                            type="submit"
                        >
                            Sign up
                        </button>
                    </form>
                </div>

                <div className="px-4 mb-5 text-sm mt-auto">
                    <span>Already have an account?</span>
                    <span className="ml-1 text-blue-600 hover:underline">
                        <Link to="/login">Sign in</Link>
                    </span>
                </div>
            </div>
        </section>
    );
}

export default Signup;
