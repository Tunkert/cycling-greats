import React from 'react'
import './searchbox.css'

const SearchBox = ({ searchField, searchChange }) => {
	return (
		<div className='pa2 flex justify-center'>
			<input className='pa3 ba b--green bg-lightest-blue br3 cb'
				type='search' 
				placeholder='search cyclists' 
				onChange={searchChange}
			/>
		</div>
	);	
}

export default SearchBox;