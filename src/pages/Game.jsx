import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSessionStore } from "../store";

function Game() {

    const sessionStore = useSessionStore();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();


    useEffect(() => {
        const getQuestionnaire = async () => {
            setLoading(true);
            await new Promise(resolve => setTimeout(resolve, 2000));
            const res = await fetch('http://localhost:4000/questionnaire/8', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${sessionStore.accessToken}`
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

    return (
        <section className='bg-purple-300 px-8 py-3 h-screen'>
            <div className='flex justify-between'>
                <div className='font-bold'>{sessionStore.user.nickname}</div>
                <div><span>Game PIN</span>:<span className='ml-1 font-bold'>some PIN</span></div>
            </div>
            <div className='flex flex-col h-full'>
                <div >{currentQuestion}</div>
                <div className='flex flex-col'>
                    {currentAnswers.map((answer, index) => {
                        return <button key={index}>{answer}</button>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Game;
