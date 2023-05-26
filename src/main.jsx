import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Blog from './components/Blog/Blog.jsx';
import Register from './components/Register/Register.jsx';
import ContextProvider from './providers/ContextProvider.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Recipe from './components/Home/Chef/RecipeDetails/Recipe.jsx';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/chefs/:id",
        element: (
          <ProtectedRoute>
            <Recipe />
          </ProtectedRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <RouterProvider router={router} />
  </ContextProvider>
);
