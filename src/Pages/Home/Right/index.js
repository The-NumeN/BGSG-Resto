import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

export const Right = () =>{
    return(
        <body>
    <div className='right'>
    <br/>
    <br/>
    <br/>
    <Carousel>
      <Carousel.Item>
        <img
          className="image1"
          src="https://htmlcolorcodes.com/assets/images/colors/black-color-solid-background-1920x1080.png" height="400px" width="90%"
          alt="First slide"
        />
        <Carousel.Caption>
          <p>Here you can see the first slide</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image2"
          src="https://htmlcolorcodes.com/assets/images/colors/pastel-pink-color-solid-background-1920x1080.png" height="400px" width="90%"
          alt="Second slide"
        />
        <Carousel.Caption>
        <p>Here you can see the second slide</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="image3"
          src="https://htmlcolorcodes.com/assets/images/colors/blue-color-solid-background-1920x1080.png"  height="400px" width="90%"
          alt="Third slide"
        />
        <Carousel.Caption>
        <p>Here you can see the third slide</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
    </body>
    )
}



