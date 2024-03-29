import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserMenuItems from '../cmps/UserMenuItems';
import { useSession } from '../hooks/useSession';
import CloseIcon from '../assets/icons/close-menu.svg';
import BurgerMenu from '../assets/icons/burger-menu.svg';

function Header() {
    const [openModal, setOpenModal] = useState(false);
    const { nickname, isLogged } = useSession();
    const navigate = useNavigate();

    const handleBackHome = () => {
        navigate('/');
    };

    if (isLogged) {
        return (
            <header className="border-b border-slate-900/10 w-full md:py-3 py-5 px-5 flex justify-between">
                <div
                    className="my-2 hover:cursor-pointer"
                    onClick={handleBackHome}
                >
                    <span className="font-bold font-rubik md:text-xl text-2xl">
                        <span>Ka</span>
                        <span className="text-red-500">poot</span>
                    </span>
                </div>

                <nav className="my-2 flex justify-center">
                    {!openModal ? (
                        <button
                            className="mx-auto overflow-hidden"
                            onClick={() => setOpenModal(true)}
                        >
                            <img
                                className="m-auto md:w-6 w-8"
                                src={BurgerMenu}
                                alt="burger"
                            />
                        </button>
                    ) : (
                        <button
                            className="mx-auto overflow-hidden"
                            onClick={() => setOpenModal(false)}
                        >
                            <img
                                className="m-auto md:w-6 w-8"
                                src={CloseIcon}
                                alt="close"
                            />
                        </button>
                    )}
                    <UserMenuItems
                        modalOpen={openModal}
                        closeModal={() => setOpenModal(false)}
                    />
                </nav>
            </header>
        );
    }

    return (
        <header className="border-b border-slate-900/10 w-full py-1 px-5 flex justify-between">
            <div className="my-2" onClick={handleBackHome}>
                <span className="font-bold font-rubik md:text-xl text-2xl hover:cursor-pointer">
                    <span>Ka</span>
                    <span className="text-red-500">poot</span>
                </span>
            </div>
            <nav className="my-2 flex">
                {isLogged ? (
                    <span>{nickname}</span>
                ) : (
                    <Link to={'/login'}>
                        <button className="font-poppins px-2 py-1.5 relative inline-flex items-center justify-center overflow-hidden md:text-md text-xl text-gray-800 rounded-full border border-gray-800 transform hover:scale-110">
                            Sign In
                        </button>
                    </Link>
                )}
            </nav>
        </header>
    );
}

export default Header;
