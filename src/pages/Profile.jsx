import React from 'react';
import { ReactComponent as BloodIcon } from '../assets/icons/blood-bag.svg';
import { ReactComponent as HeartIcon } from '../assets/icons/heart.svg';
import { useSession } from '../hooks/useSession';
import { ReactComponent as BodyIcon } from '../assets/icons/body.svg';
import { ReactComponent as SkeletonIcon } from '../assets/icons/skeleton.svg';

function Profile() {
    const { nickname } = useSession();

    return (
        <section className="my-auto min-h-full mt-0 text-gray-800">
            <div className="flex flex-col">
                <div className="mx-2 flex items-center py-5">
                    <div className="my-2">
                        <BloodIcon />
                    </div>
                    <div className="my-2">
                        <span>{nickname}</span>
                    </div>
                </div>

                <div className="flex items-center py-3 border-b border-t border-slate-500">
                    <div className="mx-2">
                        <span>Match History</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col my-5 py-5 border-b border-slate-500">
                <div className="flex items-center">
                    <BodyIcon />
                    <span>Games Won</span>
                </div>
            </div>
            <div className="flex flex-col my-5 py-5">
                <div className="flex items-center">
                    <SkeletonIcon />
                    <span>Games Lost</span>
                </div>
            </div>
        </section>
    );
}

export default Profile;
