import React from 'react';
import { useBookendContext } from "../../utils/GlobalState";
import { UPDATE_CURRENT_CATEGORY } from '../../utils/actions';

const ProfileNav = () => {
    const [state, dispatch] = useBookendContext();

    const { categories, currentCategory } = state;

    const handleClick = index => {
        dispatch({
            type: UPDATE_CURRENT_CATEGORY,
            currentCategory: categories[index]
        });
        console.log(state);
    };


    return (
        <nav className='has-background-secondary p-4 is-family-secondary' role='navigation' aria-label='profile navigation'>
                <div className='buttons are-medium'>
                    {categories.map((category, index) => {
                        return (
                        <button 
                            className={
                                'button' +
                                    (category === currentCategory ? ' is-primary is-rounded is-outlined' : ' is-secondary')}
                            key={category}
                            onClick={() => {handleClick(index)}}>
                                {category}
                        </button>
                        )
                    })}                    
                </div>
        </nav>
    );
};

export default ProfileNav;