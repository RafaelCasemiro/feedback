import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { ThemeProvider } from "styled-components"

import { Home } from "./pages/Home"
import { Theme } from "./styles/theme.js"
import { GlobalStyle } from "./styles/global.js"

const router = createBrowserRouter([
{
  path: "/",
  element: <Home />

}
])

export  function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <RouterProvider router={router} />
      </ThemeProvider>
  )
}
