import React from 'react';
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>{count}</p>
      <header className="App-header">
        <p>
          Heel mooi allemaal
        </p>
        <button onClick={() => setCount(c => setCount(c + 1))}>Increase count</button>
      </header>
    </>
  );
}

export default App;
