import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { TaskContextProvider } from './context/TaskContext.jsx'   // componente que permite usar las variables como globales, contenidas en el objeto TaskContext

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </React.StrictMode>
)
