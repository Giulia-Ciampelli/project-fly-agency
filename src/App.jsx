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
            <Route path="custumers/:citta_del_viaggio" element={<Passengers />}></Route>
            {/* cambiare il path con custumers/: citta_del_viaggio */}
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
