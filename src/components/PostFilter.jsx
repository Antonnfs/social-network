import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

export default function PostFilter({filter, setFilter, limit, setLimit}) {
	return (
		<>
			<MyInput
				value={filter.query}
				onChange={event => setFilter({...filter, query: event.target.value})}
				placeholder='Search by...'
			/>
			<hr style={{margin: '15px 0px'}}/> 
			<div style={{display: 'flex', justifyContent: 'space-between'}}>
				<div>
					<span style={{marginRight: 10}}>Sort by:</span>
					<MySelect 
						value={filter.sort}
						onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
						defaultValue='Sort by'
						options={[
							{value: 'title', name: 'name'},
							{value: 'body', name: 'description'}, 
						]}
					/>
				</div>
				<div>
					<span style={{marginRight: 10}}>Posts per page:</span>
					<MySelect 
						style={{width: 30}}
						value={limit} 
						onChange={value => setLimit(value)} 
						defaultValue={'Posts per page'}
						options={[
							// {value: 5, name: '5'},
							{value: 10, name: '10'},
							{value: 25, name: '25'},
							{value: -1, name: 'Show all'}
						]}
					/>
				</div>
			</div>
		</>
	)
}
