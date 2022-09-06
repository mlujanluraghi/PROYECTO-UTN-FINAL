import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import ContactoPage from './pages/ContactoPage';
import DiyPage from './pages/DiyPage';
import HomePage from './pages/HomePage';
import ScrapPage from './pages/ScrapPage';
import NovedadesPage from './pages/NovedadesPage';


function App() {
  return (
    <div className="App">
      <Header>

      </Header>

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Scrap" element={<ScrapPage />} />
          <Route path="Novedades" element={<NovedadesPage />} />
          <Route path="Diy" element={<DiyPage />} />
          <Route path="Contacto" element={<ContactoPage />} />
        </Routes>
      </BrowserRouter>


      <Footer>
      </Footer>


    </div>
  );
}

export default App;
