import './App.css'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import AboutUs from './pages/AboutUs';
import Domains from './pages/Domains';
import OurJourney from './pages/OurJourney';
import Team from './pages/Team'
import {
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    
    <Routes>
      
        <Route
            path="/"
            element={<Home />}
        ></Route>
        <Route
            path="/aboutus"
            element={<AboutUs />}
        ></Route>
        <Route
            path="/gallery"
            element={<Gallery />}
        ></Route>
        <Route
            path="/domains"
            element={<Domains />}
        ></Route>
        <Route
            path="/ourjourney"
            element={<OurJourney />}
        ></Route>
        <Route
            path="/team"
            element={<Team />}
        ></Route>
      
    </Routes>
  )
}

export default App
