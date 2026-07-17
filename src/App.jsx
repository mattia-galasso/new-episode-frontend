import { BrowserRouter, Route, Routes } from "react-router"

/* LAYOUT */
import DefaultLayout from "./layouts/DefaultLayout"

/* PAGES */
import Homepage from "./pages/HomePage"
import Page404 from "./pages/Page404"

export default function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" element={<Homepage />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

/* 
  TODO:
    - PAGE 404 CREARE PAGINA
    - LOADING FUNCTION
    - NOTIFICATION FUNCTION
*/