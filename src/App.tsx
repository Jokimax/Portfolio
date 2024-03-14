import {createBrowserRouter, RouterProvider} from "react-router-dom"
import PageBase from "./pageBase"
import Home from './homepage'
import PrivacyPolicy from "./privacyPolicy"
import Error404 from "./404"

function App() {
  const router = createBrowserRouter([
    {
      element: <PageBase />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/simplydodge/privacyPolicy",
          element: <PrivacyPolicy />,
        },
        {
          path: "*",
          element: <Error404 />,
        },
      ],
    },
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
