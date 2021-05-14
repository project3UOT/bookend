import React from 'react';

const Hero = () => {
    return (
        <section className='hero is-secondary is-medium is-relative'>
            <img className='hero-bg' src={require('../../assets/imgs/book-bg.png')} alt='books' />

            <div className='hero-body move-to-front columns is-centered'>
                <div className='column is-two-thirds'>

                    <h2 className='has-text-centered is-family-secondary is-size-3 has-background-primary p-4 mb-2'>Haven't read a book since highschool English class? Watched everything on Netflix? Enter your favourite TV show, and we'll recommend some books for you.</h2>
                    <div className='is-flex-direction-column is-align-items-center'>

                        <div className='field has-addons'>
                            <div className='control'>
                                <input className='input is-large mr-2' type='text' placeholder='Enter a TV show or film' />
                            </div>
                            <div className='control'>
                                <button className='button is-primary is-large'>Go</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;