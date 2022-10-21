import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import UserMenuItems from '../cmps/UserMenuItems'
import { useSession } from '../hooks/useSession'
import CloseIcon from '../assets/icons/close-menu.svg'
import BurgerMenu from '../assets/icons/burger-menu.svg'

function Header() {
    const [openModal, setOpenModal] = useState(false)
    const { nickname } = useSession()
    const { isLogged } = useSession()

    if (isLogged) {
        return (
            <header className="border-b border-slate-900/10 w-full py-3 px-5 flex justify-between">
                <div className="my-2">
                    <span className="font-bold text-xl">
                        <span className="font-poppins">Ka</span>
                        <span className="font-rubik text-red-500">poot</span>
                    </span>
                </div>

                <nav className="my-2 flex justify-center">
                    {!openModal ? (
                        <button
                            className="mx-auto overflow-hidden"
                            onClick={() => setOpenModal(true)}
                        >
                            <img
                                className="m-auto w-6"
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
                                className="m-auto w-6"
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
        )
    }

    return (
        <header className="border-b border-slate-900/10 w-full py-1 px-5 flex justify-between">
            <div className="my-2">
                <span className="font-bold text-xl">
                    <span className="font-poppins">Ka</span>
                    <span className="font-rubik text-red-500">poot</span>
                </span>
            </div>
            <nav className="my-2 flex">
                {nickname ? (
                    <span>{nickname}</span>
                ) : (
                    <Link to={'/login'}>
                        <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-md font-medium text-gray-800 rounded-full border border-gray-800">
                            <span className="font-poppins font-bold relative px-2.5 py-0.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
                                Sign In
                            </span>
                        </button>
                    </Link>
                )}
            </nav>
        </header>
    )
}

export default Header
