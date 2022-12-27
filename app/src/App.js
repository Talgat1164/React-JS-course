import React, { useEffect, useMemo, useState } from 'react'
import { Routes, Route, Link} from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Navbar from './components/UI/Navbar/Navbar'
import { AuthContext } from './context'

function App() {
	const [isAuth, setIsAuth] = useState(false)
	return (
		<AuthContext.Provider
			value={{
				isAuth,
				setIsAuth
			}} 
		>
			<Navbar />
			<AppRouter /> 
		</AuthContext.Provider>
			
	)
}

export default App
