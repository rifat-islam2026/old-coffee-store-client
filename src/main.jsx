import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>
  },
  {
    path:"/addCoffee",
    element: <AddCoffee />
  },
  {
    path: "/updateCoffee",
    element:<UpdateCoffee/>
  }
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
