import React, { useState, useEffect } from 'react';
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import "./movement_slider.css";
import style from '../ContenedorSlide/Slide.module.css'
import react_icon from '../assets/react.svg';
import html_icon from '../assets/html.svg';
import javascript_icon from '../assets/javascript.svg';
import css_icon from '../assets/css.svg';
import nodejs_icon from '../assets/nodejs.svg';
import visual_studio_icon from '../assets/visual_studio_code.svg';


const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);


    //Objeto que contiene los datos que se van a renderizar en las cards
    const cardData = [
        { id: 1, image: react_icon, title: "Lorem Ipsum 1", content: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { id: 2, image: html_icon, title: "Lorem Ipsum 2", content: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { id: 3, image: javascript_icon, title: "Lorem Ipsum 3", content: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { id: 4, image: css_icon, title: "Lorem Ipsum 4", content: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { id: 5, image: nodejs_icon, title: "Lorem Ipsum 5", content: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { id: 6, image: visual_studio_icon, title: "Lorem Ipsum 6", content: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    ];

    useEffect(() => {
        const slider = document.querySelector(".slider");
        slider.innerHTML += slider.innerHTML;
    }, []);

    //Función que invoca al botón que realiza la navegación hacia la izquierda el slider de las cards
    const slideLeft = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? 5 : prevSlide - 1));
    };

    //Función que invoca al botón que realiza la navegación hacia la derecha el slider de las cards
    const slideRight = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 11 ? 0 : prevSlide + 1));
    };

    return (
        <>
            <div className={style.slide_container}>
                <button
                    className={style.arrow_left}
                    onClick={slideLeft}>
                    <FaCircleChevronLeft />
                </button>
                <div className="slider" style={{ transform: `translateX(-${currentSlide * 150}px)` }}>
                    {cardData.map((card) => (
                        <div key={card.id} className={style.card}>
                            <img src={card.image} alt={`Imagen para ${card.title}`} className={style.card_image} />
                            <h2 className={style.card_title}>{card.title}</h2>
                            <p className={style.card_content}>{card.content}</p>
                        </div>
                    ))}
                </div>
                <button
                    className={style.arrow_right}
                    onClick={slideRight}>
                    <FaCircleChevronRight />
                </button>
            </div>
        </>
    );
};

export default Slider;