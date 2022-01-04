import React, { useEffect } from 'react'
import logo from '../../img/logo/logo.png'
import art1 from '../../img/1.jpeg'
import art2 from '../../img/2.jpeg'
import art3 from '../../img/3.jpeg'
import art4 from '../../img/4.jpeg'
import art5 from '../../img/5.jpeg'
import art6 from '../../img/6.jpeg'
// import './jquery.min.js'
import Swiper from './swiper.min.js'
import './swiper.min.css'
import Minter from '../mintmeb'

export default function Home() {
  useEffect(() => {
    new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });
  },[])
  return (
    <>
      <header>
    <nav className="navbar navbar-light justify-content-center">
      <a className="navbar-brand" href="#">
        <img src={logo} className="w-100" alt="SWAGSLIMES" />
      </a>
    </nav>
  </header>

  <div className="container mt-5 mb-5">
    <div className="row">
      <div className="col-sm-12 text-center">
        <a href="https://discord.gg/H9p8kvUHsG" className="blog-slider__button m-1 social-btn">DISCORD</a>
        <a href="http://twitter.com/swagslimenft" className="blog-slider__button m-1 social-btn">TWITTER</a>
        <a href="#mint" className="blog-slider__button m-1 social-btn">MINT</a>
       </div>
  </div>
  </div>

  <div id="swiper-slime" className="mt-5">
    <div className="blog-slider">
      <div className="blog-slider__wrp swiper-wrapper">
        <div className="blog-slider__item swiper-slide">
          <div className="blog-slider__img">
            
            <img src={art1} alt="art1" />
          </div>
          <div className="blog-slider__content">
            <div className="blog-slider__text">SWAGSLIMES are intelligent alien creatures that are made up of the galaxies most valuable materials and end up with a slime like form. They live in peace in the blockchain and are known for throwing the best parties in the blockchain. </div>
            <a href="#about-slimes" className="blog-slider__button" data-toggle="modal" >READ MORE</a>
          </div>
        </div>


        <div className="blog-slider__item swiper-slide">
          <div className="blog-slider__img">
            <img src={art2} alt="art2" />
          </div>
          <div className="blog-slider__content">
            <div className="blog-slider__text">SWAGSLIMES are intelligent alien creatures that are made up of the galaxies most valuable materials and end up with a slime like form. They live in peace in the blockchain and are known for throwing the best parties in the blockchain. </div>
            <a href="#about-slimes" className="blog-slider__button">READ MORE</a>
          </div>
        </div>
        
        <div className="blog-slider__item swiper-slide">
          <div className="blog-slider__img">
            <img src={art3} alt="art3" />
          </div>
          <div className="blog-slider__content">
            <div className="blog-slider__text">SWAGSLIMES are intelligent alien creatures that are made up of the galaxies most valuable materials and end up with a slime like form. They live in peace in the blockchain and are known for throwing the best parties in the blockchain. </div>
            <a href="#about-slimes" className="blog-slider__button">READ MORE</a>
          </div>
        </div>


        <div className="blog-slider__item swiper-slide">
          <div className="blog-slider__img">
            
            <img src={art4} alt="art4" />
          </div>
          <div className="blog-slider__content">
            <div className="blog-slider__text">SWAGSLIMES are intelligent alien creatures that are made up of the galaxies most valuable materials and end up with a slime like form. They live in peace in the blockchain and are known for throwing the best parties in the blockchain. </div>
            <a href="#about-slimes" className="blog-slider__button">READ MORE</a>
          </div>
        </div>
      </div>
      <div className="blog-slider__pagination"></div>
    </div>
  </div>

  <div className="mt-5" id="mint">
    <Minter />
  </div>

  <div className="container mt-5 mb-5"> 
    <div className="row justify-content-center"> 
      <div className="col-md-10 p-3" id="about-slimes">
        <h1 className="text-white text-center">WHO ARE SLIMES ?</h1>
        <h4 className="text-white text-center">
          SWAGSLIMES are intelligent alien creatures that are made up of the galaxies most valuable materials and end up with a slime like form. They live in peace in the blockchain and are known for throwing the best parties in the blockchain. They also are some of the fastest creatures known to exist. They slide around for miles in the blink of an eye! <br/>

SWAGSLIMES are a NFT Collection with 10,000 Digital Collectibles. There is no roadmap as these are strictly collectibles, we may do a game or events, but we want that to happen organically with time to plan, not rush just to make the project sound good. Swagslime was former top 100 game app on the apple store in the early 2010s. Enjoy and collect as many SWAGSLIMES as possible, you never know  what the future holds.
        </h4>
      </div>
    </div>
  </div>


  <div className="wrapper-gallery">


  
    <div className="gallery">
  
      <div className="gallery-item">
        <img className="gallery-image" src={art1} alt="art1" />
      </div>
  
      <div className="gallery-item">
        <img className="gallery-image" src={art2} alt="art2" />
      </div>
  
      <div className="gallery-item">
        <img className="gallery-image" src={art3} alt="art3" />
      </div>
  
      <div className="gallery-item">
        <img className="gallery-image" src={art4} alt="art4" />
      </div>
  
      <div className="gallery-item">
        <img className="gallery-image" src={art5} alt="art5" />
      </div>
  
      <div className="gallery-item">
        <img className="gallery-image" src={art6} alt="art6" />
      </div>
  
    </div>
  
  </div>
    </>
  )
}