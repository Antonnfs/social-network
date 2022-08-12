import React, {useState} from "react";
import MyButton from "./UI/button/MyButton";
import MyInput  from "./UI/input/MyInput";

function PostForm({create}) {
	const [post, setPost] = useState({title: '', body: ''})
	function addNewPost(e) { 
		e.preventDefault();
		const newPost = {
			...post, id: Date.now()
		}
		create(newPost);
		setPost({title: '', body: ''})
	}
	return (
		<form>
			<MyInput 
			type="text" 
			placeholder="Name of post"
			value={post.title}
			onChange={e => setPost({...post, title: e.target.value})}
			/>
			<MyInput 
				value={post.body}
				onChange={e => setPost({...post, body: e.target.value})}
				type="text"  
				placeholder="Post's description"
				/>
			<MyButton onClick={addNewPost}>Create post</MyButton> 
		</form>
	)
}
export default PostForm;