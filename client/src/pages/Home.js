import React, { useEffect, useRef } from 'react';
import Hero from '../components/Hero/index';
import Genres from '../components/Genres';
import SearchResults from '../components/SearchResults'
import { idbPromise} from '../utils/helpers'
const Home = () => {

    const scrollToDiv = (ref) => window.scrollTo({
        top: ref.current.offsetTop,
        left: 0,
        behavior: 'smooth'});
    const el1 = useRef();
    const el2 = useRef();

    useEffect(()=> {
        idbPromise("booksToRead","get").then(results=>{
            console.log(results)
        })

    },[])

    return (
        <>
        <Hero reference={el1} scroll={() => scrollToDiv(el2)} />
        <Genres />
        <SearchResults reference={el2} />
        </>
    );
};

export default Home;