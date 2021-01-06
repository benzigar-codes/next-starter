import React from 'react';
import Head from 'next/head';
import Navbar from "../components/navbar"
import {useState as useGlobalState} from '@hookstate/core';
import globalState from "../model/store"

const landingPage = ({}) => {
    const global = useGlobalState(globalState)
    const {token} = global.get()
    const handleClick = () => {};
    return (
        <div>
            <Head>
                <title>
                    Sign up
                </title>
            </Head>
            <Navbar/>
            <h1>Sign up</h1>
            {token}
        </div>
    );
}

export default landingPage;
