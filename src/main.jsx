import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import './helper.css';

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";


// Layouts
import Body from './Layouts/Body.jsx';
import Sidebar from './Layouts/Sidebar.jsx';
import App from './App.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path='body' element={<Body />} />
      <Route path='sidebar' element={<Sidebar />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
