import React from 'react';

const Search = ({ placeholder, onChange }) => {
    return (
        <input type="search" className="form-control w-50" placeholder={placeholder} onChange={onChange} />
    )
}

export default Search;