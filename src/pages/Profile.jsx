import React from 'react'
import { ReactComponent as BloodIcon } from '../assets/icons/blood-bag.svg'
import { ReactComponent as HeartIcon } from '../assets/icons/heart.svg'
import { useSession } from '../hooks/useSession'
import Overview from '../cmps/Overview'
import Matches from '../cmps/Matches'

function Profile() {
    const { nickname } = useSession()

    return (
        <section className="my-auto min-h-full mt-0 text-slate-700">
            <div className="flex flex-col">
                <div className="mx-2 flex items-center">
                    <div className="my-2">
                        <BloodIcon />
                    </div>
                    <div className="my-2">
                        <span>{nickname}</span>
                    </div>
                </div>

                <div className="flex items-center py-3 border-b border-t border-slate-500">
                    <div className="mx-2 ">
                        <button className="mr-5">Overview</button>
                        <button className="mr-5">Matches</button>
                        {/* <button className="mr-5">Details</button> */}
                    </div>
                </div>
            </div>

            <div className="flex flex-col my-5">
                <Overview />
            </div>
            <div className="flex flex-col my-5">
                <Matches />
            </div>
            <div className="flex justify-center my-10">
                <span className="flex items-center">
                    Thank You For Playing! <HeartIcon />
                </span>
            </div>
        </section>
    )
}

export default Profile
