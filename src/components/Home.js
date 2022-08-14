import React from 'react'
import Todos from './Todos.js'
import NewTodo from './NewTodo.js'
import style from './home.module.css'

const dummyTodo = [
    { 
        id: 1,
        title: 'Item 1',
        desc:'Item desc 1' 
    },
    { 
        id: 2,
        title: 'Item 2',
        desc:'Item desc 2' 
    },
    { 
        id: 3,
        title: 'Item 3',
        desc:'Item desc 3' 
    },
];



const Home = () => {
  return (
    <div className={style.container}>
        <h1 style={{ color: 'white' }}>TodoApp</h1>
        <NewTodo />
        <Todos items={dummyTodo} />
        {/* <Todos /> */}
    </div>
  )
}

export default Home