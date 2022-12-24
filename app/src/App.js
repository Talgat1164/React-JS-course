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
	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')

	const addNewPost = (e) => {
		e.preventDefault()
		const newPost = {
			id : Date.now(), 
			title, 
			body	
		}
		setPosts([...posts, newPost])
		setTitle('')
		setBody('')
	}

	return (
		<div className='App'>
			<form>
				<MyInput 
					type="text" 
					placeholder="Название поста" 
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
				<MyInput 
					type="text" 
					placeholder="Описание поста" 
					value={body}
					onChange={e => setBody(e.target.value)}
				/>
				<MyButton onClick={addNewPost}>Создать пост</MyButton>
			</form>
			<PostList posts={posts} title="Список постов 1" />
		</div>
	)
}

export default App
