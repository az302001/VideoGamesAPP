import React from "react";
import style from './Nav.module.css'
export default function Nav() {

    return (
        <nav  className={style.navbar}>
            <div className={style.title}>

                {/* <img src={control} id="controlIcon" width="30" height="30" alt="" /> */}

                <h2 >Bienvenido a ProjecsCountry</h2>
            </div>
        </nav>
    )

}