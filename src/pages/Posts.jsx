import React, {useState, useRef, useEffect} from "react";
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
import useObserver from "../hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";

export default function Posts() {
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({sort: '', query: ''})
	const [modal, setModal] = useState(false) 
	const [totalPages, setTotalPages] = useState(0)
	const [limit, setLimit] = useState(5);
	const [page, setPage] = useState(1)
	const lastElement = useRef()
	
	const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
		const response = await PostServise.getAll(limit, page)
		setPosts([...posts, ...response.data]) 
		const totalCount = response.headers['x-total-count'];
		setTotalPages(getPageCount(totalCount, limit))
	})
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

	useObserver(lastElement, page < totalPages, isPostsLoading, () => {setPage(page + 1)})


	// useEffect(() => {
	// 	if (isPostsLoading) return;
	// 	if (observer.current) observer.current.disconnect()
	// 	let callback = function(entries, observer) {
	// 		if (entries[0].isIntersecting && page < totalPages) {
	// 			setPage(page + 1)
	// 		} 
	// 	};
	// 	observer.current = new IntersectionObserver(callback);
	// 	observer.current.observe(lastElement.current)
	// }, [isPostsLoading]);

	useEffect(() => {
		fetchPosts(limit, page)
	}, [page, limit])

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
				limit={limit}
				setLimit={setLimit}
				filter={filter}
				setFilter={setFilter} 
			/> 
			{postError && <h1 style={{color: 'red'}} className="title">{postError}</h1>}
			<PostList remove={removePost} posts={ sortedAndSearchedPosts } title={'List of posts'}/>
			<div ref={lastElement} style={{height: 1}}></div>
			{isPostsLoading && 
			<div style={{display: 'grid', placeItems: 'center', marginTop: '50px'}}><Loader/></div>
			}
			<Pagination totalPages={totalPages} page={page} setPage={setPage}/>
		</div>
	);
}


