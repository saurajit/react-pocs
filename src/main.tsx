import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import {
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css'
import configureStore from './store'
import routes from './routes/root'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
)
