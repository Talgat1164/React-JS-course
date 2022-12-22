import React, { useState } from 'react'
import PostItem from './components/PostItem'
import './styles/App.css'

function App() {
	return (
		<div className='App'>
			<PostItem
				post={{ id: 1, title: 'javascript', body: 'Description' }}
			></PostItem>
		</div>
	)
}

export default App
