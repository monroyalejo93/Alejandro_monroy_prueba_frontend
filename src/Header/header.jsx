import React from "react";
import "./header_style.css"
import style from "../Header/header.module.css"
import { TbTriangleInvertedFilled } from "react-icons/tb";

function Header() {

    //Determina si el desplegable se debe cerrar al dar clic fuera de él
    document.addEventListener('click', function (event) {
        var navbar = document.querySelector('.navbar');
        var dropdownContent = document.getElementById('dropdownContent');
        var subDropdownContent = document.getElementById('subDropdownContent');

        if (event.target.closest('.navbar') !== navbar) {
            dropdownContent.style.display = 'none';
            subDropdownContent.style.display = 'none';
        }
    });

    //Despliega u oculta el dropdwon de Pages
    function toggleDropdown() {
        var dropdownContent = document.getElementById("dropdownContent");
        dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
    }

    //Despliega u oculta el subdropdwon dentro del ítem page 3
    function toggleSubDropdown() {
        var subDropdownContent = document.getElementById("subDropdownContent");
        subDropdownContent.style.display = (subDropdownContent.style.display === "block") ? "none" : "block";
    }

    return (
        <header>
            {/* Barra de navegación horizontal */}
            <div className="navbar">
                <a className={style.navbar_text}>Home</a>
                <div className={style.dropdown}>
                    <a className={style.navbar_text} onClick={toggleDropdown}>Pages</a>
                    <div className={style.dropdown_content} id="dropdownContent">
                        <a className={style.navbar_options_text}>Page 1</a>
                        <a className={style.navbar_options_text}>Page 2</a>
                        <a
                            className={style.navbar_options_text}
                            onClick={toggleSubDropdown}>
                            Page 3 <TbTriangleInvertedFilled className={style.dropdown_icon} />
                        </a>
                        <div className={style.sub_dropdown_content} id="subDropdownContent">
                            <a className={style.navbar_options_text}>Item 1</a>
                            <a className={style.navbar_options_text}>Item 2</a>
                            <a className={style.navbar_options_text}>Item 3</a>
                        </div>
                    </div>
                </div>
                <a className={style.navbar_text}>About</a>
                <a className={style.navbar_text}>Contact</a>
            </div>
        </header>
    );
}

export default Header;
