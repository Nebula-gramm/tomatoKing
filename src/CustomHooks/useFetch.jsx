import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [post, setPost] = useState([])
    const [err, setErr] = useState(null)

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const res = await fetch(url)
                const data = await res.json()
                setPost(data)
            }catch(err){
                setErr(err)
            }
        }
        fetchData()
    },[url])
    return {err, post};
};

export default useFetch;