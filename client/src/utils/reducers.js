import { useReducer } from 'react';

import { 
    UPDATE_CURRENT_CATEGORY,
    UPDATE_SEARCH_INPUT, 
    UPDATE_MOVIE, 
    UPDATE_SEARCHED_BOOKS,
    UPDATE_SAVED_BOOKS } from './actions';

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
            };
        case UPDATE_SEARCH_INPUT:
            return {
                ...state,
                searchInput: action.searchInput
            };
        case UPDATE_MOVIE:
            return {
                ...state,
                movie: action.movie
            };
        case UPDATE_SEARCHED_BOOKS:
            return {
                ...state,
                searchedBooks: action.searchedBooks
            };
        case UPDATE_SAVED_BOOKS:
            return {
                ...state,
                savedBooks: action.savedBooks
            };
        default:
            return state;
    };
};

export function useBookendReducer(initialState) {
    return useReducer(reducer, initialState);
};