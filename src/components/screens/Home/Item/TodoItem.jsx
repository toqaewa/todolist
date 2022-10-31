import React from 'react'
import Checkbox from './Checkbox'
import cn from 'classnames'
import { FaTrash } from 'react-icons/fa'
//import { MdEdit } from 'react-icons/md'

const TodoItem = ({ todo, changeTodo, deleteTodo }) => {
  return (
    <div className='flex items-center justify-between mb-4 rounded-2xl bg-slate-800 p-5 w-full'>
        <button className='flex items-center' onClick={() => changeTodo(todo._id)}><Checkbox isCompleted={todo.isCompleted}/>
        <span className={cn({
          'line-through text-slate-400' : todo.isCompleted,
        })}>{todo.title}</span></button>
        <span className='space-x-2.5'>
        {/*<button><MdEdit size={24} className='text-gray-600 hover:text-blue-500 transition-colors ease-in-out duration-300'/></button>*/}
        <button onClick={() => deleteTodo(todo._id)}><FaTrash size={22} className='text-slate-600 hover:text-red-500 transition-colors ease-in-out duration-300'/></button>
    </span></div>
  )
}

export default TodoItem