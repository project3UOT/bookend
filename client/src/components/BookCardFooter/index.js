import React from 'react';
import { useBookendContext } from "../../utils/GlobalState";
import Auth from '../../utils/auth';
import { idbPromise } from '../../utils/helpers';
import { useMutation } from '@apollo/react-hooks';
import { 
    SAVE_BOOK,
    REMOVE_BOOK,
    UPDATE_BOOK_READ,
    UPDATE_BOOK_FAVOURITE } from '../../utils/mutations';
import { UPDATE_SAVED_BOOKS, UPDATE_READ, UPDATE_FAVOURITE } from '../../utils/actions';
import { FaCheckCircle, FaHeart, FaExternalLinkSquareAlt, FaBookmark } from "react-icons/fa";

const BookCardFooter = ({ read, favourite, fromSearch, saved, bookId, title }) => {
    const [ state, dispatch ] = useBookendContext();
    const { searchedBooks, savedBooks } = state;

    const [ saveBook ] = useMutation(SAVE_BOOK);
    const [ updateBookRead ] = useMutation(UPDATE_BOOK_READ);
    const [ updateBookFavourite ] = useMutation(UPDATE_BOOK_FAVOURITE);
    const [ removeBook ] = useMutation(REMOVE_BOOK);

    const handleClick = async (action, bookId) => {
        //const selectedBook = searchedBooks.find(book => book.bookId === bookId);

        // get token
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            let selectedBook;
            switch (action) {
                case 'save':
                    selectedBook = searchedBooks.find(book => book.bookId === bookId)
                    await saveBook({
                        variables: { "book": { ...selectedBook } }
                    });
                    dispatch({
                        type: UPDATE_SAVED_BOOKS,
                        savedBooks: [...savedBooks, selectedBook]
                    })
                    idbPromise('savedBooks', 'put', selectedBook);
                    break;
                case 'read':
                    selectedBook = savedBooks.find(book => book.bookId === bookId)
                    const newReadStatus = !read;
                    await updateBookRead({
                        variables: { 
                            "book": { 
                                "bookId": bookId,
                                "read": newReadStatus
                            } 
                        }
                    });
                    dispatch({
                        type: UPDATE_READ,
                        bookId: bookId,
                        read: newReadStatus
                    })
                    idbPromise('savedBooks', 'put', selectedBook);
                    break;
                case 'favourite':
                    selectedBook = savedBooks.find(book => book.bookId === bookId)
                    const newFavouriteStatus = !favourite;
                    await updateBookFavourite({
                        variables: {
                            "book": {
                                "bookId": bookId,
                                "favourite": newFavouriteStatus
                            }
                        }
                    });
                    dispatch({
                        type: UPDATE_FAVOURITE,
                        bookId: bookId,
                        favourite: newFavouriteStatus
                    });
                    idbPromise('savedBooks', 'put', selectedBook);
                    break;
            }
        } catch (err) {
            alert("Something went wrong! :(");
            console.error(err);
        };
    };

    return (
        <div className='card-footer is-justify-content-center align-items-center p-2'>
            {fromSearch && Auth.loggedIn() ? 
                <button 
                    className='button is-inverted is-primary'
                    disabled={saved || savedBooks.some(savedBook => savedBook.bookId === bookId) }
                    onClick={() => {
                        handleClick('save', bookId);
                    }}>
                    {saved || savedBooks.some(savedBook => savedBook.bookId === bookId) ? 'Saved' : <><FaBookmark className='pr-2' /> Save</>}
                </button>
             : 
             <>
             {Auth.loggedIn() &&
             <>
             <button 
                className={'button is-inverted' + (read ? ' is-secondary' : ' is-primary')}
                        onClick={() => {
                            handleClick('read', bookId)
                        }}>
                <FaCheckCircle />
            </button>
            <button 
                className={'button is-inverted' + (favourite ? ' is-secondary' : ' is-primary')}
                        onClick={() => {
                            handleClick('favourite', bookId)
                        }}>
                <FaHeart />
            </button>
            </>}
                    <a href={`https://www.amazon.com/s?k=${title}+book`} target='_blank' rel='noopener noreferrer' className='button is-inverted is-primary'>
                <FaExternalLinkSquareAlt />
            </a>
            </>
            }
        </div>
    );
};

export default BookCardFooter;