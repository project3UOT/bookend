import React from 'react';
import { useBookendContext } from "../../utils/GlobalState";
import { useQuery } from '@apollo/react-hooks';
import { GET_ME } from '../../utils/queries';
import Auth from '../../utils/auth';
import BookCard from '../BookCard';

const Results = () => {
    const [state] = useBookendContext();
    const { movie, searchedBooks } = state;
    const { data } = useQuery(GET_ME);
    const userData = data?.me;

    return (
        <section className='container py-5'>

            {movie && <h2 className='text-dark is-family-secondary is-size-3 is-size-5-touch mb-3' href='#results'>{`Books like ${movie}`}</h2>}
            <div className='columns is-multiline'>

                {searchedBooks.map((book) => {
                    return (
                        <BookCard
                            saved={Auth.loggedIn() && userData.savedBooks.find((savedBook) => savedBook.bookId === book.bookId)}
                            bookId={book.bookId}
                            fromSearch={true}
                            img={book.image}
                            title={book.title}
                            author={book.authors}
                            key={book.bookId} />
                    );
                })}
            </div>

        </section>
    );
};

export default Results;