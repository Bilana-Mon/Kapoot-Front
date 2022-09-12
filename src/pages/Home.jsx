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
    setInputs(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sessionStore.user.nickname = inputs.nickname
    navigate('/game')
  }

  return (
    <section className='px-8 py-3 min-h-screen relative'>
      <header className='bg-gray-600 h-12 w-full text-white absolute top-0 left-0 pt-2 px-2 rounded-b-md flex justify-between'>
        <div className='h-12'><span className='font-bold text-xl'><span className='font-poppins'>Ka</span><span className='font-rubik text-purple-400'>poot</span></span></div>
        <nav className='flex pb-2'>
          <button className='font-rubik ml-1 shadow-lg border-1 border-solid bg-gray-400 rounded font-bold hover:border-gray-300 hover:bg-purple-400 hover:text-black p-1'>SIGN IN</button>
        </nav>
      </header>
      <main className='mt-8 min-h-full'>
        <div className='mx-auto flex flex-col align-middle text-center'>
          <h1 className='font-poppins font-bold mb-0.5'>Can you <span className='font-rubik text-purple-400 text-lg'>save</span> the patient or is he <span className='font-rubik text-purple-400 text-lg mr-0.5'>kapoot</span>?</h1>
          <span className='font-poppins font-bold text-sm'>Answer all the questions right and be the doctor the world needs!</span>
          <img className='mx-auto w-40' src="src\assets\gifs\patient-home-page.gif" />
        </div>
        <div className='bg-white mx-auto w-64 h-min flex flex-col rounded-md shadow-md align-middle text-center'>
          <form className="flex flex-col py-5 px-4">
            <input className="p-2 w-full border solid border-1 border-gray-300 rounded mb-2 text-center" placeholder='Enter Nickname here' type="text" name='nickname' value={inputs.nickname || ''} onChange={handleChange} required />
            <button className="font-rubik border-2 border-solid bg-gray-300 border-gray-200 rounded p-2 font-bold hover:border-gray-300 hover:bg-gray-800 hover:text-white" type='submit' onClick={handleSubmit}><Link to="/lobby">START</Link></button>
          </form>
        </div>
      </main>
      <footer className='bg-gray-600 text-white bottom-0 left-0 absolute w-full h-12 py-3 px-5 rounded-t-md text-center'><span className='align-middle'>&copy;coffeerights 2022</span></footer>
    </section>
  )
}

export default Home;
