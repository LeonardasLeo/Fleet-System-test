import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './mainScreen.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
