import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import PostService from './API/PostService'
import PostFilter from './components/PostFilter'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'
import Loader from './components/UI/Loader/Loader'
import MyModal from './components/UI/MyModal/MyModal'
import MySelect from './components/UI/MySelect/MySelect'
import { useFetching } from './hooks/useFetching'
import { usePosts } from './hooks/usePosts'
import './styles/App.css'

function App() {
	const [posts, setPosts] = useState([])
	
	const [filter, setFilter] = useState({sort: '', query: ''})
	const [modal, setModal] = useState(false)
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
	const [isPostsLoading, setIsPostsLoading] = useState(false) 
	const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
		 const posts = await PostService.getAll()
		setPosts(posts)
	})

	useEffect(() => {
		fetchPosts()
		console.log('useEFFFECT fetch posts')
	}, [])
	// useEffects - срабатывает тогда когда массив изменяется

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
			{postError && 
				<h1>Произошла ошибка {postError}</h1>
			}
			{
				isPostsLoading
				? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader /></div>
				: <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов 1" /> 
			}
			
		</div>
	)
}

export default App
