import React from 'react';
import { Link } from "react-router-dom";
import UserMenuItems from '../cmps/UserMenuItems';
import { useSession } from '../hooks/useSession';


function Header() {
    const { isLogged } = useSession();

    return (
        <header className='border-b border-slate-900/10 dark:border-slate-300/10 h-20 w-full absolute top-0 left-0 py-3 px-5 flex justify-between'>
            <div className='my-2 h-12'><span className='font-bold text-xl'><span className='font-poppins'>Ka</span><span className='font-rubik text-red-500'>poot</span></span></div>
            <nav className='my-2 flex pb-2'>
                {isLogged ?
                    <UserMenuItems /> : <Link to={'/login'}><button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-md font-medium text-gray-800 rounded group bg-gradient-to-br from-red-500 to-orange-400 group-hover:from-red-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-0 focus:outline-none focus:ring-red-200 dark:focus:ring-orange-400">
                        <span className="font-rubik font-bold relative px-2.5 py-0.5 transition-all ease-in duration-75 bg-white dark:bg-gray-800 rounded group-hover:bg-opacity-0">
                            SIGN IN
                        </span>
                    </button></Link>
                }

            </nav>
        </header>
    )
}

export default Header;