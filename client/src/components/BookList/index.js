import React from 'react';
import BookCard from '../BookCard';
import { useBookendContext } from "../../utils/GlobalState";
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_ME } from '../../utils/queries';
import Auth from '../../utils/auth';

const BookList = () => {
    const [state] = useBookendContext();
    const { currentCategory } = state;
    const { loading, data } = useQuery(GET_ME);
    const userData = data?.me;


    if (loading) {
        return (
            <div className='container py-5'>
                <h2 className='text-dark is-family-secondary is-size-2-widscreen is-size-3-desktop py-4'>loading..</h2>
            </div>
        );
    }

    const filterBooks = () => {
        switch (currentCategory) {
            case 'Reading List':
                return userData.savedBooks.filter(book => book.read === false);
            case 'Read':
                return userData.savedBooks.filter(book => book.read === true );
            case 'Favourites':
                return userData.savedBooks.filter(book => book.favourite === true);
            default:
                return userData.savedBooks;
        }
    };

    console.log('user data', userData.savedBooks);

    return (
        <div className='container py-5'>
            <h2 className='text-dark is-family-secondary is-size-2-widscreen is-size-3-desktop py-4'>My Books</h2>

            <h2>
                {userData.bookCount
                    ? `Viewing ${userData.bookCount} saved ${userData.bookCount === 1 ? 'book' : 'books'}:`
                    : "You haven't saved any books yet!"}
            </h2>
            <div className='columns is-multiline'>
                {
                    filterBooks().map(book => {
                        console.log(book, 'id', book.bookId);
                        return (
                            <BookCard
                                fromSearch={false}
                                title={book.title}
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