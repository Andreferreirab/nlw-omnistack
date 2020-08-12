import React from 'react';

import whatsappImg from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherCard() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/44217906?s=460&v=4" alt="Texto Alternativo" />
                <div>
                    <strong>André Ferreira</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                O texto começa aqui
                <br /><br />
                essa linha também
            </p>

            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 80,00</strong>
                </p>
                
                <button type="button">
                    <img src={whatsappImg} alt="Icone Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}


export default TeacherCard;