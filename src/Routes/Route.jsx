import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Details from "../components/Details";
import App from "../App";
import Movie from "../components/Movie";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <App></App>
      },
      {
        path: '/details',
        element: <Details></Details>,
         
      },
      {
        path: '/movie',
        element: <Movie></Movie>,
         
      }
      
    ]

  },
]);
