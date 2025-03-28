import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppProvider } from './context/contextProvider.jsx'
import ScrollToTop from './ScrollToTop.jsx'
import { ToastContainer,Bounce } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <Router>
        <ScrollToTop/>
        <App />
        <ToastContainer 
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick= {false}
        pauseOnHover={false}  // Ensure it closes even if hovered
        draggable
        theme="colored"
        transition={Bounce}
      />
      </Router>
    </AppProvider>
  </StrictMode>
)
