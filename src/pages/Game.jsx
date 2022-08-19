import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSessionStore } from "../store";
import { io } from 'socket.io-client';
const ENDPOINT = "http://localhost:4000/";

function Game() {
    const socket = io(ENDPOINT);

    useEffect(() => {
        socket.connect();
        socket.connect(() => {
            console.log('connected');
        })
        socket.on('events', (data) => console.log(data));
        socket.on('getQuestion', (data) => console.log(data));
    }, []);

    return (
        <section className='bg-purple-300 px-8 py-3 min-h-screen'>
            <div className='flex justify-between'>
                <div className='font-bold font-rubik'>{sessionStore.user.nickname}</div>
                <div><span className='font-bold font-rubik'>Game Session</span>:<span className='ml-1 font-bold'>sid</span></div>
                <button onClick={() => {
                    socket.emit('getQuestion', { questionId: 1 })
                    socket.emit('getQuestion', { questionId: 2 })
                    console.log('send to ws')
                }}>send message</button>
            </div>
        </section>
    )
}

export default Game;
