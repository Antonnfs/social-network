import React, {useState, useEffect} from "react";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import Pagination from "../components/UI/pagination/Pagination";
import Loader from "../components/UI/loader/Loader";
import {getPageCount} from "../utils/pages";
import useFetching from "../hooks/useFetching";
import PostServise from '../API/PostService';
import "../styles/App.css"
import { usePosts } from "../hooks/usePosts";

export default function Posts() {
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({sort: '', query: ''})
	const [modal, setModal] = useState(false) 
	const [totalPages, setTotalPages] = useState(0)
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1)
	const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
		const response = await PostServise.getAll(limit, page)
		setPosts([...posts, ...response.data]) 
		const totalCount = response.headers['x-total-count'];
		setTotalPages(getPageCount(totalCount, limit))
	})
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
	useEffect(() => {
		fetchPosts()
	}, [page])

	function createPost(newPost) {
		setPosts([...posts, newPost])
		setModal(false)
	}

	function removePost(post) {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	return (
		<div className="App">
			<MyButton style={{marginTop: '20px'}} onClick={() => setModal(true)}>
			Create post
			</MyButton>
			<MyButton style={{marginLeft: '15px'}} onClick={fetchPosts}>Get Posts</MyButton>
			<MyModal visible={modal} setVisible={setModal}>
				<PostForm create={createPost}/>
			</MyModal>
			<hr style={{margin: '15px 0px'}}/>
			<PostFilter 
			filter={filter}
			setFilter={setFilter}
			/>
			{postError && <h1 style={{color: 'red'}} className="title">{postError}</h1>}
			<PostList remove={removePost} posts={ sortedAndSearchedPosts } title={'List of posts'}/>
			{isPostsLoading && 
			<div style={{display: 'grid', placeItems: 'center', marginTop: '50px'}}><Loader/></div>
			}
			<Pagination totalPages={totalPages} page={page} setPage={setPage}/>
		</div>
	);
}


