import { React, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSession } from '../hooks/useSession';
import { ReactComponent as ArrowBackIcon } from '../assets/icons/arrow-back.svg';
import Baymax from '../assets/gifs/baymax-robo-medic.gif';
import DeathAngel from '../assets/gifs/your-dead.gif';

function Lobby() {
    const navigate = useNavigate();
    const { isLogged } = useSession();
    const { setNickname } = useSession();

    const setNotLoggedUserNickname = () => {
        if (!isLogged) {
            setNickname('');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/game');
    };

    const handleBack = (event) => {
        event.preventDefault();
        setNotLoggedUserNickname();

        navigate('/');
    };

    return (
        <section className="bg-white font-poppins text-gray-800 md:px-8 md:py-3 px-5 py-2 flex flex-col mb-3">
            <button
                className="my-3 h-[20px] w-[20px] md:w-[30px] md:h-[30px]"
                onClick={handleBack}
            >
                <ArrowBackIcon />
            </button>

            <div className="md:flex md:flex-col mx-auto">
                <h1 className="mx-auto font-black md:text-xl text-2xl mt-2.5 mb-4">
                    What Are The Rules?
                </h1>
                <span className="mx-auto  md:text-md text-lg">
                    You will get a questionnaire consisting of several medical
                    questions.
                </span>
                <span className="mx-auto ml-0.5 md:text-md text-lg">
                    If you answer right{' '}
                    <span className=" text-base text-red-500">70%</span> of the
                    questions:
                </span>
            </div>
            <div className="md:flex max-sm:flex-col mx-auto mt-8">
                <div className="flex flex-col w-56 h-min rounded-md border border-gray-800 text-center p-3">
                    <h1 className="mx-auto  font-bold md:text-lg text-xl mb-4">
                        Your Patient Is{' '}
                        <span className="font-bold text-red-500">Saved</span>!
                    </h1>
                    <img
                        className="mx-auto h-[100px] md:h-[200px]"
                        src={Baymax}
                    />
                </div>
                <div className="md:flex text-left font-bold md:mx-10 mx-20 my-3 md:my-auto md:text-base text-xl">
                    <span className="">If Not...</span>
                </div>
                <div className="flex flex-col w-56 h-min rounded-md border border-gray-800 text-center p-3">
                    <h1 className="mx-auto  font-bold md:text-lg text-xl mb-4">
                        Your Patient Is{' '}
                        <span className=" font-bold text-red-500">Kapoot</span>!
                    </h1>
                    <img
                        className="mx-auto h-[100px] md:h-[200px]"
                        src={DeathAngel}
                    />
                </div>
            </div>
            <div className="flex mx-auto mt-10">
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="bg-gray-800 uppercase font-extrabold rounded-full text-white w-52 h-10 items-center justify-center p-0.5 overflow-hidden md:text-md text-lg transform hover:scale-110"
                >
                    I Got it
                </button>
            </div>
        </section>
    );
}

export default Lobby;
