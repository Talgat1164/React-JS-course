import React, { useEffect, useMemo, useState } from 'react'
import { Routes, Route, Link} from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Navbar from './components/UI/Navbar/Navbar'

function App() {
	return (
		<div className='App'>
			<Navbar />
			<AppRouter /> 
		</div>
	)
}

export default App
