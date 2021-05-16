import { useReducer } from 'react';

import { UPDATE_CURRENT_CATEGORY } from './actions';

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
            };
        default:
            return state;
    };
};

export function useBookendReducer(initialState) {
    return useReducer(reducer, initialState);
};