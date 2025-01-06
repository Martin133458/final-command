import React from 'react';
import Ming from './components/Ming/Ming';
import Station from './components/Station/Station';
import Hero from './components/Hero/Hero';

import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Help from './components/Help/Help';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/home"
          element={
            <div>
              <Ming />
              <Station />
              <Hero />
              
            </div>
          }
        />
        <Route path='/help' element={<Help/>}/>
      </Routes>
        <Footer/>
    </BrowserRouter>
  );
};

export default App;

