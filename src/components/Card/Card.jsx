import React from 'react';
import { Link } from 'react-router-dom';
import style from './Card.module.css'

export default function Card({ id, name, flags, continents,población }) {
    return (
        <div className={style.Card}>
            <Link to={'/Countrydetail/' + id} style={{ textDecoration: 'none', color: 'white' }}>
                <div className={style.imgbox}>
                    <img src={flags} alt="" className={style.img} />
                </div>
                <div className={style.details}>
                    <h1 className={style.title}>{continents}</h1>
                    <h4 className={style.caption}>{name} - {población}</h4>
                    
                </div>
                {/* <img src={flags} alt=""  className={style.img}/> */}
            </Link>
        </div>
    )


}