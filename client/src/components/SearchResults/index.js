import React from 'react';
import BookCard from '../BookCard';
import { useBookendContext } from "../../utils/GlobalState";

const Results = ({ reference }) => {
    const [ state ] = useBookendContext();
    const { movie, searchedBooks, savedBooks } = state;

    return (
        <section className='container py-5' ref={reference}>

            {movie && <h2 className='text-dark is-family-secondary is-size-3 is-size-5-touch mb-3'>{`Books like ${movie}`}</h2>}
            <div className='columns is-multiline'>

                {searchedBooks.map(book => {
                    return (
                        <BookCard
                            saved={savedBooks.some(savedBook => savedBook.bookId === book.bookId)}
                                //userData?.savedBooks.some(userBook => userBook.bookId === book.bookId)}
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