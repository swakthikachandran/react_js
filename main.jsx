import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Tab from './Tab'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tab/>
  </StrictMode>,
)
