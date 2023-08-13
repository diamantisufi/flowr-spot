import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { StateProvider } from './store'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StateProvider>
    <Suspense
      fallback={
        <div className="flex w-full h-full justify-center items-center">
          loading...
        </div>
      }
    />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StateProvider>
)
