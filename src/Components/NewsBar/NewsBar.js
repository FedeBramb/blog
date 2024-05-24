import React from 'react';
import './NewsBar.css';
import glassa from '../../assets/imagesNews/glassaSpecchio.webp';
import chefAzi from '../../assets/imagesNews/chefAzi.webp';
import madeItaly from '../../assets/imagesNews/madeinitaly.webp';
import streetfood from '../../assets/imagesNews/streetfood.webp';
import foodprofit from '../../assets/imagesNews/foodprofit.webp';
import kinder from '../../assets/imagesNews/kinder.webp';

function NewsBar() {
    return (
    <div id='shorterDiv' className='newsbar'>
      <div className='news-title'>
        <h1 className='news-text'>News</h1>
        <hr />
      </div>

      <a href={'https://www.agrodolce.it/ricette/glassa-specchio-colorata'} className="image-link">
        <div className="image-container"  style={{ 
          backgroundImage: `url(${glassa})`, backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div className="overlayDiv">
            <span className='overText'>AgroDolce</span>
          </div>
        </div>
      </a>

      <a href={'https://reportergourmet.com/it/news/6800-marco-akuzun-lo-chef-stellato-si-ritira-dopo-20-anni-rivoglio-la-mia-vita-privata'} className="image-link">
        <div className="image-container"  style={{ 
          backgroundImage: `url(${chefAzi})`, backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div className="overlayDiv">
            <span className='overText'>Reporter Gourmet</span>
          </div>
        </div>
      </a>

      <a href={'https://www.foodweb.it/2024/04/giornata-made-in-italy-coldiretti-cibo-prima-ricchezza-del-paese/'} className="image-link">
        <div className="image-container"  style={{ 
          backgroundImage: `url(${madeItaly})`, backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div className="overlayDiv">
            <span className='overText'>Reporter Gourmet</span>
          </div>
        </div>
      </a>

      <a href={'https://www.messinatoday.it/eventi/weekend/cosa-fare-messina-weekend-3-5-maggio-2024.html'} className="image-link">
        <div className="image-container"  style={{ 
          backgroundImage: `url(${streetfood})`, backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div className="overlayDiv">
            <span className='overText'>TodayBlog</span>
          </div>
        </div>
      </a>

      <a href={'https://www.ilcarmagnolese.it/il-docu-film-food-for-profit-al-cinema-elios-di-carmagnola/'} className="image-link">
        <div className="image-container"  style={{ 
          backgroundImage: `url(${foodprofit})`, backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div className="overlayDiv">
            <span className='overText'>Food Profit</span>
          </div>
        </div>
      </a>

      <a href={'https://www.theguardian.com/food/2024/may/02/unethical-junk-food-packaging-manipulates-children-into-craving-sweets-report-claims'} className="image-link">
        <div className="image-container"  style={{ 
          backgroundImage: `url(${kinder})`, backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div className="overlayDiv">
            <span className='overText'>The Guardian</span>
          </div>
        </div>
      </a>

    </div>
  );
}

export default NewsBar;

