import { useState } from 'react';
import { Link } from "react-router-dom";

function Home() {

  return (
      <div className='flex justify-between px-8 py-3 h-screen'>
        <Link to="/lobby">Join Game</Link>
        <Link to="/create-game">Create Game</Link>
        <Link to="/signup">Signup</Link>
      </div>
  )
}

export default Home;
