import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';

function PostIdPage() {
	const params = useParams()
	
	const [post, setPosts] = useState({});
	const [fetchPostById, isLoading, error] = useFetching(async(id) => {
		const response = await PostService.getById(id)
		setPosts(response.data)
	})
	
	
	useEffect(() => {
		fetchPostById(params.id)
	})

	return (
		<div>
			<h1>Вы открыли стр поста с ID = {params.id}</h1>
			{isLoading
				? <Loader />
				: <div>{post.id}. {post.title}</div>
			}
			<h1>
				Комментарии
			</h1>
		</div>
	)
}

export default PostIdPage
