import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSessionStore } from "../store";


function Game() {


    return (
        <section className='bg-purple-300 px-8 py-3 min-h-screen'>
            <div className='flex justify-between'>
                <div className='font-bold font-rubik'>{sessionStore.user.nickname}</div>
                <div><span className='font-bold font-rubik'>Game Session</span>:<span className='ml-1 font-bold'>sid</span></div>
                <button onClick={() => {
                   
                    console.log('send to ws')
                }}>send message</button>
            </div>
        </section>
    )
}

export default Game;
