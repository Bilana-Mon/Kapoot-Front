import { React } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowBackIcon } from '../assets/icons/arrow-back.svg'

function Lobby() {
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        navigate('/game')
    }

    const handleBack = (event) => {
        event.preventDefault()
        navigate('/')
    }

    return (
        <section className="bg-white font-poppins text-slate-700 px-8 py-3 flex flex-col mb-3">
            <button onClick={handleBack}>
                <ArrowBackIcon />
            </button>

            <div className="flex flex-col">
                <h1 className="mx-auto font-black text-xl mb-4">
                    What Are The Rules?
                </h1>
                <span className="mx-auto  text-sm">
                    You will get a questionnaire consisting of several medical
                    questions.
                </span>
                <span className="mx-auto  text-sm">
                    If you answer right{' '}
                    <span className=" text-base text-red-500">70%</span> of the
                    questions:
                </span>
            </div>
            <div className="flex mx-auto mt-8">
                <div className="flex flex-col w-56 h-min rounded-md border border-gray-800 text-center p-3">
                    <h1 className="mx-auto  font-bold text-lg mb-4">
                        Your Patient Is{' '}
                        <span className="font-bold text-red-500">Saved</span>!
                    </h1>
                    <iframe src="https://embed.lottiefiles.com/animation/103002"></iframe>
                </div>
                <div className="flex text-left font-bold  text-base">
                    <span className="mx-10">If Not...</span>
                </div>
                <div className="flex flex-col w-56 h-min rounded-md border border-gray-800 text-center p-3">
                    <h1 className="mx-auto  font-bold text-lg mb-4">
                        Your Patient Is{' '}
                        <span className=" font-bold text-red-500">Kapoot</span>!
                    </h1>
                    {/* <img
                        className="mx-auto w-30"
                        src="src\assets\gifs\your-dead.gif"
                    /> */}
                    <iframe src="https://embed.lottiefiles.com/animation/82054"></iframe>
                </div>
            </div>
            <div className="flex mx-auto mt-10">
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className=" bg-gray-800 uppercase font-extrabold rounded-full text-white w-52 h-10 items-center justify-center p-0.5 overflow-hidden text-md transform hover:scale-110"
                >
                    I Got it
                </button>
            </div>
        </section>
    )
}

export default Lobby
