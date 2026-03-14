import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './App.tsx'
import { RouterProvider } from 'react-router-dom'
import { TaskProvider } from './context/context.tsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TaskProvider>
      <RouterProvider router={router}/>
    </TaskProvider>
    <Toaster />
  </StrictMode>,
)
