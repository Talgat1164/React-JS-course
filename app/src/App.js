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
import Pagination from './components/UI/pagination/Pagination'
import { useFetching } from './hooks/useFetching'
import { usePosts } from './hooks/usePosts'
import './styles/App.css'
import { getPageCount, getPagesArray } from './utils/pages'

function App() {
	const [posts, setPosts] = useState([])
	
	const [filter, setFilter] = useState({sort: '', query: ''})
	const [modal, setModal] = useState(false)
	const [totalPages, setTotalPages] = useState(0); 
	const [limit, setLimit] = useState(10)
	const [page, setPage] = useState(1)
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
	
	
	const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
		const response = await PostService.getAll(limit, page)
		setPosts(response.data)
		console.log(response.headers['x-total-count'])
		const totalCount = response.headers['x-total-count']
		setTotalPages(getPageCount(totalCount, limit))
	})

	console.log(totalPages)

	useEffect(() => {
		fetchPosts(limit, page)
		console.log('useEFFFECT fetch posts')
	}, [page])
	// useEffects - срабатывает тогда когда массив изменяется

	const createPost = (newPost) => {
		setPosts([...posts, newPost])
		setModal(false)
	}


	// Получаем пост из дочернего компонента
	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	const changePage = (page) => {
		setPage(page)
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
			
			<Pagination page={page} changePage={changePage} totalPages={totalPages} />

		</div>
	)
}

export default App
