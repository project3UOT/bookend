import React from 'react';
import { useBookendContext } from "../../utils/GlobalState";
import { 
    UPDATE_SEARCH_INPUT,
    UPDATE_MOVIE,
    UPDATE_SEARCHED_BOOKS  } from '../../utils/actions';
import { searchGoogleBooks } from '../../utils/API';

const MovieSearchForm = () => {
    const [state, dispatch] = useBookendContext();

    const { searchInput } = state;

    // create method to search for books and set state on form submit
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!searchInput) {
            return false;
        }

        try {
            const getMovieRequest = async (searchInput) => {
                let movie0;
                let movieGenre;
                const url = `http://www.omdbapi.com/?t=${searchInput}&apikey=263d22d8`;

                const response = await fetch(url);
                const responseJson = await response.json();

                if (responseJson) {
                    console.log('response: ', responseJson);
                    movie0 = responseJson;
                    //setMovie(movie0.Title);

                        dispatch({
                            type: UPDATE_MOVIE,
                            movie: movie0.Title
                        });

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
                title: book.volumeInfo.title,
                authors: book.volumeInfo.authors || ['No author to display'],
                genre: book.volumeInfo.categories || ['No Genre to display'],
                image: book.volumeInfo.imageLinks?.thumbnail || '',
                link: '',
                read: false,
                favourite: false
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
        <form onSubmit={handleFormSubmit}>

        <div className='field has-addons'>
            <div className='control'>
                <input 
                className='input is-large mr-2' 
                type='text' 
                placeholder='Enter a TV show or film' 
                name='searchInput'
                value={searchInput}
                onChange={e => {
                    dispatch({
                        type: UPDATE_SEARCH_INPUT,
                        searchInput: e.target.value
                    });
                }}
                />
            </div>
            <div className='control'>
                <button className='button is-primary is-large'>Go</button>
            </div>
        </div>
        </form>
    );
};

export default MovieSearchForm;