import React from 'react';
import "../assets/styles/components/CarouselItem.scss";

import playIcon from "../assets/images/play-icon.png";
import plusIcon from "../assets/images/plus-icon.png";

const CarouselItem = () => (

    <div className="carousel-item">
        <img src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="carousel-item__img"/>
        <div className="carousel-item__details">
            <div>
                <img src={playIcon} alt="Play Icon" className="carousel-item__details--img"/>
                <img src={plusIcon} alt="Plus Icon" className="carousel-item__details--img"/>
            </div>
            <p className="carousel-item__details--title">Titulo descriptivo</p>
            <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
        </div>
    </div>   
);

export default CarouselItem;