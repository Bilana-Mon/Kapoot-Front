import React from 'react';
import { Link } from "react-router-dom";
import { useSessionStore } from '../store';
import UserMenuItems from '../cmps/UserMenuItems';


function Header() {
    const { isLogged } = useSessionStore(store => ({ isLogged: store.isLogged}));

    return (
        <header className='bg-gray-600 h-12 w-full text-white absolute top-0 left-0 pt-2 px-2 rounded-b-md flex justify-between'>
            <div className='h-12'><span className='font-bold text-xl'><span className='font-poppins'>Ka</span><span className='font-rubik text-purple-400'>poot</span></span></div>
            <nav className='flex pb-2'>
                {isLogged ?
                    <UserMenuItems /> : <Link to={'/login'}><button className='font-rubik ml-1 shadow-lg border-1 border-solid bg-gray-400 rounded font-bold hover:border-gray-300 hover:bg-purple-400 hover:text-black p-1'>SIGN IN</button></Link>
                }
            </nav>
        </header>
    )
}

export default Header;