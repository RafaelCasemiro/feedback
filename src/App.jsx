import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { ThemeProvider } from "styled-components"

import { Home } from "./pages/Home"
import { GlobalStyle } from "./styles/global.styles.js"
import { theme } from "./styles/theme.js"

const router = createBrowserRouter([
{
  path: "/",
  element: <Home />

}
])

export  function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <GlobalStyle/>
    </ThemeProvider>
  )
}
