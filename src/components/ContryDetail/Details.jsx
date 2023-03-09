import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCountryById } from "../../actions";
import style from './Detail.module.css'

const Detail = () => {
    const dispatch = useDispatch();
    const cont = useSelector(store => store.contryDetail)
    console.log(cont);

    const { id } = useParams()

    useEffect(() => {
        dispatch(getCountryById(id))
        return () => {
            console.log('Cleanup')
            dispatch(getCountryById())
        }
    }, [])

    return (
        <div className={style.container}>
            <div className={style.contentnadvar}>
                <div className={style.contentbo}>
                    {/* <Link to="/home" className={style.button}>⬅ retroceder</Link> */}
                    <Link to="/home" className={style.button}>
                        <span>⬅ regresar</span>
                        <div class="top"></div>
                        <div class="left"></div>
                        <div class="bottom"></div>
                        <div class="right"></div>
                    </Link>

                </div>
                <div className={style.contentTitle}>
                    <h1 className={style.title}>{cont.name}</h1>
                </div>
            </div>
            <div className={style.detail}>
                <div className={style.contentimage}>
                    <img src={cont.flags} alt="" className={style.imagen} />
                </div>
                <div className={style.cotentinfo}>

                    <h3 className={style.continents}>Continente: {cont.continents}</h3>


                    <h3 className={style.capital}>Capital: {cont.capital}</h3>


                    <h3 className={style.subregion}>Subregion :{cont.subregión}</h3>


                    <h3 className={style.area}>Area: {cont.area}</h3>


                    <h3 className={style.poblacion}>Poblacion: {cont.población}</h3>

                    {/* <h3>Actividad: {cont.Activity?.map((e,index)=><span key={index}>{e}</span>)}</h3> */}


                </div>
            </div>
        </div>

    )
}

export default Detail