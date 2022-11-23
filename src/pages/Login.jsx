import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSession } from '../hooks/useSession';
import { ReactComponent as GoogleIcon } from '../assets/icons/google.svg';

function Login() {
    const { login, isLogged } = useSession();
    const [inputs, setInputs] = useState({
        nickname: '',
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
            `${import.meta.env.VITE_APP_API_URL}/auth/login`,
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

        login(jsonResponse.token, inputs.nickname);
    };

    const handleBackHome = () => {
        navigate('/');
    };

    useEffect(() => {
        isLogged && navigate('/');
    }, [isLogged]);
    return (
        <section className="bg-gray-100 flex flex-col min-h-screen text-gray-800">
            <header className="pl-1.5">
                <div className="my-2 h-12 " onClick={handleBackHome}>
                    <span className="font-bold font-rubik text-xl hover:cursor-pointer">
                        <span>Ka</span>
                        <span className="text-red-500">poot</span>
                    </span>
                </div>
            </header>
            <div className="bg-white mx-auto mt-5 w-fit h-[470px] flex flex-col rounded-2xl shadow-md align-middle font-poppins">
                <div className="text-center text-2xl font-bold mt-5">
                    Sign in
                </div>
                <div className="mt-3">
                    <form
                        className="flex flex-col px-4"
                        onSubmit={handleSubmit}
                    >
                        <input
                            className="p-2 w-full border solid border-1 border-gray-300 focus:outline-none focus:ring-1 focus:ring-slate-800 rounded-md mb-5"
                            type="text"
                            name="nickname"
                            placeholder="Enter Nickname"
                            autoComplete="nickname"
                            value={inputs.nickname}
                            onChange={handleChange}
                            required
                        />
                        <input
                            className="p-2 w-full border solid border-1 border-gray-300 focus:outline-none focus:ring-1 focus:ring-slate-800 rounded-md mb-2"
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            autoComplete="password"
                            value={inputs.password}
                            onChange={handleChange}
                            required
                        />

                        <span className="text-red-500 h-10 text-sm">
                            {msgError}
                        </span>

                        <button
                            className="text-gray-800 border border-gray-800 transform hover:bg-gray-800 hover:text-white rounded-full p-2 font-bold"
                            type="submit"
                        >
                            Sign in
                        </button>
                    </form>
                </div>

                <div className="my-1 p-3 flex w-full flex-row items-center justify-center">
                    <div className="h-[1px] w-full bg-gray-200"></div>
                    <div className="p-3 text-xs uppercase text-gray-400">
                        or
                    </div>
                    <div className="h-[1px] w-full bg-gray-200"></div>
                </div>

                <div className="px-4">
                    <a
                        href={`${
                            import.meta.env.VITE_APP_API_URL
                        }/auth/google/redirect`}
                        className="text-gray-800 border border-gray-800 transform hover:bg-gray-800 hover:text-white rounded-full p-2 font-bold flex items-center justify-center w-full"
                    >
                        {console.log(
                            'login redirect',
                            `${
                                import.meta.env.VITE_APP_API_URL
                            }/auth/google/redirect`
                        )}
                        <GoogleIcon className="mr-3 h-[20px] w-[20px]" />
                        Sign with Google
                    </a>
                </div>

                <div className="px-4 mb-5 text-sm mt-14">
                    <span>Don't have an account?</span>
                    <span className="ml-1 text-blue-600 hover:underline">
                        <Link to="/signup">Sign up</Link>
                    </span>
                </div>
            </div>
        </section>
    );
}

export default Login;
