import React from 'react'
import Todo from './Todo'
import style from './todos.module.css'


const Todos = (props) => {
    console.log(props.items);
  return (
    <section className={style.todos}>
        {props.items.map((item) =>(
            <Todo item={item} key={item.id} />
        ))}
    </section>
  )
}

export default Todos