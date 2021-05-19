import React from 'react';
import { searchGoogleBooks } from '../../utils/API';
import { useBookendContext } from "../../utils/GlobalState";
import Results from '../SearchResults';
import {
    UPDATE_SEARCH_INPUT,
    UPDATE_SEARCHED_BOOKS
} from '../../utils/actions';

const genres = ['Horror', 'Comedy', 'Sci-Fi', 'Fantasy', 'Thriller', 'Romance', 'Mystery'];

const Genres = () => {
    const [state, dispatch] = useBookendContext();

    const { searchInput } = state;

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!searchInput) {
            return false;
        }

        try {

            const response = await searchGoogleBooks(searchInput);

            if (!response.ok) {
                throw new Error('something went wrong!');
            }

            const { items } = await response.json();

            const bookData = items.map((book) => ({
                bookId: book.id,
                authors: book.volumeInfo.authors || ['No author to display'],
                title: book.volumeInfo.title,
                image: book.volumeInfo.imageLinks?.thumbnail || '',
                genre: book.volumeInfo.categories || ['No Genre to display'],
            }));

            dispatch(
                {
                    type: UPDATE_SEARCHED_BOOKS,
                    searchedBooks: bookData
                },
                {
                    type: UPDATE_SEARCH_INPUT,
                    searchInput: ''
                }
            );

        } catch (err) {
            console.error(err);
        }
    };
    return (
        <section className='section'>
            <h2 className='has-text-centered is-family-secondary is-size-3 text-dark mb-2'>Or, pick a genre</h2>
            <form className='buttons is-centered' onSubmit={handleFormSubmit}>
                    {genres.map(genre =>
                        <button
                            className='button is-large is-success m-2'
                            key={genre}
                            value={genre}
                            onClick={e => {
                                dispatch({
                                    type: UPDATE_SEARCH_INPUT,
                                    searchInput: e.target.value
                                });

                            }}
                        >
                            {genre}
                        </button>)}
                </form>
            <Results />
        </section>
    );
};

export default Genres;