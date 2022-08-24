import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from '@/App'

import reportWebVitals from './reportWebVitals'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// eslint-disable-next-line no-console
reportWebVitals(console.log)
