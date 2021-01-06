import React,{useState,useEffect} from 'react';
import {useRouter} from "next/router"

const PageLoading = ({}) => {
    const [loading,setLoading] = useState(false)
    const router = useRouter()
    useEffect(() => {
        router.events.on('routeChangeStart', () => setLoading(true))
        router.events.on('routeChangeComplete', () => setLoading(false))
    })
    if(loading == true) return <h1>Loading</h1>
    if(loading == false) return null
}


export default PageLoading;
