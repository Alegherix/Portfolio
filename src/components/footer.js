import React from 'react'
import style from "../css/footer.module.scss"

export default () => {
  return (
    <footer className={style.footer}>
      <p>&copy; Martin Hansson, {new Date().getFullYear()}</p>
    </footer>
  )
}