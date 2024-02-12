import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {  createBrowserRouter,  RouterProvider,} from "react-router-dom";
import { RegisterScreen } from './components/profile/profile.tsx'
import { LoginScreen } from './components/profile/profile.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/register",
    element: <RegisterScreen/>
  },
  {
    path: "/login",
    element: <LoginScreen/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
