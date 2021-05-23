import React, { useState } from 'react';
import { useBookendContext } from "../../utils/GlobalState";
import { UPDATE_CURRENT_CATEGORY } from '../../utils/actions';
import { FaFilter } from "react-icons/fa";

const ProfileNav = () => {
    const [showMobileNav, setShowMobileNav] = useState(false);
    
    const [state, dispatch] = useBookendContext();

    const { categories, currentCategory } = state;

    const handleClick = index => {
        dispatch({
            type: UPDATE_CURRENT_CATEGORY,
            currentCategory: categories[index]
        });
    };

    return (
        <nav className='buttons has-background-secondary p-4 is-family-secondary' role='navigation' aria-label='profile navigation'>
               
            <div className={'buttons are-medium' + (showMobileNav ? ' is-justify-content-center' : '')}>
                <button
                    className='button is-secondary is-flex-mobile is-hidden-tablet mr-2'
                    aria-label='filter'
                    aria-expanded='false'
                    onClick={() => { setShowMobileNav(!showMobileNav) }}>
                    <FaFilter />
                </button>
                    {categories.map((category, index) => {
                        return (
                            <button
                                className={
                                    'button is-rounded is-size-6-mobile' + (showMobileNav ? ' is-flex' : ' is-hidden-mobile') + 
                                    (category === currentCategory ? ' is-outlined is-primary' : ' is-secondary')}
                                key={category}
                                onClick={() => { handleClick(index) }}>
                                {category}
                            </button>
                        )
                    })}
                </div>
            
        </nav>
    );
};

export default ProfileNav;