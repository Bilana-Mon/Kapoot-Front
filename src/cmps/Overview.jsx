import React from 'react'
import { ReactComponent as BodyIcon } from '../assets/icons/body.svg'

function Overview() {
    return (
        <section>
            <div className="flex items-center text-slate-700 w-full border-b border-slate-500 pb-5">
                <span>
                    <BodyIcon className="w-[40px] h-[40px] top-0" />
                </span>{' '}
                <span>Overview</span>{' '}
            </div>
            <div className="text-slate-700 w-full border-b border-slate-500 pb-5 pt-5">
                <span className="mx-2">Lifetime Stats</span>
                <div className="mx-2 flex items-center justify-around">
                    <span className="flex flex-col mt-5">
                        <span className="">Patients Saved</span>
                        <span className="">number here</span>
                    </span>
                    <span className="flex flex-col mt-5">
                        <span className="">Patients Died</span>
                        <span className="">number here</span>
                    </span>
                    <span className="flex flex-col mt-5">
                        <span className="">Best Score</span>
                        <span className="">number here</span>
                    </span>
                    <span className="flex flex-col mt-5">
                        <span className="">Worst Score</span>
                        <span className="">number here</span>
                    </span>
                    <span className="flex flex-col mt-5">
                        <span className="">Overall Games Played</span>
                        <span className="">number here</span>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Overview
