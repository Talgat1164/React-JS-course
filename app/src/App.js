import React, { useState } from 'react';

function App() {
  const [likes, setLikes] = useState(0)

  function increment() {
    setLikes(likes + 1); 
  } 

  function dicrement() {
    setLikes(likes - 1); 
  } 

  return (
    <div className="App">
      <h1>Likes: {likes}</h1>
      <button onClick={increment}>+1</button>
      <button onClick={dicrement}>-1</button>
    </div>
  );
}

export default App;
