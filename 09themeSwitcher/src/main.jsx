import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app.css'
import App from './App.jsx'
import { ThemeProvider } from './contexts/theme.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <App />
    
  </StrictMode>,
)
