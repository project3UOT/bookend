import React from 'react';

const genres = ['Horror', 'Comedy', 'Sci-Fi', 'Fantasy', 'Thriller', 'Romance', 'Mystery'];

const Genres = () => {
    return (
        <section className='section'>
            <h2 className='has-text-centered is-family-secondary is-size-3 text-dark mb-2'>Or, pick a genre</h2>
            <div className='buttons is-centered'>

            {genres.map(genre =>
                <button
                className='button is-large is-success m-2'
                key={genre}
                >
                    {genre}
                </button>)}
            </div>
        </section>
    );
};

export default Genres;