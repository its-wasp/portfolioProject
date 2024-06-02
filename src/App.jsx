import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar.jsx";
import Projects from "./Components/HomePage/Projects/Projects.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import AboutMe from "./Components/AboutMe/Hero/AboutMeHero.jsx";
import HomePage from "./Components/HomePage/HomePage.jsx";

const App =() => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/about" element={<AboutMe/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}
export default App;