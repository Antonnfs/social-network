import React from "react";
import classes from "./MyButton.module.css";

function MyButton({children, page, p, ...props}) {
	return (
		<button {...props} className={page === p ? classes.pageCurrent : classes.myBtn}>
			{children}
		</button>
	)
}
export default MyButton;