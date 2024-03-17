import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/home.jsx';
import PrivacyPolicies from './routes/privacypolicies.jsx';
import TermsOfUse from './routes/termsofuse.jsx';
import Delete from './routes/delete.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/privacypolicies",
    element: <PrivacyPolicies />
  },
  {
    path: "/termsofuse",
    element: <TermsOfUse />
  },
  {
    path: "/delete",
    element: <Delete />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);