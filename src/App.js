import React from 'react';

// Componente principale che avvolge l'intera applicazione per fornire le funzionalità di routing.
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import SocialBar from './Components/SocialBar/SocialBar.js';
import SearchBar from './Components/SearchBar/SearchBar.js';
import UpperBody from './Container/UpperBody/UpperBody.js';
import Navbar from './Components/Navbar/Navbar.js';
import Carousel from './Components/Carousel/Carousel.js';
import Middle from './Container/Middle/Middle.js';
import Center from './Container/Center/Center.js';
import RecipesPrev from './Components/RecipesPrev/RecipesPrev.js';
import NewsBar from './Components/NewsBar/NewsBar.js';
import CookBook from './Components/CookBook/CookBook.js';
import Recipe from './Components/Recipe/Recipe.js';
import Footer from './Container/Footer/Footer.js';

import RenderIfVisible from 'react-render-if-visible';

import './App.css';


function App() {
  return (
    <Router>
      <div className='main_div'>
        <SocialBar position="header">
          <SearchBar />
        </SocialBar>
        {/*Search Bar*/}
        <UpperBody>
          {/*<Logo />*/}
          <Navbar />
        </UpperBody>
        <Routes>
          <Route path="/" element={
            <>
              <Carousel />
              <Middle>
                <RenderIfVisible defaultHeight="78%" visibleOffset="50">
                  <Center>
                    <RecipesPrev />
                    <NewsBar />
                  </Center>
                </RenderIfVisible>
              </Middle></>
          }>
          </Route>
          <Route path="/cookbook" element={
            <CookBook/>}>
          </Route>
          <Route path="/cookbook/:recipeName" element={
            <Recipe/>}>
          </Route>
        </Routes>
        <Footer>
          <SocialBar position="footer" />
        </Footer>
      </div>
    </Router> 
  );
}

export default App;