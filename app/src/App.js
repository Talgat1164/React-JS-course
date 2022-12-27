import React, { useEffect, useMemo, useState } from 'react'
import { Routes, Route, Link} from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Navbar from './components/UI/Navbar/Navbar'
import { AuthContext } from './context'
import './styles/App.css';

function App() {
	const [isAuth, setIsAuth] = useState(false)
	const [isLoading, setLoading] = useState(true)

	useEffect(() => {
		if (localStorage.getItem('auth')) {
			setIsAuth(true)
		}
		setLoading(false)
	}, [])
	return (
		<AuthContext.Provider
			value={{
				isAuth,
				setIsAuth,
				isLoading
			}}
		>
			<Navbar />
			<AppRouter /> 
		</AuthContext.Provider>
			
	)
}

export default App
