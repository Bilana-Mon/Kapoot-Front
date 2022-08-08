import { useState } from 'react';
import { Link } from "react-router-dom";
import {useSessionStore} from '../store'

function Home() {
  const sessionStore = useSessionStore();
  return (
      <div className='flex justify-between px-8 py-3 h-screen'>
                    <h1>{sessionStore.isLogged}</h1>
                    <h1>{sessionStore.user.nickname}</h1>
        <Link to="/lobby">Join Game</Link>
        {/* <Link to="/create-game">Create Game</Link> */}
        <Link to="/signup">Signup</Link>
      </div>
  )
}

export default Home;
