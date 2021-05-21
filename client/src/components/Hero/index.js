import React, { useRef } from 'react';
import MovieSearchForm  from '../MovieSearchForm';

const Hero = ({reference, scroll}) => {
    return (
        <section className='hero is-secondary is-medium is-relative'>
            <img className='hero-bg' src={require('../../assets/imgs/book-bg.png')} alt='books' />

            <div className='hero-body move-to-front columns is-centered'>
                <div className='column is-two-thirds is-full-mobile'>

                    <h2 className='has-text-centered is-family-secondary is-size-3 is-size-5-touch has-background-primary p-4 mb-2 is-full-mobile'>Haven't read a book since highschool English class? Watched everything on Netflix? Enter your favourite TV show, and we'll recommend some books for you.</h2>
                    <div className='is-flex-direction-column is-align-items-center'>

                        <MovieSearchForm ref={reference} scroll={scroll}/>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;