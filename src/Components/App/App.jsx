import React from "react";
import Header from '../../Components/Header/Header';
import Introduction from '../../Components/Introduction/Introduction';
import Projects from '../../Components/Projects/Projects';
import Skills from '../../Components/Skills/Skills';
import Footer from '../../Components/Footer/Footer'
import '../../Styles/style-global.css';
import { BrowserRouter } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <Header />
      
        <Introduction />
        <Projects />
        <Skills  /> 
    
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
