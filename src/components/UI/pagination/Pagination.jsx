import React from 'react';
import MyButton from '../button/MyButton';
import usePagination from '../../../hooks/usePagination';

export default function Pagination({totalPages, page, setPage}) {
	const pagesArray = usePagination(totalPages);

	return (
		<div className="pages__wrapper">
			{pagesArray.map(p => 
				<MyButton  onClick={() => setPage(p)} p={p} page={page} key={p}>{p}</MyButton>
			)}
		</div>
	)
}
