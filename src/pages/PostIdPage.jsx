import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import useFetching from '../hooks/useFetching';

export default function PostIdPage() {
	let {id} = useParams();
	const [post, setPost] = useState({});
	const [photos, setPhotos] = useState({})
	const [comments, setComments] = useState([])
	const [fetchPostById, isLoading, error] = useFetching(async () => {
		const response = await PostService.getById(id);
		setPost(response.data)
	})
	const [fetchPhotos, isPhotosLoading, photosError] = useFetching(async () => {
		const response = await PostService.getPhotosById(id);
		setPhotos(response.data)
	})
	const [fetchComments, isComLoading, comError] = useFetching(async () => {
		const response = await PostService.getCommentsById(id);
		setComments(response.data)
	})
	useEffect(() => {
		fetchPostById(id)
		fetchPhotos(id)
		fetchComments(id)
	}, [])

	return (
		<div className='container'>
			<h1 className='title'>It is a page of post #{id}</h1>
			{isLoading 
				? 	<div style={{display: 'grid', placeItems: 'center'}}><Loader/></div>
				:  <div>
						<h2 className='title text-left'>{post.id}. {post.title}</h2>
						<p className='title text-left'>{post.body}</p>
					</div>
			}
			{isPhotosLoading 
				? 	<div style={{display: 'grid', placeItems: 'center'}}><Loader/></div>
				:  <div style={{width: '100%', height: '50%', display: 'grid', placeItems: 'center'}}>
						<img src={photos.url} alt="photo of post"/>
					</div>
			}
			<div className='center'>
				<h1 style={{marginTop: 50}}>Comments</h1>
				{isComLoading
					?	<Loader/>
					:	<div style={{marginBottom: 30}}>
							{comments.map(comment => 
								<div key={comment.id} className='container' style={{marginTop: '15px'}}>
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
