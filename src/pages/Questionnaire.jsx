import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'
import { io } from 'socket.io-client'
import { useSession } from '../hooks/useSession'
import { ReactComponent as TrophyIcon } from '../assets/icons/trophy.svg'
const ENDPOINT = 'http://localhost:4000/'

const socket = io(ENDPOINT)

function Questionnaire() {
    const { nickname } = useSession()
    const [loading, setLoading] = useState(true)
    const [currentQuestion, setCurrentQuestion] = useState()
    const [isFinished, setIsFinished] = useState(false)
    const [gameConclusion, setGameConclusion] = useState()
    const [IsVictory, setIsVictory] = useState(false)
    const [IsLose, setIsLose] = useState(false)
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

    const onShowGameVictory = () => {
        setIsFinished(true)
        setIsVictory(true)
    }

    const onShowGameLose = () => {
        setIsFinished(true)
        setIsLose(true)
    }

    useEffect(() => {
        socket.connect()
        socket.emit('initQuestionnaire', {
            questionnaireId: parseInt(questionnaireId),
        })
        socket.on('showQuestionEvent', onShowQuestionEvent)
        socket.on('showGameConclusion', onShowGameConclusion)
        socket.on('showGameVictory', onShowGameVictory)
        socket.on('showGameLose', onShowGameLose)
        return () => socket.disconnect()
    }, [])

    const currentAnswers = currentQuestion?.answers
    const score = gameConclusion?.score
    const numberOfQuestions = gameConclusion?.numberOfQuestions
    const correctAnswers = gameConclusion?.correctAnswers

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
        if (IsVictory) {
            return (
                <section className="text-slate-700 font-poppins mx-auto mt-5">
                    <div className="mt-5 flex flex-col items-center">
                        <div className="relative w-[250px] h-[250px] flex justify-center items-center">
                            <div className="rounded-full animate-ping bg-green-500 w-[100px] h-[100px] mx-auto" />
                            <TrophyIcon className="absolute w-[250px] top-0" />
                        </div>
                        <h1 className="text-5xl font-extrabold text-center">
                            Victory
                        </h1>
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
                        <hr className="h-[2px] w-full bg-gray-800 my-2" />
                        <span className="text-2xl flex flex-row font-black">
                            <span className="w-[250px] block">Score</span>
                            <span className="ml-1 text-green-500 w-[50px] block text-center">
                                {score}
                            </span>
                        </span>
                    </div>
                </section>
            )
        } else {
            return <h1>You Loser!</h1>
        }
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
