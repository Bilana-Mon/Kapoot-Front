import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { io } from 'socket.io-client';
const ENDPOINT = "http://localhost:4000/";

const socket = io(ENDPOINT);

function Questionnaire() {
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
                <div className='mt-28'>
                    <span className='font-poppins font-bold text-2xl'>{currentQuestion.title}</span>
                </div>
                <div className='mt-28 flex'>
                    {currentAnswers.map((answer, index) => {
                        return <button onClick={event => answerQuestion(event, index)} className="ml-1.5 relative inline-flex items-center justify-center mt-0.5 p-0.5 overflow-hidden text-md font-medium text-gray-800 rounded group bg-gradient-to-br from-red-500 to-orange-400 group-hover:from-red-500 group-hover:to-orange-400 hover:text-white focus:ring-0 focus:outline-none focus:ring-red-200" key={index}>
                            <span className="font-rubik font-bold relative px-2.5 py-0.5 transition-all ease-in duration-75 bg-white rounded group-hover:bg-opacity-0">
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
