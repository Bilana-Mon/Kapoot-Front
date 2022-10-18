import React, { useState } from 'react';
import { Link } from "react-router-dom";
import UserMenuItems from '../cmps/UserMenuItems';
import { useSession } from '../hooks/useSession';

function Header() {
    const [openModal, setOpenModal] = useState(false);
    const { isLogged } = useSession();

    return (
        <header className='border-b border-slate-900/10 h-20 w-full absolute top-0 left-0 py-3 px-5 flex justify-between'>
            <div className='my-2 h-12'><span className='font-bold text-xl'><span className='font-poppins'>Ka</span><span className='font-rubik text-red-500'>poot</span></span></div>

            <nav className='my-2 flex pb-2'>
                {(!openModal) ? <button className='mx-auto' onClick={() => setOpenModal(true)}><img className='m-auto w-10' src='../assets/icons/burger-menu.svg' alt='burger' /></button> :
                    <button className='mx-auto' onClick={() => setOpenModal(false)}><img className='m-auto w-10' src="../assets/icons/user.svg" alt='user' /></button>}
                {isLogged ?
                    <UserMenuItems modalOpen={openModal} closeModal={() => setOpenModal(false)} /> : <Link to={'/login'}><button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-md font-medium text-gray-800 rounded-md bg-[#FDC886] hover:bg-[#F9B76C]">
                        <span className="font-rubik font-bold relative px-2.5 py-0.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
                            SIGN IN
                        </span>
                    </button></Link>
                }

            </nav>
        </header>
    )
}

export default Header;