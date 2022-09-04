
import Home from "./pages/HomePage/Home"
import Error from "./pages/ErrorPage/Error"
import Photo from './pages/PhotoPage/Photo'
import { Routes, Route } from "react-router-dom"
import "./App.css"

const App = () => {  
  return (
    <div>
      <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/error" element={ <Error/> } />
      <Route path="/photo" element={ <Photo/> } />
      </Routes>
    </div>
  );
}

export default App

