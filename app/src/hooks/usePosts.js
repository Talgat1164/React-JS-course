import { useMemo } from "react"

export const useSortedPosts	= (posts, sort) => {
	const sortedPosts = useMemo(() => {
		console.log('useMemo sortedPosts')
		if (sort) {
			return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
		}
		return posts
	}, [sort, posts])
	
	return sortedPosts
}

export const usePosts	= (posts, sort, query) => {
	const sortedPosts = useSortedPosts(posts, sort);

	const sortedAndSearchedPosts = useMemo(() => {
		console.log('useMemo sortedAndSearchedPosts')
		return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
	}, [query, sortedPosts]) 

	return sortedAndSearchedPosts
}

	// useMemo -  не мутирует изначальный массив, а создает другой 
