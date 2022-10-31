import React, { useState } from 'react'
import TodoItem from './Item/TodoItem'
import TypeField from './type-field/TypeField'


const data = [
    {
        _id: 'tbd0000aa',
        title: 'add your first ToDo', 
        isCompleted: false,
    },
    {
        _id: 'tbd0001aa',
        title: 'complete your first ToDo', 
        isCompleted: false,
    },
    {
        _id: 'tbd0010aa',
        title: 'delete your first ToDo', 
        isCompleted: false,
    },
]

const Home = () => {
  const [todos, setTodos] = useState(data)

  const changeTodo = id => {
    const copy = [...todos]
    const current = copy.find(t => t._id === id)
    current.isCompleted = !current.isCompleted
    setTodos(copy)
  }

  const deleteTodo = id => {
    setTodos([...todos].filter(t => t._id !== id))
  }

  return (
    <div className='text-amber-50 w-4/5 mx-auto'>
        <h1 className='text-2xl font-bold text-center mb-10'>ToDoList</h1>
        <TypeField setTodos={setTodos} />
        {
            todos.map(todo => (
                <TodoItem 
                key={todo._id} 
                todo={todo} 
                changeTodo={changeTodo}
                deleteTodo={deleteTodo} />
            ))
        }
    </div>
  )
}

export default Home