import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {useSessionStore} from "../store";

function Game() {

    const sessionStore = useSessionStore();
    console.log(sessionStore.accessToken);

    const getQuestionnaire = () => {
        fetch('http://localhost:4000/questionnaire/8', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStore.accessToken}`
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log('here is the data', data);
            })
            .catch((error) => {
                console.log('error', error);
            })
    };
    getQuestionnaire();

    return (
        <section className='bg-purple-300 px-8 py-3 h-screen'>
            <div className='flex justify-between'>
            <div>{sessionStore.user.nickname}</div>
            <div></div>
            <div><span>Game PIN</span>:<span className='ml-1'>some PIN</span></div>
            </div>
        </section>
    )
}

export default Game;
