import React from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css"
const Cards = ({ c }) => {
    return (
        <>
            <div className={style.cards}>
                {
                    c.map((contry,index)=>{
                        return(
                            <Card key={index} id={contry.id} name={contry.name} flags={contry.flags} continents={contry.continents} población={contry.población}/>
                        )
                    })
                }
            </div>
        </>
    )
}


export default Cards