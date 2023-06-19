import React from 'react';
import { Carousel } from 'antd';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../homePage/imageCarousel.css';
import { img1, img2 } from './constants/imageUrls';
 

const ImageCarousel = () => {
  // const images = [
  //   { imageUrl: img1, floatingText: 'Text 1' },
  //   { imageUrl: img2, floatingText: 'Text 2' },
  //   { imageUrl: img2, floatingText: 'Text 3' },
  // ];

 

  return (
<Carousel autoplay={true} >
<div key={0} className="image-slide">
  <img src={img2} alt={`Image ${0 + 1}`} className="carousel-image" />
  <div className="floating-text">

    {/* <div class="carousel-container">
      <div class="carousel-content animate__animated animate__fadeInUp">
        <h2>Welcome to <span>Fire-connect</span></h2>
        <p>Fire-Connect is an all-in-one product suite that gets real-time data from the machines through IoT gateway and sensors.
          The product helps you with operations like Predictive Maintenance,without requiring any data scientist.</p>
        <div class="text-center"><a href="https://citriot.com" class="btn-get-started">Read More</a></div>
      </div>
    </div> */}
  </div>
</div>

<div key={1} className="image-slide">
  <img src={img1} alt={`Image ${1 + 1}`} className="carousel-image" />
  <div className="floating-text">

    <div class="carousel-container fade-in-image">
      <div class="carousel-content animate__animated animate__fadeInUp" >
        <h2 style={{'font-weight': 500,
    'font-size': '30px'}}>Welcome to <span>Fire-connect</span></h2>
        <p>An AI Company focused on Automation,IOT and IIOT. Fast, Reliable and Real time data.</p>
        <div class="text-center"><a href="https://citriot.com" target="_blank" rel="noopener noreferrer" class="btn-get-started">Read More</a></div>
      </div>
    </div>
  </div>
</div>

<div key={2} className="image-slide">
  <img src={img1} alt={`Image ${2 + 1}`} className="carousel-image" />
  <div className="floating-text">

    <div class="carousel-container fade-in-image">
      <div class="carousel-content animate__animated animate__fadeInUp">
        <h2 style={{'font-weight': 500,
    'font-size': '30px'}}>Welcome to <span>Fire-connect</span></h2>
        <p>Fire-Connect is an all-in-one product suite that gets real-time data from the machines through IoT gateway and sensors.
        <br/>The product helps you with operations like Predictive Maintenance,without requiring any data scientist.</p>
        <div class="text-center"><a href="https://citriot.com" target="_blank" rel="noopener noreferrer" class="btn-get-started">Read More</a></div>
      </div>
    </div>
  </div>
</div>




      {/* {images.map((image, index) => (
<div key={index} className="image-slide">
<img src={image.imageUrl} alt={`Image ${index + 1}`} className="carousel-image" />
<div className="floating-text">

      <div class="carousel-container">
            <div class="carousel-content animate__animated animate__fadeInUp">
              <h2>Welcome to <span>Fire-connect</span></h2>
              <p>Fire-Connect is an all-in-one product suite that gets real-time data from the machines through IoT gateway and sensors.
                The product helps you with operations like Predictive Maintenance,without requiring any data scientist.</p>
              <div class="text-center"><a href="https://citriot.com" class="btn-get-started">Read More</a></div>
            </div>
          </div>

</div>
</div>
      ))} */}
</Carousel>
  );
};

 

export default ImageCarousel;