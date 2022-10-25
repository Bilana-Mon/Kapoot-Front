import React from 'react'
import { ReactComponent as SpineIcon } from '../assets/icons/spine.svg'

function Matches() {
    return (
        <section>
            <div className="flex items-center text-slate-700 w-full border-b border-slate-500 pb-5">
                <span>
                    <SpineIcon className="w-[40px] h-[40px] top-0" />
                </span>{' '}
                <span>Match History</span>{' '}
            </div>
            <div className="text-slate-700 w-full border-b border-slate-500 pb-5 pt-5">
                <div className="mx-2 flex items-center justify-around">
                    <span className="flex flex-col mt-5">
                        <span className="">victory or lose</span>
                    </span>
                    <span className="flex flex-col mt-5">
                        <span className="">Number of questions</span>
                        <span className="">number here</span>
                    </span>
                    <span className="flex flex-col mt-5">
                        <span className="">Right answers</span>
                        <span className="">number here</span>
                    </span>
                    <span className="flex flex-col mt-5">
                        <span className="">Score</span>
                        <span className="">number here</span>
                    </span>
                    <span className="flex flex-col mt-5">
                        <span className="">Time it took to answer</span>
                        <span className="">number here</span>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Matches
