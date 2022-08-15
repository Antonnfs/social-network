import React from "react";
import MyButton from "./UI/button/MyButton";
import {useNavigate, useParams} from 'react-router-dom';


function PostItem(props) {
	const navigate = useNavigate()
	
	return (
		<div className="post">
			<div className="post__content">
				<strong>{props.post.id}. {props.post.title}</strong>
				<div style={{paddingRight: '15px'}}>
					{props.post.body}
				</div>
			</div>
			<div className="post__btns">
				<MyButton onClick={() => navigate(`/${props.post.id}`)}>Open</MyButton>
				<MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
			</div>
		</div>
	)
}
export default PostItem; 