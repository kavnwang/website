import React, {useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
const NavBar = () => {

    const router = useRouter();
    const currentPath = router.pathname;

    return (
        <nav className={`pt-16 font-light text-2xl w-full flex flex-row justify-between space-x-12 items-end px-48 py-6 `}>
            <div className={`text-3xl font-semibold flex flex-row space-x-2`}>
                <Link href={`/`} >
                    Kevin Wang
                </Link>
                <div className={`font-extralight ${currentPath === '/photos' ? '': 'hidden'}`} >
                — Photos
                </div>
                <div className={`font-extralight ${currentPath === '/writing' ? '': 'hidden'}`} >
                — Writing
                </div>
                <div className={`font-extralight ${currentPath === '/experience' ? '': 'hidden'}`} >
                — Experience
                </div>
            </div>
            
            <div className={"flex flex-row space-x-8 justify-start"}>
            <Link href={`/photos`}  className={`hover:font-normal ${currentPath === '/photos' ? 'font-normal': 'font-light'}`}>
                Photos
            </Link>

            <Link href={`/writing`}  className={`hover:font-normal ${currentPath === '/writing' ? 'font-normal': 'font-light'}`}>
                Writing
            </Link>

            <Link href={`/experience`}  className={`hover:font-normal ${currentPath === '/experience' ? 'font-normal': 'font-light'}`}>
                Experience
            </Link>
            </div>
            
        </nav>
    )
}

export default NavBar; 