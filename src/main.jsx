import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store from './store/store.js'
import { persistStore } from "redux-persist";
import { ToastContainer } from 'react-toastify'

let persistor = persistStore(store)

createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
        <ToastContainer />
      </PersistGate>
    </Provider>
  </>,
)
