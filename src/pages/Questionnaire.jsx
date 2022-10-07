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
        socket.on('showGameConclusion',onShowGameConclusion);
        return () => socket.disconnect();
    }, [])

    const currentAnswers = currentQuestion?.answers;

    const answerQuestion = (event, index) => {
        socket.emit('getAnswerIndex', { answerIndex: index });
    }

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (isFinished) {
        return <h1>{JSON.stringify(gameConclusion)}</h1>
    }

    return (
        <section>
            <div className='flex flex-col h-full items-center'>
                <div className='mt-28'>
                    <span className='font-poppins font-bold text-2xl'>{currentQuestion.title}</span>
                </div>
                <div className='mt-28 flex'>
                    {currentAnswers.map((answer, index) => {
                        return <button onClick={event => answerQuestion(event, index)} className='ml-8 font-poppins font-bold text-xl rounded-md bg-red-300 p-2 hover:bg-red-400' key={index}>{answer}</button>
                    })}

                </div>
            </div>
        </section>
    )
}

export default Questionnaire;
