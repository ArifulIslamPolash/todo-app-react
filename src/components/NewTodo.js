import React from 'react'
import style from './NewTodo.module.css'
function NewTodo() {
  return (
    <form className={style.form}>
        <div className={style["form-field"]}>
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" id="title"></input>
        </div>
        <div className={style["form-field"]}>
            <label htmlFor="desc">Description:</label>
            <input type="text" name="desc" id="desc"></input>
        </div>
        <button type="submit"> Add Todo</button>
    </form>
  )
}

export default NewTodo