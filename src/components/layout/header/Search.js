import React, { Fragment, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';

export default function Search() {
	const [select, setSelect] = useState('All');
	const [search, setSearch] = useState('');
	return (
		<form className="search">
			<select value={select} name="category" onChange={e => { setSelect(e.target.value); } }>
				<option value="all">All</option>
				<option value="videos">Videos</option>
				<option value="posts">Posts</option>
			</select>
			<input 
				onChange={e => { setSearch(e.target.value) }}  
				value={search} 
				type="text" 
				placeholder="Search here.."
			/>
			<button>
				<AiOutlineSearch size={20}/>
			</button>
		</form>
	)
}