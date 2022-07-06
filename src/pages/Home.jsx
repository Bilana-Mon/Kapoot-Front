import { useState } from 'react';
import { Link } from "react-router-dom";

function Home() {

  return (
      <div className='bg-cyan-300'>
        <Link to="/signup">Signup</Link>
        <div className='bg-cyan-300'>Welcome, user!</div>
      </div>
  )
}

export default Home;
