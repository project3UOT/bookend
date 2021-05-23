import React, { useEffect, useRef } from 'react';
import Hero from '../components/Hero/index';
import Genres from '../components/Genres';
import SearchResults from '../components/SearchResults'
import { useQuery } from '@apollo/react-hooks';
import { GET_ME } from '../utils/queries';
import { useBookendContext } from "../utils/GlobalState";
import { UPDATE_SAVED_BOOKS } from '../utils/actions';
import { idbPromise } from '../utils/helpers'
const Home = () => {

    const scrollToResults = (ref) => window.scrollTo({
        top: ref.current.offsetTop,
        left: 0,
        behavior: 'smooth'});

    const hero = useRef();
    const genres = useRef();
    const results = useRef();

    const [ , dispatch] = useBookendContext();
    const { loading, data } = useQuery(GET_ME);
    const userData = data?.me;

    useEffect(() => {
        if (userData) {
            dispatch({
                type: UPDATE_SAVED_BOOKS,
                savedBooks: userData.savedBooks
            })
            console.log('there\'s userdata');
            userData.savedBooks.forEach(savedBook => {
                idbPromise('savedBooks', 'put', savedBook);
            });
        } else if (!loading) {
            idbPromise('savedBooks', 'get').then(savedBooks => {
                dispatch({
                    type: UPDATE_SAVED_BOOKS,
                    savedBooks: savedBooks
                })
            })
        }
    }, [userData, loading, dispatch])

    return (
        <>
        <Hero reference={hero} scroll={() => scrollToResults(results)} />
        <Genres reference={genres} scroll={() => scrollToResults(results)} />
        <SearchResults reference={results} />
        </>
    );
};

export default Home;