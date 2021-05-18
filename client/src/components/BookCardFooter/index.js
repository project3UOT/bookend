import React from 'react';
import { useBookendContext } from "../../utils/GlobalState";
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/react-hooks';
import { SAVE_BOOK } from '../../utils/mutations'
import { FaCheckCircle, FaHeart, FaExternalLinkSquareAlt, FaBookmark } from "react-icons/fa";

const BookCardFooter = ({ read, favourite, fromSearch, bookId }) => {
    const [ state ] = useBookendContext();

    const { searchedBooks } = state;

    const [ saveBook ] = useMutation(SAVE_BOOK);

    const handleSaveBook = async (bookId) => {
        console.log('book saved');
        const book = searchedBooks.find(book => book.bookId === bookId);
        console.log(book);

        // get token
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const { data } = await saveBook({
                variables: { "book": { ...book } }
            });

            // if book successfully saves to user's account, save book id to state
            // setSavedBookIds([...savedBookIds, bookToSave.bookId]);
        } catch (err) {
            alert("Something went wrong! :(");
            console.error(err);
        };
    };
    return (
        <div className='card-footer align-items-center'>
            {fromSearch ? 
                <button 
                    className='button is-inverted is-primary'
                    onClick={() => {
                        handleSaveBook(bookId)
                    }}>
                    <FaBookmark className='pr-2' /> Save this book
                </button>
             : 
             <>
             <button 
                className={'button is-inverted' + (read ? ' is-secondary' : ' is-primary')}>
                <FaCheckCircle />
            </button>
            <button 
                className={'button is-inverted' + (favourite ? ' is-secondary' : ' is-primary')}>
                <FaHeart />
            </button>
            <a href='/' 
                className='button is-inverted is-primary'>
                <FaExternalLinkSquareAlt />
            </a>
            </>
            }
        </div>
    );
};

export default BookCardFooter;