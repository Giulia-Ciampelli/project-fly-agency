import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import Home from "./pages/Home"
import Passengers from "./pages/Passengers"
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="/custumers" element={<Passengers />}></Route>
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
