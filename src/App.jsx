import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Card from "./components/Card"
import About from "./components/About"

function App() {
  return (
    <BrowserRouter>


      <div className="containers">
        <NavLink className="about" to="/">Camera</NavLink>
        <NavLink className="card" to="/card">Gallarey</NavLink>
      </div>

      <Routes >
        <Route path="/" element={<About></About>} ></Route>
        <Route path="/card" element={<Card></Card>} ></Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App