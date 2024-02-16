import React from 'react';
import style from "../ContenedorFooter/contenedor_footer.module.css"


const Footer = () => {

    // Función que imprime por consola "footer link"
    function printFooterLink() {
        console.log("footer link")
    }

    return (
        <>
            <div className={style.text_container}>
                <div className={style.text_body}>
                    <h2 className={style.footer_titles}>Lorem ipsum dolor amet</h2>
                    <p className={style.footer_paragraph}>Consectetur adipiscing elit. Quisque eu consectetur me</p>
                </div>

                <div className={style.text_body}>
                    <h2 className={style.footer_titles}>Lorem ipsum dolor amet</h2>
                    <p className={style.footer_paragraph}>Consectetur adipiscing elit. Quisque eu consectetur me</p>
                </div>

                <div className={style.text_body}>
                    <h2 className={style.footer_titles}>Lorem ipsum dolor amet</h2>
                    <p className={style.footer_paragraph}>Consectetur adipiscing elit. Quisque eu consectetur me</p>
                </div>
            </div>
            <div className={style.centered_text}>
                <p className={style.footer_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a className={style.footer_link} onClick={printFooterLink}>
                    <strong>Link here</strong>
                </a> Lorem ipsum
                </p>
            </div>

        </>
    );
};

export default Footer;