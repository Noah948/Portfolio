import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
 import './App.css'
import './index.css'
import Header from "./header";
import Footer from "./footer";
import Summary from "./summary";
import Skills from "./skills";
import Projects from "./projects";


const App = () => {
  
  return (
    
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Summary />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;

