import React from 'react';
import Header from '../cmps/Header';
import Main from '../cmps/Main-Homepage';
import Footer from '../cmps/Footer';

function Home() {

  return (
    <section className='bg-white text-slate-700 px-8 py-3 min-h-screen relative'>
      <Header />
      <Main />
      <Footer />
    </section>
  )
}

export default Home;
