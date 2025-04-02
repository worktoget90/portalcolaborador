import React from 'react';
import { Link } from 'react-router-dom'

import './components.css';

import Carousel from 'react-bootstrap/Carousel';

import imagemCarrocel1 from '../../img/ouvidoria.png'
import imagemCarrocel2 from '../../img/img2.jpg'
import imagemCarrocel3 from '../../img/img3.jpg'

const Carrocel = () => {

  return (

    <div className='carrocel'>

      <Carousel>
        <Carousel.Item interval={5000}>
          <a href="https://www.helloethics.com/ouvidoriasmrede/pt/main.html"> {/* Adicionando o Link */}
            <img className="d-block w-100" src={imagemCarrocel1} alt="" />
          </a>

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={imagemCarrocel2} alt="" />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={imagemCarrocel3} alt="" />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>
  )

}



export default Carrocel;

