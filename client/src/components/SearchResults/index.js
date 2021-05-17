import React, { useState } from 'react';
import { searchGoogleBooks } from '../../utils/API';
import { useBookendContext } from "../../utils/GlobalState";
import BookResultCard from '../BookResultCard';

const Results = () => {
    const [state, dispatch] = useBookendContext();
    const { searchInput, movie, searchedBooks } = state;

    return (
        <section className='container py-5'>

            {movie && <h2 className='text-dark is-family-secondary is-size-3 is-size-5-touch'>{`Books like ${movie}`}</h2>}
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

        </section>
    );
};

export default Results;