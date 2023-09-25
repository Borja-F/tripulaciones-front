import React from 'react'
import "./CardSlider.scss"

const movies = [
    "/breaking-bad.webp",
    "/the-leftovers.jpg",
    "/game-of-thrones.jpg",
    "/true-detective.jpg",
    "/walking-dead.jpg"
  ];

const CardSlider = () => {
  return (
    <>
      <div className="container">
        {movies.map(src => (
          <div
            key={src}
            className="card"
            style={{
              backgroundImage: `url(${src})`
            }}
          />
        ))}
      </div>
    </>
  );
};

export default CardSlider