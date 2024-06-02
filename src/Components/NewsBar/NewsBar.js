import React from 'react';

import glassa from '../../assets/imagesNews/glassaSpecchio.webp';
import chefAzi from '../../assets/imagesNews/chefAzi.webp';
import madeItaly from '../../assets/imagesNews/madeinitaly.webp';
import streetfood from '../../assets/imagesNews/streetfood.webp';
import foodprofit from '../../assets/imagesNews/foodprofit.webp';
import kinder from '../../assets/imagesNews/kinder.webp';

import './NewsBar.css';

const newsLinks = [
  {
    url: 'https://www.agrodolce.it/ricette/glassa-specchio-colorata',
    image: glassa,
    source: 'AgroDolce'
  },
  {
    url: 'https://reportergourmet.com/it/news/6800-marco-akuzun-lo-chef-stellato-si-ritira-dopo-20-anni-rivoglio-la-mia-vita-privata',
    image: chefAzi,
    source: 'Reporter Gourmet'
  },
  {
    url: 'https://www.foodweb.it/2024/04/giornata-made-in-italy-coldiretti-cibo-prima-ricchezza-del-paese/',
    image: madeItaly,
    source: 'Reporter Gourmet'
  },
  {
    url: 'https://www.messinatoday.it/eventi/weekend/cosa-fare-messina-weekend-3-5-maggio-2024.html',
    image: streetfood,
    source: 'TodayBlog'
  },
  {
    url: 'https://www.ilcarmagnolese.it/il-docu-film-food-for-profit-al-cinema-elios-di-carmagnola/',
    image: foodprofit,
    source: 'Food Profit'
  },
  {
    url: 'https://www.theguardian.com/food/2024/may/02/unethical-junk-food-packaging-manipulates-children-into-craving-sweets-report-claims',
    image: kinder,
    source: 'The Guardian'
  }
];

function NewsBar() {
  return (
    <div id='shorterDiv' className='newsbar'>
      <div className='news-title'>
        <h1 className='news-text'>News</h1>
        <hr />
      </div>
      
      {newsLinks.map((news, index) => (
        <a href={news.url} className="image-link" key={index}>
          <div className="image-container">
            <img src={news.image} alt={news.source} className="news-image" width='279' height='156'/>
            <div className="overlayDiv">
              <span className='overText'>{news.source}</span>
            </div>
          </div>
        </a>
      ))}

    </div>
  );
}

export default NewsBar;
