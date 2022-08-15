import React , {useState} from 'react'
import style from './NewTodo.module.css'

function NewTodo() {

  const {item, setItem}=useState({title:" ", desc:" "});
  const {title, desc}=item;


  const handleChange=(event)=>{
    const name= event.target.name;
    setItem((oldItem) => {
      return {...oldItem , [name]:event.target.value};
    });
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(item);
    setItem({ title:" ", desc: " "});
  }


  return (
    <form className={style.form} onSubmit={handleSubmit}>
        <div className={style["form-field"]}>
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" id="title" value={title} placeholder="title"></input>
        </div>
        <div className={style["form-field"]}>
            <label htmlFor="desc">Description:</label>
            <input type="text" name="desc" id="desc" value={desc} placeholder="Description"></input>
        </div>
        <button type="submit"> Add Todo</button>
    </form>
  )
}

export default NewTodo