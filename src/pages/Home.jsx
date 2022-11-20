import React from 'react';
import Main from '../cmps/Main-Homepage';
import { useSession } from '../hooks/useSession';

function Home() {
    const { isLoading } = useSession();
    return isLoading ? (
        <div className="mx-auto my-auto">
            <span className="font-poppins text-gray-800 text-3xl">
                Loading
                <div className="mr-0.5 inline-block rounded-full animate-bounce bg-gray-800 w-[10px] h-[10px]" />
                <div className="mr-0.5 inline-block rounded-full animate-[wiggle_1s_infinite] bg-gray-800 w-[10px] h-[10px]" />
                <div className="inline-block rounded-full animate-[wiggle2_1s_infinite] bg-gray-800 w-[10px] h-[10px]" />
            </span>
        </div>
    ) : (
        <section className="bg-white text-gray-800 md:px-8 md:py-3 px-3 py-12">
            <Main />
        </section>
    );
}

export default Home;
