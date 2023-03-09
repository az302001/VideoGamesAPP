import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {

    getContries,
    getActivities,
    getcountryByName,
    orderByPoblation,
    orderByName,
    orderByActivities,
    orderByContinents 
} from "../../actions/index.js"

import style from "./home.module.css"

import { Link } from "react-router-dom"
import Cards from "../Cards/Cards.jsx"
import Pagination from "./Pagination/Pagination.jsx"
import Nav from "./Nav/Nav.jsx"
import Load from "./Loaders/Loader.jsx"
// import Load from "./Loaders/Loader.jsx"





export default function Home() {
    const contries = useSelector(store => store.contryfilter)
    console.log(contries.length)
    const [currentPage, setCurrentPage] = useState(1)
    const [recipesPerPage] = useState(10);

    const indexOfLastPost = currentPage * recipesPerPage;
    const indexOfFirstPost = indexOfLastPost - recipesPerPage;
    const currentContries = contries.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => (setCurrentPage(pageNumber))



    const activities = useSelector(store => store.activities)
    console.log(activities)
    // const continents = useSelector(store => store.continents)
    const dispatch = useDispatch()
    const [order, setOrder] = useState('')
    const [search, setSearch] = useState('')
    console.log(order)

    useEffect(() => {
        dispatch(getContries())
        dispatch(getActivities())
    }, [dispatch])



    function handleFilterActivities(e) {
        e.preventDefault();
        dispatch(orderByActivities(e.target.value))
        setCurrentPage(1)
        setOrder(e.target.value)
    }

    function handleFilterContinents(c){
        c.preventDefault();
        dispatch(orderByContinents(c.target.value))
        setCurrentPage(1)
        setOrder(c.target.value)

    }


    function handlePoblation(e) {
        e.preventDefault();
        dispatch(orderByPoblation(e.target.value))
        setCurrentPage(1);
        setOrder(`ordenado ${e.target.value}`)
    }


    function handleSort(e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrentPage(1);
        setOrder(`ordenado ${e.target.value}`)
    }


    function handleRecipesByName(e) {
        e.preventDefault(e);
        dispatch(getcountryByName(search))
        setSearch('')
        setCurrentPage(1);
    }

    function handleInputName(e) {
        setSearch(e.target.value)
    }


    console.log(currentContries)
    return (
        // <Cards c={contries}/>

        <div className={style.container}>

            <Nav />

            <div className={style.soncontainer}>

                <select onChange={e => handleSort(e)} name="alphabetical" defaultValue={'DEFAULT'} className={style.orden}>
                    <option disabled value="DEFAULT">Alphabetical</option>
                    <option value="atoz">A to Z</option>
                    <option value="ztoa">Z to A</option>
                </select>

                <select onChange={(e) => handleFilterActivities(e)} defaultValue={'DEFAULT'} className={style.ordenActivities} >
                    <option disabled value="DEFAULT">Activities</option>
                    <option value="all">All Activities</option>
                    {activities?.map((type) =>
                        <option key={type.name} value={type.name}>{type.name}</option>
                    )}
                </select>

                <select onChange={(c) => handleFilterContinents(c)} defaultValue={'DEFAULT'} className={style.ordenActivities} >
                    <option disabled value="DEFAULT">Continents</option>
                    <option value="all">All Continents</option>
                    <option value="North America">North America</option>
                    <option value="South America">South America</option>
                    <option value="Europe">Europe</option>
                    <option value="Africa">Africa</option>
                    <option value="Asia">Asia</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Antarctica">Antarctica</option>


                </select>

                <select onChange={e => handlePoblation(e)} name="numerical" defaultValue={'DEFAULT'} className={style.Poblation}>
                    <option disabled value="DEFAULT">Poblation</option>
                    <option value="MenorMayor">From Min to Max</option>
                    <option value="MayorMenor">From Max to Min</option>
                </select>

                <form onSubmit={(e) => { handleRecipesByName(e) }} className={style.buscador}>
                    <input placeholder="Ingrese su busquedad..." type="text" value={search} onChange={(e) => { handleInputName(e) }} className={style.buscar} />
                    <button type='submit' className={style.button}><span></span>
                        <span></span>
                        <span></span>
                        <span></span> Buscar 🔍</button>
                </form>
                <Link to="/addActivity">
                    <button type='submit' className={style.Agregar}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span> Agregar ➕</button>
                </Link>

            </div>

            {
                currentContries.length ? <div>
                    <Cards c={currentContries} />
                    <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} recipesPerPage={recipesPerPage} totalRecipes={contries.length} paginate={paginate}></Pagination>
                </div>:<Load/>
            }


        </div>
    );





















}

