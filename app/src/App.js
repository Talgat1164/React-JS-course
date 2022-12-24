import React, { useRef, useState } from 'react'
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
	const bodyInputRef = useRef() 
	// useRef - это хук которым можно управлять напрямую дом-элементом 
	// console.log(bodyInputRef.current) <input type="text">

	const addNewPost = (e) => {
		e.preventDefault()
		console.log(title)
		console.log(bodyInputRef.current)
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
			<input ref={bodyInputRef} type="text"/>
			{/* <MyInput 
				type="text" 
				placeholder="Описание поста" 
				ref={bodyInputRef}
			/> */}
			<MyButton onClick={addNewPost}>Создать пост</MyButton>
		</form>
			<PostList posts={posts} title="Список постов 1" />
		</div>
	)
}

export default App
