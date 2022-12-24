import React, { useMemo, useState } from 'react'
import PostFilter from './components/PostFilter'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'
import MyModal from './components/UI/MyModal/MyModal'
import MySelect from './components/UI/MySelect/MySelect'
import './styles/App.css'

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'js', body: 'DESCRIPTION' },
		{ id: 2, title: 'java', body: 'DESCRIPTION' },
		{ id: 3, title: 'c#', body: 'DESCRIPTION' },
		{ id: 4, title: 'c++', body: 'DESCRIPTION' },
	])
	
	const [filter, setFilter] = useState({sort: '', query: ''})
	const [modal, setModal] = useState(false)

	const sortedPosts = useMemo(() => {
		console.log('отраб')
		if (filter.sort) {
			return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
		}
		return posts
	}, [filter.sort, posts])

	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
	}, [filter.query, sortedPosts]) 

	const createPost = (newPost) => {
		setPosts([...posts, newPost])
		setModal(false)
	}

	// Получаем пост из дочернего компонента
	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	
	return (
		<div className='App'>
			<MyButton style={{margin: '15px 0'}} onClick={() => setModal(true)}>
				Создать пост
			</MyButton>
			<MyModal visible={modal} setVisible={setModal}>
				<PostForm create={createPost}/>
			</MyModal>
			<hr style={{margin: '15px 0'}}/> 
			<PostFilter 
				filter={filter} 
				setFilter={setFilter}		
			/>
			<PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов 1" />
		</div>
	)
}

export default App
