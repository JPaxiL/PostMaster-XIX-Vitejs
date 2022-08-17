import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./Home/Home"
import "./App.css"
import "./responsive.css"
import Login from "./Login/Login"
import MainPage from "./MainPage/MainPage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/main-page" element={<MainPage/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App