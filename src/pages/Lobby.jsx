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
        <section className="bg-white font-poppins text-slate-700 md:px-8 md:py-3 px-5 py-2 flex flex-col mb-3">
            <button className="mb-3" onClick={handleBack}>
                <ArrowBackIcon />
            </button>

            <div className="md:flex md:flex-col mx-auto">
                <h1 className="mx-auto font-black text-xl mb-4">
                    What Are The Rules?
                </h1>
                <span className="mx-auto  text-md">
                    You will get a questionnaire consisting of several medical
                    questions.
                </span>
                <span className="mx-auto  text-md">
                    If you answer right{' '}
                    <span className=" text-base text-red-500">70%</span> of the
                    questions:
                </span>
            </div>
            <div className="md:flex max-sm:flex-col mx-auto mt-8">
                <div className="flex flex-col w-56 h-min rounded-md border border-gray-800 text-center p-3">
                    <h1 className="mx-auto  font-bold text-lg mb-4">
                        Your Patient Is{' '}
                        <span className="font-bold text-red-500">Saved</span>!
                    </h1>
                    <iframe src="https://embed.lottiefiles.com/animation/103002"></iframe>
                </div>
                <div className="md:flex text-left font-bold md:mx-10 mx-20 my-3 md:my-auto text-base">
                    <span className="">If Not...</span>
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
