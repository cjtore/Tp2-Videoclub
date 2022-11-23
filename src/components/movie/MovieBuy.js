import React, {useState} from 'react'
import { useLoaderData } from 'react-router-dom';
import './MovieBuy.css'


function MovieBuy() {
  const [isGoingTobuy, setIsGoingTobuy] = useState(false)
  const movie = useLoaderData();
  const urlsearch = `https://www.amazon.com/s?k=movie `;
  
  
  return (
  
<div className="card-checkout">
  <div className="card_left">
    <img src={'https://image.tmdb.org/t/p/w500'+movie.backdrop_path}/>
  </div>
  <div className="card_right">
    
    <h3>Estas a punto de comprar {movie.title}</h3>
    
    <form className="checkout">
    <div className="checkout-header">
      <h1 className="checkout-title">
    
        <span className="checkout-price">$500</span>
      </h1>
    </div>
    <p>
      <input type="text" className="checkout-input checkout-name" placeholder="Your name" autofocus/>
      <input type="text" className="checkout-input checkout-exp" placeholder="MM"/>
      <input type="text" className="checkout-input checkout-exp" placeholder="YY"/>
    </p>
    <p>
      <input type="text" className="checkout-input checkout-card" placeholder="4111 1111 1111 1111"/>
      <input type="text" className="checkout-input checkout-cvc" placeholder="CVC"/>
    </p>
    <p>
      <input type="submit" value="Comprar" className="checkout-btn"/>
    </p>
  </form>

    
  </div>
</div>
  

  )
}

export default MovieBuy