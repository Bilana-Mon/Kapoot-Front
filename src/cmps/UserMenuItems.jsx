import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { useSession } from '../hooks/useSession'

function UserMenuItems({ modalOpen, closeModal }) {
    const { disconnect } = useSession()

    const handleDisconnect = (event) => {
        disconnect()
    }

    if (!modalOpen) return null

    return ReactDOM.createPortal(
        <div className="absolute top-20 right-0.5 flex flex-col justify-center items-center shadow-lg">
            <div className="flex flex-col ">
                <Link to={'/profile'}>
                    <button className="relative p-3 inline-flex items-center justify-center overflow-hidden text-xs font-medium text-gray-800 hover:bg-gray-100">
                        <span className="font-poppins relative px-2.5 py-0.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
                            View Profile
                        </span>
                    </button>
                </Link>
                <button
                    onClick={handleDisconnect}
                    className="relative p-3 inline-flex items-center justify-center overflow-hidden text-xs font-medium text-gray-800 hover:bg-gray-100"
                >
                    <span className="font-poppins relative w-full py-0.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
                        Sign Out
                    </span>
                </button>
            </div>
        </div>,

        document.getElementById('modal')
    )
}

export default UserMenuItems
