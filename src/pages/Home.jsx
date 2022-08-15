import { useState } from 'react';
import { Link } from "react-router-dom";
import { useSessionStore } from '../store'

function Home() {
  const sessionStore = useSessionStore();
  return (
    <section className='px-8 py-3 h-screen'>
      <header className='bg-gray-600 h-12 w-full text-white absolute top-0 left-0 pt-2 px-2 rounded-b-md flex justify-between'>
        <div className='h-12'><span className='font-bold text-xl'><span className='font-poppins'>Ka</span><span className='font-rubik text-purple-400'>poot</span></span></div>
        <nav className='flex pb-2'>
          <button className='font-rubik shadow-lg border-1 border-solid bg-gray-400 rounded font-bold hover:border-gray-300 hover:bg-gray-800 p-1'><Link to="/lobby">JOIN GAME</Link></button>
          {/* <span> <Link to="/create-game">Create Game</Link></span> */}
          <button className='font-rubik ml-1 shadow-lg border-1 border-solid bg-gray-400 rounded font-bold hover:border-gray-300 hover:bg-purple-400 hover:text-black p-1'><Link to="/login">SIGN IN</Link></button>
        </nav>
      </header>
      <main className='min-h-full'></main>
      <footer className='bg-gray-600 h-12 w-full text-white fixed bottom-0 left-0 pt-2 px-2 rounded-t-md text-center'><span className='align-middle'>&copy;coffeerights 2022</span></footer>
    </section>
  )
}

export default Home;
