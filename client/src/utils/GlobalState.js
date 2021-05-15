import React, { createContext, useContext } from "react";
import { useBookendReducer } from './reducers';

const BookendContext = createContext();
const { Provider } = BookendContext;

const BookendProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useBookendReducer({
        categories: ['All', 'Reading List', 'Read', 'Favourites'],
        currentCategory: 'All'
    });
    // use this to confirm it works!
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
};

const useBookendContext = () => {
    return useContext(BookendContext);
};

export { BookendProvider, useBookendContext };