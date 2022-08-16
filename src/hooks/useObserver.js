import React, {useRef, useEffect} from 'react'

export default function useObserver(ref, canLoad, isLoading, callback) {
	const observer = useRef()
	useEffect(() => {
		if (isLoading) return;
		if (observer.current) observer.current.disconnect();
		let callb = function(entries) {
			if (entries[0].isIntersecting && canLoad) {
				callback()
			} 
		};
		observer.current = new IntersectionObserver(callb);
		observer.current.observe(ref.current)
	}, [isLoading]);
}
