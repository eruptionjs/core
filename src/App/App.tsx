import { useState } from 'react'

import './App.css'
import reactLogo from './react.svg'

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="flex">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/icons/favicon.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://github.com/eruptionjs/core" target="_blank" rel="noreferrer">
          <span className="logo eruption">🌋</span>
        </a>
      </div>
      <h1>Vite + React + Eruption</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite, React and Eruption logos to learn more</p>
    </div>
  )
}

export default App
