import React, { useState } from 'react'
import PostItem from './components/PostItem'
import './styles/App.css'

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'js', body: 'DESCRIPTION' },
		{ id: 2, title: 'java', body: 'DESCRIPTION' },
		{ id: 3, title: 'c#', body: 'DESCRIPTION' },
		{ id: 4, title: 'c++', body: 'DESCRIPTION' },
	])

	return (
		<div className='App'>
			<h1 style={{ textAlign: 'center' }}>Список постов</h1>
			{posts.map(post => <PostItem post={post} key={post.id} />
			)}
		</div>
	)
}

export default App
