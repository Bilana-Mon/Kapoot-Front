import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {useSessionStore} from "../store";

function Game() {

    const sessionStore = useSessionStore();

    return (
        <section className='bg-purple-300 px-8 py-3 h-screen'>
            <div className='flex justify-between'>
            <div>{sessionStore.user.nickname}</div>
            <div><span>Game PIN</span>:<span className='ml-1'>some PIN</span></div>
            </div>
        </section>
    )
}

export default Game;
