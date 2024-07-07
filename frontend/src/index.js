import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import './css/media.css';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/js/bootstrap.bundle"
import 'bootstrap/dist/css/bootstrap.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './pages/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
let routes = createBrowserRouter([
  {
    path:"/",
    element:<Login/>
  }
])
root.render(
  <React.StrictMode>
   <RouterProvider router={routes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
