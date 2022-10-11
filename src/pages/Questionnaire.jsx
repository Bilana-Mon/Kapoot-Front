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
            <div className='font-poppins bg-white dark:bg-slate-800 text-slate-700 dark:text-white flex flex-col min-h-screen px-8 py-3 items-center'>
                <div className='mt-28'>
                    <span className='font-poppins font-bold text-2xl'>{currentQuestion.title}</span>
                </div>
                <div className='mt-28 flex'>
                    {currentAnswers.map((answer, index) => {
                        return <button onClick={event => answerQuestion(event, index)} className='font-rubik text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"' key={index}>{answer}</button>
                    })}

                </div>
            </div>
        </section>
    )
}

export default Questionnaire;
