import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowBackIcon } from '../assets/icons/arrow-back.svg';

function Game() {
    const navigate = useNavigate();

    const handleEasyDifficultyLevel = (event) => {
        event.preventDefault();
        navigate('/questionnaire/10');
    };
    const handleHardDifficultyLevel = (event) => {
        event.preventDefault();
        navigate('/questionnaire/11');
    };
    const handleExtremeDifficultyLevel = (event) => {
        event.preventDefault();
        navigate('/questionnaire/12');
    };

    const handleBack = (event) => {
        event.preventDefault();
        navigate('/lobby');
    };

    return (
        <section className="font-poppins text-gray-800 px-8 py-3">
            <button
                className="my-3 h-[20px] w-[20px] md:w-[30px] md:h-[30px]"
                onClick={handleBack}
            >
                <ArrowBackIcon />
            </button>
            <div className="flex flex-col h-full items-center md:mt-24 mt-16">
                <h1 className="font-bold md:text-xl text-2xl">
                    One moment... What kind of a doctor are you?
                </h1>
                <div className="mx-auto inline-grid grid-cols-1 gap-3 md:flex md:justify-evenly md:mt-20 mt-16">
                    <button
                        onClick={handleEasyDifficultyLevel}
                        className="bg-gray-800 uppercase font-extrabold  rounded-full text-white w-52 h-10 items-center justify-center p-0.5 overflow-hidden text-md transform hover:scale-110 "
                    >
                        Medical Student
                    </button>
                    <button
                        onClick={handleHardDifficultyLevel}
                        className="bg-gray-800 uppercase font-extrabold  rounded-full text-white w-52 h-10 items-center justify-center p-0.5 overflow-hidden text-md transform hover:scale-110 "
                    >
                        Chief Resident
                    </button>
                    <button
                        onClick={handleExtremeDifficultyLevel}
                        className="bg-gray-800 uppercase font-extrabold  rounded-full text-white w-52 h-10 items-center justify-center p-0.5 overflow-hidden text-md transform hover:scale-110 "
                    >
                        Attending Physician
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Game;
