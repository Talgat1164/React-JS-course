import React from 'react'
import { useState } from 'react';

function Counter() {
	const [likes, setLikes] = useState(0)

  function increment() {
    setLikes(likes + 1); 
  } 

  function decrement() {
    setLikes(likes - 1); 
  } 

	return (
		<div>
			<h1>Likes: {likes}</h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
		</div>
	)
}

export default Counter
