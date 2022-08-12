import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

export default function PostFilter({filter, setFilter}) {
	return (
		<>
			<MyInput
				value={filter.query}
				onChange={event => setFilter({...filter, query: event.target.value})}
				placeholder='Search by...'
			/>
			<hr style={{margin: '15px 0px'}}/> 
			<MySelect 
				value={filter.sort}
				onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
				defaultValue='Sort by'
				options={[
					{value: 'title', name: 'by name'},
					{value: 'body', name: 'by description'}, 
				]}
			/>
		</>
	)
}
