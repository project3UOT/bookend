import React, { useState } from 'react';
import { searchGoogleBooks } from '../../utils/API';
import BookResultCard from '../BookResultCard';

const Results = () => {

    const [movies, setMovies] = useState([]);
    // create state for holding returned google api data
    const [searchedBooks, setSearchedBooks] = useState([]);
    // create state for holding our search field data
    const [searchInput, setSearchInput] = useState('');

    let searchedShow;

    // create method to search for books and set state on form submit
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!searchInput) {
            return false;
        }

        
        try {
            const getMovieRequest = async (searchInput) => {
                searchedShow = searchInput;

                let movie0;
                let movieGenre;
                const url = `http://www.omdbapi.com/?t=${searchInput}&apikey=263d22d8`;

                const response = await fetch(url);
                const responseJson = await response.json();

                if (responseJson) {
                    setMovies(responseJson);
                    console.log('response: ', responseJson);

                    movie0 = responseJson;
                    // get first genre from response
                    movieGenre = (movie0.Genre.split(','))[0];
                    console.log('genre: ', movieGenre);
                };
                return movieGenre;
            };

            const genre = await getMovieRequest(searchInput);

            const response = await searchGoogleBooks(genre);

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
                <div className='container py-5'>
                {/* {movies.map((movie) => (
                    <div className='image-container d-flex justify-content-start m-3'>
                        <img src={movie.Poster} alt=''></img>
					Title: {movie.Title}
					Type: {movie.Type}
                    </div>
                ))} */}
                {searchedShow && <h2 className='text-dark'>`Viewing books like ${searchedShow}`</h2>}
                <div className='columns'>

                    {searchedBooks.map((book) => {
                        return (
                            <>
                            <BookResultCard 
                                img={book.image}
                                title={book.title}
                                author={book.authors}
                                key={book.bookId} />
                            </>
                        );
                    })}
                    </div>
                
                    </div>
            </section>
        </>
    );
};

export default Results;