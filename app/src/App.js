import React, { useState } from 'react'
import PostList from './components/PostList'
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
			<PostList posts={posts} title="Список постов 1" />
		</div>
	)
}

export default App
