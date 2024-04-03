import { useState } from 'react'
import './App.css'

const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
];


function App() { 

  const [current, setcurrent] = useState(0);

  function nextSlide() {
    setcurrent(current === images.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setcurrent(current === 0 ? images.length - 1 : current - 1);
  }
  return (
    <div>
      <h2>Project 1: Carousal</h2>
      <div className='slider'>
        <div className='left-Arrow' onClick={prevSlide}>🡨</div>
        <div className='right-Arrow' onClick={nextSlide}>🡪</div>

        {images.map(
          (image, index) => 
            current === index && (
              <div key={image} className='slide'>
                <img src={image} alt="images" />
              </div>
            )
        )}

      </div>
    </div>
  )
}

export default App
