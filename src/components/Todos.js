import React from 'react'
import Todo from './Todo'


const Todos = (props) => {
    console.log(props.items);
  return (
    <section>
        {props.items.map((item) =>(
            <Todo item={item} key={item.id} />
        ))}
    </section>
  )
}

export default Todos