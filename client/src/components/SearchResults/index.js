import React from 'react';
import { useBookendContext } from "../../utils/GlobalState";
import BookCard from '../BookCard';

const Results = () => {
    const [state] = useBookendContext();
    const { movie, searchedBooks } = state;

    return (
        <section className='container py-5'>

            {movie && <h2 className='text-dark is-family-secondary is-size-3 is-size-5-touch'>{`Books like ${movie}`}</h2>}
            <div className='columns is-multiline'>

                {searchedBooks.map((book) => {
                    return (
                        <BookCard
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