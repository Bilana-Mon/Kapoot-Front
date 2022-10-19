import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { io } from 'socket.io-client';
import { useSession } from '../hooks/useSession';
const ENDPOINT = "http://localhost:4000/";

const socket = io(ENDPOINT);

function Questionnaire() {
    const { nickname } = useSession();
    const [loading, setLoading] = useState(true);
    const [currentQuestion, setCurrentQuestion] = useState();
    const [isFinished, setIsFinished] = useState(false);
    const [gameConclusion, setGameConclusion] = useState();
    const { questionnaireId } = useParams();
    let navigate = useNavigate();

    const onShowQuestionEvent = (question) => {
        setLoading(false);
        setCurrentQuestion(question);
    }

    const onShowGameConclusion = (gameConclusion) => {
        setIsFinished(true);
        setGameConclusion(gameConclusion);
    }

    useEffect(() => {
        socket.connect();
        socket.emit('initQuestionnaire', {
            questionnaireId: parseInt(questionnaireId)
        })
        socket.on('showQuestionEvent', onShowQuestionEvent);
        socket.on('showGameConclusion', onShowGameConclusion);
        return () => socket.disconnect();
    }, [])

    const currentAnswers = currentQuestion?.answers;

    const answerQuestion = (event, index) => {
        socket.emit('getAnswerIndex', { answerIndex: index });
    }

    if (loading) {
        return <span className='font-rubik text-red-500'>Loading<span className='animate-bounce'>.</span><span className='animate-bounce'>.</span><span className='animate-bounce'>.</span></span>
    }

    if (isFinished) {
        return <h1>{JSON.stringify(gameConclusion)}</h1>
    }

    return (
        <section>
            <div className='font-poppins bg-white text-slate-800 flex flex-col min-h-screen px-8 py-3 items-center'>
                <div>
                    <span>
                        <span className='font-poppins font-bold text-lg'>{nickname}</span>
                        {/* more player info here */}
                    </span>
                </div>
                <div className='mt-28'>
                    <span className='font-poppins font-bold text-2xl'>{currentQuestion.title}</span>
                </div>
                <div className='mt-28 inline-grid grid-cols-2 gap-6'>
                    {currentAnswers.map((answer, index) => {
                        return <button onClick={event => answerQuestion(event, index)} className="relative inline-flex items-center justify-center py-5 overflow-hidden outline-none text-md font-medium text-gray-800 rounded-md bg-[#FDC886] hover:bg-[#F9B76C]" key={index}>
                            <span className="font-rubik font-bold relative p-4 transition-all ease-in duration-75 rounded-md">
                                {answer}
                            </span>
                        </button>
                    })}




                </div>
            </div>
        </section>
    )
}

export default Questionnaire;
