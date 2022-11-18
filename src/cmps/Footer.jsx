import React from 'react';
import { ReactComponent as GithubIcon } from '../assets/icons/git.svg';

function Footer() {
    return (
        <footer className="border-t border-slate-900/10 mt-auto w-full py-3 px-5 text-center">
            <span className="mx-auto my-auto font-poppins flex justify-center align-middle items-center">
                Check On{' '}
                <a href="https://github.com/Bilana-Mon" target="_blank">
                    {' '}
                    <GithubIcon className="ml-0.5 w-[20px] h-[20px] inline-block" />
                </a>
            </span>
        </footer>
    );
}

export default Footer;
