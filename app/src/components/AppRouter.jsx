import React, { useContext } from 'react'
import { Routes, Route} from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/index.js';
import { privateRoutes, publicRoutes} from '../router/index.js'
import Loader from './UI/Loader/Loader.jsx';


function AppRouter() {
	const {isAuth, isLoading} = useContext(AuthContext);
	console.log(isAuth) 

	if (isLoading) {
		return <Loader/>
	}

	return (
		isAuth 
		?
		<Routes>
      {privateRoutes.map(route =>
        <Route
         	element={route.element}
        	path={route.path}
					key={route.path}
        />
      )}
			<Route path='/*' element={ <Navigate to="/posts" /> } />	
		</Routes>	
		: <Routes>
      {publicRoutes.map(route =>
        <Route
         	element={route.element}
        	path={route.path}
					key={route.path}

        />
      )}
			<Route path='/*' element={ <Navigate to="/login" /> } />		
		</Routes>
	)
}

export default AppRouter
