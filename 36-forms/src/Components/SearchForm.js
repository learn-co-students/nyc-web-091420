import React from 'react';

const SearchForm = ({ searchValue, changeHandler }) => {
    return (
        <form>
            <input type="text" value={searchValue} placeholder="search by name" onChange={changeHandler} />
        </form>
    )
};

export default SearchForm;