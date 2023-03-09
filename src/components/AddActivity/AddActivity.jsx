import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  getContries,
  postActivities,
} from '../../actions'
import { Link } from 'react-router-dom'
import style from './AddActivity.module.css'

function validate(input) {
  let errors = {};

  if (!input.name) {
    errors.name = '** Nombre es requerido **';
  }

  if (!input.difficulty) {
    errors.difficulty = '** continente es requerido **';

  }

  if (!input.duration) {
    errors.duration = '** duration es requerida **';

  } else if (Number(input.duration) > 0 || Number(input.duration) < 24)




    if (!input.season) {
      errors.season = '** season es requerida **';
    }

  if (!input.countries.lenght < 1) {
    errors.countries = '** Elija el pais **';
  }

  return errors;
}

export default function AddActivity() {

  const history = useHistory()

  const [errors, seterrors] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: "",
  });
  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: 0,
    season: "",
    countries: []

  })

  const allcontry = useSelector((state) => state.contries)


  let dispatch = useDispatch()



  useEffect(() => {
    dispatch(getContries())
  }, [dispatch])




  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(e.target)
    seterrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    console.log(input);
  };

  function handleSubmit(e) {
    e.preventDefault();

    // aqui va la validacion

    dispatch(postActivities({ ...input }))
    setInput({
      name: "",
      difficulty: "",
      duration: 0,
      season: "",
    });
    alert(" Actividad agregada correctamente")
    history.push('/home')

    return 0
  }

  function addCountry(e) {
    setInput({ ...input, countries: [...input.countries, e.target.value] })
  }
  console.log(input)

  return (

    <div className={style.container}>
      <h1 className={style.title}>Agregar Actividad</h1>
      <form onSubmit={handleSubmit} className={style.addGame}>
        <div className={style.contentimagen}>
          <img src="" alt="" />
        </div>

        <div className={style.formcontent}> 
          <div className={style.name}>
            <label htmlFor="" className={style.label}>Name</label>
            <input type="text" onChange={handleInputChange} name='name' value={input.name} placeholder="Ingrese el nombre" className={style.input}/>
          </div>
          {errors.name && (<p className={style.danger}> {errors.name} </p>)}


          <div className={style.released}>
            <label htmlFor="" className={style.label}>difficulty</label>

            {/* <input type="text" placeholder={`1 to 5 example: 1 `} onChange={handleInputChange} name="difficulty" value={input.difficulty} /> */}
            <select name="difficulty"  value={input.difficulty} onChange={(e)=>handleInputChange(e)} className={style.inputreleased}>
              <option default value="select">select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>


            {errors.difficulty && (<p className={style.danger}> {errors.difficulty} </p>)}
          </div>




          <div className={style.rating}>
            <label htmlFor="" className={style.label}>duration</label>
            <input type="number" onChange={handleInputChange} name='duration' value={input.duration}  className={style.input}/>

            {errors.duration && (<p className={style.danger}> {errors.duration} </p>)}
          </div>




          <div className={style.image}>
            <label htmlFor="" className={style.label}>season</label>
            {/* <input type="text" onChange={handleInputChange} name='season' value={input.season} placeholder={`example : 'Summer'`} /> */}
            <select name="season" value={input.season} onChange={handleInputChange} className={style.season}>
              <option  default value="select">select</option>
              <option value="Summer">Summer</option>
              <option value="Fall">Fall</option>
              <option value="winter">winter</option>
              <option value="spring">spring</option>
            </select>

            {errors.season && (<p className={style.danger}> {errors.season} </p>)}
          </div>




          <div className={style.genre}>
            <label htmlFor="" className={style.label}>countries</label>
            <select name="countries" value={input.countries} onChange={addCountry} className={style.inputgenre}>
              <option default value="select">select</option>
              {allcontry?.map((g, i) => {
                return (
                  <option key={i} value={g.name}>{g.name}</option>
                )
              })}
            </select>
            <br />
            {input.countries?.map((e, index) => { return <span key={index}> {e}</span> })}
            {errors.countries && (<p className={style.message}> {errors.countries} </p>)}
          </div>




          <button className={style.btn}
            type="submit"

            name="button">
            Guardar
          </button>


          <Link to='/home'>
            <button className={style.btn}>
              Cancelar
            </button>
          </Link>

        </div>
      </form>

    </div>




  )


}
