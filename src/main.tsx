import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { App } from '@/App'

import reportWebVitals from './reportWebVitals'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// eslint-disable-next-line no-console
reportWebVitals(console.log)
