import React from 'react';
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from '../components/Footer';

import '../assets/styles/App.scss';


const App = () => (
    <div className="App">
        <Header></Header>
        <Search></Search>
        <Categories title="Desarrollo Web">
            <Carousel>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
            </Carousel>
        </Categories>

        <Categories title="Data Science">
            <Carousel>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
            </Carousel>
        </Categories>

        <Categories title="Finanzas">
            <Carousel>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
            </Carousel>
        </Categories>

        <Footer></Footer>
    </div>
);

export default App;