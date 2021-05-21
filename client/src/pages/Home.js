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
    const hero = useRef();
    const genres = useRef();
    const results = useRef();

    useEffect(()=> {
        idbPromise("booksToRead","get").then(results=>{
            console.log(results)
        })

    },[])

    return (
        <>
        <Hero reference={hero} scroll={() => scrollToDiv(results)} />
        <Genres reference={genres} scroll={() => scrollToDiv(results)} />
        <SearchResults reference={results} />
        </>
    );
};

export default Home;