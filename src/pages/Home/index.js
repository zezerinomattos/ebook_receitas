import React, { useState, useEffect } from 'react';

// MY IMPORTS
import styles from './styles.css';
import mobile from './mobile.css';
import Elipse from '../../components/Elipse';

import ebook from '../../image/Ebook.png';


export default function Home(){

    const [size, setSize] = useState(window.innerWidth);

    useEffect(() => {
        windowSize();
    }, [])

    // PEGANDO O TAMANHO DA TELA DO DISPOSITIVO
    function windowSize(){
        setSize(window.innerWidth);
    }

    return(
        <>
            <header className='container'>

                {/* ELIPSE -> CICLE */}
                <div className='elipse-container'>
                    <div className='elipse-left'>

                        <Elipse size={120} opacity={0.2} styles={'cicle-left-one'}/>
                        <Elipse size={120} opacity={0.4} styles={'cicle-left-two'}/>
                        <Elipse size={180} opacity={0.6} styles={'cicle-left-three'}/>
    
                    </div>

                    <div className='elipse-right'>

                        <Elipse size={size > 620 ? 120 : 90} opacity={0.2} styles={'cicle-right-one'}/>
                        <Elipse size={size > 620 ? 120 : 90} opacity={0.5} styles={'cicle-right-two'}/>
                        <Elipse size={size > 620 ? 180 : 130} opacity={0.6} styles={'cicle-right-three'}/>
                        <Elipse size={size > 620 ? 180 : 130} opacity={.98} styles={'cicle-right-four'}/>

                    </div>
                </div>

                {/* INFORMAÇÕES E FORM */}
                <div className='information-container'>
                    <div className='information-left'>
                        <div className='information-text'>
                            <h3>Descubra</h3>
                            <h1>
                                Transforme sua alimentação e <br/>
                                tenha mais qualidade de vida! 
                            </h1>

                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
                            </p>

                            <h4>
                                Não perca essa oportunidade de mudar seus hábitos 
                            </h4>

                            <p>
                                .There are many variations of passages of Lorem Ipsum available
                            </p>

                            <p>
                                .There are many variations of passages
                            </p>
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content
                            </p>
                            <p>
                                .There are many variations of passages
                            </p>

                        </div>
                        <div className='information-img'>
                            <img src={ebook} alt="Imagem do E-book" />
                        </div>
                    </div>
                    
                    <div className='information-right'>
                        <form>
                            <div className='form-input'>
                                <input type="text" className='form-input' id="firstName"/>
                                <label  htmlFor="firstName" className="label-input">Primeiro Nome *</label>
                            </div>

                            <div className='form-input'>
                                <input type="text" className='form-input' id="lastName"/>
                                <label  htmlFor="lastName" className="label-input">Sobre Nome *</label>
                            </div>

                            <div className='form-input'>
                                <input type="text" className='form-input' id="email"/>
                                <label  htmlFor="email" className="label-input">E-mail *</label>
                            </div>

                            <div className='form-text'>
                                <span>
                                    Inscreva-se para receber em primeira mão as melhores dicas e receitas saudáveis que irão transformar sua alimentação e melhorar sua qualidade de vida.
                                </span>
                            </div>
                            <div className='form-enquete'>
                                <input type="radio" id='formYes' name='option'/>
                                <label htmlFor='formYes' >Sim, eu quero me escrever!</label>
                            </div>
                            <div className='form-enquete'>
                                <input type="radio" id='formNo' name='option'/>
                                <label htmlFor='formNo' >Não, Estou bem obrigado!</label>
                            </div>

                            <button className='form-button'>Download E-book</button>

                        </form>
                    </div>
                </div>
            </header>
            <main className='more-services-container'>
                <section className='services'>
                    <span>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960.
                    </span>
                </section>

                <section className='social-media'>
                    <div className='contact'>
                        <a href={'3'} target='blank'>
                            <ion-icon name="logo-facebook"></ion-icon>
                            <span>Receitas sabor & Saúde</span>
                        </a>
                    </div>
                    <div className='contact'>
                    <a href={'3'} target='blank'>
                        <ion-icon name="logo-facebook"></ion-icon>
                        <span>Receitas sabor & Saúde</span>
                    </a>
                    </div>
                    <div className='contact'>
                    <a href={'3'} target='blank'>
                        <ion-icon name="logo-facebook"></ion-icon>
                        <span>Receitas sabor & Saúde</span>
                    </a>
                    </div>
                </section>
            </main>
            <footer>
                <a href={'3'} target='blank'>SAIBA MAIS</a>
            </footer>
        </>
    )
}