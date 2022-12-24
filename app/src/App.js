import React, { useMemo, useState } from 'react'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import MyInput from './components/UI/input/MyInput'
import MySelect from './components/UI/MySelect/MySelect'
import './styles/App.css'

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'js', body: 'DESCRIPTION' },
		{ id: 2, title: 'java', body: 'DESCRIPTION' },
		{ id: 3, title: 'c#', body: 'DESCRIPTION' },
		{ id: 4, title: 'c++', body: 'DESCRIPTION' },
	])
	const [selectedSort, setSelectedSort] = useState('')
	const [searchQuery, setSearchQuery] = useState('')

	const sortedPosts = useMemo(() => {
		console.log('отраб')
		if (selectedSort) {
			return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
		}
		return posts
	}, [selectedSort, posts])

	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
	}, [searchQuery, sortedPosts]) 

	const createPost = (newPost) => {
		setPosts([...posts, newPost])
	}

	// Получаем пост из дочернего компонента
	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	const sortPosts = (sort) => {
		setSelectedSort(sort);
	}

	return (
		<div className='App'>
			<PostForm create={createPost} />
			<hr style={{margin: '15px 0'}}/> 
			<div>
			 	<MyInput 
					placeholder="Поиск..."	
					value={searchQuery}
					onChange={e => setSearchQuery(e.target.value)}
					
				/>
				<MySelect 
					value={selectedSort}
					onChange={sortPosts}
					defaultValue="Сортировка"
					options={[
						{value: 'title', name: 'по названию'},
						{value: 'body', name: 'по описанию'},
					]}
			/>
			</div>
			
			{sortedAndSearchedPosts.length !== 0 
				? 
				<PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов 1" />
				:
				<h1 style={{textAlign: 'center'}}>Посты не найдены</h1> 
			}
		</div>
	)
}

export default App
