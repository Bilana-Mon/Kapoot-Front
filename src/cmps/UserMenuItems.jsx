import React from 'react';
import { Link } from "react-router-dom";
import { useSessionStore } from '../store';

function UserMenuItems() {
    const { setIsLogged } = useSessionStore(store => ({ setIsLogged: store.setIsLogged }));

    const handleDisconnect = (event) => {
        event.preventDefault();
        setIsLogged(false);
        localStorage.clear();
    }

    const hidden = 'hidden';
    const block = 'block';
    const handleToggleMenu = (event) => {
        event.preventDefault();
        event.target.style.visibility === 'hidden' ? block : hidden;
        console.log('click');
        console.log(event.target);
    }

    return (
        <div className='m-auto'>
            <div className='peer'><img className='m-auto w-10' src="src\assets\icons\user.svg" /></div>
            <div className='hidden peer-hover:flex hover:flex right-0 hover:right-0 w-[200px] flex-col drop-shadow-lg'>
                <Link to={'/profile'}><button className='font-rubik ml-1 shadow-lg border-1 border-solid bg-gray-400 rounded font-bold hover:border-gray-300 hover:bg-purple-400 hover:text-black p-1'>VIEW PROFILE</button></Link>
                <button className='font-rubik ml-1 shadow-lg border-1 border-solid bg-gray-400 rounded font-bold hover:border-gray-300 hover:bg-purple-400 hover:text-black p-1' onClick={handleDisconnect}>SIGN OUT</button>
            </div>
        </div>
    )
}

export default UserMenuItems;