import React from "react";
import { Link } from 'react-router-dom';
import style from './LadingPage.module.css'
import video from '../../assets/tierra01.mp4'

export const LandingPage = () => {
    return (
        <div className={style.landing}>

            {/* <Link to="/home" className={style.boton}> Viajemos...✈</Link> */}
            <div className={style.contenName}>
                <h1 className={style.titulo}>  Bienvenido a ProjectContries </h1>
            </div>

            <div className={style.contentvideo}>
                <video className={style.video} autoPlay muted loop='3'>
                    <source src={video} className={style.video02} />
                </video>
            </div>

            <div className={style.contentBotom}>
                <h1 className={style.subtitulo}> Es hora de iniciar tu propio camino</h1>
                {/* <Link to="/home" className={style.boton}>comenzar Viaje...✈</Link> */}
            </div>

            <Link className={style.btn95} to='/home'>
                <svg viewBox="0 0 241.016 241.016">
                    <path
                        d="M210.818,96.393l-49.202,1.644L108.753,0H83.279c-2.791,0-5.052,2.259-5.052,5.055l27.504,94.843l-50.097,2.037
			c-4.312,0.004-8.372,0.732-11.97,1.997l-18.925-32.14L8.857,71.788c-2.105,0.004-3.811,1.708-3.811,3.814l13.848,42.361v5.09
			L5.047,165.414c-0.002,2.105,1.704,3.814,3.809,3.814l15.885,0.004l19.257-32.713c3.514,1.197,7.455,1.885,11.637,1.885
			l50.288,2.046l-27.698,95.516c0,2.795,2.259,5.05,5.052,5.05h25.474l53.227-98.696l48.84,1.631
			c13.894,0,25.152-10.652,25.152-23.779C235.971,107.041,224.713,96.393,210.818,96.393z"
                    ></path>

                </svg>
            </Link>
        </div>
    )
}