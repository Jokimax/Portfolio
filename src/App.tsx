import {createBrowserRouter, RouterProvider} from "react-router-dom"
import PageBase from "./pageBase"
import Home from './homepage'
import PrivacyPolicy from "./privacyPolicy"

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
      ],
    },
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
