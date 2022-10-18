import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import { useSession } from '../hooks/useSession'

function UserMenuItems({ modalOpen, closeModal }) {

    const { disconnect } = useSession();

    const handleDisconnect = (event) => {
        disconnect();
    }

    if (!modalOpen) return null;

    return ReactDOM.createPortal(
        <div className='bg-opacity-70 absolute top-20  right-0.5  flex flex-col justify-center items-center'>
            <div className='flex flex-col drop-shadow-lg'>
                <Link to={'/profile'}><button className="relative inline-flex items-center justify-center mt-0.5 p-0.5 overflow-hidden text-md font-medium text-gray-800 rounded group bg-gradient-to-br from-red-500 to-orange-400 group-hover:from-red-500 group-hover:to-orange-400 hover:text-white focus:ring-0 focus:outline-none focus:ring-red-200">
                    <span className="font-rubik font-bold relative px-2.5 py-0.5 transition-all ease-in duration-75 bg-white rounded group-hover:bg-opacity-0">
                        VIEW PROFILE
                    </span>
                </button></Link>
                <button onClick={handleDisconnect} className="relative inline-flex items-center justify-center mt-0.5 p-0.5 overflow-hidden text-md font-medium text-gray-800 rounded group bg-gradient-to-br from-red-500 to-orange-400 group-hover:from-red-500 group-hover:to-orange-400 hover:text-white focus:ring-0 focus:outline-none focus:ring-red-200">
                    <span className="font-rubik font-bold relative w-full py-0.5 transition-all ease-in duration-75 bg-white rounded group-hover:bg-opacity-0">
                        SIGN OUT
                    </span>
                </button>
            </div>
        </div>,

        document.getElementById("modal")
    );
}

export default UserMenuItems;