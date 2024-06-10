import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { ThemeProvider } from "styled-components"

import { Home } from "./pages/Home"
import { Theme } from "./styles/theme.js"

const router = createBrowserRouter([
{
  path: "/",
  element: <Home />

}
])

export  function App() {
  return (
    <ThemeProvider theme={theme}><RouterProvider router={router} /></ThemeProvider>
  )
}
