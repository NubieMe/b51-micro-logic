import Convert from "./pages/Convert"
import Count from "./pages/Count"
import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ML from "./pages/ML"
import TTT from "./pages/TTT"
import Matching from "./pages/Matching"
import Salary from "./pages/Salary"
import Scramble from "./pages/Scramble"
import NotFound from "./pages/404"

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/count" element={<Count/>}/>
        <Route path="/convert" element={<Convert/>}/>
        <Route path="/ML" element={<ML/>}/>
        <Route path="/TTT" element={<TTT/>}/>
        <Route path="/matching" element={<Matching/>}/>
        <Route path="/salary" element={<Salary/>}/>
        <Route path="/scramble" element={<Scramble/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App
