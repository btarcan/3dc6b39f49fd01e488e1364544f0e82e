import React from 'react';
import { debounce } from 'lodash';
import { FaSearch } from 'react-icons/fa';

const SearchInput = ({ onChange }) => {
	const getValue = debounce((e) => {
		onChange(e.target.value.toLowerCase());
	}, 500);

	return (
		<>
			<div className='display-f search-input-icon'>
				<FaSearch />
			</div>
			<div className='search-input'>
				<input type='text' className='text-secondary-light-1' onChange={(e) => getValue(e)} />
				<label className='search-input-label text-secondary-dark-4'>SEARCH (Client Name / Policy Number)</label>
				<span className='search-input-border'></span>
			</div>
		</>
	);
};

export default SearchInput;
