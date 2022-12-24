import React, { useState } from 'react'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'
import './styles/App.css'

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'js', body: 'DESCRIPTION' },
		{ id: 2, title: 'java', body: 'DESCRIPTION' },
		{ id: 3, title: 'c#', body: 'DESCRIPTION' },
		{ id: 4, title: 'c++', body: 'DESCRIPTION' },
	])
	const [post, setPost] = useState({title: '', body: ''})


	const addNewPost = (e) => {
		e.preventDefault()
		setPosts([...posts, {...post, id: Date.now()}])
		setPost({title: '', body: ''})
	}

	return (
		<div className='App'>
			<form>
				<MyInput 
					type="text" 
					placeholder="Название поста" 
					value={post.title}
					onChange={e => setPost({...post, title: e.target.value})}
				/>
				<MyInput 
					type="text" 
					placeholder="Описание поста" 
					value={post.body}
					onChange={e => setPost({...post, body: e.target.value})}
				/>
				<MyButton onClick={addNewPost}>Создать пост</MyButton>
			</form>
			<PostList posts={posts} title="Список постов 1" />
		</div>
	)
}

export default App
