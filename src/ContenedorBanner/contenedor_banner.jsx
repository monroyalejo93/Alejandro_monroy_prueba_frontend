import React from "react";
import style from "./contenedor_banner.module.css"
import Header from "../Header/header";
import { MdPlayCircle } from "react-icons/md";

// Función que imprime por consola "Go there"
function printGothereButton() {
    console.log("Go There")
}

//Función principal que renderiza los componentes
function BannerContainer() {
    return (
        <div className={style.banner_container}>
            <div className={style.general_container}>
                <Header />
                <BannerText />
            </div>
            <div className={style.animation_container}>
                <BannerAnimation />
            </div>
        </div>
    );
}

//Función que contiene el texto principal
function BannerText() {
    return (
        <div className={style.text_container}>
            <h1 className={style.banner_title}>Lorem ipsum</h1>
            <h2 className={style.banner_subtitle}>Neque porro quisquam</h2>
            <p className={style.banner_paragraph}>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
            <p className={style.banner_paragraph}>There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...</p><br />
            <button onClick={printGothereButton} className={style.gothere_button}>
                <label className={style.gothere_button_text}>Go There... <MdPlayCircle className={style.button_play_icon}></MdPlayCircle></label>
            </button>
        </div>
    );
}

//Función que contiene la animación
function BannerAnimation() {
    return (
        <div className={style.banner_animation}>
            {[...Array(9)].map((_, index) => (
                <div key={index}></div>
            ))}
        </div>
    );
}




export default BannerContainer;