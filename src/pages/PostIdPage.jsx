import React, {useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import useFetching from '../hooks/useFetching';

export default function PostIdPage() {
	let {id} = useParams();
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([])
	const [fetchPostById, isLoading, error] = useFetching(async () => {
		const response = await PostService.getById(id);
		setPost(response.data)
	})
	const [fetchComments, isComLoading, comError] = useFetching(async () => {
		const response = await PostService.getCommentsById(id);
		setComments(response.data)
	})
	useEffect(() => {
		fetchPostById(id)
		// fetchComments(id)
	}, [])
	console.log(comments);

	return (
		<div className='center '>
			<h1 className='title'>It is a page of post #{id}</h1>
			{isLoading 
				? 	<Loader />
				:  <div>
						<h2 className='title'>{post.id}. {post.title}</h2>
						<div className='title'>{post.body}</div>
					</div>
			}
			<div className='center'>
				<h1>Comments</h1>
				{isComLoading
					?	<Loader/>
					:	<div>
							{comments.map(comment => 
								<div key={comment.id} style={{marginTop: '15px', width: 700}}>
									<h5>{comment.email}</h5>
									<p>{comment.body}</p>
								</div>
							)}
						</div>
				}
			</div>
		</div>
	)
}
