import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'
import { io } from 'socket.io-client'
import { useSession } from '../hooks/useSession'
const ENDPOINT = 'http://localhost:4000/'

const socket = io(ENDPOINT)

function Questionnaire() {
    const { nickname } = useSession()
    const [loading, setLoading] = useState(true)
    const [currentQuestion, setCurrentQuestion] = useState()
    const [isFinished, setIsFinished] = useState(false)
    const [gameConclusion, setGameConclusion] = useState()
    const { questionnaireId } = useParams()
    let navigate = useNavigate()

    const onShowQuestionEvent = (question) => {
        setLoading(false)
        setCurrentQuestion(question)
    }

    const onShowGameConclusion = (gameConclusion) => {
        setIsFinished(true)
        setGameConclusion(gameConclusion)
    }

    useEffect(() => {
        socket.connect()
        socket.emit('initQuestionnaire', {
            questionnaireId: parseInt(questionnaireId),
        })
        socket.on('showQuestionEvent', onShowQuestionEvent)
        socket.on('showGameConclusion', onShowGameConclusion)
        return () => socket.disconnect()
    }, [])

    const currentAnswers = currentQuestion?.answers

    const answerQuestion = (event, index) => {
        socket.emit('getAnswerIndex', { answerIndex: index })
    }

    if (loading) {
        return (
            <span className="font-rubik text-red-500">
                Loading<span className="animate-bounce">.</span>
                <span className="animate-bounce">.</span>
                <span className="animate-bounce">.</span>
            </span>
        )
    }

    if (isFinished) {
        return <h1>{JSON.stringify(gameConclusion)}</h1>
    }

    return (
        <section className="font-poppins text-slate-700">
            <div className=" flex flex-col px-8 py-3 items-center">
                <div>
                    <span>{/* more player info here */}</span>
                </div>
                <div className="mt-6">
                    <span className="font-bold text-3xl">
                        {currentQuestion.title}
                    </span>
                </div>
                <div className="mt-20 inline-grid grid-cols-2 gap-6">
                    {currentAnswers.map((answer, index) => {
                        return (
                            <button
                                onClick={(event) =>
                                    answerQuestion(event, index)
                                }
                                className="rounded-md border border-gray-800 text-center p-10 transition-all duration-150 hover:ease-in hover:outline hover:border-gray-900 hover:bg-gray-100 "
                                key={index}
                            >
                                {answer}
                            </button>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Questionnaire
