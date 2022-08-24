import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { useSessionStore } from "../store";
import { io } from 'socket.io-client';
const ENDPOINT = "http://localhost:4000/";


function Questionnaire() {
    const socket = io(ENDPOINT);


    const sessionStore = useSessionStore();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const { questionnaireId } = useParams();
    // let navigate = useNavigate();

    useEffect(() => {
        socket.connect();
        socket.connect(() => {
            console.log('connected');
        });
        socket.on('getQuestion', (data) => console.log(data));
        socket.on('getAnswerIndex', (data) => console.log(data));
        socket.on('events', (data) => console.log(data));
        const getQuestionnaire = async () => {
            setLoading(true);
            await new Promise(resolve => setTimeout(resolve, 2000));
            const res = await fetch(`http://localhost:4000/questionnaire/${questionnaireId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const resData = await res.json();
            setData(resData);
            setLoading(false);
        }
        getQuestionnaire();
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }

    const currentQuestion = data?.questions[currentQuestionIndex]?.title;
    const currentQuestionId = data?.questions[currentQuestionIndex]?.id;
    const currentAnswers = data?.questions[currentQuestionIndex]?.answers;

    const answerQuestion = (event, index) => {
        socket.emit('getQuestion', { questionId: currentQuestionId })
        console.log(currentQuestionId);
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        socket.emit('getAnswerIndex', { questionId: currentQuestionId, answerIndex: index });
        console.log(event.target);
        console.log(index);
    }

    return (
        <section>
            <div className='flex flex-col h-full items-center'>
                <div className='mt-28'>
                    <span className='font-poppins font-bold text-2xl'>{currentQuestion}</span>
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
