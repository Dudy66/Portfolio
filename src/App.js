import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Accueil from './Composants/Homepage';
import Projet from './Composants/Projet';
import Cv from './Composants/Cv';
import Contact from './Composants/Contact';
import MonCv from './Composants/MonCv';


function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/projet" element={<Projet />} />
        <Route path="/about" element={<Cv />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/MonCv" element={<MonCv />} />
      </Routes>
    </div>
  );
}

export default App;
