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
                <Link to={'/profile'}><button className="relative inline-flex items-center justify-center mt-0.5 p-0.5 overflow-hidden text-md font-medium text-gray-800 rounded-md bg-[#FDC886] hover:bg-[#F9B76C]">
                    <span className="font-rubik font-bold relative px-2.5 py-0.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
                        VIEW PROFILE
                    </span>
                </button></Link>
                <button onClick={handleDisconnect} className="relative inline-flex items-center justify-center mt-0.5 p-0.5 overflow-hidden text-md font-medium text-gray-800 rounded-md bg-[#FDC886] hover:bg-[#F9B76C]">
                    <span className="font-rubik font-bold relative w-full py-0.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
                        SIGN OUT
                    </span>
                </button>
            </div>
        </div>,

        document.getElementById("modal")
    );
}

export default UserMenuItems;