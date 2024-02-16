import React from "react";
import style from "../ContenedorInputs/contenedor_inputs.module.css"
import { useState } from "react";
import { TbTriangleInvertedFilled } from "react-icons/tb";

//Función principal que renderiza los componentes
function InputsContainer() {
    return (

        <div className={style.grid_container}>
            <div>
                <ClickableBox />
            </div>
            <div>
                <RadioBox />
            </div>
            <div>
                <FormBox />
            </div>
        </div>

    );
}

//Componente de select con sus opciones
const ClickableBox = () => {

    //Función que despliega u oculta las opciones del select
    function toggleContainer() {
        var container = document.getElementById('container_checks');
        container.style.display = (container.style.display === 'none' || container.style.display === '') ? 'block' : 'none';
    }

    return (
        <>
            <div>
                <button onClick={toggleContainer} className={style.dropdown_button}>
                    <label className={style.dropdown_text}>
                        Select
                        <TbTriangleInvertedFilled className={style.dropdown_icon}></TbTriangleInvertedFilled>
                    </label>
                </button>
                <div id="container_checks" className={style.container_checks}>

                    <div className={style.checkboxItem}>
                        <input className={style.customCheckbox} type="checkbox" />
                        <label className={style.options_checks}>Option 1</label>
                    </div>

                    <div className={style.checkboxItem}>
                        <input className={style.customCheckbox} type="checkbox" />
                        <label className={style.options_checks}>Option 2</label>
                    </div>

                    <div className={style.checkboxItem}>
                        <input className={style.customCheckbox} type="checkbox" />
                        <label className={style.options_checks}>Option 3</label>
                    </div>

                    <div className={style.checkboxItem}>
                        <input className={style.customCheckbox} type="checkbox" />
                        <label className={style.options_checks}>Option 4</label>
                    </div>

                </div>

            </div>
        </>
    );
};

//Componente de radio con sus opciones
const RadioBox = () => {

    return (
        <>
            <div>
                <div className={style.container_radios}>

                    <div className={style.radioItem}>
                        <input className={style.customRadio} type="radio" name="radioGroup" />
                        <label className={style.options_radios}>Option 1</label>
                    </div>

                    <div className={style.radioItem}>
                        <input className={style.customRadio} type="radio" name="radioGroup" />
                        <label className={style.options_radios}>Option 2</label>
                    </div>

                    <div className={style.radioItem}>
                        <input className={style.customRadio} type="radio" name="radioGroup" />
                        <label className={style.options_radios}>Option 3</label>
                    </div>

                    <div className={style.radioItem}>
                        <input className={style.customRadio} type="radio" name="radioGroup" />
                        <label className={style.options_radios}>Option 4</label>
                    </div>

                </div>

            </div>
        </>
    );
};

//Componente de formulario
const FormBox = () => {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [textAreaContent, setTextAreaContent] = useState('');

    //Captura el valor ingresado por el input de email
    const handleNameChange = (event) => {
        setName(event.target.value);
        updateTextAreaContent(event.target.value, email);
    };

    //Captura el valor ingresado por el input de nombre
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        updateTextAreaContent(name, event.target.value);
    };

    //Actualiza el valor del textarea, en caso de que los inputs estén vacíos lo deja vacío
    const updateTextAreaContent = (newName, newEmail) => {
        if (newName === '' && newEmail === '') {
            setTextAreaContent('');
        } else {
            const newText = `Name: ${newName}\nEmail: ${newEmail}`;
            setTextAreaContent(newText);
        }
    };

    return (
        <>

            <div>
                <div className={style.container_form}>

                    <div className={style.formItem}>
                        <label className={style.labelForm}>Name</label>
                        <input
                            onChange={handleNameChange}
                            id="name"
                            className={style.customInputForm}
                            type="text"
                        />
                    </div>

                    <div className={style.formItem}>
                        <label className={style.labelForm}>Email</label>
                        <input
                            onChange={handleEmailChange}
                            id="email"
                            className={style.customInputForm}
                            type="text"
                        />
                    </div>

                    <div className={style.formItem}>
                        <textarea
                            value={textAreaContent}
                            readOnly
                            placeholder="Render the input text information here...."
                            className={style.customTextAreaForm}
                            type="text"
                        />
                    </div>

                    <div className={style.formItem}>
                        <button className={style.submitButton}>
                            <label className={style.buttonText}>Submit</label>
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default InputsContainer;