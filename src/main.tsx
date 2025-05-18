import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { UserProvider } from './context/UserContext.tsx'
import { SidebarProvider } from './context/SidebarContext.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
    <SidebarProvider>
      <App />
    </SidebarProvider>
    </UserProvider>
  </React.StrictMode>,
)