import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useSession } from '../hooks/useSession'

function Login() {
    const { login, isLogged } = useSession()
    const [inputs, setInputs] = useState({
        nickname: '',
        password: '',
    })
    const navigate = useNavigate()

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs((values) => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:4000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs),
        })
            .then((response) => response.json())
            .then((data) => {
                login(data.token, inputs.nickname)
            })
            .catch((error) => {
                console.log('error', error)
            })
        console.log('youre logged!')
    }

    useEffect(() => {
        isLogged && navigate('/')
    }, [isLogged])
    return (
        <section className="bg-gray-100 flex flex-col h-screen text-gray-800 m-auto">
            <header className="pl-1.5">
                <div className="my-2 h-12">
                    <span className="font-bold text-xl">
                        <span className="font-poppins">Ka</span>
                        <span className="font-rubik text-red-500">poot</span>
                    </span>
                </div>
            </header>
            <div className="bg-white mx-auto my-auto w-96 h-80 flex flex-col rounded-2xl shadow-md align-middle font-poppins">
                <div className="text-center text-md font-bold mt-3">
                    Sign in
                </div>
                <div className="mt-3">
                    <form className="flex flex-col py-5 px-4">
                        <input
                            className="p-2 w-full border solid border-1 border-gray-300 focus:outline-none focus:ring-1 focus:ring-slate-800 rounded-md mb-2"
                            type="text"
                            name="nickname"
                            placeholder="Enter Nickname"
                            autoComplete="nickname"
                            value={inputs.nickname}
                            onChange={handleChange}
                            required
                        />
                        <input
                            className="p-2 w-full border solid border-1 border-gray-300 focus:outline-none focus:ring-1 focus:ring-slate-800 rounded-md mb-5"
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            autoComplete="password"
                            value={inputs.password}
                            onChange={handleChange}
                            required
                        />
                        <button
                            className="text-gray-800 border border-gray-800 transform hover:bg-gray-800 hover:text-white rounded-full p-2 font-bold"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Sign in
                        </button>
                    </form>
                </div>
                <div className="px-4">
                    <span>Don't have an account?</span>
                    <span className="ml-1 text-blue-600 hover:underline">
                        <Link to="/signup">Sign up</Link>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Login
