import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { useSessionStore } from "../store";


function Questionnaire() {
    const sessionStore = useSessionStore();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const { questionnaireId } = useParams();
    // let navigate = useNavigate();

    useEffect(() => {
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
    const currentAnswers = data?.questions[currentQuestionIndex]?.answers;

    const answerQuestion = () => {
        const updateCurrentQuestionIndex = setCurrentQuestionIndex(currentQuestionIndex + 1);
        return updateCurrentQuestionIndex;
    }

    return (
        <section>
            <div className='flex flex-col h-full items-center'>
                <div className='mt-28'>
                    <span className='font-poppins font-bold text-2xl'>{currentQuestion}</span>
                </div>
                <div className='mt-28 flex'>
                    {currentAnswers.map((answer, index) => {
                        return <button onClick={() => answerQuestion()} className='ml-8 font-poppins font-bold text-xl rounded-md bg-red-300 p-2 hover:bg-red-400' key={index}>{answer}</button>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Questionnaire;
