import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { io } from 'socket.io-client';
import { useSession } from '../hooks/useSession';
import { ReactComponent as TrophyIcon } from '../assets/icons/trophy.svg';
import { ReactComponent as ArrowBackIcon } from '../assets/icons/arrow-back.svg';

const ENDPOINT = `${import.meta.env.VITE_APP_API_URL}`;

const socket = io(ENDPOINT);

function Questionnaire() {
    const [loading, setLoading] = useState(true);
    const [currentQuestion, setCurrentQuestion] = useState();
    const [isFinished, setIsFinished] = useState(false);
    const [gameConclusion, setGameConclusion] = useState();
    const [IsVictory, setIsVictory] = useState(false);
    const [IsLose, setIsLose] = useState(false);
    const { questionnaireId } = useParams();
    const navigate = useNavigate();

    const handleBack = (event) => {
        event.preventDefault();
        navigate('/game');
    };

    const onShowQuestionEvent = (question) => {
        setLoading(false);
        setCurrentQuestion(question);
    };

    const onShowGameConclusion = (gameConclusion) => {
        setIsFinished(true);
        setGameConclusion(gameConclusion);
    };

    const onShowGameVictory = () => {
        setIsFinished(true);
        setIsVictory(true);
    };

    const onShowGameLose = () => {
        setIsFinished(true);
        setIsLose(true);
    };

    useEffect(() => {
        socket.connect();
        socket.emit('initQuestionnaire', {
            questionnaireId: parseInt(questionnaireId),
        });
        socket.on('showQuestionEvent', onShowQuestionEvent);
        socket.on('showGameConclusion', onShowGameConclusion);
        socket.on('showGameVictory', onShowGameVictory);
        socket.on('showGameLose', onShowGameLose);
        return () => socket.disconnect();
    }, []);

    const currentAnswers = currentQuestion?.answers;
    const score = gameConclusion?.score;
    const numberOfQuestions = gameConclusion?.numberOfQuestions;
    const correctAnswers = gameConclusion?.correctAnswers;

    const answerQuestion = (event, index) => {
        socket.emit('getAnswerIndex', { answerIndex: index });
    };

    if (loading) {
        return (
            <div className="mx-auto my-auto">
                <span className="font-poppins text-gray-800 text-3xl">
                    Loading
                    <div className="mr-0.5 inline-block rounded-full animate-bounce bg-gray-800 w-[10px] h-[10px]" />
                    <div className="mr-0.5 inline-block rounded-full animate-[wiggle_1s_infinite] bg-gray-800 w-[10px] h-[10px]" />
                    <div className="inline-block rounded-full animate-[wiggle2_1s_infinite] bg-gray-800 w-[10px] h-[10px]" />
                </span>
            </div>
        );
    }

    if (isFinished) {
        if (IsVictory) {
            return (
                <section className="text-gray-800 font-poppins mx-auto md:mt-10 mt-2">
                    <div className="flex flex-col items-center">
                        <div className="relative w-[220px] h-[220px] md:w-[250px] md:h-[250px] flex justify-center items-center">
                            <div className="rounded-full animate-ping bg-green-500 w-[100px] h-[100px] mx-auto" />
                            <TrophyIcon className="absolute w-[250px] top-0" />
                        </div>
                        <h1 className="text-5xl font-extrabold text-center mt-5">
                            Victory
                        </h1>
                        <span className="mx-auto text-lg mt-2">
                            Your patient is{' '}
                            <span className="text-green-500 font-bold">
                                saved
                            </span>
                            !
                        </span>
                    </div>
                    <div className="mt-5 mx-auto text-lg flex flex-col">
                        <span className="text-md flex flex-row">
                            <span className="w-[250px] block">
                                Number of questions
                            </span>
                            <span className="ml-1 w-[50px] block text-center">
                                {numberOfQuestions}
                            </span>
                        </span>
                        <span className="text-md flex flex-row">
                            <span className="w-[250px] block">
                                Right answers
                            </span>
                            <span className="ml-1 w-[50px] block text-center">
                                {correctAnswers}
                            </span>
                        </span>
                        <hr className="h-[2px] w-full bg-gray-800 my-2 mx-auto" />
                        <span className="text-2xl flex flex-row font-black">
                            <span className="w-[250px] block">Score</span>
                            <span className="ml-1 text-green-500 w-[50px] block text-center">
                                {score}
                            </span>
                        </span>
                    </div>
                    <span className="flex items-center justify-center mt-14">
                        Thank You For Playing! ❤️
                    </span>
                </section>
            );
        } else {
            return (
                <section className="text-gray-800 font-poppins mx-auto mt-2 md:mt-10">
                    <div className="flex flex-col items-center">
                        <div className="relative w-[220px] h-[220px] md:w-[250px] md:h-[250px] flex justify-center items-center">
                            {/* <div className="rounded-full animate-pulse bg-red-500 w-[200px] h-[200px] mx-auto" />
                            <SadIcon className="absolute w-[250px] top-0" /> */}
                            <div className="mx-auto">
                                <span className="text-9xl">😭</span>
                            </div>
                            {/*  ☠️  */}
                        </div>
                        <h1 className="text-5xl font-extrabold text-center">
                            Game Over
                        </h1>
                        <span className="mx-auto text-lg mt-2">
                            Your patient is{' '}
                            <span className="text-red-500 font-bold">
                                kapoot
                            </span>
                            !
                        </span>
                    </div>
                    <div className="mt-5 mx-auto text-lg flex flex-col">
                        <span className="text-md flex flex-row">
                            <span className="w-[250px] block">
                                Number of questions
                            </span>
                            <span className="ml-1 w-[50px] block text-center">
                                {numberOfQuestions}
                            </span>
                        </span>
                        <span className="text-md flex flex-row">
                            <span className="w-[250px] block">
                                Right answers
                            </span>
                            <span className="ml-1 w-[50px] block text-center">
                                {correctAnswers}
                            </span>
                        </span>
                        <hr className="h-[2px] w-full bg-gray-800 my-2 mx-auto" />
                        <span className="text-2xl flex flex-row font-black">
                            <span className="w-[250px] block">Score</span>
                            <span className="ml-1 text-red-500 w-[50px] block text-center">
                                {score}
                            </span>
                        </span>
                    </div>
                    <span className="flex items-center justify-center mt-14">
                        Thank You For Playing! ❤️
                    </span>
                </section>
            );
        }
    }

    return (
        <section className="font-poppins text-gray-800">
            <div className="px-8 py-2 md:py-3 flex justify-between items-center">
                <button
                    className="my-3 h-[20px] w-[20px] md:w-[30px] md:h-[30px]"
                    onClick={handleBack}
                >
                    <ArrowBackIcon />
                </button>
            </div>

            <div className="flex flex-col px-8 md:py-3 py-2 items-center">
                <div className="md:mt-4">
                    <span className="font-bold md:text-3xl text-2xl">
                        {currentQuestion.title}
                    </span>
                </div>
                <div className="mt-6 md:mt-20 md:inline-grid md:grid-cols-2 md:gap-6 flex flex-col">
                    {currentAnswers.map((answer, index) => {
                        return (
                            <button
                                onClick={(event) =>
                                    answerQuestion(event, index)
                                }
                                className="rounded-md border border-gray-800 text-center p-6 md:p-10 transition-all duration-150 hover:ease-in hover:outline hover:border-gray-900 hover:bg-gray-100 mb-3"
                                key={`${currentQuestion.id}_${index}`}
                            >
                                {answer}
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Questionnaire;
