import React from 'react';
import Link from 'next/link';

const Navbar = ({}) => {
    return (
        <div>
            <Link href="/home">
                Home
            </Link>
            <Link href="/login">
                Login
            </Link>
            <Link href="/">
                Signup
            </Link>
        </div>
    );
}

export default Navbar;
