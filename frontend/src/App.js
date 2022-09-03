
import Home from "./components/LandingPage/Home"
import Error from "./components/ErrorPage/Error"
import Photo from './components/PhotoPage/Photo';
import { Routes, Route } from "react-router-dom"
import './App.css'
function App() {  
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/error" element={ <Error/> } />
      <Route path="/photo" element={ <Photo/> } />
      </Routes>
      </div>
  );
}

export default App;

