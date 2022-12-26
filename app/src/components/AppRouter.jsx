import React from 'react'
import { Routes, Route} from 'react-router-dom'
import { Navigate } from 'react-router-dom';

import Login from '../pages/Login';
import Posts from '../pages/Posts'
import { privateRoutes, publicRoutes} from '../router/index.js'


function AppRouter() {
	const isAuth = true; 

	return (
		isAuth 
		?
		<Routes>
      {privateRoutes.map(route =>
        <Route
         	element={route.element}
        	path={route.path}
        />
      )}
			<Route path='/*' element={ <Navigate to="/posts" /> } />	
		</Routes>	
		: <Routes>
      {publicRoutes.map(route =>
        <Route
         	element={route.element}
        	path={route.path}
        />
      )}
			<Route path='/*' element={ <Navigate to="/login" /> } />		
		</Routes>
	)
}

export default AppRouter
