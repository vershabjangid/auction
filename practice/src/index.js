import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import './css/media.css';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { CreateAuction } from './pages/CreateAuction';
import { ViewAuction } from './pages/view pages/ViewAuction';
import { MyAuction } from './pages/MyAuction';
import { ViewMyAuction } from './pages/view pages/ViewMyAuction';

const root = ReactDOM.createRoot(document.getElementById('root'));
let routes = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },

  {
    path:"/create-auction",
    element:<CreateAuction/>
  },

  {
    path:"/view-auction",
    element:<ViewAuction/>
  },

  {
    path:"/my-auction",
    element:<MyAuction/>
  },

  {
    path:"/view-my-auction",
    element:<ViewMyAuction/>
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
