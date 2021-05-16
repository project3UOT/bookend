import React, {useEffect} from 'react';
import Hero from '../components/Hero/index';
import Genres from '../components/Genres';
import { idbPromise} from '../utils/helpers'
const Home = () => {
    useEffect(()=> {
        idbPromise("booksToRead","get").then(results=>{
            console.log(results)
        })

    },[])
    return (
        <>
        <Hero />
        <Genres />
        </>
    );
};

export default Home;