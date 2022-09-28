import React from "react";
//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slideshow = () => {
	//Array of Images
	const images = [
    "images/coche.png",
    "assets/images/b.jpg",
    "assets/images/c.jpg",
    "assets/images/a.jpg",
    "assets/images/b.jpg",
  ];

	//These are custom properties for zoom effect while slide-show
	const zoomInProperties = {
		indicators: true,
		scale:1.2,
		duration: 5000,
		transitionDuration: 500,
		infinite: true,
		prevArrow: (
			<div style={{ width: "30px", marginRight: "-30px", cursor: "pointer" }}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					fill="#2e2e2e"
				>
					<path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
				</svg>
			</div>
		),
		nextArrow: (
			<div style={{ width: "30px", marginLeft: "-30px", cursor: "pointer" }}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					fill="#2e2e2e"
				>
					<path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
				</svg>
			</div>
		),
	};
	return (
    <div className="m-10">
      <h1 className="text-center text-6xl  font-bold pb-10 mt-10">
        Responsive Next.js{" "}
        <span className="text-indigo" style={{ color: "#FFC527" }}>
          Image Slider
        </span>
      </h1>

      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div
            key={index}
            className="flex justify-center w-full h-full"
            
          >
            <img
              className="object-cover rounded-lg shadow-xl"
              style={{ width: "100%", height: "100%" }}
              src={each}
            />
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default Slideshow;

