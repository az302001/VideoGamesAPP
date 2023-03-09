import React from 'react'
// import styles from '../../Cards/Cards.module.css'
import style from './Pagination.module.css'
const Pagination = ({ recipesPerPage, totalRecipes, paginate, currentPage, setCurrentPage }) => {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) {
    pageNumbers.push(i)
  }
  const handleNext = () => {
    setCurrentPage(currentPage + 1)
    console.log(currentPage)
  }

  const handlePrev = () => {
    setCurrentPage(currentPage - 1)
    console.log(currentPage)
  }
  return (
    <div className={style.pages}>
      <button className={style.btn} onClick={handlePrev} disabled={currentPage === pageNumbers[0] ? true : false}>prev</button>
      {
        pageNumbers.map(number => (
          <button className={`${style.btn} ${currentPage === number ? style.active : style.disabled}`} key={number} onClick={() => paginate(number)} href='/home'>{number}</button>
        ))
      }
      <button className={style.btn} onClick={handleNext} disabled={currentPage === pageNumbers.length ? true : false}>next</button>

      {/* <div className={style.footer}>
        <h4>Creador: Robert Henrry </h4>
        <h4>Año:2023</h4>
      </div> */}
    </div>
  )

}

export default Pagination
