import React, { useState } from 'react'
import './styles/App.css'

function App() {
	return (
		<div className='App'>
			<div className='post'>
				<div className='post__content'>
					<strong>JavaScript</strong>
					<div>JavaScript - язык программирования</div>
				</div>
				<div className='post__btns'>
					<button>Delete</button>
				</div>
			</div>
		</div>
	)
}

export default App
