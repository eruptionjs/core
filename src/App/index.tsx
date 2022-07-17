import { FC, useState } from 'react'

import './index.css'
import logo from './logo.svg'

export const App: FC = () => {
  const [value, setValue] = useState<number>(0)

  const handleClick = () => {
    setValue((oldValue) => oldValue + 1)
  }

  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>
          Edit <code> src / index.tsx </code> and save to hot reload.
        </p>
        <a
          className="app-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{value}</p>
        <button className="app-button" onClick={handleClick}>
          Counter
        </button>
      </header>
    </div>
  )
}

export default App
