import React, { useEffect } from 'react';
import BookCard from '../BookCard';
import { useBookendContext } from "../../utils/GlobalState";
import { UPDATE_SAVED_BOOKS } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';

const BookList = () => {
    const [ state, dispatch ] = useBookendContext();
    const { savedBooks, currentCategory } = state;

    useEffect(() => {
        async function getSavedBooks() {
            const indexedBooks = await idbPromise('savedBooks', 'get');
            dispatch({
                type: UPDATE_SAVED_BOOKS,
                savedBooks: indexedBooks
            })
        }

        if (savedBooks.length === 0) {
            getSavedBooks();
        }
    }, [savedBooks.length, dispatch])

    const filterBooks = () => {
        switch (currentCategory) {
            case 'Reading List':
                return savedBooks.filter(book => book.read === false);
            case 'Read':
                return savedBooks.filter(book => book.read === true );
            case 'Favourites':
                return savedBooks.filter(book => book.favourite === true);
            default:
                return savedBooks;
        }
    };

    return (
        <div className='container py-5'>
            <h2 className='text-dark is-family-secondary is-size-2-widscreen is-size-3-desktop py-4'>My Books</h2>

            {/* <h2>
                {userData.bookCount
                    ? `Viewing ${userData.bookCount} saved ${userData.bookCount === 1 ? 'book' : 'books'}:`
                    : "You haven't saved any books yet!"}
            </h2> */}
            <div className='columns is-multiline'>
                {
                    filterBooks().map(book => {
                        return (
                            <BookCard
                                fromSearch={false}
                                title={book.title}
                                img={book.image}
                                author={book.authors}
                                read={book.read}
                                favourite={book.favourite}
                                bookId={book.bookId}
                                key={book.bookId} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default BookList;