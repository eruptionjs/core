import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { disableReactDevTools } from '@fvilers/disable-react-devtools'

import { App } from '@/App'

import './index.css'

if (import.meta.env.MODE === 'production') {
  disableReactDevTools()
}

const root = createRoot(document.getElementById('root') as HTMLElement)

if (import.meta.env.MODE === 'development') {
  import('@/__mocks__/browser')
    .then(({ worker }) => {
      worker.start()
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
