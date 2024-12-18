import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from '@/App'

import './index.css'

const root = createRoot(document.getElementById('root') as HTMLElement)

if (import.meta.env.MODE === 'test') {
  void import('@/__mocks__/browser')
    .then(({ worker }) => {
      void worker.start()
    })
    .then(() => {
      root.render(
        <StrictMode>
          <App />
        </StrictMode>,
      )
    })
} else {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

// Uncomment if you want to see the Lighthouse report in the console
// import reportWebVitals from './reportWebVitals'
// reportWebVitals(console.log)
