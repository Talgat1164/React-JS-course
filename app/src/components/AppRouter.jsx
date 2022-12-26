import React from 'react'
import { Routes, Route} from 'react-router-dom'
import About from '../pages/About'
import Posts from '../pages/Posts'
import Error from '../pages/Error'
import PostIdPage from '../pages/PostIdPage'


function AppRouter() {
	return (
		<Routes>
      <Route path='/about' element={<About />} />
			<Route path='/posts' element={<Posts />} />
			<Route path='/posts/:id' element={<PostIdPage />} />
			<Route path='/*' element={ <Error /> }></Route> 			
		</Routes>	
	)
}

export default AppRouter
