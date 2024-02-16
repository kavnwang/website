import React from 'react';
import Link from 'next/link';

const NavBar = () => {
    return (
        <nav className={`pt-16 font-semilight text-2xl w-full flex flex-row justify-between space-x-12 items-end px-48 py-6 `}>
            <div className={`text-3xl font-semibold`}>
                <Link href={`/`}>
                Kevin Wang
                </Link>
            </div>
            
            <div className={"flex flex-row space-x-8"}>
            <Link href={`/photos`}>
                Photos
            </Link>

            <Link href={`/posts`}>
                Posts
            </Link>

            <Link href={`/experience`}>
                Experience
            </Link>
            </div>
            
        </nav>
    )
}

export default NavBar; 