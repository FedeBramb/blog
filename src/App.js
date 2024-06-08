import React from "react";

// Componente principale che avvolge l'intera applicazione per fornire le funzionalità di routing.
import { Routes, Route } from "react-router-dom";

import Header from './Container/Header/Header.js';
import SocialBar from './Components/SocialBar/SocialBar.js';
import SearchBar from './Components/SearchBar/SearchBar.js';
import Navbar from './Components/Navbar/Navbar.jsx';
import Body from "./Container/Body/Body.jsx";
import Carousel from './Components/Carousel/Carousel.js';
import Center from './Container/Center/Center.js';
import RecipesPrev from './Components/RecipesPrev/RecipesPrev.js';
import NewsBar from './Components/NewsBar/NewsBar.js';
import CookBook from './Components/CookBook/CookBook.js';
import Recipe from './Components/Recipe/Recipe.js';
import CommentsSection from './Components/CommentsSection/CommentsSection.js';
import Footer from './Container/Footer/Footer.js';

import RenderIfVisible from 'react-render-if-visible';

import './App.css';


function App() {
  return (
      <div className='main_div'>
        <Header>
          <SocialBar position="header">
            <SearchBar />
          </SocialBar>
          <Navbar />
        </Header>
        <Body>
          <Routes>
            <Route path="/" element={
              <>
                <Carousel />
                <Center>
                  <RenderIfVisible defaultHeight="700" visibleOffset="100" stayRendered="true">
                    <RecipesPrev />
                  </RenderIfVisible>
                  <RenderIfVisible defaultHeight="500" visibleOffset="100" stayRendered="true">
                    <NewsBar />
                  </RenderIfVisible>
                </Center>
                
              </>
            }>
            </Route>
            <Route path="/cookbook" element={
              <CookBook />}>
            </Route>
            <Route path="/cookbook/:recipeName" element={
              <Recipe>
                <CommentsSection />
              </Recipe>
            }>
            </Route>
          </Routes>
        </Body>
        <Footer>
          <SocialBar position="footer" />
        </Footer>
      
      </div>
    
  );
}

export default App;