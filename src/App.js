import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
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
    <div className='main_div'>
      <SocialBar position="header">
        <SearchBar />
      </SocialBar>
      <UpperBody>
        <Navbar />
      </UpperBody>
      <Routes>
        {/* Route per la home page */}
        <Route path="/" element={<Navigate to="/blog" replace />} />

        {/* Route per /blog */}
        <Route path="/blog" element={
          <>
            <Carousel />
            <Middle>
              <RenderIfVisible defaultHeight="78%" visibleOffset="50">
                <Center>
                  <RecipesPrev />
                  <NewsBar />
                </Center>
              </RenderIfVisible>
            </Middle>
          </>
        } />

        {/* Route per /blog/cookbook */}
        <Route path="/blog/cookbook" element={<CookBook />} />

        {/* Route per /blog/cookbook/:recipeName */}
        <Route path="/blog/cookbook/:recipeName" element={<Recipe />} />
      </Routes>
      <Footer>
        <SocialBar position="footer" />
      </Footer>
    </div>
  );
}

export default App;
