import React from "react";
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from 'react-transition-group';

function PostList({posts, title, remove}) {
	if (!posts.length) {
		return (
			<h1 className="title">Any post's not found</h1>
		)
	}
	return (
		<div>
			<h1 className="title">{title}</h1>
			<TransitionGroup>
				{posts.map((post, index) => 
				<CSSTransition
					key={post.id}
					timeout={500}
					classNames="post"
				>
					<PostItem remove={remove} number={index + 1} post={post} />
				</CSSTransition>
					
				)}
			</TransitionGroup>
			
		</div>
	)
}
export default PostList;