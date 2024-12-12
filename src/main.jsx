import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EventHandling from './assets/components/EventHandling'
// import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EventHandling/>
  </StrictMode>,
)
