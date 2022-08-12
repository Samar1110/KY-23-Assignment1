import React from "react";
import "./styles.css";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from './img/1.jpg'
import image2 from './img/2.jpg'
import image3 from './img/3.jpg'
import image4 from './img/4.jpg'

const handleDragStart = (e) => e.preventDefault();

export default function App() {
  return (
    <>
    <nav class="flex items-center justify-center flex-wrap bg-teal-500 p-10">
  <div class="flex items-center justify-center flex-shrink-0 text-white mr-6">
    <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span class="font-semibold text-4xl tracking-tight">Image Gallery</span>
  </div>
 
</nav>

<div className="App">
     <AliceCarousel autoPlay infinite autoPlayInterval="3000" mouseTracking>
      <img src={image1} onDragStart={handleDragStart} alt=""/>
      <img src={image2} onDragStart={handleDragStart} alt=""/>
      <img src={image3} onDragStart={handleDragStart} alt=""/>
      <img src={image4} onDragStart={handleDragStart} alt=""/>
    </AliceCarousel>
    </div>

    </>
    
  );
}
