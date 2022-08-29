import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useSessionStore } from '../store';



function Home() {
  const sessionStore = useSessionStore();
  const [inputs, setInputs] = useState({});
  let navigate = useNavigate();


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    sessionStore.user.nickname = setInputs(values => ({ ...values, [name]: value }))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/questionnaire/8')
  }

  return (
    <section className='px-8 py-3 h-screen'>
      <header className='bg-gray-600 h-12 w-full text-white absolute top-0 left-0 pt-2 px-2 rounded-b-md flex justify-between'>
        <div className='h-12'><span className='font-bold text-xl'><span className='font-poppins'>Ka</span><span className='font-rubik text-purple-400'>poot</span></span></div>
        <nav className='flex pb-2'>
          {/* <span> <Link to="/create-game">Create Game</Link></span> */}
          <button className='font-rubik ml-1 shadow-lg border-1 border-solid bg-gray-400 rounded font-bold hover:border-gray-300 hover:bg-purple-400 hover:text-black p-1'>SIGN IN</button>
        </nav>
      </header>
      <main className='mt-10 min-h-full'>
        <div className='bg-white mx-auto w-64 h-86 flex flex-col rounded-md shadow-md my-36 align-middle text-center'>
          <form className="flex flex-col py-5 px-4">
            <input className="p-2 w-full border solid border-1 border-gray-300 rounded mb-2 text-center" placeholder='Enter Nickname here' type="text" name='nickname' value={inputs.nickname || ""} onChange={handleChange} required />
            <button className="font-rubik border-2 border-solid bg-gray-300 border-gray-200 rounded p-2 font-bold hover:border-gray-300 hover:bg-gray-800 hover:text-white" type='submit' onClick={handleSubmit}><Link to="/lobby">JOIN GAME</Link></button>
          </form>
        </div>
      </main>
      <footer className='bg-gray-600 h-12 w-full text-white fixed bottom-0 left-0 pt-2 px-2 rounded-t-md text-center'><span className='align-middle'>&copy;coffeerights 2022</span></footer>
    </section>
  )
}

export default Home;
