import React, { createContext, useContext } from "react";
import { useBookendReducer } from './reducers';

const BookendContext = createContext();
const { Provider } = StoreContext;

const BookendProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useBookendReducer({
        products: [],
        cart: [],
        cartOpen: false,
        categories: [],
        currentCategory: ''
    });
    // use this to confirm it works!
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };