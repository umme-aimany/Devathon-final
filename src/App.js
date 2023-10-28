import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";

import Header from "./components/common/header/Header";
import Home from "./components/home/Home";


import "./App.css"; // Importing the CSS file correctl

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<CourseHome />} />
        <Route path='/team' element={<Team />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/journal' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
     
    </Router>
  );
}

export default App;
