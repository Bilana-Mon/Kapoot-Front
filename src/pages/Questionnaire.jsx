import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { io } from 'socket.io-client'
import { ReactComponent as TrophyIcon } from '../assets/icons/trophy.svg'
import { ReactComponent as SadIcon } from '../assets/icons/sad.svg'
import { ReactComponent as ArrowBackIcon } from '../assets/icons/arrow-back.svg'

const ENDPOINT = 'http://localhost:4000/'

const socket = io(ENDPOINT)

function Questionnaire() {
    const [loading, setLoading] = useState(true)
    const [currentQuestion, setCurrentQuestion] = useState()
    const [isFinished, setIsFinished] = useState(false)
    const [gameConclusion, setGameConclusion] = useState()
    const [IsVictory, setIsVictory] = useState(false)
    const [IsLose, setIsLose] = useState(false)
    const { questionnaireId } = useParams()
    const navigate = useNavigate()

    const handleBack = (event) => {
        event.preventDefault()
        navigate('/game')
    }

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
                <section className="text-slate-700 font-poppins mx-auto mt-2 mb-5">
                    <div className="flex flex-col items-center">
                        <div className="relative w-[250px] h-[250px] flex justify-center items-center">
                            <div className="rounded-full animate-ping bg-green-500 w-[100px] h-[100px] mx-auto" />
                            <TrophyIcon className="absolute w-[250px] top-0" />
                        </div>
                        <h1 className="text-5xl font-extrabold text-center">
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
                </section>
            )
        } else {
            return (
                <section className="text-slate-700 font-poppins mx-auto mt-2 mb-5">
                    <div className="flex flex-col items-center">
                        <div className="relative w-[250px] h-[250px] flex justify-center items-center">
                            <div className="rounded-full animate-pulse bg-red-500 w-[200px] h-[200px] mx-auto" />
                            <SadIcon className="absolute w-[250px] top-0" />
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
                </section>
            )
        }
    }

    return (
        <section className="font-poppins text-slate-700">
            <div className="px-8 py-3">
                <button onClick={handleBack}>
                    <ArrowBackIcon />
                </button>
            </div>

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
