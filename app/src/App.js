import React, { useState } from 'react'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import './styles/App.css'

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'js', body: 'DESCRIPTION' },
		{ id: 2, title: 'java', body: 'DESCRIPTION' },
		{ id: 3, title: 'c#', body: 'DESCRIPTION' },
		{ id: 4, title: 'c++', body: 'DESCRIPTION' },
	])

	const createPost = (newPost) => {
		setPosts([...posts, newPost])
	}

	// Получаем пост из дочернего компонента
	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	return (
		<div className='App'>
			<PostForm create={createPost} />
			{posts.length !== 0 
				? 
				<PostList remove={removePost} posts={posts} title="Список постов 1" />
				:
				<h1 style={{textAlign: 'center'}}>Посты не найдены</h1> 
			}
		</div>
	)
}

export default App
