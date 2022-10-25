import React from 'react'
import { ReactComponent as GithubIcon } from '../assets/icons/github.svg'

function Footer() {
    return (
        <footer className="border-t border-slate-900/10 mt-auto w-full py-3 px-5 text-center">
            <span className="mx-auto my-auto font-poppins flex justify-center align-middle">
                &copy;Check On{' '}
                <a href="https://github.com/Bilana-Mon" target="_blank">
                    {' '}
                    <GithubIcon className="ml-0.5 w-[27px] h-[27px] inline-block" />
                </a>
            </span>
        </footer>
    )
}

export default Footer
