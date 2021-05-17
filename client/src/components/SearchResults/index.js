import React, { useState } from 'react';
import { searchGoogleBooks } from '../../utils/API';

const Results = () => {

    const [movies, setMovies] = useState([]);
    // create state for holding returned google api data
    const [searchedBooks, setSearchedBooks] = useState([]);
    // create state for holding our search field data
    const [searchInput, setSearchInput] = useState('');

    // create method to search for books and set state on form submit
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
                description: book.volumeInfo.description,
                image: book.volumeInfo.imageLinks?.thumbnail || '',
                genre: book.volumeInfo.categories || ['No Genre to display'],
            }));

            const getMovieRequest = async (searchInput) => {
                const url = `http://www.omdbapi.com/?s=${searchInput}&apikey=263d22d8`;

                const response = await fetch(url);
                const responseJson = await response.json();

                if (responseJson.Search) {
                    setMovies(responseJson.Search);
                }
            };

            getMovieRequest(searchInput);
            setSearchedBooks(bookData);
            setSearchInput('');

        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <section>
                <h1>Search for Books!</h1>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <div xs={12} md={8}>
                            <input
                                name='searchInput'
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                type='text'
                                size='lg'
                                placeholder='Search for a book'
                            />
                        </div>
                        <div xs={12} md={4}>
                            <button type='submit' variant='success' size='lg'>
                                Submit Search
                </button>
                        </div>
                    </div>
                </form>
            </section>

            <section>
                {movies.map((movie) => (
                    <div className='image-container d-flex justify-content-start m-3'>
                        <img src={movie.Poster} alt=''></img>
					Title: {movie.Title}
					Type: {movie.Type}
                    </div>
                ))}
                <h2>
                    {searchedBooks.length
                        ? `Viewing ${searchedBooks.length} results:`
                        : 'Search for a book to begin'}
                </h2>
                <section>
                    {searchedBooks.map((book) => {
                        return (
                            <div key={book.bookId} border='dark'>
                                {book.image ? (
                                    <img src={book.image} alt={`The cover for ${book.title}`} variant='top' />
                                ) : null}
                                <div>
                                    <div>{book.title}</div>
                                    <p className='small'>Authors: {book.authors}</p>
                                    <div>{book.description}</div>
                                    <div>Genre: {book.genre}</div>
                                </div>
                            </div>
                        );
                    })}
                </section>
            </section>
        </>
    );
};

export default Results;