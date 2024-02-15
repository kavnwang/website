import React from 'react';
import Link from 'next/link';

const NavBar = () => {
    return (
        <nav className={`fixed`}>
            <Link href={`/about`}>
                About
            </Link>

            <Link href={`/photos`}>
                Photos
            </Link>

            <Link href={`/posts`}>
                Posts
            </Link>

            <Link href={`/experience`}>
                Experience
            </Link>
        </nav>
    )
}

export default NavBar; 